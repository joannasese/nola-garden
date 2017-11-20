class CreateGrowingSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :growing_seasons do |t|
      t.string :season

      t.timestamps
    end
  end
end
