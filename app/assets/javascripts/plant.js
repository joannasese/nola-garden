$(document).on('turbolinks:load', function() {
// $(document).ready(function () {
  allPlants();
  // myPlants();
  // nextPlant();
  previousPlant();
  test();
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

      // $.each(data, function(index, season_ids){
      //   $(".test").append(season_ids)
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
      $("#plant-title").text(data["variety"]);
      $(".plant-photo").attr("src", data["image"]);
      $(".common-name").text(data["common_name"]);
      $(".latin-name").text(data["latin_name"]);
      $(".height").text(data["height"] + '"');
      $(".lifecycle").text(data["lifecycle"]);
      $(".maturity").text(data["days_to_maturity"]);
      $(".light").text(data["light"]);
      $(".spacing").text(data["spacing"] + '"');

      //work out how to display seasons and tags
      $(".seasons").text("Replacement")
      $(".tags").text("Replacement")

      $(".js-next").attr("data-id", data["id"]);
      $(".js-previous").attr("data-id", data["id"]) - 1;
    }).fail(function(event){
      $.getJSON("/plants/1/details", function(data){
        $("#plant-title").text(data["variety"]);
        $(".plant-photo").attr("src", data["image"]);
        $(".common-name").text(data["common_name"]);
        $(".latin-name").text(data["latin_name"]);
        $(".height").text(data["height"] + '"');
        $(".lifecycle").text(data["lifecycle"]);
        $(".maturity").text(data["days_to_maturity"]);
        $(".light").text(data["light"]);
        $(".spacing").text(data["spacing"] + '"');
        $(".js-next").attr("data-id", data["id"]);
        $(".js-previous").attr("data-id", data["id"]) - 1;
      })
    })
    return false;
  })
}

function previousPlant(){
  $(".js-previous").on('click', function(event){
    event.preventDefault();
    var previousId = parseInt($(".js-previous").attr("data-id")) - 1;

    $.getJSON("/plants/" + previousId + "/details", function(data){
      $("#plant-title").text(data["variety"]);
      $(".plant-photo").attr("src", data["image"]);
      $(".common-name").text(data["common_name"]);
      $(".latin-name").text(data["latin_name"]);
      $(".height").text(data["height"] + '"');
      $(".lifecycle").text(data["lifecycle"]);
      $(".maturity").text(data["days_to_maturity"]);
      $(".light").text(data["light"]);
      $(".spacing").text(data["spacing"] + '"');
      $(".js-previous").attr("data-id", data["id"]);
      $(".js-next").attr("data-id", data["id"]) + 1;
    }).fail(function(event){
      // get length of plants array to avoid hardcoding
      $.getJSON("/plants/" + 8 + "/details", function(data){
        $("#plant-title").text(data["variety"]);
        $(".plant-photo").attr("src", data["image"]);
        $(".common-name").text(data["common_name"]);
        $(".latin-name").text(data["latin_name"]);
        $(".height").text(data["height"] + '"');
        $(".lifecycle").text(data["lifecycle"]);
        $(".maturity").text(data["days_to_maturity"]);
        $(".light").text(data["light"]);
        $(".spacing").text(data["spacing"] + '"');
        $(".js-previous").attr("data-id", data["id"]);
        $(".js-next").attr("data-id", data["id"]) + 1;
      })
    })
    return false;
  })
}

function test(){
 $(".js-next").on('click', function(event){
   event.preventDefault();
   var nextId = parseInt($(".js-next").attr("data-id")) + 1;
   var url = "/plants/" + nextId + "/details"
   var url2 = "/plants/" + nextId + "/season-tester"

   $.getJSON(url, function(data){
     $("#plant-title").text(data["variety"]);
     $(".plant-photo").attr("src", data["image"]);
     $(".common-name").text(data["common_name"]);
     $(".latin-name").text(data["latin_name"]);
     $(".height").text(data["height"] + '"');
     $(".lifecycle").text(data["lifecycle"]);
     $(".maturity").text(data["days_to_maturity"]);
     $(".light").text(data["light"]);
     $(".spacing").text(data["spacing"] + '"');

     //work out how to display seasons and tags
     $(".tags").text("Replacement")

     $.getJSON(url2, function(json){
       $(".seasons").empty()
       json.forEach(function(season){
         console.log(json)
         $(".seasons").append(season.season + "<br>")
       })
     })

     $(".js-next").attr("data-id", data["id"]);
     $(".js-previous").attr("data-id", data["id"]) - 1;
   }).fail(function(event){
     $.getJSON("/plants/1/details", function(data){
       $("#plant-title").text(data["variety"]);
       $(".plant-photo").attr("src", data["image"]);
       $(".common-name").text(data["common_name"]);
       $(".latin-name").text(data["latin_name"]);
       $(".height").text(data["height"] + '"');
       $(".lifecycle").text(data["lifecycle"]);
       $(".maturity").text(data["days_to_maturity"]);
       $(".light").text(data["light"]);
       $(".spacing").text(data["spacing"] + '"');
       $(".js-next").attr("data-id", data["id"]);
       $(".js-previous").attr("data-id", data["id"]) - 1;
     })
   })
   return false;
 })
}
