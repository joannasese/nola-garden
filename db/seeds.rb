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
  {name: 'Heat-loving'},
  {name: 'Edible'}
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
  season_ids: [3, 4],
  image: "https://www.rareseeds.com/assets/1/14/DimRegular/Flower-Zinnia-Burpee-Giant-Rose-Cactus-FL812-DSC07931-(1).jpg",
  tag_ids: [2,3]
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
  season_ids: [3, 4],
  image: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw625729c3/images/products/flowers/01712_01_procutorange.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
)

roselle = Plant.create(
  common_name: "Roselle",
  latin_name: "Hibiscus sabdariffa",
  variety: "Thai Red",
  height: 96,
  light: "Full sun",
  lifecycle: "Perennial",
  spacing: 36,
  days_to_maturity: nil,
  user_id: 1,
  season_ids: [3],
  image: "https://cdn.shopify.com/s/files/1/0083/4602/products/hibiscus_sabdariffa-02.jpg?v=1475600936",
  tag_ids: [3,4]
)
