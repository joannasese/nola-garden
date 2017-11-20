class Season < ApplicationRecord
  has_many :plant_seasons
  has_many :plants, through: :plant_seasons

end
