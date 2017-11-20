class CreatePlantSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :plant_seasons do |t|
      t.belongs_to :plant
      t.belongs_to :season

      t.timestamps null: false
    end
  end
end
