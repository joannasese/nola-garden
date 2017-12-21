class PlantSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :variety

  def self.serialize(plant)

    serialized_plant = '{'
    serialized_plant += '"id": ' + plant.id.to_s 

    serialized_plant += '}'
  end


end
