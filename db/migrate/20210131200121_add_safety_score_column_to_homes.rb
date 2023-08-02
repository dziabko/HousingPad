class AddSafetyScoreColumnToHomes < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :safety_score, :float
  end
end
