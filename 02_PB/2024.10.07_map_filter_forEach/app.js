// Arrays Advanced Methods

// map()
// map => does not change the original array
// map => returns new array

// EXAMPLE-1
let arr1 = [3, 6, 9, 2, 10];
const result1 = arr1.map((num) => num * 2);
console.log(result1); // [ 6, 12, 18, 4, 20 ]
console.log(arr1); // [ 3, 6, 9, 2, 10 ]

// EXAMPLE-2
const arr2 = [5, 10, 4];
const result2 = arr2.map((x) => x + 10);
console.log(result2); // [ 15, 20, 14 ]
console.log(arr2);

// EXAMPLE-3
const courses = ["html", "css", "javascript", "react"];
// const result3 = courses.map((course)=> course.toUpperCase());
const result3 = courses.map(function test(course) {
  return course.toUpperCase();
});
console.log(result3); // [ 'HTML', 'CSS', 'JAVASCRIPT', 'REACT' ]
console.log(courses); // ["html", "css", "javascript", "react"]

// EXAMPLE-4
let arr3 = [5, 9, 2, 7];
const result4 = arr3.map((num) => num ** 2);
console.log(result4); // [ 25, 81, 4, 49 ]
console.log(arr3); // [ 5, 9, 2, 7 ]

// EXAMPLE-5
const arr4 = [10, 7, 60, 14];
const result5 = arr4.map((number) => number * 10);
console.log(result5); // [ 100, 70, 600, 140 ]
console.log(arr4); // [10, 7, 60, 14]

// EXAMPLE-6
const arr5 = [10, 4, 12, 2];
const result6 = arr5.map((x, y, z) => `${x} has index ${y} in ${z}`);
console.log(result6);
// [
//   "10 has index 0 in 10,4,12,2",
//   "4 has index 1 in 10,4,12,2",
//   "12 has index 2 in 10,4,12,2",
//   "2 has index 3 in 10,4,12,2",
// ];

// EXAMPLE-7 ;
console.log(["a", "b", "c"].map((x) => x + x)); //  ["aa", "bb", "cc"]

// EXAMPLE-8
const arr6 = [1.4, 7.7, 13.8, 30.3];
const result7 = arr6.map(myFunc);
console.log(result7); // [ 1, 8, 14, 30 ]

// Hoisting: We got error because of HOISTING (With arrow function)
// const myFunc = (y) => Math.round(y);

// HOISTING =>  There is no problem with declaration
function myFunc(y) {
  return Math.round(y);
}

// EXAMPLE-9
const products = [
  { brand: "Apple", price: 1500, color: "Blue" },
  { brand: "HP", price: 800, color: "Black" },
  { brand: "Samsung", price: 1300, color: "Orange" },
];

const getPrice = products.map((product) => product.price);
console.log(getPrice); // [1500, 800, 1300]

//------------------------------------------------------------

console.log("----------FILTER---------");

// filter()
// filter => does not change the original array
// filter => returns new array

// EXAMPLE-1
const arr7 = [-1, 4, 17, -8, 22, 0];
const result8 = arr7.filter((num) => num >= 0);
console.log(result8); // [ 4, 17, 22, 0 ]
console.log(arr7); // [ -1, 4, 17, -8, 22, 0 ]

// EXAMPLE-2
const cars = ["Toyota", "Mitsubishi", "Mercedes", "Audi", "Lada"];
const result9 = cars.filter((car) => car.length > 5);
console.log(result9); //  [ 'Toyota', 'Mitsubishi', 'Mercedes' ]

// EXAMPLE-3
const arr8 = [10, 30, 17, 15, 97, 111, 14, 9, 20];
const result10 = arr8.filter((even) => even % 2 === 0);
console.log(result10); // [ 10, 30, 14, 20 ]

// EXAMPLE-4
const arr9 = [100, 20, 33, 43, 50, 60]; // gerade >50
const result11 = arr9.filter((num) => num % 2 === 0 && num > 50);
console.log(result11); // [ 100, 60 ]

// EXAMPLE-5
const laptops = [
  { brand: " Apple", price: 2300, color: "Gray" },
  { brand: "Sony", price: 800, color: "Blue" },
  { brand: "Lenovo", price: 1300, color: "Black" },
  { brand: "Asus", price: 2100, color: "Red" },
];

const result12 = laptops.filter((laptop) => laptop.price > 2000);
console.log(result12);

// Chaining
const result13 = laptops
  .filter((x) => x.price > 1000)
  .map((y) => ({ brand: y.brand, price: y.price }));
console.log(result13); // [ 2300, 1300, 2100 ]

// Wit destructuring
// const kk = laptops.map(({ color, ...rest }) => rest);

// forEach()
// forEach SYNTAX => array.forEach(callback(x){})
// forEach => We change the original array if we use index and array as second and third parameter

// EXAMPLE-1: In this example, we couldn't change our array
const myNumbers = [1, 12, 76, 99, 1000];
myNumbers.forEach((x) => x * 2);
console.log(myNumbers); // [ 1, 12, 76, 99, 1000 ]

// EXAMPLE-2
const myNumbers2 = [110, 700, 50, 25];
let sum = 0;
myNumbers2.forEach((number) => (sum += number));
console.log(sum); // 885

// EXAMPLE-3
const myNumbers3 = [10, 17, 99, 80];

const evenNumbers = [];

myNumbers3.forEach((x) => {
  if (x % 2 === 0) {
    evenNumbers.push(x);
  }
});
console.log(evenNumbers); // [ 10, 80 ]

// EXAMPLE-4
const myNumbers4 = [4, 2, 12, 20];
myNumbers4.forEach((element, index, array) => (array[index] = element * 2));
console.log(myNumbers4); // [ 8, 4, 24, 40 ]

// EXAMPLE-5
const autos = ["Mercedes", "Audi", "BMW"]; // 0 => Mercedes 1 => Audi 2 => BMW
let message = "";
autos.forEach((element, index) => (message += `${index} => ${element}`));
console.log(message); // 0 => Mercedes 1 => Audi 2 => BMW

// EXAMPLE-6
let numbers = [1, 2, 3, 4, 5];

// Using forEach to double each element in the array
let arrExample = [];
numbers.forEach((number) => arrExample.push(number * 2));
console.log(arrExample); // [ 2, 4, 6, 8, 10 ]
console.log(numbers); // [1, 2, 3, 4, 5]

// EXAMPLE-7
const colors = ["Red", "Orange", "Blue", "Green", "Yellow"];
const getColors = colors.filter(
  (color) => color === "Orange" || color === "Green"
);
console.log(getColors); // [ 'Orange', 'Green' ]
console.log(colors); // [ 'Red', 'Orange', 'Blue', 'Green', 'Yellow' ]
