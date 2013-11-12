$(document).ready(function(){

  // Do this when link is clicked
  // Why did this href work only in [] brackets.... 

  $('[href]').click(function(e)  {
  e.preventDefault();
  console.log("button clicked");

  //submit ajax request to /color route
  $.post( "/color", function( data ) {
    console.log ( data.cell );
    console.log ( data.color );

    //change cell color
    //based on random li selection, set to random color
    $("#color_me li:nth-child(" + data.cell + ")").css("background-color",'data.color');

  }, "json");

  }); // end for submit function event
}); // end for document ready function