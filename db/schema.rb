# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_31_200123) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "cube"
  enable_extension "earthdistance"
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "articles", force: :cascade do |t|
    t.integer "home_id"
    t.integer "user_id"
    t.boolean "is_liked_home"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

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

  create_table "crimes", force: :cascade do |t|
    t.integer "Index_", null: false
    t.string "event_unique_id", null: false
    t.datetime "occurrencedate"
    t.datetime "reporteddate"
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
    t.index ["Lat"], name: "index_crimes_on_Lat"
    t.index ["Long"], name: "index_crimes_on_Long"
    t.index ["MCI"], name: "index_crimes_on_MCI"
  end

  create_table "home_photos", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "home_preferences", force: :cascade do |t|
    t.integer "home_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "is_liked"
  end

  create_table "homes", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "name", null: false
    t.string "city", null: false
    t.integer "max_guests", null: false
    t.integer "num_rooms", null: false
    t.integer "num_beds", null: false
    t.integer "num_baths", null: false
    t.text "description", null: false
    t.text "house_rules"
    t.text "cancellation_policy", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "safety_score"
    t.index ["host_id"], name: "index_homes_on_host_id"
    t.index ["name"], name: "index_homes_on_name"
  end

  create_table "recommendation_engines", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "guest_id", null: false
    t.integer "home_id", null: false
    t.integer "num_guests", null: false
    t.date "check_in_date", null: false
    t.date "check_out_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reservations_on_guest_id"
    t.index ["home_id"], name: "index_reservations_on_home_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "home_id", null: false
    t.integer "user_id", null: false
    t.integer "rating", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_id"], name: "index_reviews_on_home_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "safety_score_engines", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "safety_score"
    t.integer "food_score"
    t.integer "transit_score"
    t.integer "clean_score"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
