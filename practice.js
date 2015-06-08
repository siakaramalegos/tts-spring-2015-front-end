// var message = "Helloooo World!";
// console.log(message);

// Variables
/*
var x = "Hey";
var y = 10;

console.log(x);
console.log(y);
console.log(x + y);

y = " is for horses!";
console.log(x + y);

var x = 1,
    y = 2,
    z = "three";
    */

// Data types
// numbers
// var integer_num = 1,
//     float_num = 1.23;

// console.log(integer_num + float_num);

// // strings
// var message = "Let's learn JavaScript!";
// console.log(message);

// // booleans
// var is_cool = true;
// console.log(is_cool + " dat");

// // arrays
// var my_stuff = [integer_num, message, is_cool];
// console.log(my_stuff);

// // hashes
// var capitals = {
//   LA: "Baton Rouge",
//   TX: "Austin",
//   GA: "Atlanta"
// };
// console.log(capitals["LA"]);

// null and undefined
// var x;

// // variables that haven't been initialized are undefined.
// console.log(x);                 // undefined

// // but they aren't null
// console.log(x === null);        // false

// // unless you make them null
// x = null;
// console.log(x);                 // null
// console.log(x === null);        // true
// console.log(x === undefined);   // false

// This variable is in the global scope
// var x = "I'm a global variable called x!";
// console.log(x);

// // Defining a function called someFunction
// function someFunction(){
//   // This variable only exists inside the function
//   var y = "I'm a local variable called y!";
//   console.log(x);
//   console.log(y);

//   // This is bad.  Don't do it.
//   x = "I'm now a bad local variable called x."
//   console.log(x);
// }

// // Calling someFunction
// someFunction();
// // console.log(y);
// console.log(x);

// // or use 'type coercion' - 2 equal signs will change the value rather than simply compare
// console.log(x == undefined);    // true

// Operators
// var x = 10,
//     y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);  // modulus, remainder

// console.log(x > y);
// console.log(x < y);
// console.log(x === y); // is equal to
// console.log(x !== y); // is not equal to

// var a = true,
//     b = false;

// console.log(a && b);   // and
// console.log(a || b);   // or

// Conditionals
// var x = 10,
//     y = 10;

// if (x > y){
//   console.log("x is greater than y");
// } else if (x < y){
//   console.log("x is less than y");
// } else {
//   console.log("x is equal to y");
// }

// Loops
// var numbers = [1, 2, 3, 4, 5];

// C-style JS loop
// for (var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

// // For each loop
// numbers.forEach(function (element){
//   console.log(element);
// });

// While loop
// var i = 0;

// while (i < numbers.length){
//   console.log(numbers[i]);
//   i++;  // same as i += 1
// }

// Functions

// A function with explicit arguments
// function sumExplicity(a, b){
//   console.log(a + b);
// }

// sumExplicity("hey", " ya");

// A functions with arbitrary number of arguments
function popcorn(){
  var total = 1;

  for (var i = 0; i < arguments.length; i++){
    total += arguments[i];
    // console.log(total);
  }
  return total
}

var x = popcorn(1, 2, "hey", 5, 6);
var y = popcorn(x, popcorn(7,8));
console.log(x);
console.log(y);

// function sum(a, b){
//   return a + b;
// }

// var