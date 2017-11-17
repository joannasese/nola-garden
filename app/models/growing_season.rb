class GrowingSeason < ApplicationRecord
  has_many :plants
  has_many :users, through: :plants
end
