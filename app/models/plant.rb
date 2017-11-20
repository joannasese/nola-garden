class Plant < ApplicationRecord
  has_many :growing_seasons
  has_many :users, through: :growing_seasons
end
