class Plant < ApplicationRecord
  has_many :plant_seasons
  has_many :seasons, through: :plant_seasons
  has_many :plant_tags
  has_many :tags, through: :plant_tags

  belongs_to :user

  validates_presence_of :common_name, :variety, :seasons
  validates_uniqueness_of :common_name, scope: :variety

  # ALTERNATIVE WAY TO WRITE SCOPES
  # def self.by_season_with_user(season_id, user_id)
  #   joins(:plant_seasons).where("season_id = ?", season_id).where("user_id = ?", user_id)
  # end

  scope :by_season_with_user, -> (season_id, user_id){ joins(:plant_seasons).where("season_id = ?", season_id).where("user_id = ?", user_id) }
  scope :by_season, -> (season_id){ joins(:plant_seasons).where("plant_seasons.season_id = ?", season_id) }

  def tags_attributes=(tag_attributes)
    tag_attributes.values.each do |tag_attribute|
      if tag_attribute[:name] != ""
        tag = Tag.find_or_create_by(tag_attribute)
        self.tags << tag
      end
    end
  end

end
