// Logical operators

// Logical && (AND)
// EXAMPLE-1
let x = 8;
let y = 10;
console.log(x > 0); // true
console.log(x > 0 && y > 0); // true && true => true
console.log(x > 0 && y < 0); // true && false => false
console.log(x < 0 && y < 0); // false && false => false
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// EXAMPLE-2
let javaScriptIsGood = true;
let javaIsGood = false;
console.log(`Iman says: ${javaScriptIsGood && javaIsGood}`); // Iman says: false

// EXAMPLE-3
let var1 = 10;
let var2 = 7;
let var3 = 15;
console.log(var1 > 4 && var2 > 6 && var3 > 20); // true && true && false => false

// Logical || (ODER)
// EXAMPLE-1
let x1 = 5;
let y1 = -5;

console.log(x1 > 0 || y1 > 0); // true
console.log(x1 < 0 || y1 > 0); // false
console.log(x1 < 0 || y1 < 0); // true
console.log(x1 > 0 || y1 < 0); // true

// true || false => true
// false || false => false
// false || true => true
// true || true => true

// ! (NOT)
// EXAMPLE-1
let x2 = false;
console.log(!x2); // !false => true
console.log(!true); // false

let isTrue = true;
let isFalse = !isTrue;
console.log(isFalse); // !true => false

// --------------------
// Conditional statement with logical operators
// EXAMPLE-1
// Logical &&
let temp = 30;
let isSunShining = true;

if (temp > 25 && isSunShining) {
  console.log("Nice weather!");
} else {
  console.log("Bad weather!");
}

// EXAMPLE-2
// Logical ||
let esRegnet = false;

if (temp > 20 || esRegnet) {
  console.log("Es Regnet");
} else {
  console.log("Es Regnet nicht!");
}

// EXAMPLE-3
// Logical !
let isWindy = false;
if (!isWindy) {
  console.log("It's nice");
} else {
  console.log("It'S windy");
}

// Combination && ||
let isWeekend = false;
let temp2 = 19;
let isSunny = true;
let isSummer = true;

// false && true && true
if ((isWeekend || temp2 < 19) && isSunny && isSummer) {
  console.log("We are going to play football");
} else {
  console.log("We are not going to play football");
}

// Ternary operators

// EXAMPLE-1
let ampel = "red";

if (ampel == "red") {
  console.log("STOP");
} else {
  console.log("You can go");
}

// true ? hier wird passiert : hier wird nicht passiert
// false ? hier wird nicht passiert : hier wird passiert

ampel == "red" ? console.log("STOP") : console.log("You can go");

// EXAMPLE-2
let age = 15;

if (age >= 18) {
  console.log("You can drink Beer");
} else {
  console.log("You can drink Juice");
}
let adult = age >= 18 ? "You can drink Beer" : "You can drink Juice";
console.log(adult);

// EXAMPLE-3
let number = 10;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

// EXAMPLE-4
let isSunnyy = false;
let isWarm = true;
let weather = isSunnyy && isWarm ? "nice" : "Bad";
console.log(weather); // Bad

// EXAMPLE-5
let num1 = 4;
let num2 = "4";
let result1 = num1 == num2 ? "die sind gleich" : "die sind nicht gleich";
console.log(result1);

// for complex conditions you can use if-else
// use ternary operators to reduce your code

let grade = 80;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("D");
}
let result2 = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "D";
console.log(result2);

// if-else vs. switch

let day = 1;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day");
}

// switch
let day2 = 5;
switch (day2) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
