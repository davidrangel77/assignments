
var numbersArray = Array.from(new Array(100),(val,index)=>index+1);
numbersArray.forEach(function(num){
  if (num % 3 === 0 && num % 5 === 0){
    console.log("FizzBuzz");
  }
  else if (num % 3 === 0){
    console.log("Fizz");
  }
  else if (num % 5 === 0){
    console.log("Buzz");
  }else {
    console.log(num);
  }
})
