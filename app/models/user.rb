class User < ApplicationRecord
  has_many :plants
  has_many :growing_seasons, through: :plants

  accepts_nested_attributes_for :growing_seasons

  has_secure_password
end
