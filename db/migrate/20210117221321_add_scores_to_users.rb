class AddScoresToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :safety_score, :integer
    add_column :users, :food_score, :integer
    add_column :users, :transit_score, :integer
    add_column :users, :clean_score, :integer
  end
end
