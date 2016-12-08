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

  var nameButton7Element = document.querySelector("[data-js='button7']");
  var outputElement = document.querySelector("[data-js='outputDisplay']");
  // add eventListener for the button click
  nameButton7Element.addEventListener("click", function(){
    outputElement.textContent = 7;
  })
})
