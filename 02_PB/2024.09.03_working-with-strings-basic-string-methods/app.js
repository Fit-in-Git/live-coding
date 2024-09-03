const myStr3 = "Hello World!";
console.log(myStr3[0]); // H
console.log(myStr3[5]); //
console.log(myStr3[8]); // r
console.log(myStr3[-1]); // undefined

console.log(myStr3.length); // 12

const myStr4 = "JavaScript";
console.log(myStr4[9]); // t
console.log(myStr4[myStr4.length - 1]); // t

// Basic string methods
// toUpperCase
let str4 = "hello world";
let strToUpper = str4.toUpperCase();
console.log(strToUpper);

let str5 = "Hello World";
let strToLower = str5.toLowerCase();
console.log(strToLower);

// slice
// string.slice(start, stop)
// the slice() does not change the original string
let text = "Hello world!";
let result = text.slice(2, 8);
console.log(result); // llo wo
let result1 = text.slice(2);
console.log(result1); // llo world!
let result2 = text.slice(6, 2); // (start > stop)
console.log(result2); // empty string (Don't do it)

let result3 = text.slice(4, -2);
console.log(result3); // o worl (with minus we start from the right)
console.log(text);

// substring()
// substring
// The slice() does not change our original string
// string.slice(start, stop)
const text2 = "Hello, world";
let x1 = text2.substring(0, 9);
console.log(x1); // Hello, wo
let x2 = text2.substring(3, 2); // (it will swapping) => (3,2) => (2,3)
console.log(x2);

let x3 = text2.substring(-3); // if start is less than 0 like (-1 or -2) => it will start with 0
let x4 = text2.substring(7, -1); // (0,7)

console.log(text2); // Hello, world

// trim()=> remove whitespace
const text3 = "       hello world";
console.log(text3.trim());
const myTrim = text3.trim();
console.log(myTrim);

// includes (case sensitive)
const myStr5 = "Hello, world";
const one = "World";
let two = "he";
const three = "world";
const four = "rld";

console.log(myStr5.includes(one)); // false
console.log(myStr5.includes(two)); // false
console.log(myStr5.includes(three)); // true
console.log(myStr5.includes(four)); // true
