// Arrow Functions

// EXAMPLE-1
const add = (num1, num2) => num1 + num2;
console.log(add(75, 25)); // 100

// EXAMPLE-2
const myAge = (x) => 2024 - x;
console.log(myAge(1989)); // 35

// EXAMPLE-3
const sayHello = () => console.log("Hello");
sayHello();

// EXAMPLE-4
const country = (x) => `I am living in ${x}`;

console.log(country("Germany")); // I am living in Germany
console.log(country("France")); // I am living in France
console.log(country("Spain")); // I am living in Spain

// EXAMPLE-5
const myCar = (x) => console.log(`The color of my car is ${x}`);
myCar("White"); // The color of my car is White

// Hoisting
// hoisTest(); // ERROR
const hoisTest = () => {
  console.log("Hello");
  //   return "Hello";
};

// EXAMPLE-6

// declaration
function sumNumbers(x, y) {
  return !true ? x + y : x - y;
}
console.log(sumNumbers(2000, 100)); // 1900

// arrow function
const sumNumbers1 = (x, y) => (!true ? x + y : x - y);
console.log(sumNumbers1(300, 200)); // 100

// EXAMPLE-7
// Gerade Nummer (even)
let numbers = [10, 1, 100, 53, 66, 77, 35, 23, 1001, 2000];

const evenNums = (x) => {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      arr.push(x[i]);
    }
  }
  return arr;
};
// [even numbers]
console.log(evenNums(numbers)); // [ 10, 100, 66, 2000 ]
console.log(evenNums([10, 7, 100, 5])); // [ 10, 100 ]

// EXAMPLE-8
// Discount
// 270€ => 20%
// price * (percent/100) = 54
// price - discount = 270 - 54 = 216€
const rabatt = (price, discountPercentage) => {
  if (discountPercentage <= 0 || discountPercentage >= 100) {
    return price;
  }
  let discount = price * (discountPercentage / 100);
  let endPrice = price - discount;
  return endPrice;
};
console.log(rabatt(270, 20)); // 216
console.log(rabatt(70, -10)); // 70
console.log(rabatt(1400, 115)); // 1400
