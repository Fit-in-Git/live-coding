// So put the breakpoint
// Go to Run
// The execution will pause at the first breakpoint.

// Example1:
// - put your breakpoint on console.log(myStr);
// - and you see there is no Summer in debug console
// let myStr = "Summer";
// console.log(myStr);

// Example2:
// - click on restart 🔁 and we make the process again
// - now press on continue ▶️ => you see the rest as well
// - now add more variables after breakpoint and see, they are undefined
// - Press Stop ⏹ and you stop the debugging
// -  back to debugging: put your breakpoint and press Step Over ⤵
// - Step Over ⬆ display only one line of code=> press it and you see Summer as well
// - Step Into ⬇  If the line has no function, it is like Step Over

// let myNum = 10;
// let myStr = "Summer";

// console.log("Hello");
// console.log("How are you");
// console.log(myNum);
// console.log(myStr);
// console.log("How are you");

// let myNum2 = 40;
// console.log("How are you");
// console.log(myNum2);
// let myNum3 = 140;
// let myNum4 = 590;

// -----------Example3---------------

// - 1. give your breakpoint in line 62 (result1) and press Step Into ⬇
// - And see after pressing Step Into => you are going to function add(a, b)

// Nice!:
// - 1. give your breakpoint in line 62 (result1) and press Step Out ⬆ and it stops
function add(a, b) {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  console.log(`The sum of ${a} and ${b} is ${sum}`);

  return sum;
}

const x = 5;
const y = 10;

const result1 = add(x, y);

// ------------Example4-----------------
// for()
function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log("Sum:", result);

// ------------------------------

// 2. Debugging node scripts with chrome: node inspect <filename>

// a. write => about:inspect in your URL browser
// b. node inspect <filename> in your terminal
// c. click => Open dedicated DevTools for Node
// d. Now it pop up the window, so let'S debugging :)
// e. Ctrl + d to exit from terminal

// -------------------------------

// 3. debugger
// a. give the debugger keyword
// b. f12 on browser
// c. reload your page
function addNumbers(a, b) {
  //   debugger; // Pause execution here (see in source)
  const sum = a + b;
  return sum;
}

//   OR HERE debugger; // Pause execution here (see in source)
const result100 = addNumbers(5, 7);
console.log(result100);
console.log("******************");

// or
for (let i = 0; i < 7; i++) {
  //   debugger; // Pause execution in each iteration
  console.log("Round:", i);
}

// -------------------------------

// 4. Keeping track of state: inspecting scopes in chrome
// a. f12 in the browser
// b. go to the source and put your breakpoint and reload the page

//----------------------------------------------------------------------------------
