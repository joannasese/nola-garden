$(document).on('turbolinks:load', function() {
  // allPlants();
  myPlants();
  nextPlant();

});

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
function myPlants(){
  $("a.my-plant-index").on('click', function(event){
    $.ajax({
      method: "GET",
      url: this.href,
    }).done(function(data){
      // $(".page-title").empty().append("My Plants")
      // $(".main-content").empty().append("hi")
      // $(".plant-list").append("plants")
      // $(".main-content").replaceWith(data)
      var userId = $(this).data("user.id")
      // var url = "/users/" + userId + "/plants"
      var url = $("a.my-plant-index").attr("href")
      console.log(userId)
      $(".page-title").load(url + " .page-title")
      $(".filter").load("/users/1/plants .filter")
      $(".test").load("/users/1/plants .test")
      // $(".main-content").replaceWith("<div class='test'></div>")
    })
    event.preventDefault();
  })
}

function allPlants(){
  $("#all-plant-index").on('click', '.all-plants', function(event){
    alert("I've been hijacked!");
    console.log("I've been hijacked!")
    event.preventDefault();
  })
}

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
      console.log(data["image.url"])
      $(".common-name").text(data["common_name"]);
      $(".latin-name").text(data["latin_name"]);
      $(".lifecycle").text(data["lifecycle"]);
      $(".js-next").attr("data-id", data["id"]);
    })
    return false;
  })
}
