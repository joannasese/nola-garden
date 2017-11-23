class Plant < ApplicationRecord
  has_many :plant_seasons
  has_many :seasons, through: :plant_seasons

  belongs_to :user

  validates_presence_of :common_name,
    # :latin_name,
    :variety,
    # :height,
    # :light
    # :lifecycle
    # :spacing
    # :days_to_maturity
    :seasons

  validates_uniqueness_of :common_name, scope: :variety

  # def self.by_season(season_id)
  #   joins(:plant_seasons).where("season_id = ?", season_id)
  # end

  scope :by_season, -> (season_id){ joins(:plant_seasons).where("plant_seasons.season_id = ?", season_id) }

end
