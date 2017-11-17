class User < ApplicationRecord
  has_many :plants
  has_many :growing_seasons, through: :plants

  has_secure_password
end
