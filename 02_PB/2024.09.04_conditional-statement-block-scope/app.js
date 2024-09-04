let myAge = 25; // number
let text = "Hello how are you?"; // string
console.log(typeof text); // string

let myNumber1 = 9 + 4;
console.log(myNumber1); // 13

let myNumber2 = myNumber1 + 7;
console.log(myNumber2); // 20

// comparison operators (===) (==) (!=) (!==)
let num1 = 100;
let num2 = 100;
console.log(num1 == num2); // true
console.log(num1 === num2); // true
let num3 = "100";
console.log(num1 == num3); // true
console.log(num1 === num3); // false (values are equal but they have different data types)

console.log(num1 != num3); // false
console.log(num1 !== num3); // true

// greater and smaller
let num4 = 70;
const num5 = 30;
console.log(num4 > num5); // true
console.log(num4 < num5); // false
console.log(num4 >= num5); // true

// slice
const date = "04.09.2024";

const year = date.slice(6);

console.log(year); // 2024
console.log(date);

// ------------------------------
// conditional statement
// if(condition){
// Your code works if condition is true
//}
// EXAMPLE-1

if (8 >= 17) {
  // Your codes works if the condition is true
  console.log("Hello😊");
} else {
  // Your codes works if the condition is false
  console.log("Bye😞");
}

// EXAMPLE-2
let x = 8;
if (x > 10) {
  console.log(`${x} is greater than 10`);
} else {
  console.log(`${x} is less than 10`);
}

// Block => inside => {}

// EXAMPLE-3
let age = 20;
if (age >= 16) {
  console.log("is allowed to drink🍺");
} else {
  console.log("is not allowed to drink");
}

// EXAMPLE-4
let number = 15;

if (number % 2 === 0) {
  console.log(number + " Gerade!");
} else {
  console.log(number + " Ungerade!");
}

// if(condition){
// your code works if the condition is true
//}else if(condition2){
// your code works if the condition2 is true
//}else{
// your codes works if none of these conditions are true
//}

// EXAMPLE-1
// Ticket
// under 18 => 5€
// 18-65 => 10€
// over 65 => 5€
let age1 = 10;
let ticketPrice;

if (age1 < 18) {
  ticketPrice = 5;
} else if (age1 >= 18 && age1 <= 65) {
  ticketPrice = 10;
} else {
  ticketPrice = 5;
}
console.log("Your ticket price is " + ticketPrice + "€");
console.log(`Your ticket price is ${ticketPrice}€`);

// if(){

// }else if(){

// }else if(){

// }else if(){

// }else{

// }

// EXAMPLE-2
// 31 or more is hot
// 15 - 30 is okay
// 14 and less is cold
const temp = 25;

if (temp > 30) {
  console.log("It's hot");
} else if (temp >= 15 && temp <= 30) {
  console.log("It's nice");
} else {
  console.log("It's cold");
}

// EXAMPLE-3
const grade = 20;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Block scope
// let - const vs. var
// EXAMPLE-1
let x4 = 14;
// With LET
if (true) {
  // x2 is limited to scope
  // means that is not accessible outside the block
  let x2 = 2;
  console.log(x2); // 2
  console.log(x4); // 14
}
// console.log(x2); // ERROR => x2 is not defined
console.log(x4); // 14

// EXAMPLE-2
// With CONST
if (true) {
  // x2 is limited to scope
  // means that is not accessible outside the block
  const x2 = 2000;
  console.log(x2); // 2000
  console.log(x4); // 14
}
// console.log(x2); // ERROR => x2 is not defined

// EXAMPLE-3
// With VAR
if (true) {
  var x2 = 700;
  console.log(x2); // 700
}
console.log(x2); // 700

//  CONST is exactly the same as LET, but with VAR we can access the variable everywhere

// Different between LET or CONST and VAR => SCOPING RULES and RE-DECLARATION and HOISTING

var myName1 = "Yousif";
var myName1 = "Biggie"; // That's not good
console.log(myName1); // Biggie

// let myName2 = "Felix";
// let myName2 = "Niloofar"; // Error
