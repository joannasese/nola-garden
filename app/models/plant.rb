class Plant < ApplicationRecord
  has_many :plant_seasons
  has_many :seasons, through: :plant_seasons
  has_many :plant_tags
  has_many :tags, through: :plant_tags

  belongs_to :user

  validates_presence_of :common_name, :variety, :seasons
  validates_uniqueness_of :common_name, scope: :variety

  # def self.by_season(season_id)
  #   joins(:plant_seasons).where("season_id = ?", season_id)
  # end

  scope :by_season, -> (season_id){ joins(:plant_seasons).where("plant_seasons.season_id = ?", season_id) }

  def tags_attributes=(tag_attributes)
    tag_attributes.values.each do |tag_attribute|
      tag = Tag.find_or_create_by(tag_attribute)
      self.tags << tag
    end
  end

  def tagged
    if !self.tags.empty?
      self.tags.each do |tag|
        tag.name
      end
    else
      "No tags yet!"
    end
  end

end
