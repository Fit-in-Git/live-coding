// reduce()
// reduce returns single value

// EXAMPLE-1
const num = [30, 17, 3, 20]; // 70

const result = num.reduce(
  (prevValue, currentValue) => prevValue + currentValue
);
console.log(result); // 70

// How it works?
// first round => prevValue = 30 / currentValue = 17 => 47
// second round => prevValue = 47 / currentValue = 3 => 50
// third round => prevValue = 50 / currentValue = 20 => 70

// EXAMPLE-2
const num1 = [10, 60, 15, 35]; // 120

let initialValue = 70;

const result1 = num1.reduce(
  (prevValue, currentValue) => prevValue + currentValue,
  initialValue
);
console.log(result1); // 190

// NOTICE: When we start => prevValue is 70 and currentValue is 10 => 70 + 10
// first round => 70 + 10 = 80
// second round => 80 + 60 = 140
// third round => 140 + 15 = 155
// fourth round => 155 + 35 = 190

// EXAMPLE-3
const num2 = [50, 3, 10, 20];
const x = (prevValue, currentValue) => prevValue - currentValue;

const result2 = num2.reduce(x, 5);

// prevValue = 5 / currentValue = 50 =>  5 - 50 => -45
// prevValue = -45 / currentValue = 3 =>  -45 - 3 => -48
// prevValue = -48 / currentValue = 10 =>  -48 - 10 => -58
// prevValue = -58 / currentValue = 20 =>  -58 - 20 => -78

console.log(`The result is ${result2}`); // The result is -78

// EXAMPLE-4
const num3 = [200, 140, 600, 8, 90];

const result3 = num3.reduce((prevValue, currentValue) =>
  Math.max(prevValue, currentValue)
);

// Math.max(200, 140) => 200
// next step => Math.max(200, 600) => 600
// next step => Math.max(600, 8) => 600
// next step => Math.max(600, 90) => 600

console.log(`The biggest number is ${result3}`); // The biggest number is 600

// EXAMPLE-5
const num4 = [14, 3, 50, 7];
const initialValue4 = 0;

const result4 = num4.reduce((prevValue, currentValue) => {
  if (currentValue > 10) {
    return prevValue + currentValue; // Add
  } else {
    return prevValue - currentValue; // subtract
  }
}, initialValue4);
console.log(`The result is ${result4}`); // The result is 54
// 0 + 14 = 14
// 14 - 3 = 11
// 11 + 50 = 61
// 61 - 7 = 54

// EXAMPLE-6
const students = [
  { name: "Biggie", id: 10 },
  { name: "Andre", id: 7 },
  { name: "Ramazan", id: 2 },
  { name: "Niloofar", id: 9 },
];

const result5 = students.reduce(
  (prevValue, student) => prevValue + student.id,
  0
);
console.log(result5); // 28

// first round => 0 + 10 = 10
// second round => 10 + 7 = 17
// third round => 17 + 2 = 19
// first round => 19 + 9 = 28

// EXAMPLE-7
const cars = [
  { brand: "Mercedes", model: "G-Class", year: 2024 },
  { brand: "Honda", model: "Civic", year: 2000 },
  { brand: "BMW", model: "iX", year: 2021 },
  { brand: "Audi", model: "Q8", year: 2023 },
];
// {Mercedes: "G-Class", Honda: "Civic", BMW: "iX", Audi: "Q8"}
const result6 = cars.reduce((prevValue, car) => {
  prevValue[car.brand] = car.model;
  return prevValue;
}, {});
console.log(result6); // { Mercedes: 'G-Class', Honda: 'Civic', BMW: 'iX', Audi: 'Q8' }

// --------------------------------------------

// sort()
// EXAMPLE-1
const numbers = [5, 3, 7, 2, 9];
numbers.sort();
console.log(numbers); // [ 2, 3, 5, 7, 9 ]

