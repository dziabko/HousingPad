class ChangeIsLikedHomeToIsLikedOnHomePreference < ActiveRecord::Migration[5.2]
  def change
    rename_column :home_preferences, :is_liked_home, :is_liked
  end
end
