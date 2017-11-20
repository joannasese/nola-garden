class User < ApplicationRecord
  has_many :plants

  validates :name, presence: true
  validates :email, presence: true

  has_secure_password
end
