$(document).on('turbolinks:load', function() {
// $(document).ready(function () {
  allPlants();
  myPlants();
  nextPlant();
  previousPlant();
  // test();
});

// class Plant {
//   constructor(id, common_name, latin_name, variety, height, light, lifecycle, spacing, days_to_maturity, image, season_ids, tag_ids){
//     this.id = id
//     this.common_name = common_name
//     this.latin_name = latin_name
//     this.variety = variety
//     this.height = height
//     this.light = light
//     this.lifecycle = lifecycle
//     this.spacing = spacing
//     this.days_to_maturity = days_to_maturity
//     this.image = image
//     this.season_ids = season_ids
//     this.tag_ids = tag_ids
//   }
// }

function allPlants(){
  $(".all-plant-index").on('click', function(event){
    $.getJSON(this.href).done(function(json){
      var url = $("a.all-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")
      $(".main-content").empty();
      //figure out how to sort and add link
      json.forEach(function(plant){
        $(".main-content").append(plant.common_name + ", " + plant.variety + "<br>")
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
      var url = $("a.my-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")
      $(".main-content").load(url + " .main-content").empty().append($(".plant-list"))
      $(".submit").load(url + " .submit")
      console.log("jQuery myPlants")
    })
    event.preventDefault();
  })
}

function nextPlant(){
  $(".js-next").on('click', function(event){
    event.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    var details_url = "/plants/" + nextId + "/details"
    var seasons_url = "/plants/" + nextId + "/season-tester"
    var tags_url = "/plants/" + nextId + "/tags"
    retrieveDetails(details_url, seasons_url, tags_url, "/plants/1/")
    return false;
  })
}

function previousPlant(){
  $(".js-previous").on('click', function(event){
    event.preventDefault();
    var previousId = parseInt($(".js-previous").attr("data-id")) - 1;
    var details_url = "/plants/" + previousId + "/details"
    var seasons_url = "/plants/" + previousId + "/season-tester"
    var tags_url = "/plants/" + previousId + "/tags"
    retrieveDetails(details_url, seasons_url, tags_url, "/plants/8/")
    return false;
  })
}

let retrieveDetails = (details_url, seasons_url, tags_url, fail_url) => {
  $.getJSON(details_url, function(data){
    $("#plant-title").text(data["variety"]);
    $(".plant-photo").attr("src", data["image"]);
    $(".common-name").text(data["common_name"]);
    $(".latin-name").text(data["latin_name"]);
    $(".height").text(data["height"] + '"');
    $(".lifecycle").text(data["lifecycle"]);
    $(".maturity").text(data["days_to_maturity"]);
    $(".light").text(data["light"]);
    $(".spacing").text(data["spacing"] + '"');
    $.getJSON(seasons_url, function(json){
      $(".seasons").empty()
      json.forEach(function(season){
        $(".seasons").append("<li>" + season.season + "<br>")
      })
    })
    $.getJSON(tags_url, function(json){
      $(".tags").empty()
      json.forEach(function(tag){
        $(".tags").append("<li>" + tag.name + "<br>")
      })
    })
    $(".js-next").attr("data-id", data["id"]) + 1;
    $(".js-previous").attr("data-id", data["id"]) - 1;
  })
  .fail(function(event){
    $.getJSON(fail_url + "/details", function(data){
      $("#plant-title").text(data["variety"]);
      $(".plant-photo").attr("src", data["image"]);
      $(".common-name").text(data["common_name"]);
      $(".latin-name").text(data["latin_name"]);
      $(".height").text(data["height"] + '"');
      $(".lifecycle").text(data["lifecycle"]);
      $(".maturity").text(data["days_to_maturity"]);
      $(".light").text(data["light"]);
      $(".spacing").text(data["spacing"] + '"');
      $.getJSON(fail_url + "season-tester", function(json){
        $(".seasons").empty()
        json.forEach(function(season){
          $(".seasons").append("<li>" + season.season + "<br>")
        })
      })
      $.getJSON(fail_url + "tags", function(json){
        $(".tags").empty()
        json.forEach(function(tag){
          $(".tags").append("<li>" + tag.name + "<br>")
        })
      })
      $(".js-next").attr("data-id", data["id"]) + 1;
      $(".js-previous").attr("data-id", data["id"]) - 1;
    })
  })
}

function test(){
 $(".js-next").on('click', function(event){
   event.preventDefault();
   var nextId = parseInt($(".js-next").attr("data-id")) + 1;
   var details_url = "/plants/" + nextId + "/details"
   var seasons_url = "/plants/" + nextId + "/season-tester"
   var tags_url = "/plants/" + nextId + "/tags"

   retrieveDetails(details_url, seasons_url, tags_url, "/plants/1/")
   // $.getJSON(details_url, function(data){
   //   $("#plant-title").text(data["variety"]);
   //   $(".plant-photo").attr("src", data["image"]);
   //   $(".common-name").text(data["common_name"]);
   //   $(".latin-name").text(data["latin_name"]);
   //   $(".height").text(data["height"] + '"');
   //   $(".lifecycle").text(data["lifecycle"]);
   //   $(".maturity").text(data["days_to_maturity"]);
   //   $(".light").text(data["light"]);
   //   $(".spacing").text(data["spacing"] + '"');
   //   $.getJSON(seasons_url, function(json){
   //     $(".seasons").empty()
   //     json.forEach(function(season){
   //       $(".seasons").append("<li>" + season.season + "<br>")
   //     })
   //   })
   //   $.getJSON(tags_url, function(json){
   //     $(".tags").empty()
   //     json.forEach(function(tag){
   //       $(".tags").append("<li>" + tag.name + "<br>")
   //     })
   //   })
   //   $(".js-next").attr("data-id", data["id"]);
   //   $(".js-previous").attr("data-id", data["id"]) - 1;
   // })
   // .fail(function(event){
   //   $.getJSON("/plants/1/details", function(data){
   //     $("#plant-title").text(data["variety"]);
   //     $(".plant-photo").attr("src", data["image"]);
   //     $(".common-name").text(data["common_name"]);
   //     $(".latin-name").text(data["latin_name"]);
   //     $(".height").text(data["height"] + '"');
   //     $(".lifecycle").text(data["lifecycle"]);
   //     $(".maturity").text(data["days_to_maturity"]);
   //     $(".light").text(data["light"]);
   //     $(".spacing").text(data["spacing"] + '"');
   //     $.getJSON("/plants/1/season-tester", function(json){
   //       $(".seasons").empty()
   //       json.forEach(function(season){
   //         $(".seasons").append("<li>" + season.season + "<br>")
   //       })
   //     })
   //     $.getJSON("/plants/1/tags", function(json){
   //       $(".tags").empty()
   //       json.forEach(function(tag){
   //         $(".tags").append("<li>" + tag.name + "<br>")
   //       })
   //     })
   //     $(".js-next").attr("data-id", data["id"]);
   //     $(".js-previous").attr("data-id", data["id"]) - 1;
   //   })
   // })
   return false;
 })
}
