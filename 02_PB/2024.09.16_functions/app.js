// Functions

// Function => a group of statements, variables, loops and so on
// syntax => function name(){}

// 1. function declaration

// EXAMPLE-1
function sayHi() {
  console.log("Hi😎");
}

// call oder invoke (aufrufen)
sayHi();

// EXAMPLE-2
function sayHello() {
  let n = "Thomas Müller";
  console.log(`Hello ${n}`);
}

// call or invoke
sayHello();

// EXAMPLE-3
// with one parameter
// parameter names are your choice
function number(num) {
  if (num % 2 === 0) {
    console.log(`${num} ist gerade`);
  } else {
    console.log(`${num} ist ungerade`);
  }
}
number(7);
number(100);
number("91");

// EXAMPLE-4
function x(num) {
  console.log(num * num);
}

x(6); // 36
x("hi"); // NaN

// EXAMPLE-5
function add(x, y) {
  console.log(x + y);
}
add(7, 4);

// EXAMPLE-6
function multi(x, y) {
  return x * y;
}
console.log(multi(4, 5)); // 20
console.log(multi(3, 9)); // 27
console.log(multi(10, 10)); // 100

// EXAMPLE-7
function color(color1, color2) {
  console.log(`${color2} is better than ${color1}`);
  console.log(color2, "is better than", color1);
}
color("red", "orange");

// FUNCTIONS REVIEW

// 1.
function myName() {
  console.log("Alex Bialas");
}

// call
myName();

// 2.
function myName2() {
  let firstName = "Andre";
  let country = "Germany";
  console.log(`Hi I'm ${firstName} and I'm from ${country}`);
}

myName2();

// -----------------------

// 3.
let val = 2000;

function test() {
  console.log(val); // 2000
  val = 10;
  console.log(val); // 10
}
// test();
console.log(val);

// ------------------

// 4.
function myFunc(number) {
  console.log(number * number);
}

myFunc(10); // 100
myFunc(2); // 4
myFunc("A"); // NaN

// 5.
function add2(a, b) {
  return a + b;
}

console.log(add2(2, 12));

// 6.
function addition(x, y) {
  let sum = x + y;
  return sum;
}
console.log(addition(19, 6)); // 25
console.log(addition(20, 10)); // 30

// 7.
function multi2(x, y) {
  return x * y;
}

function calculate(x, y) {
  let sum1 = add2(x, y); // 8
  let sum2 = multi2(x, y); // 12
  return sum1 + sum2;
}
console.log(calculate(2, 6)); // 20

// 8.
function numberr(number1) {
  return number1 + 50;
}
console.log(numberr(20)); // 70

// 9.
const val1 = 5;
const val2 = 2;
const val3 = "hello";

function cal(x, y, z) {
  if (z == "hello") console.log(x - y);
  else console.log(x + y);
}

cal(val1, val2, val3);

// 2. Function expression

// EXAMPLE-1
let football = function () {
  console.log("I love football");
};
// call
football(); // I love football

// EXAMPLE-2
const playWithNumbers = function (x, y) {
  for (let i = 1; i <= y; i++) {
    let result = Math.pow(x, i);
    console.log(`${x} ^ ${i} = ${result}`);
  }
};
// Math.abs (self study)
playWithNumbers(4, 8); // 4 x 4 x 4 x 4 x 4 x 4 x 4 x 4
playWithNumbers(3, 2); // 3 x 3

// -----------------------------------------

// declaration

xy(); // hello
function xy() {
  console.log("hello");
}

// With expression we'll have an Error

// ab(); // Error
let ab = function () {
  console.log("how are you?");
};

// ------------
// parameter scope
function paramFunc(g) {
  console.log(`Hello ${g}`);
}
paramFunc("Felix"); // Hello Felix
paramFunc("Yousif"); // Hello Yousif

// console.log(g); // ERROR

function names(name1, name2) {
  console.log(`${name1} with ${name2}`);
}

names("Niloofar", "Conny"); // Niloofar with Conny
names("Ammar"); // Ammar with undefined

// -----
// local variable

// 1.
function variableScope() {
  let laptop = "Lenovo";
  console.log(laptop);
}
variableScope(); // Lenovo
// console.log(laptop); // Error

// 2.
function test2() {
  if (true) {
    // block scope
    let x1 = "X";
    console.log(x1);
  }
  // console.log(x1); // Error
}
test2();

// 3.
function test3() {
  if (true) {
    // console.log(x2); // error
    let x2 = "CSS";
    console.log(x2);
  }
}
test3();
