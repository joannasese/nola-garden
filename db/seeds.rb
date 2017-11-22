# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
seasons = Season.create([{season: 'Fall'}, {season: 'Winter'}, {season: 'Spring'}, {season: 'Summer'}])

delft_blue = Plant.create(
  common_name: "Nigella",
  latin_name: "Nigella papillosa",
  variety: "Delft Blue",
  height: 36,
  light: "Full sun",
  lifecycle: "Annual",
  spacing: 9,
  days_to_maturity: 75,
  user_id: 1,
  season_ids: [1, 2]
)

cactus_rose = Plant.create(
  common_name: "Zinnia",
  latin_name: "Zinnia elegans",
  variety: "Cactus rose",
  height: 36,
  light: "Full sun",
  lifecycle: "Annual",
  spacing: 9,
  days_to_maturity: 75,
  user_id: 1,
  season_ids: [3, 4]
)

procut_orange = Plant.create(
  common_name: "Zinnia",
  latin_name: "Zinnia elegans",
  variety: "Cactus rose",
  height: 36,
  light: "Full sun",
  lifecycle: "Annual",
  spacing: 9,
  days_to_maturity: 75,
  user_id: 1,
  season_ids: [3, 4]
)



 #<Plant id: 1, common_name: "Zinnia", latin_name: "Zinnia elegans", variety: "Benary Giant Salmon", height: 36, light: "Full sun", lifecycle: "Annual", spacing: 9, days_to_maturity: 65, user_id: 1, created_at: "2017-11-21 07:19:27", updated_at: "2017-11-21 07:19:27">, #<Plant id: 2, common_name: "Sweet pea", latin_name: "Lathyrus odoratus", variety: "Elegance Formula", height: 72, light: "Full sun", lifecycle: "Annual", spacing: 6, days_to_maturity: 75, user_id: 1, created_at: "2017-11-21 17:45:28", updated_at: "2017-11-21 17:45:28">, #<Plant id: 3, common_name: "Sunflower", latin_name: "Helianthus annuus", variety: "ProCut Orange", height: 36, light: "Full sun", lifecycle: "Annual", spacing: 9, days_to_maturity: 60, user_id: 1, created_at: "2017-11-21 21:21:14", updated_at: "2017-11-21 21:21:14">, #<Plant id: 4, common_name: "Nigella", latin_name: "Nigella papillosa", variety: "Delft Blue", height: 36, light: "Full sun", lifecycle: "Annual", spacing: 9, days_to_maturity: 75, user_id:
