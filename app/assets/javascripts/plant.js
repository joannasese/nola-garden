$(document).on('turbolinks:load', function() {
// $(document).ready(function () {
  allPlants();
  myPlants();
  nextPlant();
  previousPlant();
  edit();
  updatePlant();
  // test();
});

class Plant {
  constructor(plant){
    this.id = plant.id
    this.common_name = plant.common_name
    this.latin_name = plant.latin_name
    this.variety = plant.variety
    this.height = plant.height
    this.light = plant.light
    this.lifecycle = plant.lifecycle
    this.spacing = plant.spacing
    this.days_to_maturity = plant.days_to_maturity
    this.image = plant.image
    this.season_ids = plant.season_ids
    this.tag_ids = plant.tag_ids
  }
}

Plant.prototype.tags = () => {
  console.log(this.tag_ids)

}

// "list of things" index resource
let allPlants = () => {
  $("a.all-plant-index").on('click', function(event){
    // to access index from plant show page
    $.getJSON(this.href).done(function(json){
      if(!this.href){
        let url = $("a.all-plant-index").attr("href")
        $("#main-content").load(url + " .all")
      }
      let url = $("a.all-plant-index").attr("href")
      $(".page-title").load(url + " .page-title")
      $(".filter").load(url + " .filter")
      $(".main-content").empty();
      //figure out how to sort and add link
      json.forEach(function(data){
        //this actually works without constructors but let's use constructors
        let plant = new Plant(data)
        $(".main-content").append(plant.common_name + ", " + plant.variety + "<br>")
      })
      $(".submit").load(url + " .submit")
      console.log("jQuery allPlants")
    })
    event.preventDefault();
  })
}

// "list of things" index resource
let myPlants = () => {
  $("a.my-plant-index").on('click', function(event){
    // $.getJSON(this.url).done(function(json){
    //   let url = $("a.my-plant-index").attr("href")
    //   $("#main-content").load(url + " .all")
    // })
    $.getJSON(this.href).done(function(data){
      if(!this.href){
        let url = $("a.my-plant-index").attr("href")
        $("#main-content").load(url + " .all")
      }
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

// "one specific thing" show resource
let nextPlant = () => {
  $(".js-next").on('click', function(event){
    event.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    var base_url = "/plants/" + nextId
    var details_url = "/plants/" + nextId + "/details"
    var seasons_url = "/plants/" + nextId + "/seasons"
    var tags_url = "/plants/" + nextId + "/tags"

    edit(base_url, "/plants/1", details_url)
    retrieveDetails(details_url, seasons_url, tags_url, "/plants/1/")
    return false;
  })
}

// "one specific thing" show resource
let previousPlant = () => {
  $(".js-previous").on('click', function(event){
    event.preventDefault();
    var previousId = parseInt($(".js-previous").attr("data-id")) - 1;
    var base_url = "/plants/" + previousId
    var details_url = "/plants/" + previousId + "/details"
    var seasons_url = "/plants/" + previousId + "/seasons"
    var tags_url = "/plants/" + previousId + "/tags"

    edit(base_url, "/plants/8", details_url)
    retrieveDetails(details_url, seasons_url, tags_url, "/plants/8/")
    return false;
  })
}

let retrieveDetails = (details_url, seasons_url, tags_url, fail_url) => {
  let plantInfo = (data, seasons_url, tags_url) => {
    let plant = new Plant(data)
    $("#plant-title").text(plant.variety)
    $(".plant-photo").attr("src", plant.image);
    $(".common-name").text(plant.common_name);
    $(".latin-name").text(plant.latin_name);
    $(".height").text(plant.height + '"');
    $(".lifecycle").text(plant.lifecycle);
    $(".maturity").text(plant.days_to_maturity);
    $(".light").text(plant.light);
    $(".spacing").text(plant.spacing + '"');
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
    $(".js-next").attr("data-id", plant.id) + 1;
    $(".js-previous").attr("data-id", plant.id) - 1;
  }

  $.getJSON(details_url, function(data){
    plantInfo(data, seasons_url, tags_url);
  }).fail(function(event){
    $.getJSON(fail_url + "details", function(data){
      plantInfo(data, fail_url + "seasons", fail_url + "tags");
    })
  })
}

let edit = (base_url, fail_url, details_url) => {
  $.getJSON(details_url, function(plant){
    $.getJSON(base_url, function(user){
      let userMatch = plant.user_id === user.id || plant.id === user.id
      $("a.edit").toggle(userMatch).attr("href", base_url).on("click", function(){
        window.location.replace(base_url + "/edit")
      })
    })
  }).fail(function(event){
    let url = fail_url + "/details"
    $.getJSON(url, function(plant){
      $.getJSON(base_url, function(user){
        let userMatch = plant.user_id === user.id || plant.id === user.id
        $("a.edit").toggle(userMatch)
        $("a.edit").attr("href", fail_url)
        console.log(userMatch)
      })
    })
  })
}

let updatePlant = () => {
  $("form").on("submit", function(event){
    event.preventDefault();
    let $form = $(this);
    let action = $form.attr("action");
    // action is /plants/:id
    let params = $form.serialize();
    $("form").trigger("reset")

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST",
      success: function(response){
        let plant = new Plant (response)
        console.log(response)
        $("#plant-title").empty().append(plant.variety)
        $(".common-name").empty().append(plant.common_name)
        $(".plant-photo").empty().html($("<img>").attr("src", plant.image.url)); //not working yet
        $(".latin-name").empty().append(plant.latin_name)
        $(".variety").replaceWith(plant.variety)
        $("form.tag-form").trigger("reset")
        // link to last plant in array
      },
      error: function(response){
        alert("Please complete required fields.")
        location.reload();
      }
    })
  })
}
