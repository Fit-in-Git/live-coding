console.log(2);
console.log("Heute ist kalt");
console.log("Hello world");
console.log("warm");
console.log("football");
console.log(1000);
console.log(2 + 2);

console.log("WOW 😎");

// Single comment

/* Multi line comment => Linux => Shift + ctrl + a */

// Variables:  values

// var let const keywords
// SYNTAX => let or var or const + name = value

// new way
let firstName = "Felix";
console.log(firstName); // Felix

// old way
var address = "Hamburg str";
console.log(address); // Hamburg str

console.log(firstName, address); // Felix Hamburg str
console.log(firstName); // felix
firstName = "Ammar";
console.log(firstName); //  Ammar

var age = 30;
console.log(age, firstName); // 30 Ammar

// initialization
// The equal sign (=) is assignment
let car = "BMW";

// variable declaration
let color;
console.log(color); // undefined

// variable assignment
color = "Red";
console.log(color); // Red

// variable reassignment
color = "Blue";
console.log(color); // Blue

// Data type => There is two main groups
// 1. Primitive data types
// 2. object data types

// Primitive data type

// number
let nr = 700;

// string
let str = "Hello";

console.log(nr); // 700

console.log(str); // Hello

// boolean => true and false
let bool = true;
console.log(bool);

// undefined
let undef;
// let undef = undefined;
console.log(undef); // undefined

// null
let empty = null;
console.log(empty);

// bigInt bigNr = 12334655456767887n;
// Why null is object

// --

// object data type or reference data type

// 1. object
let person = {
  firstName: "Ramazan",
  city: "Berlin",
  age: 33,
};

console.log(person.city);

// 2. Array
let names = ["Alex", "Yousif", "Sandor", "Conny"];

console.log(typeof person); // object
console.log(typeof names); // object

// Difference between let const var
// We don't use var anymore
// There is modern way to have variables like let and const
let country = "Germany";
country = "Spain";
console.log(country); // Spain

const laptop = "Sony";
// laptop = "Lenovo"; // Error
// const myCity; // undefined doesn't work with const

// There is no error when we use var and that's very risky for our project
// If we use let except var, we have errors which is very good
// var sport = "football";
// var sport = "Tennis";
// console.log(sport);
// console.log(sport);
