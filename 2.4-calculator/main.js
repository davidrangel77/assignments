// TODO: need to set functions to recall button data for each button
    // to accomplish this:
      // - first set one button with an eventListener for "click"-DONE
      // - make that eventListener return the button value -DONE
      // - make that value appear in the calculatorOutput element -DONE
      // - write *math functions for the calc function buttons
      // - make them interact with the calc number buttons
      // - make the "clear" button reset in calculatorOutput element - DONE
      //   to empty -DONE
// first button: click button "7" and have "7" appear in calculatorOutput
document.addEventListener("DOMContentLoaded", function(){
  // make vars to identify buttons and where to display output
  var nameButtonElements = document.querySelectorAll("[data-js='buttonNum']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  for(i = 0; i < nameButtonElements.length; i++){
    nameButtonElements[i].addEventListener("click", function(){
      outputElement.textContent += this.textContent;
    });
  }
  var nameButtonDecimalElement = document.querySelector("[data-js='buttonDecimal']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonDecimalElement.addEventListener("click", function(){
    outputElement.textContent += ".";
  });
  // make the clear all key:
  var nameButtonClearElement =  document.querySelector("[data-js='buttonClear']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonClearElement.addEventListener("click", function(){
    outputElement.textContent = "";
  });
  // Need to make the math functions
  var nameButtonMultiplyElement = document.querySelector("[data-js='buttonMultiply']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonMultiplyElement.addEventListener("click", function(){
    outputElement.textContent += "*"
  });
  var nameButtonAddElement = document.querySelector("[data-js='buttonAdd']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonAddElement.addEventListener("click", function(){
    outputElement.textContent += "+"
  });
  var nameButtonMinusElement = document.querySelector("[data-js='buttonMinus']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonMinusElement.addEventListener("click", function(){
    outputElement.textContent += "-"
  });
  var nameButtonDivideElement = document.querySelector("[data-js='buttonDivide']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonDivideElement.addEventListener("click", function(){
    outputElement.textContent += "/"
  });
  var nameButtonEqualElement = document.querySelector("[data-js='buttonEqual']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
    nameButtonEqualElement.addEventListener("click", function(){
  var answer = eval(outputElement.textContent);
  outputElement.textContent = answer;
  var newAnswer = answer.toFixed(3);
  outputElement.textContent = newAnswer;
  });
});
