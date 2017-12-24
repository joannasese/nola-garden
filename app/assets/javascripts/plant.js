$(document).on('turbolinks:load', function() {
// $(document).ready(function () {
  allPlants();
  // myPlants();
  nextPlant();
  test();
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

function allPlants(){
  $(".all-plant-index").on('click', function(event){
    $.getJSON(this.href).done(function(json){
      var url = $("a.all-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")

      // $(".main-content").load(url + " .main-content").empty().append($(".plant-list"))

      $(".main-content").empty();

      json.forEach(function(plant){
        $(".main-content").append(plant.common_name + "<br>")
      })

      $(".submit").load(url + " .submit")
      console.log("jQuery allPlants")
    })
    event.preventDefault();
  })
}

function myPlants(){
  $("a.my-plant-index").on('click', function(event){
    $.get(this.href).done(function(data){
      // $(".main-content").empty().append("hi")
      // $(".plant-list").append("plants")
      // $(".main-content").replaceWith(data)
      var url = $("a.my-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")
      $(".main-content").load(url + " .main-content").empty().append($(".plant-list"))
      $(".submit").load(url + " .submit")
      console.log("jQuery myPlants")

      // $.each(data, function(index, plant){
      //   $(".test").append(plant.common_name)
      // })
      // $(".test").load(url + " .main-content").empty().append($(".plant-list"))
    })
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

function test(){
  $("a.my-plant-index").on('click', function(event){
    $.getJSON(this.href).done(function(json){
      var url = $("a.my-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")

      json.forEach(function(plant){
        // $(".main-content").load(url + " .main-content").empty().append(plant.common_name)
        $(".main-content").empty().append(plant.common_name + "<br>")
      })

      $(".submit").load(url + " .submit")

    })
    event.preventDefault();
  })
}
