// TODO: need to set functions to recall button data for each button
    // to accomplish this:
      // - first set one button with an eventListener for "click"
      // - make that eventListener return the button value
      // - make that value appear in the calculatorOutput element
      // - write *math functions for the calc function buttons
      // - make them interact with the calc number buttons
      // - make the "clear" button reset to data in calculatorOutput element
      //   to empty
// first button: click button "7" and have "7" appear in calculatorOutput
document.addEventListener("DOMContentLoaded", function(){
  // make vars to identify buttons and where to display output
  var nameButton7Element = document.querySelector("[data-js='button7']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton7Element.addEventListener("click", function(){
    outputElement.textContent = 7;
  });
  var nameButton8Element = document.querySelector("[data-js='button8']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton8Element.addEventListener("click", function(){
    outputElement.textContent = 8;
  });
  var nameButton9Element = document.querySelector("[data-js='button9']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton9Element.addEventListener("click", function(){
    outputElement.textContent = 9;
  });
  var nameButton4Element = document.querySelector("[data-js='button4']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton4Element.addEventListener("click", function(){
    outputElement.textContent = 4;
  });
  var nameButton5Element = document.querySelector("[data-js='button5']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton5Element.addEventListener("click", function(){
    outputElement.textContent = 5;
  });
  var nameButton6Element = document.querySelector("[data-js='button6']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton6Element.addEventListener("click", function(){
    outputElement.textContent = 6;
  });
  var nameButton1Element = document.querySelector("[data-js='button1']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton1Element.addEventListener("click", function(){
    outputElement.textContent = 1;
  });
  var nameButton2Element = document.querySelector("[data-js='button2']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton2Element.addEventListener("click", function(){
    outputElement.textContent = 2;
  });
  var nameButton3Element = document.querySelector("[data-js='button3']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton3Element.addEventListener("click", function(){
    outputElement.textContent = 3;
  });
  var nameButton0Element = document.querySelector("[data-js='button0']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  nameButton0Element.addEventListener("click", function(){
    outputElement.textContent = 0;
  });
  // Now I want to make the ouput concatenate input in the outputDisplay
  var outputConcat =
  // Next I need to display the concatenated output in the outputDisplay
});