// require jquery to start using it with this code
var $ = require("jquery");
// use jQuery document ready function
$(function (){
  // leave these vars the same but use $body.find instead
  var $body = $("body");
  var $nameButtonElements = $body.find("[data-js='buttonNum']");
  var $outputElement = $body.find("[data-js='outputDisplay']");
  var $clearButtonElement = $body.find("[data-js='buttonClear']");
  var $equalButtonElement = $body.find("[data-js='buttonEqual']")
  $nameButtonElements.on("click", function(){
    var $this = $(this);
    var currentOutputDigits = $outputElement.text();
    var currentDigit = $this.text();
    $outputElement.text(currentOutputDigits+currentDigit);
  });
  $clearButtonElement.on("click", function(){
    $outputElement.text("");
  });
  $equalButtonElement.on("click", function(){
    
  });
});
