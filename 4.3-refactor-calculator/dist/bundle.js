/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
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


/***/ }
/******/ ]);