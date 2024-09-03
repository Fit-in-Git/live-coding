// prefix - postfix
let exampleThree = 7;
console.log(exampleThree++); // 7
console.log(++exampleThree); // 9

let nmbr1 = 4;
let nmbr2 = 5;
let nmbr3 = 2;
// step1: ++nmbr2 * nmbr3++ (6 x 2 = 12)
// step2: 4 + 12 = 16
console.log(nmbr1++ + ++nmbr2 * nmbr3++); // 16
console.log(nmbr1); // 5

// Math => floor ceil round random

let numberr = 7.4;
let numberr1 = 2.9;

// ceil
numberr = Math.ceil(numberr); // 7.4 = Math.ceil(7.4);
console.log(numberr); // 8

// floor
numberr1 = Math.floor(numberr1);
console.log(numberr1); // 2

let numbr = 12.7;
numbr = Math.floor(numbr);
console.log(numbr); // 12

//
let y1 = 5.44;
let y2 = 7.2;
let y3 = 6.6;
let y4 = 8.5;
console.log(Math.round(y1)); // 5
console.log(Math.round(y2)); // 7
console.log(Math.round(y3)); // 7️
console.log(Math.round(y4)); // 9

// -----------------------
// Integer vs. float (both numbers)
let intNum = 55;
let intNum1 = 7;
let intNum2 = 12;

// float => decimal point
let floatNum = 1.1;
let floatNum1 = 0.5;

// with e notation
// 3.123e7
let floatNum2 = 3.123e7; // 3.123 x 10^7 = 31230000
let floatNum3 = 3.123e2; // 3.123 x 10^2 = 312.3
console.log(floatNum2, floatNum3);

// Math.random()

// 1 - 10
let number01;
number01 = Math.random() * 10;
console.log(number01); // 0.00123123 - 9.9

// Math.floor(Math.random() * (max - min + 1) + min)
// 10 - 15
// 1. the expression => (15 - 10 + 1 = 6)
// 2. Math.random() * (15 - 10 + 1) => 2.23345457678
// 3. Math.floor(Math.random() * (15 - 10 + 1)) => 2
// 4. Math.floor(Math.random() * (15 - 10 + 1) + 10) => 2 + 10 = 12
let num2 = Math.floor(Math.random() * (15 - 10 + 1) + 10);
console.log(num2);

// Math.floor(Math.random() * (max - min + 1) + min)

// -10 to 10
let num3 = Math.floor(Math.random() * (10 + 10 + 1) - 10);
console.log(num3);

// -1 to 1
let num4 = Math.floor(Math.random() * (1 + 1 + 1) - 1);
console.log(num4);

// Math.floor(Math.random() * (max - min + 1) + min)
// -20 to -10
let num5 = Math.floor(Math.random() * (-10 + 20 + 1) - 20);
console.log(num5);

// 1 - 10
let num7 = Math.floor(Math.random() * 10 + 1);
console.log(num7);





