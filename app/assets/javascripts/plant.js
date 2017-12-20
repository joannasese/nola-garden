$(document).ready(function (){
  testComment();
  loadPlantIndex();
})

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
  $('a.plant-index').on('click', function(event){
    console.log('Clicked plants button');
    $('#main-content').append("Hey there." + "<br>");
    event.preventDefault();
  })
}
