// Review functions

// 1. function declaration
function fullName(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
}

console.log(fullName("Miro", "Klose"));

// 2. function expression
const fullName2 = function (fName, lName) {
  return `Hello ${fName} ${lName}`;
};

console.log(fullName2("Oliver", "Kahn"));

// 3. arrow function
const fullName3 = (firstName, lastName) => `Hello ${firstName} ${lastName}`;
fullName3("Alexander", "Herrmann");

// -----------------------------------------------------

// NOTICE: You can give variable name for your const in UPPERCASE
function myTest() {
  const VARIABLE_NAME = 10;
}

// ----------------------------------------
// Global variable
let val = "I'm global";

// Abhängig => von unsere global variable
function myFunc() {
  val = "I am here";
}

myFunc(); // from this line our variable is I am here (There is no I'm global anymore)
console.log(val);

// Pure function: There is no side effect
// UNABHÄNGIG
function myPure(x) {
  return x / 2;
}

// --------------------------
function fullName4(fName, lName) {
  return `${fName} ${lName}`;
}

// console.log(`Hey ${fullName4("Iman", "Ghanei")}`); // Hey Iman Ghanei
let greeting = `Hey ${fullName4("Iman", "Ghanei")}`;
console.log(greeting); // Hey Iman Ghanei

// -----------------------
function test1(x, y) {
  return x + y;
}
let x1 = test1(10, 50) * 5;
console.log(x1); // 300

// ---------------------------
function test2(x, y) {
  return x + y;
}

test2(2, 3); // 5
test2(); // undefined +  undefined = NaN
test2(8, 7, 1, 5, 9); // 15

// ---------------------------
function test3(j) {
  return j + j + j;
}

test3(10); // 30
test3("JS "); // JS JS JS

// --------------------------

// Average
function test4(a, b) {
  return (a + b) / 2;
}

console.log(test4(50, 30)); // 40
console.log(test4(50, 30, 60, 3, 10)); // 40

// ----------------------------------
const age = 9;

const result =
  age >= 18
    ? () => {
        console.log("Arrow Function");
      }
    : function () {
        console.log("Function Expression");
      };

result();

// ------------------------------------------------------

// Default Value

// EXAMPLE-1
function test5(name = "Felix") {
  console.log(`Hi ${name}`);
}
test5("Henry"); // Hi Henry
test5(); // Hi Felix

// EXAMPLE-2
function test6(x, y = 4) {
  return x * y;
}

// test6(5); // 5 * undefined = NaN
test6(7); // 28 (7 x 4)

// EXAMPLE-3
function test7(m = "Hello how are you?") {
  console.log(m);
}
test7("Hi Ammar"); // Hi Ammar
test7(); // Hello how are you?

// EXAMPLE-4
function test8(x = 7, y = 13) {
  console.log(x + y);
}
test8(); // 20
test8(10, 9);
19;

test8(100); // 113
test8(20, 30, 7, 100); // 50

// EXAMPLE-5
function test9(a, b = 20) {
  console.log(a * b);
}
test9(); // undefined * 20 = NaN
test9(2); // 40
console.log(test9(10)); // 200 and we get undefined because of two console.log

// ---------------------
function test10(a = 4, b) {
  return [a, b];
}
console.log(test10()); // [4, undefined]
test10(2); // [2, undefined]
test10(10, 10);
[10, 10];
test10(5, 10, 7, 90); // [5, 10]
console.log(test10(undefined, 3)); // [4, 3]

// -------------------------------------

// Rest params:
// must be the last parameter
// the rest parameter cannot have default value
// can only have one rest parameter

// EXAMPLE-1
function test11(a, b, c, ...d) {
  console.log(d);
}
test11("Alex", "Ammar", "Andre", "Cagatay", "Chris", "Conny"); // [ 'Cagatay', 'Chris', 'Conny' ]

// EXAMPLE-2
function test12(num1, num2, ...restNumbers) {
  return restNumbers;
}

console.log(test12(10, 17, 100, 77, 634, 12, 766)); // [100, 77, 634, 12, 766]

// EXAMPLE-3
function test13(...x) {
  return x;
}

test13("hi", "bye", "where"); // ["hi", "bye", "where"]

// EXAMPLE-4
function test14(num1, num2, ...nums) {
  console.log(num1, num2, nums);
}
test14(1, 2, 3, 4, 5, 6, 7); // 1 2 [3, 4, 5, 6, 7]

// EXAMPLE-5
function test15(x, ...y) {
  console.log(x, y);
}
test15(true, "How are you", "thank you", "I am from Cologne", "a", 1); // true [ 'How are you', 'thank you', 'I am from Cologne', 'a', 1 ]

// EXAMPLE-6
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i]; // total = total + args[i]
  }
  return total;
}
console.log(sum(10, 5, 7000, 44, 7, 88, 7, 1000)); // 8161

// EXAMPLE-7
// global variable and default parameter
const globalVar = 10;

function test16(x, y, z = globalVar) {
  console.log(x + y + z);
}

test16(3, 5); // 18

// EXAMPLE-8
// How to copy a function

// original
function myFunction() {
  console.log("Atletico gewinnt immer");
}

// How to copy myFunction()?
const myFunctionCopy = myFunction;

myFunctionCopy(); // Atletico gewinnt immer
