class PlantSeason < ActiveRecord::Base
  belongs_to :plant
  belongs_to :season
end
