// Objects in JS

// We have multiple variable in one namespace

// const name = {key1: value, key2: value, key3: value, .....}

// EXAMPLE-1
const student1 = {
  firstName: "Alex",
  lastName: "Müller",
  age: 19,
  isWebDev: true,
};
console.log(student1); // { firstName: 'Alex', lastName: 'Müller', age: 19, isWebDev: true }
console.log(student1.firstName); // Alex
console.log(student1.isWebDev); // true

// EXAMPLE-2
const studentInfo = {
  fName: "Felix",
  isActive: true,
  courses: ["HTMl", "CSS", "JS", "English"],
};
console.log(studentInfo);
console.log(studentInfo.isActive); // true

// Accessing properties with dot notation
console.log(studentInfo.fName); // Felix
console.log(studentInfo.isActive); // true
console.log(studentInfo.courses); // [ 'HTMl', 'CSS', 'JS', 'English' ]
console.log(studentInfo.courses[1]); // CSS
console.log(studentInfo.lastName); // undefined

// Accessing properties with bracket notation
console.log(studentInfo["fName"]); // Felix
console.log(studentInfo["courses"]); // [ 'HTMl', 'CSS', 'JS', 'English' ]
console.log(studentInfo["courses"][3]); // English

// ----------------------------------------------------

// Dot Notation vs. Bracket Notation

// EXAMPLE-1
const germany = {
  location: "Europe",
  capitalCity: "Berlin",
  "like Football": true,
};
console.log(germany);
console.log(germany.capitalCity); // Berlin
// console.log(germany.like Football); // ERROR
console.log(germany["like Football"]); // true

// EXAMPLE-2
const myObj = {
  name: "Thomas",
  city: "Hamburg",
  1: "It Works",
};

// With dot notation
// console.log(myObj.1); // Error

// With bracket notation
console.log(myObj["1"]); // It Works

// ------------------------------------------

// EXAMPLE-1
const person = {
  fname: "Ammar",
  lName: "Ronaldo",
  age: 30,
};
console.log(person); // { fname: 'Ammar', lName: 'Ronaldo', age: 30 }
console.log(person.fname); // Ammar
person.city = "Tübingen";
console.log(person); // { fname: 'Ammar', lName: 'Ronaldo', age: 30, city: 'Tübingen' }
person.isMale = true;
console.log(person);
person.age = 40;
console.log(person);

// ------------------------------------------

let car = {};
// brand
// model
// price
// color
// SUV
// HP
// country
// year
// sunRoof
// MaxSpeed
console.log(car); // {}
car.brand = "Aston Martin";
car.model = "X5000";
car.price = "200.000€";
car.color = "Midnight Blue";
car.isSUV = false;
car.HP = 500;
car.country = "England";
car["year"] = 2024;
car["sunRoof"] = true;
car["maxSpeed"] = 420;
console.log(car);

// delete
delete car.isSUV;
console.log(car);

delete car["country"];
console.log(car);

// ------------------------------------------
const carName = "BMW";

const car2 = {
  [carName]: 40000,
};
console.log(car2); // { BMW: 40000 }

// ------------------------------------------

// EXAMPLE-1
const numbers = {
  num1: 10,
  num2: 55,
  num3: 100,
};
console.log(numbers.num1 + numbers.num2 + numbers.num3); // 165

// EXAMPLE-2
const book = {
  title: "Harry potter",
  author: "J K. Rowling",
  publishedYear: 1997,
  isFiction: true,
};

console.log(book);
console.log(book.title); // Harry Potter
console.log(book.publishedYear); // 1997
console.log(book.price); // undefined

console.log(book["author"]); // J K. Rowling
console.log(book["isFiction"]); // true

book.publishedYear = 2000;
console.log(book);

// ------------------------------------------

// typeof
const sports = ["Football", "Curling", "Tennis"];
console.log(typeof sports); // object

console.log(typeof book); // object

// ------------------------------------------

// Array.isArray()
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("JavaScript")); // false
console.log(Array.isArray(undefined)); // false

const colors = ["Red", "Blue", "Orange", "Green"];
let result = Array.isArray(colors);
console.log(result); // true

let x = "CSS";
let result2 = Array.isArray(x);
console.log(result2); // false

let y = [1, 2, "bye"];
let result3 = Array.isArray(y);
console.log(result3); // true

let z = { lastName: "Müller" };
let result4 = Array.isArray(z);
console.log(result4); // false
console.log(Array.isArray(z)); // false

const myNumbers = [30, 99, 1000, 7];

if (Array.isArray(myNumbers)) {
  console.log("Yes, it is an array");
} else {
  console.log("No, it is not an array");
}
