class CreateSafetyScoreEngines < ActiveRecord::Migration[5.2]
  def change
    create_table :safety_score_engines do |t|

      t.timestamps
    end
  end
end
