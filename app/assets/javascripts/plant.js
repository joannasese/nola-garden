$(document).ready(function (){
  testComment();
  loadPlantIndex();
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
function loadPlantIndex(){
  $('a.all-plant-index').on('click', function(event){
    event.preventDefault();
    console.log(this.data);
    $('#main-content').append("Hey there." + "<br>");
  })
}

$(function(){
  $(".js-more").on('click', function(){
    var id = $(this).data("id");
    $.get("/plants/" + id + "/details", function(data) {
      // $("#details-" + id).text(data);
      $("#details").text(data);
      console.log(data)
    })
  })
})
