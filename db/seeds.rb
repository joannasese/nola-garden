# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
seasons = Season.create([{season: 'Fall'}, {season: 'Winter'}, {season: 'Spring'}, {season: 'Summer'}])

tags = Tag.create([
  {name: 'Easy to grow'},
  {name: 'Cut flower'},
  {name: 'Heat-loving'}
  ])

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
  season_ids: [1, 2],
  image: "https://www.thompson-morgan.com/product_images/100/optimised/NIGE-TT52063-A_h.jpg"
)

cactus_rose = Plant.create(
  common_name: "Zinnia",
  latin_name: "Zinnia elegans",
  variety: "Cactus Rose",
  height: 36,
  light: "Full sun",
  lifecycle: "Annual",
  spacing: 9,
  days_to_maturity: 75,
  user_id: 1,
  season_ids: [3, 4]
)

procut_orange = Plant.create(
  common_name: "Sunflower",
  latin_name: "Helianthus annuus",
  variety: "Procut Orange",
  height: 36,
  light: "Full sun",
  lifecycle: "Annual",
  spacing: 9,
  days_to_maturity: 60,
  user_id: 1,
  season_ids: [3, 4]
)
