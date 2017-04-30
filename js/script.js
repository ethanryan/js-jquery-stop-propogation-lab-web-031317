// When you click on the body of any of the lights,
// the background of the fixture should turn purple.
// When you click it again, it should turn white.
//
// When you click on one of the lights, like the top light
// of the first fixture, the light turns red, but the body
// also turns purple. Click around a bit and take a look
// at the behavior of the lights.
//
// Ideally, we want to be able to click on the lights
// and only have that specific light change color.
// Your job is to edit the code in js/script.js to make that happen.
// Currently, three tests fail. These tests check to
// see that the click event on the light fixture
// isn't fired when you click on an individual light.
// You'll want to make sure to pass all the tests.


$(document).ready(function() {
  lightActive();
  redLight();
  yellowLight();
  greenLight();
});

function lightActive(){
  $('.light').on('click', function(){
      $(this).toggleClass("active");
      console.log("background purple")
  });
}

function redLight(){
  $(".redLight").on('click', function(event){ //adding event
    $(this).toggleClass("red");
    console.log("redLightClickEvent") //adding this
    event.stopPropagation(); //adding this
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(event){ //adding event
    $(this).toggleClass("yellow");
    console.log("yellowLightClickEvent") //adding this
    event.stopPropagation(); //adding this
  });
}

function greenLight(){
  $(".greenLight").on('click', function(event){ //adding event
    $(this).toggleClass("green");
    console.log("greenLightClickEvent") //adding this
    event.stopPropagation(); //adding this
  });
}
