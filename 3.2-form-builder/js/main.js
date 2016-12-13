document.addEventListener("DOMContentLoaded", function(){
// get the data from the website
var xhr = new XMLHttpRequest;
xhr.open("GET", "http://json-data.herokuapp.com/forms");
xhr.addEventListener("load", function(e){
  var responseData = JSON.parse(this.response);
  // make var to connect the data-js to the .html element
  var formElement = document.querySelector("[data-js='form']")
  // make placeholder for outside the first forEach loop that holds everything
  var allInputDataHtml = "";
  // make forEach loop to loop throgh inputData to identify what "type" of input
  responseData.forEach(function(inputData){
  // make another placeholder for outside the interior forEach loop
    var inputDataPlaceholder = "";
    // make if statement to start building "select" html. That is, if the loop sees something that has a data type that equals "select" it will start the html concatenation.
    if (inputData.type === "select"){
      // this begins the "select" html backtick IF it is the "select" data type
      inputDataPlaceholder += `<select>`;
      // starts the next loop through the "options" in the "select" data
        inputData.options.forEach(function(optionData){
          // continues concat'ing with the html for the "option"s in proper html
          inputDataPlaceholder += `<option label="${optionData.label}" value="${optionData.value}"</option>`;
        })
      // the "else" statement is for all the other inputs that ARE NOT "select"
    }else {
      inputDataPlaceholder += `<label>${inputData.label}</label>`;
      inputDataPlaceholder += `<input class="textInput" type="${inputData.type}"
        id="${inputData.id}" icon="${inputData.icon}">`;
    }
    // concat's all inputs into the allInputData (the placeholder from above that holds everything)
    allInputDataHtml += inputDataPlaceholder;
  });
  // adds it all to the html.
formElement.innerHTML += allInputDataHtml;
});
xhr.send();
});
