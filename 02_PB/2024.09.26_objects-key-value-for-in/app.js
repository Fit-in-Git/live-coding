const person = {
  fName: "Biggie",
  age: 34,
  city: "Madrid",
};

// Object.values() => returns []
const result = Object.values(person);
console.log(result); // [ 'Biggie', 34, 'Madrid' ]
console.log(Object.values(person)[0]); // Biggie

// With bracket notation
const result1 = Object["values"](person);
console.log(result1); // [ 'Biggie', 34, 'Madrid' ]

// Object.keys() => returns []
const result2 = Object.keys(person);
console.log(result2); // [ 'fName', 'age', 'city' ]
console.log(Object.keys(person)[2]); // city

// Object.entries() => returns []
const result3 = Object.entries(person);
console.log(result3); // [ [ 'fName', 'Biggie' ], [ 'age', 34 ], [ 'city', 'Madrid' ] ]

// Object.assign()
const person1 = {
  firstName: "Joko",
  city: "Berlin",
};

const details = {
  height: 1.87,
  hairColor: "Brown",
};

const hobbies = {
  isFootballFan: true,
};

const together = Object.assign(person1, details, hobbies);
console.log(together); // { firstName: 'Joko', city: 'Berlin', height: 1.87, hairColor: 'Brown', isFootballFan: true }

// from this line, you cannot change your together object
Object.freeze(together);
together.firstName = "Anja";
console.log(together.firstName); // Joko

// for in (objects)
let car = {
  model: "Golf",
  make: "VW",
  year: 2016,
  color: "Blue",
};

for (let prop in car) {
  console.log(car[prop]);
}

const numbers = {
  a: 15,
  b: 5,
  c: 100,
};

for (let number in numbers) {
  console.log(`${number}: ${numbers[number]}`);
}

let colors = ["Blue", "Yellow", "Orange"];
// try to use for in and you see => 0 1 2 (unexpected result)
for (const color of colors) {
  console.log(color);
}

// ---------------------

// make --> Toyota
// model --> Yaris
// year --> 2019

const carInfo = {
  make: "Toyota",
  model: "Yaris",
  year: 2019,
};

for (let info in carInfo) {
  console.log(`${info} --> ${carInfo[info]}`);
}

// ------------
const nums = [10, 6, 40];
for (let number of nums) {
  // number += 1
  number++;
  console.log(number);
}

const name1 = "Yousif";
for (let nameChar of name1) {
  console.log(nameChar);
}

let sports = {
  football: 90,
  basketball: 48,
  iceHockey: 60,
};

const getKeys = Object.keys(sports);
console.log(getKeys); // [ 'football', 'basketball', 'iceHockey' ]

const getBoth = Object.entries(sports);
console.log(getBoth); // [ [ 'football', 90 ], [ 'basketball', 48 ], [ 'iceHockey', 60 ] ]

for (const [sport, min] of getBoth) {
  console.log(`${sport} is ${min} minutes`);
}
// football is 90 minutes
// basketball is 48 minutes
// iceHockey is 60 minutes
