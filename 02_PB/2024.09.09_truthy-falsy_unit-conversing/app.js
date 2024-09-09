// truthy and falsy values

// falsy => false - 0 - -0 - 0n - "" - null - NaN - undefined
// truthy => 12 - "Hi" - "0" - true

let x = "Hello";
if (x) {
  console.log("Hello Iman");
} else {
  console.log("bye Iman");
}

const firstName = "Conny";
if (firstName) {
  console.log(`Welcome ${firstName}`);
} else {
  console.log("Please enter your name!");
}

// with ternary
let fName = firstName ? `Welcome ${firstName}` : "Please enter your name!";
console.log(fName);

// --------------

let userLoggedIn = false;
console.log(`User is ${userLoggedIn ? "logged in" : "Not"}  `);

// fallback

let firstName1 = "Ammar";

let fall = `Welcome ${firstName1 || (firstName1 = "Guest")}`;
console.log(fall);

let x1;
let x2 = 5;
let x3 = false;
let x4 = 100;
// undefined || 5 || false || 100 => returns 5 because 5 is the first truthy value
console.log(`${x1 || x2 || x3 || x4}`); // 5

// true && false
console.log(20 > 4 && 10 < 4); // false

// Converting string to number
// There is Three ways

// EXAMPLE-1: Number()
let y = "50";
console.log(typeof y); // string
console.log(y + 2); // "502"
y = Number(y);
console.log(y + 2); // 52
console.log(typeof y); // number

// EXAMPLE-2: parseInt()
let age = "30";
let myNewAge = parseInt(age);
console.log(age); // "30"
console.log(typeof age); // string
console.log(myNewAge); // 30
console.log(typeof myNewAge); // number

// 2.1
let age1 = "40";
age1 = parseInt(age1);
console.log(age1); // 40

// DIFFERENCE
console.log(Number("10")); // 10
console.log(parseInt("10")); // 10

console.log(Number("10z58")); // NaN
console.log(parseInt("10z58")); // 10
console.log(parseInt("a123")); // NaN

console.log(Number("")); // 0
console.log(parseInt("")); // NaN

console.log(parseInt("000444")); // 444
console.log(Number("000444")); // 444

console.log(Number(true)); // 1
console.log(parseInt(true)); // NaN

console.log(Number("17.435678")); // 17.435678
console.log(parseInt("17.435678")); // 17

// parseInt() vs. parseFloat()
console.log(parseFloat("11.7867")); // 11.7867
console.log(parseFloat("22.5")); // 22.5
console.log(parseFloat("0707")); // 707
console.log(parseFloat("123.4df")); // 123.4
console.log(parseFloat("12a3.4")); // 12
console.log(parseFloat("40 55 77 190")); // 40
console.log(parseInt("22.6")); // 22
console.log(parseFloat("22.6")); // 22.6

// EXAMPLE-3: unary + (string to number)
const myNum = "100";
console.log(myNum); // "100"
const newNum = +myNum;
console.log(newNum); // 100
console.log(typeof newNum); // number
console.log(typeof myNum); // string

// number to string
let num1 = 72;
const num2 = num1 + "";
console.log(num2); // "72"

const num3 = `${num1}`;
console.log(num3); // "72"

// EXAMPLE-1
const number1 = 180;
const numToStr = number1.toString();
console.log(numToStr); // "180"
console.log(typeof numToStr); // string

// EXAMPLE-2
let number2 = -1400;
let number3 = String(number2); // "-1400"

console.log(number2.toString()); // "-1400"

// --------------------
// isNaN => returns boolean (true or false)

console.log(isNaN("pink")); // true
console.log(isNaN(100)); // false
console.log(isNaN("pink 100")); // true
console.log(isNaN("65")); // false
console.log(isNaN("15a5")); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(true)); // false
console.log(NaN == NaN); // false (NaN is not equal to anything)
console.log(NaN === NaN); // false

console.log(typeof NaN); // number

// 10 / 0 = Error
console.log(10 / 0); // Infinity 
console.log(-17 / 0); // -Infinity 

console.log(isFinite(10 / 0)); // false
console.log(isFinite(12)); // true
console.log(Infinity > 10000000); // true
console.log(Infinity === Infinity); // true

let result = 10 / 0;
if(result === Infinity){
    console.log("Division durch Null erkannt!"); // Division by zero detected!
}
