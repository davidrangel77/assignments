// TODO: need to set functions to recall button data for each button
    // to accomplish this:
      // - first set one button with an eventListener for "click"-DONE
      // - make that eventListener return the button value -DONE
      // - make that value appear in the calculatorOutput element -DONE
      // - write *math functions for the calc function buttons
      // - make them interact with the calc number buttons
      // - make the "clear" button reset to data in calculatorOutput element
      //   to empty -DONE
// first button: click button "7" and have "7" appear in calculatorOutput
document.addEventListener("DOMContentLoaded", function(){
  // make vars to identify buttons and where to display output
  var nameButton7Element = document.querySelector("[data-js='button7']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton7Element.addEventListener("click", function(){
    outputElement.textContent += 7;
  });
  var nameButton8Element = document.querySelector("[data-js='button8']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton8Element.addEventListener("click", function(){
    outputElement.textContent += 8;
  });
  var nameButton9Element = document.querySelector("[data-js='button9']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton9Element.addEventListener("click", function(){
    outputElement.textContent += 9;
  });
  var nameButton4Element = document.querySelector("[data-js='button4']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton4Element.addEventListener("click", function(){
    outputElement.textContent += 4;
  });
  var nameButton5Element = document.querySelector("[data-js='button5']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton5Element.addEventListener("click", function(){
    outputElement.textContent += 5;
  });
  var nameButton6Element = document.querySelector("[data-js='button6']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton6Element.addEventListener("click", function(){
    outputElement.textContent += 6;
  });
  var nameButton1Element = document.querySelector("[data-js='button1']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton1Element.addEventListener("click", function(){
    outputElement.textContent += 1;
  });
  var nameButton2Element = document.querySelector("[data-js='button2']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton2Element.addEventListener("click", function(){
    outputElement.textContent += 2;
  });
  var nameButton3Element = document.querySelector("[data-js='button3']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton3Element.addEventListener("click", function(){
    outputElement.textContent += 3;
  });
  var nameButtonDecimalElement = document.querySelector("[data-js='buttonDecimal']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButtonDecimalElement.addEventListener("click", function(){
    outputElement.textContent += ".";
  });
  var nameButton0Element = document.querySelector("[data-js='button0']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton0Element.addEventListener("click", function(){
    outputElement.textContent += 0;
  });
  // make the clear all key:
  var nameButtonClearElement = document.querySelector("[data-js='buttonClear']");
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
  });
});
