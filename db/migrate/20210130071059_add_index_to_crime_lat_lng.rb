class AddIndexToCrimeLatLng < ActiveRecord::Migration[5.2]
  def change
    add_index :crimes, :Lat
    add_index :crimes, :Long
    add_index :crimes, :MCI
  end
end
