// Destructuring

const myArray = [7, 4, 116];

// extract the value from array
// without destructuring
const withoutDestructuring = myArray[1]; // 4️
console.log(withoutDestructuring);

const [a, b, c] = myArray;
console.log(c); // 116

// ---------------------------------

// skipping values
const [num1, , num2] = myArray;
console.log(num1); // 7
console.log(num2); // 116

// ---------------------------------
const array1 = ["Hello", 3, false];

// Without destructuring
const example1 = array1[2];
console.log(example1); // false

// With destructuring
const [x, y, z] = array1;
console.log(z); // false

// ---------------------------------

let numbers = [100, 790, 5, 66, 98, 1000, 450];
let [nr1, nr2, ...rest] = numbers;
console.log(nr1); // 100
console.log(nr2); // 790
console.log(rest); // [ 5, 66, 98, 1000, 450 ]

// ---------------------------------

const myObject = {
  property1: 128,
  property2: "Hi",
  property3: true,
};

console.log(myObject.property3); // true
console.log(myObject["property1"]); // 128

// with destructuring
const { property1, property2, property3 } = myObject;
console.log(property2); // Hi

// ---------------------------------

const nums = [22, 11, 77, 99, 55];
// 22 11 99
const [first, second, , third] = nums;
console.log(third); // 99

// ---------------------------------

const person = {
  fullName: "Chris Klemtz",
  city: "Stralsund",
  number: 100,
  country: "Germany",
};

const { fullName, number, country } = person;
console.log(number); // 100

// ---------------------------------

const [, word1, word2] = ["Hello", "Here", "There"];
console.log(word1, word2); // Here There

// ---------------------------------

const person2 = {
  fullName: "Conny Bolhaar",
  city: "Nürnberg",
  number: 100,
};

function details({ fullName, city, number }) {
  console.log(`Hello ${fullName}`);
  console.log(`You livin in ${city}`);
  console.log(`Your number is ${number}`);
}
details(person2);

// ---------------------------------

console.log("-----------Functions-----------");

// function declaration
conny();
function conny() {
  console.log("Hello Conny");
}

// function declaration with param
function felix(name) {
  console.log("Hello " + name);
}
felix("Felix");

// Function expression

const felix2 = function (num1, num2) {
  return num1 + num2;
};

console.log(felix2(70, 30)); // 100

// Arrow function
const biggie = (number1) => number1 * 2;

// call
const result = biggie(20);
console.log(result); // 40

// ---------------------------------
//
function powerOf(number1, number2 = 2) {
  return Math.pow(number1, number2);
}
console.log(powerOf(3, 4)); // 3 x 3 x 3 x 3
console.log(powerOf(4)); // 2 x 2

// ---------------------------------
let x1 = 90;
let x2 = 77;
let x3 = "Ramazan";
let x4 = "100";
let result1 = x1 + x2;
console.log(result1);
console.log(typeof result1);

let result2 = x1 + x3;
console.log(result2); // 90Ramazan

let result3 = x4 + x2;
console.log(result3); // 10077

let result4 = x3 / x1; // Ramazan / 90 = NaN
console.log(result4);

let x5 = 5;
const x6 = "3";

// 5 x 5 x 5
console.log(x5 ** x6); // 125

console.log(21 % 3); // 0
console.log(10 % 2); // 0
console.log(11 % 2); // 1

console.log(18 === 18); // true
console.log(18 == 18); // true
console.log(18 == "18"); // true
console.log(18 === "18"); // false

console.log(100 != 100); // false
console.log(100 !== "100"); // true
console.log(100 != 90); // true

console.log(180 <= 181); // true
console.log(180 <= "181"); // true
console.log(200 >= 200); // true

// 19 - 21
const randomNumber = Math.floor(Math.random() * (21 - 19 + 1) + 19);
console.log(randomNumber);

//  -5 -50
const randomNumber1 = Math.floor(Math.random() * (-5 + 50 + 1) - 50);

console.log(randomNumber1);

//
let y1 = 14.44e5; // 14.44 * 10^5 = 1444000

let y2 = 18.2;
y2 = Math.ceil(y2); // 19

let y3 = 70.4;
y3 = Math.floor(y3); // 70

let y4 = 95.5;
y4 = Math.round(y4); // 96

// ----------------------------------------

// Callback: is a function passed into another function as argument
// Higher order function
// EXAMPLE-1
// main function
function mainFunc(callback) {
  callback("Paddle"); // => secondFunc(name)
}

function secondFunc(name) {
  console.log(`I like ${name}`);
}
mainFunc(secondFunc); // I like Paddle

// --------------------------

// EXAMPLE-2
// main function
function buyLaptop(callback) {
  console.log("I want to buy a Laptop");
  callback("HP"); // => myLaptop(laptop)
}

function myLaptop(laptop) {
  console.log("Ich bin unterwegs");
  if (laptop == "HP") {
    console.log("Yes");
  }
}
// Call
buyLaptop(myLaptop);

// 