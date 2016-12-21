
document.addEventListener("DOMContentLoaded", function(){
  var nameButtonElements = document.querySelectorAll("[data-js='buttonNum']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  // for loop to loop through all instances of any button push of the
  // number buttons and return to the output window that number's interation.
  for(i = 0; i < nameButtonElements.length; i++){
    nameButtonElements[i].addEventListener("click", function(){
      outputElement.textContent += this.textContent;
        if (this.textContent === "C") {
          outputElement.textContent = "";
        // tried to also add an if statement here to change the "X" to "*" but it didn't work the way I wanted.
        }
    });
  }
  // equals button element -DONE
  var nameButtonEqualElement = document.querySelector("[data-js='buttonEqual']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonEqualElement.addEventListener("click", function(){
  var answer = eval(outputElement.textContent);
  outputElement.textContent = answer;
  var newAnswer = answer.toFixed(3);
  outputElement.textContent = newAnswer;
  });
  // buttons yet to be added to for loop for action buttons
  var nameButtonMuliplyElement = document.querySelector("[data-js='buttonMultiply']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonMuliplyElement.addEventListener("click", function(){
    outputElement.textContent += "*"
  });
  var nameButtonDivideElement = document.querySelector("[data-js='buttonDivide']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonDivideElement.addEventListener("click", function(){
    outputElement.textContent += "/";
  });
});
