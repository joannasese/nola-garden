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

function loadPlantIndex(){
  $('.plant-index').on('click', function(event){
    console.log('Clicked plants button');
    $('.plant-list').append("Hey there.");
    event.preventDefault();
  })
}
