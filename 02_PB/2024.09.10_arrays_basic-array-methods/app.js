// Array:  list of values, that values can be all data types
const arr0 = ["green", "blue", "yellow"];
console.log(arr0);

// All data types
let arr1 = ["Hi there", 7, true];
console.log(arr1);
console.log(typeof arr1[2]); // boolean

// array with const
const arr2 = ["Hi there!!!"];
arr2[0] = "How are you";
console.log(arr2); // It works
// arr2 = ["How are you"]; // ERROR

// why array?
let col1 = "red";
let col2 = "blue";
let col3 = "orange";

const colors = ["red", "blue", "orange"];

// -----------------------------------

const arr3 = ["x", "y", "z", "a"];
console.log(arr3[2]); // z
console.log(arr3[0]); // x
console.log(arr3[7]); // undefined
console.log(arr3[-2]); // undefined

arr3[0] = "Tesla";

console.log(arr3); // [ 'Tesla', 'y', 'z', 'a' ]

arr3[4] = "BMW";

console.log(arr3); // [ 'Tesla', 'y', 'z', 'a', 'BMW' ]

// Array length
const sports = ["Tennis", "Golf", "Dart"];
console.log(sports.length); // 3
console.log(sports[sports.length - 1]); // Dart

const laptops = [];
console.log(laptops.length); // 0

// --------------------------------

// push(): Adding elements (last)
// EXAMPLE-1
const cars = ["VW", "Mercedes", "Audi"];
cars.push("BMW");
console.log(cars); // [ 'VW', 'Mercedes', 'Audi', 'BMW' ]

cars.push("Ferrari");

console.log(cars); // [ 'VW', 'Mercedes', 'Audi', 'BMW', 'Ferrari' ]

// EXAMPLE-2
let arr4 = ["A", "R", "Z", "B"];
console.log(arr4.push("GHJ")); // 5 (length)
console.log(arr4); // [ 'A', 'R', 'Z', 'B', 'GHJ' ]

// unshift(): Adding elements (first)
// EXAMPLE-1
let names = ["Alex", "Cagatay", "Chris", "Conny"];
names.unshift("Felix");
console.log(names); // [ 'Felix', 'Alex', 'Cagatay', 'Chris', 'Conny' ]

console.log(names.unshift()); // 5 (length)

// pop(): removing last element
// EXAMPLE-1
let names1 = ["Biggie", "Niloofar", "Ramazan", "Sandor", "Yousif", "Ammar"];
// console.log(names1.pop()); // Ammar
names1.pop();
console.log(names1); // [ 'Biggie', 'Niloofar', 'Ramazan', 'Sandor', 'Yousif' ]

// shift(): removing first element
let teams = ["BVB", "Barca", "Atletico", "Besiktas"];
// console.log(teams.shift()); // BVB
teams.shift();
console.log(teams); // ["Barca", "Atletico", "Besiktas"];

// slice()
// slice(start, end)
// EXAMPLE-1
const originalArray1 = [7, 19, 100, 25, 70];
const array1 = originalArray1.slice(1, 4);
console.log(array1); // [ 19, 100, 25 ]
console.log(originalArray1); // [ 7, 19, 100, 25, 70 ]

// EXAMPLE-2
const originalString1 = "Hello, world";
const string1 = originalString1.slice(7);
console.log(string1); // world

// EXAMPLE-3
const originalArray2 = [2, 6, 1, 17, 99, 1000];
const array2 = originalArray2.slice(2);
console.log(array2); // [ 1, 17, 99, 1000 ]

// EXAMPLE-4
const originalArray3 = ["Felix", "Biggie", "Alex", "Sandor", "Yousif"];
const newNames = originalArray3.slice(-3, -1);
console.log(newNames); // [ 'Alex', 'Sandor' ]

// includes() => true or false
// Case sensitive
// EXAMPLE-1
const countries = ["Germany", "Japan", "USA", "Finland"];
const x = countries.includes("Japan"); // true
const y = countries.includes("Norway"); // false
console.log(x);

// EXAMPLE-2
const cities = ["Berlin", "Las Vegas", "Cologne", "Istanbul", "Tehran"];
// Berlin Las Vegas Istanbul
const x1 =
  cities.includes("Berlin") &&
  cities.includes("Las Vegas") &&
  cities.includes("Istanbul");

console.log(x1); // true

// reverse()
// EXAMPLE-1
let array3 = [8, 76, 10, 17];
array3.reverse();
console.log(array3); // [ 17, 10, 76, 8 ]

// indexOf
// EXAMPLE-1
const array4 = [10, 16, 50, 8000, 100];
let myIndex = array4.indexOf(8000); // 3
let myIndex1 = array4.indexOf(14); // -1
console.log(myIndex);

// lastIndexOf
// EXAMPLE-1
let array5 = ["A", "J", "S", "A", "X"];

let findIndex = array5.lastIndexOf("A");
console.log(findIndex); // 3

// splice(start, deleteCount, el1, el2)
// NOTICE => you delete elements that comes after start position.
// EXAMPLE-1
let array6 = ["1", "2", "3", "4"];
// ["1", "2", 100, 4000]
array6.splice(2, 2, 100, 4000);
console.log(array6); // [ '1', '2', 100, 4000 ]

// EXAMPLE-2
let array7 = ["s", "d", "e"];
// ["l", "p", "s", "d", "e"]
array7.splice(0, 0, "l", "p");
console.log(array7); // [ 'l', 'p', 's', 'd', 'e' ]

// EXAMPLE-3
let colors1 = ["Orange", "Green", "Blue"];
colors1.splice(0, 2, "Red", "Yellow");
// console.log(colors1.splice(0, 2, "Red", "Yellow")); // It returns (REMOVED VALUES) => [ 'Orange', 'Green' ]
console.log(colors1); // [ 'Red', 'Yellow', 'Blue' ]

// array to string
// join() => doesn't change the original array
const colors01 = ["Pink", "Aqua", "White"];
console.log(colors01); //  ["Pink", "Aqua", "White"]
console.log(colors01.join()); // Pink,Aqua,White
console.log(colors01); //  ["Pink", "Aqua", "White"]
console.log(colors01.join("-")); // Pink-Aqua-White
console.log(colors01.join("*")); // Pink*Aqua*White
console.log(colors01.join(" ")); // Pink Aqua White
console.log(colors01.join(", ")); // Pink, Aqua, White

console.log(colors01); // (doesn't change the original array)  ["Pink", "Aqua", "White"]

// string to array
const myLaptops = "Hp,Sony,Lenovo";

// split()
// const y2 = myLaptops.split(" "); // [ 'Hp,Sony,Lenovo' ]
const y2 = myLaptops.split(","); // [ 'Hp', 'Sony', 'Lenovo' ]
// const y2 = myLaptops.split("");
//   ['H', 'p', ',', 'S',
//   'o', 'n', 'y', ',',
//   'L', 'e', 'n', 'o',
//   'v', 'o'
// ]

console.log(y2);
