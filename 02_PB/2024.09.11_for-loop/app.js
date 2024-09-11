// for loop

// for (initial variable;condition;iteration)

// 1 - 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("****************");

// 3 - 13
for (let x = 3; x <= 13; x++) {
  console.log(x);
}

console.log("****************");
// 0 - 4
for (let x = 0; x < 5; x++) {
  console.log(x);
}

console.log("****************");

let arr1 = [];
// [1,2,3,4, ...., 20] (1-20)
for (let i = 1; i < 21; i++) {
  arr1.push(i);
}

console.log(arr1); // [1, 2, 3, 4, ......., 20]

console.log("****************");

let arr2 = [];

// [0, 2, 4, 6, 8]
// a += 2 or a = a + 2
for (let a = 0; a <= 8; a += 2) {
  arr2.push(a);
}
console.log(arr2); // [0, 2, 4, 6, 8]

console.log("****************");

// 10 - 12
for (let z = 10; z < 13; z++) {
  console.log(z);
}

// Why for loop
let numbers = [10, 15, 6, 7, 50]; // 88
let sum = 0;
// sum += numbers[0]; // 0 = 0 + 10 = 10
// sum += numbers[1]; // 10 = 10 + 15 = 25
// sum += numbers[2]; // 25 = 25 + 6 = 31
// sum += numbers[3]; // 31 = 31 + 7 = 38
// sum += numbers[4]; // 38 = 38 + 50 = 88
// console.log(sum); // 88

console.log("***BETTER WAY***");
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 88

console.log("****************");

let numbers1 = [10, 24, 100, 70, 95];
// [20, 48, 200, 140, 190]

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i] = numbers1[i] * 2;
  //   numbers1[i] *=  2;
  //   console.log(numbers1);
}

console.log(numbers1); // [20, 48, 200, 140, 190]

console.log("****************");

let numbers2 = [4, 20, 2, 30];

let sum2 = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
  sum2 *= numbers2[i];
  //   console.log(sum2);
}
console.log(sum2); // 4800

console.log("****************");

// break
// 0 - 5
for (let k = 0; k < 10; k++) {
  if (k === 6) {
    break;
  }
  console.log(k);
}

console.log("****************");

let numbers3 = [10, 77, 3, 8, 100, 99];
// gerade - ungerade
for (let x = 0; x < numbers3.length; x++) {
  if (numbers3[x] % 2 === 0) {
    console.log(`${numbers3[x]} ist Gerade`);
  } else {
    console.log(`${numbers3[x]} ist ungerade`);
  }
}

console.log("****************");

// continue
// 20 - 26 (we don't need 23 and 26)
for (let j = 20; j < 27; j++) {
  if (j === 23 || j === 26) {
    continue;
  }
  console.log(j);
}

console.log("****************");

const numbers4 = [20, 66, 99, 65, 87, 1000, 1, 74];

// nur ungerade
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] % 2 == 0) {
    continue;
  }
  console.log(numbers4[i]); // 99 65 87 1
}

console.log("****************");

let names = ["Ramazan", "Felix", "Alex", "Yousif"];
for (let c = 0; c < names.length; c++) {
  console.log(names[c]);
}

console.log("****************");

// Nested loop
// [[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]]
let arr3 = [];
// [[],[],[]]
for (let example = 0; example < 3; example++) {
  arr3.push([]);
  for (let x = 1; x <= 6; x++) {
    arr3[example].push(x);
  }
}
console.log(arr3); // [ [ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3, 4, 5, 6 ] ]

// 1. first loop => [[1,...,6]]
// 2. second loop => [[1,....6], [1,....6]]
// 3. third loop => [[1,....6], [1,....6], [1,....6]]
