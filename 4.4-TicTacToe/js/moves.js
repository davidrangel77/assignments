var $ = require("jquery");

$(function(){
  var $body = $("[data-js='body']")
  var $moveSpace = $body.find("[data-js='square']")
  var numberOfClicks = 0;
  $moveSpace.on("click", function(){
    $clickedMove = $(this);
    numberOfClicks++;
    if(numberOfClicks%2 === 1){
      $clickedMove.text("X");
    }else {
      $clickedMove.text("O");
    }
    if(numberOfClicks === 10){
      $moveSpace.text("");
    }
  });
});
