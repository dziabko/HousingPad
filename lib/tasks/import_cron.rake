require 'net/http'
require 'uri'
require 'json'
require 'csv'

namespace :import_cron do
  desc "Importing crime stats from the toronto police"
  task cron: :environment do

    # Assault data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/459ee58772dd44c28feec26606c6cc29_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["occurrencedate"],
          reporteddate: assault["reporteddate"],
          premisetype: assault["premisetype"],
          ucr_code: assault["ucr_code"],
          ucr_ext: assault["ucr_ext"],
          offence: assault["offence"],
          reportedyear: assault["reportedyear"],
          reportedmonth: assault["reportedmonth"],
          reportedday: assault["reportedday"],
          reporteddayofyear: assault["reporteddayofyear"],
          reporteddayofweek: assault["reporteddayofweek"],
          reportedhour: assault["reportedhour"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencemonth: assault["occurrencemonth"],
          occurrenceday: assault["occurrenceday"],
          occurrencedayofyear: assault["occurrencedayofyear"],
          occurrencedayofweek: assault["occurrencedayofweek"],
          occurrencehour: assault["occurrencehour"],
          MCI: assault["MCI"],
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Autotheft data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/85c6881d0e1748e9bb0bfb242a325e35_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["occurrencedate"],
          reporteddate: assault["reporteddate"],
          premisetype: assault["premisetype"],
          ucr_code: assault["ucr_code"],
          ucr_ext: assault["ucr_ext"],
          offence: assault["offence"],
          reportedyear: assault["reportedyear"],
          reportedmonth: assault["reportedmonth"],
          reportedday: assault["reportedday"],
          reporteddayofyear: assault["reporteddayofyear"],
          reporteddayofweek: assault["reporteddayofweek"],
          reportedhour: assault["reportedhour"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencemonth: assault["occurrencemonth"],
          occurrenceday: assault["occurrenceday"],
          occurrencedayofyear: assault["occurrencedayofyear"],
          occurrencedayofweek: assault["occurrencedayofweek"],
          occurrencehour: assault["occurrencehour"],
          MCI: assault["MCI"],
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Break and Enter 2014-2019 data import
    # (Takes a long time for some reason ~1m48.761s)
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/d9b3dd6402454c379ba57994230aabea_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["occurrencedate"],
          reporteddate: assault["reporteddate"],
          premisetype: assault["premisetype"],
          ucr_code: assault["ucr_code"],
          ucr_ext: assault["ucr_ext"],
          offence: assault["offence"],
          reportedyear: assault["reportedyear"],
          reportedmonth: assault["reportedmonth"],
          reportedday: assault["reportedday"],
          reporteddayofyear: assault["reporteddayofyear"],
          reporteddayofweek: assault["reporteddayofweek"],
          reportedhour: assault["reportedhour"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencemonth: assault["occurrencemonth"],
          occurrenceday: assault["occurrenceday"],
          occurrencedayofyear: assault["occurrencedayofyear"],
          occurrencedayofweek: assault["occurrencedayofweek"],
          occurrencehour: assault["occurrencehour"],
          MCI: assault["MCI"],
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Bicycle Thefts 2014-2019 data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/4bad5af58664471f934cda833f8a4035_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["Occurrence_Date"],
          occurrenceyear: assault["Occurrence_Year"],
          occurrencemonth: assault["Occurrence_Month"],
          occurrenceday: assault["Occurrence_Day"],
          premisetype: assault["premisetype"],
          offence: assault["Primary_Offence"],
          MCI: "Bicycle Theft",
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Homicide 2014-2019 data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/e334b8eda2a7440d86e2cad39dfd9ecd_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        if (assault["occurrencedate"] != nil)
          occdate = assault["occurrencedate"]
        else
          occdate = nil
        end

        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencedate: occdate,
          MCI: "Homicide",
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Robbery 2014-2019 data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/29d23aa157a64c17bbb4848c4305a069_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["occurrencedate"],
          reporteddate: assault["reporteddate"],
          premisetype: assault["premisetype"],
          ucr_code: assault["ucr_code"],
          ucr_ext: assault["ucr_ext"],
          offence: assault["offence"],
          reportedyear: assault["reportedyear"],
          reportedmonth: assault["reportedmonth"],
          reportedday: assault["reportedday"],
          reporteddayofyear: assault["reporteddayofyear"],
          reporteddayofweek: assault["reporteddayofweek"],
          reportedhour: assault["reportedhour"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencemonth: assault["occurrencemonth"],
          occurrenceday: assault["occurrenceday"],
          occurrencedayofyear: assault["occurrencedayofyear"],
          occurrencedayofweek: assault["occurrencedayofweek"],
          occurrencehour: assault["occurrencehour"],
          MCI: assault["MCI"],
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Theft Over 2014-2019 data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/758bfcbb1e58407d8e72468a021b511c_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      if (Crime.where(Index_: assault["Index_"]).count <= 0)
        Crime.create(
          Index_: assault["Index_"],
          event_unique_id: assault["event_unique_id"],
          occurrencedate: assault["occurrencedate"],
          reporteddate: assault["reporteddate"],
          premisetype: assault["premisetype"],
          ucr_code: assault["ucr_code"],
          ucr_ext: assault["ucr_ext"],
          offence: assault["offence"],
          reportedyear: assault["reportedyear"],
          reportedmonth: assault["reportedmonth"],
          reportedday: assault["reportedday"],
          reporteddayofyear: assault["reporteddayofyear"],
          reporteddayofweek: assault["reporteddayofweek"],
          reportedhour: assault["reportedhour"],
          occurrenceyear: assault["occurrenceyear"],
          occurrencemonth: assault["occurrencemonth"],
          occurrenceday: assault["occurrenceday"],
          occurrencedayofyear: assault["occurrencedayofyear"],
          occurrencedayofweek: assault["occurrencedayofweek"],
          occurrencehour: assault["occurrencehour"],
          MCI: assault["MCI"],
          Division: assault["Division"],
          Hood_ID: assault["Hood_ID"],
          Neighbourhood: assault["Neighbourhood"],
          Lat: assault["Lat"],
          Long: assault["Long"],
          ObjectId: assault["ObjectId"],
        )
      end
    end


    # Neighbourhood crime rates data import
    parsedResponse = CSV.new(open("https://opendata.arcgis.com/datasets/af500b5abb7240399853b35a2362d0c0_0.csv?outSR=%7B%22latestWkid%22%3A26717%2C%22wkid%22%3A26717%7D"), :headers => true).map { |x| x.to_h}

    parsedResponse.each do |assault|
      # The key value in a byte array for OBJECTID, it has 2 special char infront of OBJECTID for some reason
      OBJECTID = [239, 187, 191, 79, 66, 74, 69, 67, 84, 73, 68]

      if (CrimeRate.where(OBJECTID: assault[OBJECTID.pack('c*').force_encoding('UTF-8')]).count <= 0)
        CrimeRate.create(
          OBJECTID: assault[OBJECTID.pack('c*').force_encoding('UTF-8')],
          Neighbourhood: assault["Neighbourhood"],
          Hood_ID: assault["Hood_ID"],
          Population: assault["Population"],
          Assault_2014: assault["Assault_2014"],
          Assault_2015: assault["Assault_2015"],
          Assault_2016: assault["Assault_2016"],
          Assault_2017: assault["Assault_2017"],
          Assault_2018: assault["Assault_2018"],
          Assault_2019: assault["Assault_2019"],
          Assault_AVG: assault["Assault_AVG"],
          Assault_CHG: assault["Assault_CHG"],
          Assault_Rate_2019: assault["Assault_Rate_2019"],
          AutoTheft_2014: assault["AutoTheft_2014"],
          AutoTheft_2015: assault["AutoTheft_2015"],
          AutoTheft_2016: assault["AutoTheft_2016"],
          AutoTheft_2017: assault["AutoTheft_2017"],
          AutoTheft_2018: assault["AutoTheft_2018"],
          AutoTheft_2019: assault["AutoTheft_2019"],
          AutoTheft_AVG: assault["AutoTheft_AVG"],
          AutoTheft_CHG: assault["AutoTheft_CHG"],
          AutoTheft_Rate_2019: assault["AutoTheft_Rate_2019"],
          BreakandEnter_2014: assault["BreakandEnter_2014"],
          BreakandEnter_2015: assault["BreakandEnter_2015"],
          BreakandEnter_2016: assault["BreakandEnter_2016"],
          BreakandEnter_2017: assault["BreakandEnter_2017"],
          BreakandEnter_2018: assault["BreakandEnter_2018"],
          BreakandEnter_2019: assault["BreakandEnter_2019"],
          BreakandEnter_AVG: assault["BreakandEnter_AVG"],
          BreakandEnter_CHG: assault["BreakandEnter_CHG"],
          BreakandEnter_Rate_2019: assault["BreakandEnter_Rate_2019"],
          Homicide_2014: assault["Homicide_2014"],
          Homicide_2015: assault["Homicide_2015"],
          Homicide_2016: assault["Homicide_2016"],
          Homicide_2017: assault["Homicide_2017"],
          Homicide_2018: assault["Homicide_2018"],
          Homicide_2019: assault["Homicide_2019"],
          Homicide_AVG: assault["Homicide_AVG"],
          Homicide_CHG: assault["Homicide_CHG"],
          Homicide_Rate_2019: assault["Homicide_Rate_2019"],
          Robbery_2014: assault["Robbery_2014"],
          Robbery_2015: assault["Robbery_2015"],
          Robbery_2016: assault["Robbery_2016"],
          Robbery_2017: assault["Robbery_2017"],
          Robbery_2018: assault["Robbery_2018"],
          Robbery_2019: assault["Robbery_2019"],
          Robbery_AVG: assault["Robbery_AVG"],
          Robbery_CHG: assault["Robbery_CHG"],
          Robbery_Rate_2019: assault["Robbery_Rate_2019"],
          TheftOver_2014: assault["TheftOver_2014"],
          TheftOver_2015: assault["TheftOver_2015"],
          TheftOver_2016: assault["TheftOver_2016"],
          TheftOver_2017: assault["TheftOver_2017"],
          TheftOver_2018: assault["TheftOver_2018"],
          TheftOver_2019: assault["TheftOver_2019"],
          TheftOver_AVG: assault["TheftOver_AVG"],
          TheftOver_CHG: assault["TheftOver_CHG"],
          TheftOver_Rate_2019: assault["TheftOver_Rate_2019"],
          Shape__Area: assault["Shape__Area"],
          Shape__Length: assault["Shape__Length"],
        )
      end
    end

  end

end