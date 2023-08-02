class SafetyScoreEngine < ApplicationRecord
    class << self
        MIN_YEAR = 2014
        MCI_MAP = {"Break and Enter"=> 8, "Theft Over"=> 1, "Auto Theft"=> 2, "Bicycle Theft"=> 3, "Assault"=> 8, "Homicide"=> 10, "Robbery"=>7}
        def train
            inputs  = []
            outputs = []
            count = 0
            Crime.all.each do |crime|
                inputs  << [crime.Lat, crime.Long]

                crimes_within_3_km = get_crimes_within_x_distance(crime.Lat, crime.Long, 0.5)
                generated_safety_score = normalize_safety_score(crime.Lat, crime.Long, crimes_within_3_km)

                outputs << [generated_safety_score]
                count += 1

                # print inputs
                # puts "\n\n"
                # print outputs
                # puts "\n\n"
                # puts "\n\n"
                # puts "\n\n"
                # puts "\n\n"

                print count

                puts "\n\n"
                # puts "\n\n"
                # puts "\n\n"
                # puts "\n\n"
            end

            # inputs = [[43.7029762, -79.265], [43.6526337, -79.449], [43.759922, -79.389], [43.7570992, -79.46], [43.7887039, -79.245], [43.6960831, -79.295], [43.6652184, -79.378], [43.7667847, -79.158], [43.6672974, -79.374], [43.6709366, -79.296], [43.7732315, -79.421], [43.6483955, -79.393], [43.6471252, -79.512], [43.6074677, -79.548], [43.6688004, -79.338], [43.6744766, -79.307], [43.6654778, -79.367], [43.6912766, -79.314], [43.7361107, -79.44], [43.6943665, -79.274], [43.7988472, -79.286], [43.8119507, -79.273], [43.8046646, -79.263], [43.6884499, -79.301], [43.6954803, -79.451], [43.7615547, -79.324], [43.8019333, -79.359], [43.6030045, -79.507], [43.6508217, -79.478], [43.6591988, -79.484], [43.6636772, -79.354], [43.7241135, -79.47], [43.6969986, -79.285], [43.6353416, -79.419], [43.6496887, -79.483], [43.7925453, -79.174], [43.7559891, -79.497], [43.7165337, -79.593], [43.7165337, -79.593], [43.7938118, -79.419], [43.7972679, -79.401], [43.6670799, -79.564], [43.7140884, -79.455], [43.7253609, -79.276], [43.7395325, -79.235], [43.6733513, -79.351], [43.7165337, -79.593], [43.7165337, -79.593], [43.7299347, -79.403], [43.6884499, -79.301], [43.6702271, -79.387], [43.7172546, -79.401], [43.6665497, -79.385]]

            # outputs = [[0.3310028534887763], [0.3411182225265124], [0.3621752918517413], [0.40002769103249913], [0.35991452552327236], [0.3227002185860475], [0.3199154166628643], [0.33204388067671253], [0.32285529749694936], [0.3377143557387583], [0.3573655245445364], [0.3220856099335018], [0.39031615670879727], [0.39105262264457524], [0.3367555093469927], [0.3336324998455665], [0.3241477088892053], [0.3333595777734316], [0.3944938000177602], [0.3238410163638204], [0.3604879769456388], [0.37699680075534714], [0.3778625332568463], [0.3243810169606679], [0.3627378383147279], [0.35563866879994827], [0.3605716484549034], [0.3420832506713885], [0.36465624323429396], [0.3679828914256737], [0.3313883050408108], [0.38837539275451693], [0.32320444009718247], [0.3376261746886908], [0.3697723316567644], [0.33762167636716833], [0.3663770439135903], [0.4426815204426364], [0.44268152044263637], [0.3602238093299261], [0.3697897629395302], [0.41718828246751755], [0.3782992970242809], [0.3369579596518332], [0.32333902122907], [0.33582009612777036], [0.44268152044263637], [0.4426815204426364], [0.3808705755159927], [0.324381016960668], [0.326689258645995], [0.36704322143835233], [0.3220941683400565]]

            training_data = RubyFann::TrainData.new(:inputs => inputs, :desired_outputs => outputs)
            @fann = RubyFann::Standard.new(:num_inputs => 2, :hidden_neurons => [5,5], :num_outputs => 1)
            @fann.train_on_data(training_data,1000,10,0.1)
            @fann.save('production_nn.net')
        end

        def test_prediction(latitude, longitude)
            saved_nn = RubyFann::Standard.new(:filename=>"production_nn.net")
            prediction_result = saved_nn.run([latitude, longitude])

            smoother = rand()
            overall = prediction_result[0] + smoother

            begin
                smoother = rand()
                overall = prediction_result[0] + smoother

            end while overall > 1
            
            return overall
        end

        def distance(loc1, loc2)
            rad_per_deg = Math::PI/180  # PI / 180
            rkm = 6371                  # Earth radius in kilometers
            rm = rkm * 1000             # Radius in meters
          
            dlat_rad = (loc2[0]-loc1[0]) * rad_per_deg  # Delta, converted to rad
            dlon_rad = (loc2[1]-loc1[1]) * rad_per_deg
          
            lat1_rad, lon1_rad = loc1.map {|i| i * rad_per_deg }
            lat2_rad, lon2_rad = loc2.map {|i| i * rad_per_deg }
          
            a = Math.sin(dlat_rad/2)**2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon_rad/2)**2
            c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))
          
            rm * c # Delta in meters
        end

          
        #distance is in km
        def get_crimes_within_x_distance(latitude, longitude, distance)
            return Crime.within_radius(distance*1000, latitude, longitude).all
        end

        #return number between 0 and 1
        def normalize_safety_score(center_lat, center_long, crimes)
            num_crimes = crimes.count
            total_score = 0

            crimes.each do |crime|
                local_score = 0

                #higher is worse
                distance_score = (distance([center_lat, center_long], [crime.Lat, crime.Long])/500.0 - 1.0).abs
                
                #higher is worse
                crime_severity_score = MCI_MAP[crime.MCI]/10.0

                #higher is worse
                if crime.occurrenceyear.nil?
                    time_elapsed_score = (2014 - MIN_YEAR).abs/5.0
                else
                    time_elapsed_score = (crime.occurrenceyear - MIN_YEAR).abs/5.0
                end

                #sum local score 
                local_score = (distance_score*(5) + crime_severity_score*(4) + time_elapsed_score*(1))/10.0

                #overall score, lower is worse, that's why we flip
                local_score = (local_score - 1).abs

                total_score += local_score
            end
            total_score /= num_crimes.to_f

            return total_score
        end

        def get_safety_score(home_id)
            home_obj = Home.where(:id => home_id).take
            result = test_prediction(home_obj.latitude, home_obj.longitude)

            return result
            
        end

        # def test_run
        #     @sheraz = "hello world"
        # end

        # def lmao(input)
        #     return input
        # end

    end
      
end
