class Plant < ApplicationRecord
  has_many :plant_seasons
  has_many :seasons, through: :plant_seasons

  belongs_to :user

  validates :common_name, presence: true
  validates :latin_name, presence: true
  validates :variety, presence: true
  validates :height, presence: true
  validates :light, presence: true
  validates :lifecycle, presence: true
  validates :spacing, presence: true
  validates :days_to_maturity, presence: true
  validates :seasons, presence: true

  # scope :dry_clean_only, -> { joins(:washing_instructions).where('washing_instructions.dry_clean_only = ?', true) }
end
