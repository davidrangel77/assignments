// Example

// The purpose of this first exercise is just to show how
// assertions work and how the homework should be carried out.
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one.
function addOne(num){
  return num + 1
}
console.assert(addOne(1) === 2)

// Part 0

// Fix the following code so that the assertion passes.

function doubleNum(num) {
    return num * 2
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */
function sum(num1, num2){
  return num1 + num2;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside
// of your average function.

function average(num1, num2){
  var sum1 = num1 + num2;
  var sum1Half = sum1/2;
  return sum1Half
}
console.assert(average(8,12) === 10)
console.assert(average(100,200) === 150)

/**
 * PART 3
 *
 * Modify your sum function so that if either of its
 inputs is not a number, it will return "null."
 */
 function sum(num1, num2){
   if (Number.isInteger(num1||num2)===false){
     return null;
   }
   else{
     return num1 + num2;
   }
 }
console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 4

// Write a function called isNegative that will tell
// whether a number is negative or not.
function isNegative (num){
  if (num < 0){
    return true;
  }else {return false;}
}

console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)


// Now, modify your sum function again, so that it
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative
// function inside your sum funciton ***

function sum(num1, num2){
  if (Number.isInteger(num1||num2)===false){
    return null;
  }else if (isNegative(num1)||isNegative(num2)){
    return null;
  }
  else{
    return num1 + num2;
  }
}
console.assert(sum(5,-5) === null)


// Part 5

// Write a function that will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

function minimum(num1,num2,num3,num4){
  if (num1 < num2 && num1 < num3 && num1 < num4){
    return num1;
  }else if (num2 < num1 && num2 < num3 && num2 < num4){
    return num2;
  }else if (num3 < num1 && num3 < num2 && num3 < num4){
    return num3;
  }else {
    return num4;
  }
}

console.assert(minimum(1,2,4,0) === 0)
console.assert(minimum(1000,-2,-99,50) === -99)
console.assert(minimum(-1000,-2,-99,50) === -1000)
console.assert(minimum(1000,-2,99,50) === -2)


// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not
// both or neither.

function justOneString(input1, input2){
  if (typeof(input1) === 'string' && typeof(input2) === 'string'){
    return false;
  }else if (typeof(input1) === 'string' || typeof(input2) === 'string'){
    return true;
  }else if (typeof(input1) != 'string' && typeof(input2) != 'string'){
    return false;
  }
}

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)


// Part 8

// Write a function called doTwice that takes as input a
// function and invokes that function twice.

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10
var incrementGlobalNumber = function(){
    NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
    NUMBER = NUMBER * 2
}

var doTwice = function(NUM){
  incrementGlobalNumber(incrementGlobalNumber());
  return NUMBER;
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

var doTwice = function(NUM){
  doubleGlobalNumber(doubleGlobalNumber());
  return NUMBER;
}
doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)


// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if
// the value of a certain global variable, called ORACLE, is
// "YES." Otherwise, it will does nothing.

function conditionallyInvoke (){
  if (ORACLE === 'YES'){
    return doubleGlobalNumber(NUMBER);
  }else {return null}
}


var ORACLE = 'NO'

conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 10

// Make the following assertion work:
var factory = function() {
    var innerFunc = function() {
        return 'hello world';
    }
    return innerFunc;
  }


console.assert(factory()() === 'hello world')  // INCEPTION!


// Part 11

// Want more?
var factory2 = function() {
    var innerFunc = function(arg2) {
        return arg2;
    }
    return innerFunc;
  }


console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...
var factory3 = function(arg1) {
    var innerFunc = function() {
      return arg1;
    }
    return innerFunc;
  }


console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)
