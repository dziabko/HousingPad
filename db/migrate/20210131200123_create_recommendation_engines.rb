class CreateRecommendationEngines < ActiveRecord::Migration[5.2]
  def change
    create_table :recommendation_engines do |t|

      t.timestamps
    end
  end
end
