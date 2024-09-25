"use strict";
// Object review

const smartphone = {
  brand: "Apple",
  price: 1200,
  color: "Red",
};
console.log(smartphone); // { brand: 'Apple', price: 1200, color: 'Red' }
console.log(
  `Brand: ${smartphone.brand}, Price: ${smartphone.price}, Color: ${smartphone.color}`
); // Brand: Apple, Price: 1200, Color: Red

// Assign new property
smartphone.warranty = true;
console.log(smartphone); // { brand: 'Apple', price: 1200, color: 'Red', warranty: true }

smartphone.color = "Blue";
console.log(smartphone);

// Delete warranty
delete smartphone.warranty;
console.log(smartphone);

smartphone["price"] = 900;
console.log(smartphone);

// -----------------------------------------------
// 1.
// this keyword: global object => (window object in browser)
// The window object contains properties and methods that control the browser window. (document, location, history and so on).
console.log(this);

// 2.
function example() {
  console.log(this);
}
example();

// 3. if a function is a method of an object, "this" refers to the object
const laptop = {
  brand: "Dell",
  color: "Silver",
  price: 1400,
  size: 15,
  displayData: function () {
    console.log(
      `Brand: ${this.brand}, Color: ${this.color}, Price: ${this.price}`
    );
  },
};

console.log(laptop.brand); // Dell
laptop.displayData(); // Brand: Dell, Color: Silver, Price: 1400

// Methods

// Built-In Methods
let movie = "Star Wars";
let result = movie.toUpperCase();
console.log(result);

// --------------------------------------
// EXAMPLE-1
const person = {
  firstName: "Yousif",
  lastName: "Maradonna",
  age: 90,
  fullName: function () {
    return `${this.firstName} ${this.lastName} is ${this.age}`;
  },
};
console.log(person.fullName()); // Yousif Maradonna is 90
console.log(person);

// EXAMPLE-2
const person2 = {
  firstName: "Ammar",
  lastName: "Messi",
  age: 80,
  fullName: () => `${person2.firstName} ${person2.lastName} is ${person2.age}`,
};
console.log(person2.fullName()); // Ammar Messi is 80

// EXAMPLE-3
const personData = {
  fName: "Iman ",
  lName: "Ghanei",
  city: "Cologne",
};
// IMAN GHANEI
personData.fullName = function () {
  return (this.fName + this.lName).toUpperCase();
};
console.log(personData.fullName()); // IMAN GHANEI

// with arrow
personData.fullName2 = () => {
  return (personData.fName + personData.lName).toUpperCase();
};
console.log(personData.fullName2()); // IMAN GHANEI

// EXAMPLE-4
const car = {
  marke: "Mercedes",
  farbe: "Black",
};

// Add a method to the object
// Mercedes is Black
car.func = function () {
  return `${this.marke} is ${this.farbe}`;
};

console.log(car.func()); // Mercedes is Black

// EXAMPLE-5
const norway = {
  city: "Oslo",
  food: "smoked salmon",
};

// Oslo is very nice city and the love smoked salmon
norway.description = function () {
  return `${this.city} is very nice city and they love ${this.food}`;
};

console.log(norway.description()); // Oslo is very nice city and they love smoked salmon

// EXAMPLE-6
const x = {
  name: "Messi",
  age: 37,
};

const y = {
  name: "Messi",
  age: 37,
};

console.log(x === y); // false => They are not in the same memory location
console.log(x.age === y.age); // true

const num1 = 50;
const num2 = 50;

console.log(num1 === num2); // true => Primitive in JS  compared with values

// -----------------------------

let playStation2 = {
  xy: function () {
    console.log("PlayStation2");
  },
};

// Methods with shorthand
let playStation5 = {
  xy() {
    console.log("PlayStation5");
  },
};
playStation2.xy(); // PlayStation2
playStation5.xy(); // PlayStation5

// -----------------------------

let myGirl = {
  herName: "Nelly",
  age: 20,
  city: "Düsseldorf",
  ab(x) {
    console.log(x + this.herName);
  },
};
myGirl.ab("Hello ");

// -----------------------------

let myName1 = { fName: "Sandor" };
let myName2 = { fName: "Biggie" };

function z() {
  console.log(this.fName + " is here");
}

myName1.greeting = z;
myName1.greeting(); // Sandor is here

myName2.greeting2 = z;
myName2.greeting2(); // Biggie is here

myName2["greeting2"](); // Biggie is here
