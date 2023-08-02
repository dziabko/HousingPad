class Api::HomesController < ApplicationController
    def get_homes

    
        latitude = params[:lat]
        longitude = params[:lng]
        @homes = filter_homes_by_coordinates(latitude,longitude)
        
        
        
        @homeObj = []
        @recommendations = RecommendationEngine.get_recommendation(current_user[:id])
        
        # byebug

        for obj in @homes
            homeid = obj['id']
            if !@recommendations.include? homeid
                @recommendations << homeid
            end
            
        end

        # tests = []
        @recommendations.each do |homeids|
            get_home = Home.find(homeids)
            # get_image = url_for(get_home.photo)
            # tests << get_home
            # tests << get_image
            # byebug
            if get_home.city == @homes[0].city
            # @homeObj << tests
                @homeObj << get_home
            end
            # @homeObj << get_image
        end
        #byebug
        # render  json: {
        #     home: @homeObj[0].num_rooms
        # }
        # for home in @homeObj

        #     render json: home
        # end
        # render json: @homeObj, include: :photo 
        # for home in @homeObj
        #     home.as_json.merge({image: url_for(home.photo)})
        # end

        render json: @homeObj.map { |category|
            category.as_json.merge({ image: url_for(category.photo), id: category.id })
        }
        # render json: @homeObj
        
        
    end

    def index 

    end
    
    def show
        @home = Home.find(params[:id])
    end

    def create
        
        params[:name] = params.dig(:homename)
        params[:latitude] = params.dig(:lat)
        params[:longitude] = params.dig(:lng)
        params[:host_id] = current_user[:id]
        params[:price] = params.dig(:price)
        params[:max_guests] = params.dig(:max_guests)
        params[:num_rooms] = params.dig(:num_rooms)
        params[:num_beds] = params.dig(:num_beds)
        params[:num_baths] = params.dig(:num_baths)
        params[:description] = params.dig(:description)
        params[:house_rules] = params.dig(:houserules)
        params[:cancellation_policy] = "Full refund within 24 hours of booking"
        params[:safety_score] = params.dig(:safety_score)

        @homes = Home.new(host_params)
        @homes.photo.attach(params[:file])
        #byebug

        if @homes.save!
            render json: @homes
        else
            render json: @homes, status: :unprocessable_entity
        end

    end

    private
    def host_params
        params.permit(:host_id, :name, :city, :max_guests, :num_rooms, :num_baths, :num_beds, :description,
            :cancellation_policy, :latitude, :longitude, :price, :photo)
    end

    private
    def post_params
        params.permit(:photo)
    end

    private 
    def filter_homes_by_coordinates(lat,lng)
        Home.find_by_sql("
        select *, (point(latitude, longitude) <-> point(#{lat}, #{lng}) )*111.325 as distance FROM homes
        WHERE (point(latitude, longitude) <-> point(#{lat}, #{lng}) )*111.325 < 5
        Order by distance;
        ")
    end
end
