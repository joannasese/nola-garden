class Plant < ApplicationRecord
  belongs_to :user
  belongs_to :growing_season
end
