var $ = require("jquery");
$(function (){
  var $body = $("body");
  var $nameButtonElements = $body.find("[data-js='buttonNum']");
  var $outputElement = $body.find("[data-js='outputDisplay']");
  var $equalButtonElement = $body.find("[data-js='buttonEqual']")
  $nameButtonElements.on("click", function(){
    var $this = $(this);
    var currentOutputDigits = $outputElement.text();
    var currentDigit = $this.text();
    $outputElement.text(currentOutputDigits+currentDigit);
    if ($this.text() === "C") {
      $outputElement.text("");
    }
    if ($this.text() === "X") {
      $outputElement.text(currentOutputDigits+"*");
    }
    if ($this.text() === "=") {
      var answer = eval($outputElement.html());
      $outputElement.text(answer.toFixed(3));
    }
  });
});
