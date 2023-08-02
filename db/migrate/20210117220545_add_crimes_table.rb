class AddCrimesTable < ActiveRecord::Migration[5.2]
  def change
    create_table "crimes", force: :cascade do |t|
      t.integer "Index_", null: false
      t.string "event_unique_id", null: false
      t.timestamp "occurrencedate"
      t.timestamp "reporteddate"
      t.string "premisetype"
      t.integer "ucr_code"
      t.integer "ucr_ext"
      t.string "offence"
      t.integer "reportedyear"
      t.string "reportedmonth"
      t.integer "reportedday"
      t.integer "reporteddayofyear"
      t.string "reporteddayofweek"
      t.integer "reportedhour"
      t.integer "occurrenceyear"
      t.string "occurrencemonth"
      t.integer "occurrenceday"
      t.integer "occurrencedayofyear"
      t.string "occurrencedayofweek"
      t.integer "occurrencehour"
      t.string "MCI", null: false
      t.string "Division", null: false
      t.integer "Hood_ID", null: false
      t.string "Neighbourhood", null: false
      t.float "Lat", null: false
      t.float "Long", null: false
      t.integer "ObjectId", null: false
      t.index ["Index_"], name: "index_crime_on_id", unique: true
    end
  end
end
