$(document).ready(function (){
  // testComment();
  // loadPlantIndex();
  // index();
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

//
// function testComment(){
//   $('.title-link').on('click', function(event){
//     console.log('Hey test')
//     $('#menu-container').append("Can you see me? I was added with jQuery.");
//     event.preventDefault();
//   })
// }
// // JS TEMPLATES
// // 1. Loads list of plants plants#index
// // function loadPlantIndex(){
// //   $('a.all-plant-index').on('click', function(event){
// //     event.preventDefault();
// //     console.log(this.data);
// //     $('#main-content').append("Hey there." + "<br>");
// //   })
// // }
//
// // function indexDetails(){
// //   //instead of this, just append links to plant show pages
// //   $(".js-details").on('click', function(event){
// //     var id = $(this).data("id");
// //     $.getJSON("/plants/" + id + "/details", function(data){
// //       // $("#details").text(data);
// //       $("#details").html(data["id"]);
// //       console.log(data)
// //     })
// //     event.preventDefault();
// //   })
// // }
//
// function index(){
//   $("a.my-plant-index").on('click', function(event){
//     var userId = $(this).data("user.id")
//     var id = $(this).data("id")
//     // $.getJSON("/plants", function(data){
//     $.getJSON("/users/" + userId + "/plants", function(data){
//       console.log(data)
//       $.each(data, function(index, data){
//         // var link = user_plant_path(data)
//         $(".plant-list").append(data["common_name"] + ", " + data["variety"] + "<br>");
//         //how to create links from index items?
//       })
//       return false;
//     })
//     event.preventDefault();
//   })
// }

function nextPlant(){
  $(".js-next").on('click', function(event){
    event.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.getJSON("/plants/" + nextId + "/details", function(data){
    // $.get("/plants/" + nextId + ".json", function(data){
    // NEXT DOES NOT WORK PAST ID 2 WITH .JSON
        console.log(nextId)
      $("#plant-title").text(data["variety"]);
      $(".plant-photo").attr("src", data["image"]);
      // $(".common-name").text(data["common_name"]);
      // $(".latin-name").text(data["latin_name"]);
      // $(".lifecycle").text(data["lifecycle"]);
      $(".js-next").attr("data-id", data["id"]);
    })
  })
}