// EXAMPLE-2
const numbers1 = [3, 100, 250, 5];
numbers1.sort();
console.log(numbers1); // [ 100, 250, 3, 5 ]

// numbers with values more than 9 like 12, 120 => don't use sort()
// numbers that are less than 10 like 8 or 2 => use sort()

// EXAMPLE-3
const numbers2 = [150, 23, 32, 100, 7];
// first round => (z is 150) - (y ist 23) => (150 - 23) => result positive => first numbers sorted after second numbers => [23, 150, 32, 100, 7]
// second round => (z is 150) - (y ist 32) => (150 - 32) => result positive => first numbers sorted after second numbers => [23, 32, 150, 100, 7]
// third round => (z is 150) - (y ist 100) => (150 - 100) => result positive => first numbers sorted after second numbers => [23, 32, 100, 150, 7]
// fourth round => (z is 150) - (y ist 7) => (150 - 7) => result positive => first numbers sorted after second numbers => [23, 32, 100, 7, 150]
// next round => (z is 23) - (y ist 32) => (23 - 32) => result negative => first numbers sorted before second numbers => [23, 32, 100, 7, 150]
// next round => (z is 32) - (y ist 100) => (32 - 100) => result negative => first numbers sorted before second numbers => [23, 32, 100, 7, 150]
// next round => (z is 100) - (y ist 7) => (100 - 7) => result positive => first numbers sorted after second numbers => [23, 32, 7, 100, 150]
// next round => (z is 100) - (y ist 150) => (100 - 150) => result negative => first numbers sorted before second numbers => [23, 32, 7, 100, 150]
// next round => (z is 23) - (y ist 32) => (23 - 32) => result negative => first numbers sorted before second numbers => [23, 32, 7, 100, 150]
// next round => (z is 32) - (y ist 7) => (32 - 7) => result positive => first numbers sorted after second numbers => [23, 7, 32, 100, 150]
// next round => (z is 32) - (y ist 100) => (32 - 100) => result negative => first numbers sorted before second numbers => [23, 7, 32, 100, 150]
// next round => (z is 100) - (y ist 150) => (100 - 150) => result negative => first numbers sorted before second numbers => [23, 7, 32, 100, 150]
// next round => (z is 23) - (y ist 7) => (23 - 7) => result positive => first numbers sorted after second numbers => [7, 23, 32, 100, 150]

const sortNumbers = (x) => x.sort((z, y) => z - y);
console.log(sortNumbers(numbers2)); // [ 7, 23, 32, 100, 150 ]

// EXAMPLE-4
const numbers3 = [2, 400, 5, 300, 7];
const sortNumbers2 = (a) => a.sort((b, c) => b - c);
console.log(sortNumbers2(numbers3)); // [ 2, 5, 7, 300, 400 ]

// OR
// numbers3.sort((a, b) => a - b);

// EXAMPLE-5
const names = ["Yousif", "Conny", "Ramazan", "Felix", "Biggie"];
const sortNames = (x) => x.sort((a, b) => a.localeCompare(b));
console.log(sortNames(names)); // [ 'Biggie', 'Conny', 'Felix', 'Ramazan', 'Yousif' ]

// EXAMPLE-6
const colors = ["yellow", "green", "blue"];
colors.sort(); // But this is CASE SENSITIVE
console.log(colors); // [ 'blue', 'green', 'yellow' ]

// EXAMPLE-7
const colors1 = ["yellow", "Green", "blue"];
colors1.sort(); //  It doesn't work
console.log(colors1); // [ 'Green', 'blue', 'yellow' ]

// NOTICE: uppercase letters generally have lower code points than lowercase letters

// "Green": G has a lower code than b and y
// "blue: b comes after G in Unicode"
// "yellow": y comes after G in Unicode

// self study
// localCompare => -1, 1 oder 0
const str1 = "apple";
const str2 = "banana";
const res = str1.localeCompare(str2);
console.log(res); // -1
