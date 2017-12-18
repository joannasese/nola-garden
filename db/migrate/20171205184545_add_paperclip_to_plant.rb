class AddPaperclipToPlant < ActiveRecord::Migration[5.1]
  def change
    add_attachment :plants, :image
  end
end
