var $ = require("jquery");
$(function (){
  var $body = $("body");
  var $nameButtonElements = $body.find("[data-js='buttonNum']");
  var $outputElement = $body.find("[data-js='outputDisplay']");
  var $equalButtonElement = $body.find("[data-js='buttonEqual']")
  var $multiplyButtonElement = $body.find("[data-js='buttonMultiply']")
  var $multiplyDivideElement = $body.find("[data-js='buttonDivide']")
  $nameButtonElements.on("click", function(){
    var $this = $(this);
    var currentOutputDigits = $outputElement.text();
    var currentDigit = $this.text();
    $outputElement.text(currentOutputDigits+currentDigit);
    if ($this.text() === "C") {
      $outputElement.text("");
    }
  });
  $multiplyButtonElement.on("click", function(){
    var $this = $(this);
    var eX = $this.text();
    $outputElement.text($outputElement.html()+"*")
  })
  $multiplyDivideElement.on("click", function(){
    var $this = $(this);
    var eX = $this.text();
    $outputElement.text($outputElement.html()+"/")
  })
  $equalButtonElement.on("click", function(){
    var answer = eval($outputElement.html());
    $outputElement.text(answer.toPrecision(4));
  });
});
