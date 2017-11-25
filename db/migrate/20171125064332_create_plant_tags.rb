class CreatePlantTags < ActiveRecord::Migration[5.1]
  def change
    create_table :plant_tags do |t|
      t.integer :plant_id
      t.integer :tag_id
    end
  end
end
