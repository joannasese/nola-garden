class AddImageToPlants < ActiveRecord::Migration[5.1]
  def change
    add_column :plants, :image, :string, default: nil
  end
end
