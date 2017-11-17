class CreateGrowingSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :growing_seasons do |t|
      t.string :sowing
      t.integer :days_to_maturity

      t.timestamps
    end
  end
end
