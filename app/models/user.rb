class User < ApplicationRecord
  has_many :growing_seasons
  has_many :plants, through: :growing_seasons

  accepts_nested_attributes_for :growing_seasons

  has_secure_password
end
