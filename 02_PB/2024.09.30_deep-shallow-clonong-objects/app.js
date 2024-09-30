// Primitive

// Copy or Clone
// EXAMPLE-1
let originalVariable = "Hello";
let fakeVariable = originalVariable; // Cloning
console.log(originalVariable, fakeVariable); // Hello Hello

originalVariable = "Bye";

console.log(originalVariable, fakeVariable); // Bye Hello

// EXAMPLE-2
let originalBoolean = true;
let fakeBoolean = originalBoolean;
console.log(originalBoolean, fakeBoolean); // true true
fakeBoolean = false;
console.log(originalBoolean, fakeBoolean); // true false

// PRIMITIVE HAVE DIFFERENCE ADDRESSES

// But in objects like => array and object, we have just one address
// EXAMPLE-1
let originalArray = [1, 2, 3];
let fakeArray = originalArray;

originalArray.push(4000);
console.log(originalArray); // [ 1, 2, 3, 4000 ]
console.log(fakeArray); // [ 1, 2, 3, 4000 ]

// EXAMPLE-2
let originalObject = {
  name: "Biggie",
  age: 34,
};
let fakeObject = originalObject;
originalObject.age = 35;
console.log(originalObject); // 35
console.log(fakeObject); // 35

// What to do? (with spread operator)
// EXAMPLE-1
let car = { model: "VW", age: 10 };
let carCopy = { ...car }; // Cloning
console.log(carCopy);
car.age = 14;
console.log(car);
console.log(carCopy);

// EXAMPLE-2
const numbers = [20, 35, 50];
const fakeNumbers = [...numbers];
console.log(fakeNumbers);
fakeNumbers[2] = 99;
console.log(fakeNumbers); // [ 20, 35, 99 ]
console.log(numbers); // [ 20, 35, 50 ]


