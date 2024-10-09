// Classes in JS

// EXAMPLE-1
class Class1 {
  constructor(parameter1, parameter2) {
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
  }
  method1() {
    console.log("Method 1 😏");
    console.log("Parameter1:", this.parameter1);
  }
  method2() {
    console.log("Method 2 😔");
    console.log("Parameter2:", this.parameter2);
  }
}

// create an instance
let myInstance = new Class1("Hey", "Are you there?");
console.log(myInstance.parameter1); // Hey
console.log(myInstance.parameter2); // Are you there?

// calling methods
myInstance.method1();
myInstance.method2();

// create an instance
let colors = new Class1("Red", "Blue");

console.log(`My car is ${colors.parameter2}`); // My car is Blue

// EXAMPLE-2
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.y = lastName;
  }
}

// Create instance
let userName = new Person("Ash", "Gh");
console.log(`Hallo ${userName.firstName}`); // Hallo Ash
console.log(`Hallo ${userName.y}`); // Hallo Gh
console.log(userName); // Person { firstName: 'Ash', y: 'Gh' }

delete userName.firstName;
console.log(`Hey ${userName.firstName}`); // Hey undefined

console.log(userName); // Person {  y: 'Gh' }

userName.city = "Köln";
console.log(userName.city); // Köln

console.log(userName); // Person {  y: 'Gh', city: "Köln" }

// EXAMPLE-3
class Student {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const student1 = new Student("Yousif", "Paulus");
const student2 = new Student("Sandor", "Opiok");
const student3 = new Student("Ramazan", "Yildirim");

console.log(student2.firstName); // Sandor
console.log(student3.lastName); // Yildirim
console.log(student1.firstName); // Yousif

console.log(student2.fullName()); // Sandor Opiok

// -------------------------------------

// OOP => Object Oriented Programming

// 1. Encapsulation
// private
// EXAMPLE-1
class Cellphone {
  #apple;
  #samsung;
  constructor(apple, samsung) {
    this.#apple = apple;
    this.#samsung = samsung;
  }
}
let a = new Cellphone("iphone15", "SGalaxy20");
console.log(a.apple); // undefined
console.log(a.samsung); // undefined

// EXAMPLE-2
// Getter Setter
class Color {
  #firstColor;
  #secondColor;
  constructor(firstColor, secondColor) {
    this.#firstColor = firstColor;
    this.#secondColor = secondColor;
  }

  // getter
  // the getter is used to get property
  // without parameter
  // return the property
  get firstColor() {
    return this.#firstColor;
  }

  get secondColor() {
    return this.#secondColor;
  }

  // setter => is used to set (change) the property
  // set take parameter
  // set returns nothing

  //   set firstColor(newColor) {
  //     this.#firstColor = newColor;
  //   }
}
let newColor = new Color("Orange", "Green");
console.log(newColor.firstColor); // Orange
newColor.firstColor = "red";
console.log(newColor.firstColor); // Orange

// --------------------------------
// Prototype methods
// EXAMPLE-1
class Class2 {
  constructor() {}

  myMethod() {
    console.log("I am the first method");
  }
}

// Adding a method
Class2.prototype.newMethod = function () {
  console.log("I am the second method");
};

// Instance
const x1 = new Class2();
x1.myMethod(); // I am the first method
x1.newMethod(); // I am the second method

// EXAMPLE-2
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  havingCar() {
    console.log("Andre has VW");
  }
  compliment(name, carName) {
    return `This is a beautiful ${carName}, ${name} `;
  }
}
const p = new Car("Golf", "White");
// The model of the VW is Golf and the color is White
console.log(`The model of the VW is ${p.model} and the color is ${p.color}`);

// This is a beautiful VW, Andre
let message = p.compliment("Andre", "VW");
console.log(message); // This is a beautiful VW, Andre

// --------------------------------------
class Sony {
  constructor(brand) {
    this.brand = brand;
  }
  feature() {
    console.log(`${this.brand} has 16 RAM`);
  }
}
let q = new Sony("Sony");
q.feature(); // Sony has 16 RAM

// -------------------------------
// REVIEW

// 1. Object
const book = {
  bookName: "JS",
  published: 2000,
  bookInfo: function () {
    return `Book: ${this.bookName} and ${this.published}`;
  },
};
console.log(book);
console.log(book.bookName); // JS
console.log(book.bookInfo()); // Book: JS and 2000

// 2. Class
class Book2 {
  constructor(bookName, published) {
    this.bookName = bookName;
    this.published = published;
  }
  bookInfo() {
    return `Book: ${this.bookName} and ${this.published}`;
  }
}

const bookDetails = new Book2("CSS", 1990);
const bookDetails2 = new Book2("React", 2020);

console.log(bookDetails); // Book2 { bookName: 'CSS', published: 1990 }
console.log(bookDetails2); // Book2 { bookName: 'React', published: 2020 }

console.log(bookDetails.bookInfo()); // Book: CSS and 1990
console.log(bookDetails2.bookInfo()); // Book: React and 2020

// ------------------------------------------------

// DATE CLASS
const currentDate = new Date();
console.log(currentDate); // 2024-10-09T09:52:42.907Z

const year = currentDate.getFullYear();
console.log(year); // 2024

const month = currentDate.getMonth();
console.log(month + 1); // 10

const day = currentDate.getDay();
console.log(day);

const hours = currentDate.getHours();
console.log(hours); // 11

const currentDate1 = new Date();

// German format (DE)
const germanFormat = currentDate1.toLocaleDateString("de-DE");
console.log("German Format (DE):", germanFormat); // 9.10.2024

// Great Britain format (en-GB)
const britishFormat = currentDate1.toLocaleDateString("en-GB");
console.log("Great Britain Format (en-GB):", britishFormat); // 09/10/2024

// French format (FR)
const frenchFormat = currentDate1.toLocaleDateString("fr-FR");
console.log("French Format (FR):", frenchFormat); // 09/10/2024
