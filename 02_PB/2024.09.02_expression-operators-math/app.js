// statement
let x = 10;
console.log(x);
let y = "Hello";
console.log(y);

// literal expression:
// It's fixed value, like number (2), string ("Hallo") or boolean (true, false)
// it doesn't need calculation
let num = 2;
console.log(num); // 2

// --------
let num1 = 2 + 4;
console.log(num1); // 6

// 4 * 2 // 8
let a = 7;
console.log(a + 3); // 10

// -----
let example1 = "Hello how are you?";
let example2 = "Hello how are you 'today'";
let example3 = "Hello how are you";
let example4 = 'Hello how are you "today"';
console.log(example4);
console.log("Hello\nworld");
console.log("hello how are you?\nI'm fine\nHow is life?");

console.log(example2);
const str1 = "Hello";
const str2 = "Where are you from?😃";

console.log(str1 + str2); // HelloWhere are you from?😃
console.log(str1, str2); // Hello Where are you from?😃

let example = "It's cold " + str1 + " today " + str2;
console.log(example); // It's cold Hello today Where are you from?😃

// --------------------------
// Template literals

// EXAMPLE-1
let example5 = `Hello 
How are you?
I'm fine, thanks!
😊
`;
console.log(example5);

// EXAMPLE-2
let name1 = "Sandor";
// let msg = "Hello " + name1 + " How are you?";
let msg = `Hello ${name1} how are you?`;
console.log(msg);

// EXAMPLE-3
let numOne = 10;
let numTwo = 5;
let message = `first number is ${numOne} and the second number is ${numTwo} and the sum is ${
  numOne + numTwo
}`;
console.log(message); // first number is 10 and the second number is 5 and the sum is 15

// ------------

// Arithmetic operators
// 1. Addition (+)

// EXAMPLE-1
let nr1 = 12;
let nr2 = 14;
let myStr = "Hi";
let result1 = nr1 + nr2;
console.log(result1); // 26
console.log(typeof result1); // number
let result2 = myStr + nr1;
console.log(result2); // Hi12
console.log(typeof result2); // string
let myStr1 = "7";
let result3 = nr2 + myStr1;
console.log(result3); // 147

// 2. Subtraction (-)
let nr3 = 20;
let nr4 = 7;
let myStr2 = "Hello";
let myStr3 = "15";
let nr5 = 5;

let result4 = nr3 - nr4;
console.log(result4); // 13
let result5 = myStr2 - nr5; // Hello - 5 = NaN
console.log(result4, result5);
console.log(typeof result5); // number 😆
let result6 = nr3 - myStr3; // 5  20 - "15" = 5
console.log(result6);
console.log(typeof result6); // number

// 3. Multiplication (*)
let result7 = nr3 * nr4;
console.log(result7); // 140
let result8 = myStr2 * nr5;
console.log(result8); // "Hello" x 5 = NaN
let result9 = nr3 * myStr3;
console.log(result9); // 20 * "15" = 300 (type coercion)

// type coercion: JS ability to automatically convert values from one data type to another.

// 4. Division (/)
let result10 = nr3 / nr5;
console.log(result10); // 20 / 5 = 4
let result11 = myStr3 / nr5;
console.log(result11); // "15" / 5 = 3 (type coercion)

// 5. Exponentiation (**)
let number1 = 2;
let number2 = "5";
let res = number1 ** number2;
console.log(res); // 2 x 2 x 2 x 2 x 2 = 32

// 6. Remainder (Modulo) (%)
let number3 = 15;
let number4 = 4;
let res1 = number3 % number4; // 15 / 4 = 3
console.log(res1); // 3

// -------------------------------
// Concatenation
// Combine two or more strings into single string
let firstName = "Iman ";
let lastName = "Ghanei";
let fullName = firstName + lastName;
console.log(fullName);
let message1 = "Hello " + fullName + "!";
let message2 = `Hello ${fullName}!`;
console.log(message1);
console.log(message2);

// Comparison operators
// (==)(===)(!=)(!==)
let numberSeven = 7;
let numberSeven2 = 7;
console.log(numberSeven == numberSeven2); // true
console.log(numberSeven === numberSeven2); // true
let numberSevenStr = "7";
console.log(numberSeven == numberSevenStr); // true
console.log(numberSeven === numberSevenStr); // false
let numberNine = 9;
console.log(numberSeven == numberNine); // false

// NOTICE: (===) => strict equal

// Not equal (!=)
let first = 9;
let second = "9";
console.log(first != second); // false

// strict not equal (!==)
console.log(first !== second); // true

// Greater and smaller
let myNum1 = 3;
let myNum2 = 8;
console.log(myNum1 > myNum2); // false
console.log(myNum1 < myNum2); // true
console.log(myNum1 >= myNum2); // false
console.log(17 >= 17); // true
console.log(17 <= 17); // true

// Assignment operators (+=)
let x1 = 2;
x1 += 4; // x1 = x1 + 4
console.log(x1); // 6

let z1 = 3;
z1 -= 4; // z1 = z1 - 4
console.log(z1); // -1

let str01 = "Hello";
let str02 = " world";

str01 += str02; // str01 = str01 + str02
console.log(str01);

let message01 = "Hello";
let number = 55;

message01 += number;
console.log(message01); // Hello55

// ---------------------------

// Unary increment (++) Decrement (--)

// Increment
let exampleOne = 4;
exampleOne++;
console.log(exampleOne); // 5

// Decrement
let exampleTwo = 10;
exampleTwo--;
console.log(exampleTwo); // 9
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

// round
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



EXAMPLE-4