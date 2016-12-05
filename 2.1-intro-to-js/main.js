/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: the declaration of 'givenName'


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: 'givenName' is set to the string "Tim".


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: 'givenName' is set to the string "JD".


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: 'greeting' is set to the string "Hello, how are you?".


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 'math' is set to the difference of 'high' and 'low', or '40'.

math = high - "5";
// Q: What is `math` set to?
// A: 'math' is set to the difference of 'high' and the string "5".

console.log(math);

/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:

var timsCurrentAge = today - born;
var toDisplayTimsCurrentage= "Tim is " + timsCurrentAge + "years old"

console.log(toDisplayTimsCurrentage);


// Store some information following in variables.
var yourName
var instructorName

// Update the variables above so the expression reads correctly.
// Answers Below:

var yourName = "David Rangel";
var instructorName= "Jason Vanderslice";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

console.log(statement);
