$(document).ready(function (){
  testComment();
  // loadPlantIndex();
  indexDetails();
  nextPlant();
})

class Plant {
  constructor(id, common_name, latin_name, variety, height, light, lifecycle, spacing, days_to_maturity, image, season_ids, tag_ids){
    this.id = id
    this.common_name = common_name
    this.latin_name = latin_name
    this.variety = variety
    this.height = height
    this.light = light
    this.lifecycle = lifecycle
    this.spacing = spacing
    this.days_to_maturity = days_to_maturity
    this.image = image
    this.season_ids = season_ids
    this.tag_ids = tag_ids
  }
}


function testComment(){
  $('.title-link').on('click', function(event){
    console.log('Hey test')
    $('#menu-container').append("Can you see me? I was added with jQuery.");
    event.preventDefault();
  })
}
// JS TEMPLATES
// 1. Loads list of plants plants#index
// function loadPlantIndex(){
//   $('a.all-plant-index').on('click', function(event){
//     event.preventDefault();
//     console.log(this.data);
//     $('#main-content').append("Hey there." + "<br>");
//   })
// }

function indexDetails(){
  $(".js-details").on('click', function(event){
    var id = $(this).data("id");
    $.getJSON("/plants/" + id + "/details", function(data){
      // $("#details").text(data);
      $("#details").html(data["id"]);
      console.log(data)
    })
    event.preventDefault();
  })
}

function nextPlant(){
  $(".js-next").on('click', function(event){
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/plants/" + nextId + ".json", function(data){
        console.log(data)
      $("#plant-title").text(data["variety"]);
      $(".plant-photo").attr("src", data["image"]);
      $(".common-name").text(data["common_name"]);
      $(".js-next").attr("data-id", data["id"]);
    })
    event.preventDefault();
  })
}
