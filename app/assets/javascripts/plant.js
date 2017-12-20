$(document).ready(function () {
  testComment();
})

function testComment(){
  $('.title-link').on('click', function(event){
    console.log('Hey')
    $("#menu-container").append("Can you see me? I was added with jQuery.");
    event.preventDefault();
  })
}
// })
// $('#my-link').click(function (event) {
//   alert('Hooray!');
//   event.preventDefault(); // Prevent link from following its href
// });
