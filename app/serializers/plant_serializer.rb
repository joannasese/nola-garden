class PlantSerializer < ActiveModel::Serializer
  attributes :common_name,
  :latin_name,
  :variety,
  :height,
  :light,
  :lifecycle,
  :spacing,
  :days_to_maturity,
  :image
end
