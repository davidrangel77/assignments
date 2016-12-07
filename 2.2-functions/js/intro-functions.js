var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){

    if (a > b) {
      return a;
    }
    else {
      return b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
  if (a > b) {
    if (a > c){
      return a;
    }else {
      if (b > c) {
        return b;
      }else {
        return c;
      }
    }
  }else{
    if (b > c){
      return b;
    }else {
      return c;
    }
  }
}
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];
  if (vowels.indexOf(char) === -1){
    return false;
  }else {
    return true;
    }
  }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){

  var vowels = ["a","e","i","o","u"];
  // var textasString = text.toString();


  for(var i = 0; i < text.length; i++) {
    // determine if it is  consonant
    // var text = text.split("");
    var currentLetter = vowels[i];

    if (vowels.indexOf(currentLetter) === -1){
    // referance consonant
    var consonant = currentLetter;
    // double with "o" in between
    var doubledText = "o" + consonant;
    // splice back in array of consonant
    // text.splice(i, 0, doubledText);
    }
  // Then take that output and find each doubled consonant and ad an "o"
  }
}
// I feel like I can understand what all these things are supposed to do
// but I can't make it work.

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    return str.split("").reverse().join("");
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

// I found this as a built in function and used it.

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes any
 * string and returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  // Make a variable for the text input array
  // Make that variable into a seperated array by words
  var sentenceString = sentence.split("");

  // Inspect that array for length of words with a for loop
  var longestWord = 0;

  for (var i = 0; i <= sentenceString.length; i++) {
    if (longestWord < sentenceString[i].length) {
      longestWord = sentenceString[i].length;
    }
  }
  // Return the longest word
  return longestWord;
}
// I got it to revlieve the errors but I had to look it up to add the "=" to the for loop to include the first word.
console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
