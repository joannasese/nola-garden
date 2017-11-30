class User < ApplicationRecord
  has_many :plants

  validates_presence_of :name, :email, if: :traditional_login
  validates_uniqueness_of :name
  validates_uniqueness_of :email, if: :traditional_login

  has_secure_password

  def traditional_login
    !self.uid
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.password = SecureRandom.urlsafe_base64(n=6) #needed to generate random password to override "password can't be blank" error
      user.save!
    end
  end

end
