class ChangeIsLikedToFloat < ActiveRecord::Migration[5.2]
  def change
    remove_column :home_preferences, :is_liked
    add_column :home_preferences, :is_liked, :float
  end
end
