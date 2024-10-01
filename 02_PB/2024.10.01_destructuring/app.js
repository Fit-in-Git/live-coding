// Destructuring for array

// EXAMPLE-1
const array = ["HTML", "CSS", "JavaScript"];

// Without destructuring
// const first = array[0]; // HTML
// const second = array[1]; // CSS
// const third = array[2]; // JavaScript

// With destructuring
const [first, second, third] = array;
console.log(first); // HTML
console.log(second); // CSS
console.log(third); // JavaScript

console.log(array); // [ 'HTML', 'CSS', 'JavaScript' ]

// EXAMPLE-2
const numbers = [10, 7, 88, 17, 1400];
const [num1, num2, num3] = numbers;
console.log(num2); // 7
console.log(num3); // 88
console.log(num1); // 10

const [a, b, c, d, e, f] = numbers;
console.log(e); // 1400
console.log(f); // undefined

const [x, y] = numbers;
console.log(x, y); // 10 7

// EXAMPLE-3
const [nr1, , nr2] = [100, 1000, 5, 90];
console.log(nr1); // 100
console.log(nr2); // 5

// EXAMPLE-4: rest parameters
const [no1, no2, no3, ...rest] = [6, 8, 900, 800, 3, 24, 88, 77, 5000];
console.log(no1); // 6
console.log(rest); // [800, 3, 24, 88, 77, 5000];

// EXAMPLE-5: Destructuring with nested array
const nestedArray = [10, [3, 700], 4, 15];
const value = nestedArray[1][1]; // without destructuring
const [numb1, [numb2, numb3], numb4, numb5] = nestedArray; // with destructuring
console.log(numb3); // 700
console.log(numb4); // 4️
console.log(numb2); // 3

// EXAMPLE-6
const nestedArray2 = [1000, [2222, "Hey", 700], 66, 23];
const [one, [, , two], three, four] = nestedArray2;
console.log(three); // 66
console.log(two); // 700

// --------------------------------

// Object Destructuring
// EXAMPLE-1
const person1 = {
  city: "Cologne",
  age: 35,
};

// without destructuring
// const city = person1.city;
// console.log(city); // Cologne

// with destructuring
const { city, age } = person1;
console.log(city); // Cologne
console.log(age); // 35

// EXAMPLE-2
const person2 = {
  city1: "Berlin",
  age1: 17,
  hobby: "Gaming",
};

const { city1: stadt, age1: alter } = person2;
console.log(stadt); // Berlin
console.log(alter); // 17

// EXAMPLE-3: Destructuring with nested object
const person3 = {
  fName: "Ramazan",
  address: {
    street: "Egal wo",
    country: "Germany",
  },
};

const {
  fName,
  address: { street, country },
} = person3;

console.log(fName); // Ramazan
console.log(street); // Egal wo
console.log(country); // Germany

// Parameters: Object destructuring
const person4 = {
  hairColor: "Brown",
  height: 1.8,
  weight: 80,
};

// With destructuring
function myFunc({ hairColor, height, weight }) {
  console.log(`YOUR HAIR COLOR: ${hairColor}`);
  console.log(`YOUR HEIGHT: ${height}`);
  console.log(`YOUR WEIGHT: ${weight}`);
}
myFunc(person4);

// Without destructuring - 1
function myFunc2(person) {
  console.log(`YOUR HAIR COLOR: ${person.hairColor}`);
  console.log(`YOUR HEIGHT: ${person.height}`);
  console.log(`YOUR WEIGHT: ${person.weight}`);
}

myFunc(person4);

// Without destructuring - 2
function myFunc3(color, myHeight, myWeight) {
  console.log(`YOUR HAIR COLOR: ${color}`);
  console.log(`YOUR HEIGHT: ${myHeight}`);
  console.log(`YOUR WEIGHT: ${myWeight}`);
}

myFunc3(person4.hairColor, person4.height, person4.weight);

