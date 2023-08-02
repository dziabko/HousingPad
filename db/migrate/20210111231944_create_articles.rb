class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.integer :home_id
      t.integer :user_id
      t.boolean :is_liked_home

      t.timestamps
    end
  end
end
