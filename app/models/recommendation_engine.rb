class RecommendationEngine < ApplicationRecord
    def self.get_hash_object

        @test = ExecuteSql.run "SELECT json_agg(home_preferences) from (select user_id, array_to_string(array_agg(json_build_object(home_id, 1)), ',') from home_preferences group by user_id) home_preferences;"
        h = Hash.new{|hsh,key| hsh[key] = {} }
        #h['k1'].store 'a',1
        HomePreference.all.each do |user|
          # if(h.key?(user.user_id))
          h[user.user_id].store "#{user.home_id}", user.is_liked
          #puts user.home_id
        end
        hash = h.transform_keys(&:to_s)
        return hash
    end

    def self.get_recommendation(user_id)
        @hash_object = get_hash_object()
        puts @hash_object
        home_object = Set.new
        if (@hash_object.key?("#{user_id}"))
          recs = Pearson.recommendations(@hash_object, "#{user_id}")
          recs.sort {|a,b| b[1] <=> a[1]}

          recs.each { |a, b| home_object << Integer(a) }

          current_user_liked_home = ExecuteSql.run "select home_id from home_preferences where user_id=#{user_id} and is_liked = 5.0", mode: :array
          current_user_liked_home.each do |home_id|
            realhomeid = home_id['home_id']
            if !home_object.include? realhomeid
              home_object << realhomeid  
            end
          end
        end
        # get_all_homes = ExecuteSql.run "select id from homes", mode: :array

        # get_all_homes.each do |homeids|
        #   acchomeid = homeids['id']
        #   if !home_object.include? acchomeid
        #     home_object << acchomeid
        #   end
        # end


        # recs.each do |home_id,value| 
        #     test =  ExecuteSql.run "select id, name, num_rooms, price from homes where id=#{home_id}", mode: :array
        #     home_object << test            
        # end

       
        
        # get_all_homes = ExecuteSql.run "select id, name, num_rooms, price from homes", mode: :array
        # home_object << get_all_homes
        # get_all_homes.each do |homes|
        #   home_object.each do |homeids|
        #     if homes['id'] == homeids['id']
        #       next  
        #     else
        #       home_object << homes
        #     end
        #   end
        # end
        

        return home_object 
    end
end
