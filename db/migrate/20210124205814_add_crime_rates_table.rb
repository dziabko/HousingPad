class AddCrimeRatesTable < ActiveRecord::Migration[5.2]
  def change
    create_table "crime_rates", force: :cascade do |t|
      t.integer "OBJECTID", null: false
      t.string "Neighbourhood", null: false
      t.integer "Hood_ID", null: false
      t.integer "Population", null: false
  
      t.integer "Assault_2014", null: false
      t.integer "Assault_2015", null: false
      t.integer "Assault_2016", null: false
      t.integer "Assault_2017", null: false
      t.integer "Assault_2018", null: false
      t.integer "Assault_2019", null: false
      t.float "Assault_AVG", null: false
      t.float "Assault_CHG", null: false
      t.float "Assault_Rate_2019", null: false
  
      t.integer "AutoTheft_2014", null: false
      t.integer "AutoTheft_2015", null: false
      t.integer "AutoTheft_2016", null: false
      t.integer "AutoTheft_2017", null: false
      t.integer "AutoTheft_2018", null: false
      t.integer "AutoTheft_2019", null: false
      t.float "AutoTheft_AVG", null: false
      t.float "AutoTheft_CHG", null: false
      t.float "AutoTheft_Rate_2019", null: false
  
  
      t.integer "BreakandEnter_2014", null: false
      t.integer "BreakandEnter_2015", null: false
      t.integer "BreakandEnter_2016", null: false
      t.integer "BreakandEnter_2017", null: false
      t.integer "BreakandEnter_2018", null: false
      t.integer "BreakandEnter_2019", null: false
      t.float "BreakandEnter_AVG", null: false
      t.float "BreakandEnter_CHG", null: false
      t.float "BreakandEnter_Rate_2019", null: false
  
  
      t.integer "Homicide_2014", null: false
      t.integer "Homicide_2015", null: false
      t.integer "Homicide_2016", null: false
      t.integer "Homicide_2017", null: false
      t.integer "Homicide_2018", null: false
      t.integer "Homicide_2019", null: false
      t.float "Homicide_AVG", null: false
      t.float "Homicide_CHG", null: false
      t.float "Homicide_Rate_2019", null: false
  
  
      t.integer "Robbery_2014", null: false
      t.integer "Robbery_2015", null: false
      t.integer "Robbery_2016", null: false
      t.integer "Robbery_2017", null: false
      t.integer "Robbery_2018", null: false
      t.integer "Robbery_2019", null: false
      t.float "Robbery_AVG", null: false
      t.float "Robbery_CHG", null: false
      t.float "Robbery_Rate_2019", null: false
  
  
      t.integer "TheftOver_2014", null: false
      t.integer "TheftOver_2015", null: false
      t.integer "TheftOver_2016", null: false
      t.integer "TheftOver_2017", null: false
      t.integer "TheftOver_2018", null: false
      t.integer "TheftOver_2019", null: false
      t.float "TheftOver_AVG", null: false
      t.float "TheftOver_CHG", null: false
      t.float "TheftOver_Rate_2019", null: false
  
  
  
  
      t.float "Shape__Area", null: false
      t.float "Shape__Length", null: false
      t.index ["OBJECTID"], name: "index_crime_rates_on_id", unique: true
    end
  end
end
