document.addEventListener("DOMContentLoaded", function(){
// get the data from the website
var xhr = new XMLHttpRequest;
xhr.open("GET", "http://json-data.herokuapp.com/forms");
xhr.addEventListener("load", function(e){
  var responseData = JSON.parse(this.response);
  console.log(responseData);
  var formElement = document.querySelector("[data-js='form']")
  console.log(formElement);
  formElement.innerHTML += responseData[0];
  });
xhr.send();
});
