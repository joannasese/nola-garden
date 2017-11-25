class PlantTag < ActiveRecord::Base
  belongs_to :plant
  belongs_to :tag
end
