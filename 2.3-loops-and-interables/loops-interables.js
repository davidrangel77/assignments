// PART 0: Write a function called squareDance() that squares each number in an array.

function squareDance (numbersArray){
  // var squaredNumber = Math.pow(numbersArray[1], 2)
  for (var i = 0; i < numbersArray.length; i++) {
    // hold a ref to the current number
    var currentNumber = numbersArray[i];
    // swaure the current number and set it back into array
    numbersArray[i] = Math.pow(currentNumber, 2);
  }
  return numbersArray
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

function nicer(sentence) {
  // made a var to hold the nonBadwordsSentence return until was built
  var nonBadwordsSentence = ""
  // seperate the sentence string into an array
  var sentenceArray = sentence.split(" ")
  // make an array of the bad words
  var badWordsArray = ["heck", "darn", "crappy", "dang"]
  // loop over array to find bad words
  for (var i = 0; i < sentenceArray.length; i++) {
    // set var currentWord to hold the check in the loop of sentenceArray
    var currentWord = sentenceArray[i]
    // indexOf to check if current word is in the badWordsArray
      if (badWordsArray.indexOf(currentWord) === -1) {
        // set 'if' if current iternation equals the end of sentenceArray array to NOT add a space to the last iteration.
        if (i === sentenceArray.length-1) {
        nonBadwordsSentence += currentWord;
        // added the ELSE to take all the other iterations and add a " " between them.
      }else {
        nonBadwordsSentence += currentWord + " "
      }
    }
    // return nonBadwordsSentence should log the NON bad words concatenated with spaces EXCEPT for the last word without one.
  }return nonBadwordsSentence
}
// remove bad words from sentence string
// return new sentence with the words ommitted

console.assert(nicer("dad get the heck in here and bring me a darn sandwich.") === "dad get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.

function capitalizeAll (nonCapsSentence){
  // make an array of every word in a string
  var sentenceArray = nonCapsSentence.split(" ")
  // make a loop to find the first letter of every word
  for(i = 0; i < sentenceArray.length; i++){
    var currentWord = sentenceArray[i];
    var currentWordArray = currentWord.split("");
    currentWordArray[0] = currentWordArray[0].toUpperCase();
    var capitalizedWord = currentWordArray.join("");
    sentenceArray[i] = capitalizedWord
  }
  // replace that letter with a capital letter with splice
  var capitalizedSentence = sentenceArray.join(" ")
  return capitalizedSentence;
}

console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'
function properSentences (paragraph){
  // make the input an array of the paragraph
  var sentenceArray = paragraph.split(". ");
  var capitalizedSentences = "";
  for(var i = 0; i < sentenceArray.length; i++) {
    var currentSentenceArray = sentenceArray[i];
    var uncapitalizedSentenceArray = currentSentenceArray.split(" ");
    var currentWord = uncapitalizedSentenceArray[0];
    var currentWordArray = currentSentenceArray.split("");
    currentWordArray[0] = currentWord[0].toUpperCase();
    capitalizedSentences += currentWordArray.join("").concat(". ");
  }
  var newParagraph = capitalizedSentences.slice(0, -2)
  return newParagraph;
}

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
// @TODO: see below:
// insert "fun" to the array.
//  join the array back together.
function iPutTheFunIn (text){
  // Make the text an array.
  var textArray = text.split("");
  // count the characters in the array and find the middle.
  var middlePoint = Math.floor((0+textArray.length)/2);
  var newFunWord = text.slice(0, middlePoint) + "fun" +text.slice(middlePoint);
  return newFunWord;
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

function pipeline (paragraph, nicer, properSentences) {
  var newParagraph = properSentences(paragraph);
  var nicerParagraph = nicer(newParagraph);
  return nicerParagraph;
}

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

function pipeline (n, squareNum, addOne){
  var newSquare = squareNum(n);
  var plusOne = addOne(newSquare);
  return plusOne;
}
// test 2
var squareNum = function(n){
    return n * n
}

var addOne = function(n) {
    return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// function pipeline (numbersArray, squareDance, exclaimAll){
//   var squaredNumber = squareDance(numbersArray);
//   console.log(squaredNumber);
//   var exclaimedNumber = exclaimAll(squaredNumber);
// }
// test 3
var exclaimAll = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + '!')
    }
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
