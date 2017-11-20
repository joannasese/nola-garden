class CreatePlants < ActiveRecord::Migration[5.1]
  def change
    create_table :plants do |t|
      t.string :common_name
      t.string :latin_name
      t.string :variety
      t.integer :height
      t.string :light
      t.string :lifecycle
      t.integer :spacing
      t.integer :days_to_maturity

      t.timestamps
    end
  end
end
