// "use strict"

let animals = ["Eagle", "Tiger", "Lion", "Leopard", "Snake"];

// with for loop
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("*******************");

// for of
// for (let variableName of array-name){your code}
for (let animal of animals) {
  console.log(animal);
}

console.log("*******************");

// you can use for of for strings as well
let myStr = "CSS";
for (let x of myStr) {
  console.log(x);
}

// -------------------------------
let colors = ["Brown", "Black", "Navy Blue", "Pink", "Orange"];

console.log(colors[4]); // Orange

console.log(colors.length); // 5️

console.log(colors[colors.length - 1]); // Orange

// -20 - -40
for (let i = -20; i >= -40; i--) {
  if (i === -39 || i === -40) {
    continue;
  }
  console.log(i);
}

// [[1,2], [1,2]]
// []
let array = [];
for (let i = 0; i <= 1; i++) {
  array.push([]);
  for (let j = 1; j <= 2; j++) {
    array[i].push(j);
  }
}
console.log(array); // [ [ 1, 2 ], [ 1, 2 ] ]

// While loop

let names = ["Alvarez", "Reus", "Morata", "Ronaldo", "Crouch"];
let isSearching = true;
let x = 0;

while (isSearching && names.length > 0) {
  if (names[x] === "Ronaldo") {
    console.log("Ich hab's gefunden");
    isSearching = false;
  } else {
    x++;
    // Or with shift, if you want to delete names
    // names.shift() and the in if(names[0] === "Ronaldo")
  }
}
if (isSearching && names.length > 0) {
  // einmal
}
console.log(names);

// -----------

let x1 = 0;
do {
  x1 += 1;
  console.log(x1);
} while (x1 < 5);
