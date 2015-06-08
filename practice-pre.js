// var message = "Hello, World!";
// console.log(message);

// var x = "Hey";
// var y = 10;

// console.log(x);
// console.log(y);
// console.log(x + y);

// y = " is for Horses!"

// console.log(x + y);

// // Numbers
// var integer_num = 1;
// var float_num = 1.23;

// console.log(integer_num + float_num);

// // Strings
// var message = "Let's learn JavaScript!";
// console.log(message);

// // Booleans
// var is_cool = true;
// console.log(is_cool + " dat");

// // Arrays
// var my_stuff = [integer_num, message, is_cool];
// console.log(my_stuff);

// // Hashes
// var capitals = {
//   LA: "Baton Rouge",
//   TX: "Austin",
//   GA: "Atlanta"
// };
// console.log(capitals["LA"]);

// var x;

// // Variables that haven't been initialized are undefined.
// console.log(x);                // undefined

// // But they are not null:
// console.log(x === null);       // false

// // Unless you make them null:
// x = null;
// console.log(x);                // null
// console.log(x === null);       // true
// console.log(x === undefined);  // false

// // Or use 'type coercion' - 2 equal signs will change the value rather than compare in Javascript
// console.log(x == undefined);   // true

// // This variable is in the Global scope:
// var x = "I'm a global variable called x!";
// console.log(x);

// function someFunction(){
//   // This variable only exists inside the function:
//   var y = "I'm a local variable called y!";
//   console.log(x);
//   console.log(y);

//   // This is bad.  Don't do it.
//   x = "I'm now a BAD local variable called x."
//   console.log(x);
// }

// someFunction();
// console.log(x);  // Returns BAD local x
// console.log(y);  // Results in an error

// var x = 10,
//     y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);  // modulus, or remainder

// console.log(x > y);
// console.log(x < y);
// console.log(x === y);  // is equal to
// console.log(x !== y);  // is not equal to

// var a = true,
//     b = false;

// console.log(a && b);  // and
// console.log(a || b);  // or

// var x = 10;
//     y = 5;

// if (x > y){
//   console.log("x is greater than y");
// } else if (x < y){
//   console.log("x is less than y");
// } else {
//   console.log("x is equal to y");
// }

// // C-style JavaScript loop
// var x = [1, 2, 3, 4, 5];

// for (var i = 0; i < x.length; i++){
//   console.log(x[i]);
// }

// // For each loop
// x.forEach(function (element){
//   console.log(element);
// });

// // While loop
// var numbers = [1, 2, 3, 4],
//     i = 0;

// while (i < numbers.length){
//   console.log(numbers[i]);
//   i++;
// }

// // A function with explicit parameters
// function sumExplicitly(a, b){
//   console.log(a + b);
// }

// sumExplicitly(10, 5);             //=> 15

// // A function with implicit parameters
// function sumImplicitly(){
//   var total = 0,
//       i;

//   for (i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }

//   console.log(total);
// }

// sumImplicitly(1, 4, 7, 3, 20);    //=> 35

function sum(a, b){
  return a + b;
}

var x = sum(10, 5);
var y = sum(x, sum(20, 30));

console.log(x);    //=> 15
console.log(y);    //=> 65
