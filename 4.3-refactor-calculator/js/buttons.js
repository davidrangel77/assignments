// require jquery to start using it with this code
var $ = require("jquery");
// use jQuery document ready function
$(function (){
  // leave these vars the same but use $body.find instead
  var nameButtonElements = document.querySelectorAll("[data-js='buttonNum']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // use .on(click) and $(this) to listen for click event for each number button
  for(i = 0; i < nameButtonElements.length; i++){
    nameButtonElements[i].addEventListener("click", function(){
      outputElement.textContent += this.textContent;
        if (this.textContent === "C") {
          outputElement.textContent = "";
        }
    });
  }
  // use $body.find for var here as well but more up to top with others
  var nameButtonEqualElement = document.querySelector("[data-js='buttonEqual']");
  // don't need this var
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // use .on(click) and $(this) to listen for click event for each number button
    nameButtonEqualElement.addEventListener("click", function(){
  var answer = eval(outputElement.textContent);
  outputElement.textContent = answer;
  var newAnswer = answer.toFixed(3);
  outputElement.textContent = newAnswer;
  });
  // use $body.find for var here as well but more up to top with others
  var nameButtonMuliplyElement = document.querySelector("[data-js='buttonMultiply']");
  // use .on(click) and $(this) to listen for click event for each number button
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonMuliplyElement.addEventListener("click", function(){
    outputElement.textContent += "*"
  });
  // use $body.find for var here as well but more up to top with others
  var nameButtonDivideElement = document.querySelector("[data-js='buttonDivide']");
  // use .on(click) and $(this) to listen for click event for each number button
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonDivideElement.addEventListener("click", function(){
    outputElement.textContent += "/";
  });
});
