class CreateGrowingSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :growing_seasons do |t|
      t.string :season
      t.integer :user_id
      t.integer :plant_id

      t.timestamps
    end
  end
end
