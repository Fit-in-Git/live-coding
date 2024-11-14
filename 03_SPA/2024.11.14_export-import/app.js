// ES6
// JS modules => we have two keywords => export - import

// EXAMPLE-1
export let publicVar = "***This is public variable 🌐";

export function publicFunc() {
  console.log("####This is public Function");
}

// Or with Arrow Function
export const secondFunc = () => {
  console.log("I am arrow function");
};

// Default export vs. named export

// EXAMPLE-2: default export
// Can export a single value (object, function, variable)
// There can be just ONE default export per script
// The name of exported value in import is your choice
// there is no {} by import
const person = {
  fName: "Biggie",
  num: 8,
};

export default person;

// EXAMPLE-3: named export
// can export multiple values (objects, functions, variable)
// There can be more than one export per script
// The name of export value should be exact the same in import
// Don't forger {} by import
export const add = (x, y) => x + y;
export const minus = (x, y) => x - y;

// EXAMPLE-4: named export
function addNumbers(x, y) {
  console.log(x + y);
}

function minusNumbers(x, y) {
  console.log(x - y);
}

function divideNumbers(x, y) {
  console.log(x / y);
}

const city = {
  cityName: "Köln",
};

const myArray = [1, 2];

let myVar = 10;

export { addNumbers, city, myArray, myVar };

// EXAMPLE-5: named export
const x1 = {
  fName: "Alex",
  number: 12,
};

const x2 = {
  fName: "Conny",
  number: 30,
};

const x3 = {
  fName: "Niloofar",
  number: 50,
};

const number = 400;

export { x1, x2, x3, number };


