class Plant < ApplicationRecord
  has_many :plant_seasons
  has_many :seasons, through: :plant_seasons

  belongs_to :user
end
