document.addEventListener("DOMContentLoaded", function(){
// get the data from the website
var xhr = new XMLHttpRequest;
xhr.open("GET", "http://json-data.herokuapp.com/forms");
xhr.addEventListener("load", function(e){
  var responseData = JSON.parse(this.response);
  var formElementsArray = document.querySelector("[data-js='form']")
  var allInputDataHtml = "";
  responseData.forEach(function(inputData){
    // make each input html strings
    var inputDataPlaceholder = "";
    if (inputData.type === "select"){
      inputDataPlaceholder += `<select>`;
        inputData.options.forEach(function(options){
          // if (i dont know what goes here) += `option goes here`
          // else (i dont know what goes here) += `option2 goes here`
        })
    }else {
      inputDataPlaceholder += `<input type="${inputData.type}"
        id="${inputData.id}" icon="${inputData.icon}">`;
      inputDataPlaceholder += `<label> for="${inputData.label}"</label>`;
    }
    // concat all inputs to input string to allInputData
    allInputDataHtml += inputDataPlaceholder;
  })
  console.log(allInputDataHtml);
});
xhr.send();
});
