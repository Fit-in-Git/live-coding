// Functions

// function expression
// EXAMPLE-1
const add = function (a, b) {
  return a + b;
};

console.log(add(20, 8)); // 20 + 8 = 28
console.log(add(20)); // 20 + undefined = NaN

// declaration
// EXAMPLE-2
function number(a) {
  return a * 3;
}

console.log(number(4)); // 12
console.log(number(2)); // 6
console.log(number(5)); // 15
console.log(number(100)); // 300

// copy
const nr = number;
console.log(nr(600)); // 1800

// EXAMPLE-3
function showMessage(message) {
  if (message === undefined || message == false) {
    console.log("There is no message");
  } else {
    console.log(message);
  }
}

showMessage(""); // There is no message

// EXAMPLE-4
// Arrow function
const hi = (x, y) => x + y;
hi(3, 9); // 12

// ----------------------------

// EXAMPLE-5
function whoWins(arr1, arr2, arr3) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let arr3Length = arr3.length;

  arr1Length > arr2Length && arr1Length > arr3Length
    ? console.log(arr1)
    : arr2Length > arr1Length && arr2Length > arr3Length
    ? console.log(arr2)
    : console.log(arr3);
}

whoWins([5, 7, 8, 0, 10], [7, 4], [1000, 400, 6, 9]); // [5, 7, 8, 0, 10]
whoWins(["hello", 100, 90], [false, 14, 900, 1200], [true]); // [false, 14, 900, 1200]

// ----------------------------

// EXAMPLE-6
function getRandomNumber() {
  const x = "0123456789ABCDEF";
  let y = "#";
  for (let i = 0; i < 6; i++) {
    y += x[Math.floor(Math.random() * 16)];
  }
  return y;
}
console.log(getRandomNumber());

// ---------------------------------------------

// Objects
// EXAMPLE-7
const laptop = {
  brand: "Dell",
  model: "XPS 15",
  details: {
    processor: "Intel Cote i9",
    ram: "16GB",
    storage: "512GB",
    size: "14 inches",
  },
  isAvailable: true,

  displayDetails() {
    console.log(`Available: ${this.isAvailable ? "Yes" : "No"}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Storage: ${this.details.storage}`);
  },
};
console.log(laptop.details.ram); // 16GB
laptop.displayDetails();
// Available: Yes
// Brand: Dell
// Storage: 512GB

// ----------------------------
// EXAMPLE-8
const nhlTeam = {
  teamName: "Toronto Maple Leafs",
  location: {
    country: "Canada",
    city: "Toronto",
  },
  arena: {
    stadiumName: "Scotiabank Arena",
    capacity: "19800",
  },
  players: [
    { fullName: "Auston Mathews", position: "Center", number: 34 },
    { fullName: "Mitchell Marner", position: "Right Wing", number: 16 },
    { fullName: "Christopher Tanev", position: "Defense", number: 8 },
  ],
  coach: {
    fullName: "Craig Berube",
    age: 58,
  },
};
console.log(nhlTeam.teamName); // Toronto Maple Leafs
console.log(nhlTeam.arena.stadiumName); // Scotiabank Arena
console.log(nhlTeam.players[0].fullName); // Auston Mathews
console.log(nhlTeam.players[1].number); // 16
console.log(nhlTeam.coach.fullName); // Craig Berube

// ----------------------------------------------------------
// EXAMPLE-9
const car = {
  make: "Tesla",
  model: "Model Y",
  batteryLevel: 50, // percentage 0 - 100

  drive(distance) {
    const batteryConsumed = distance * 0.3;
    if (batteryConsumed > this.batteryLevel) {
      console.log("Not enough");
    } else {
      this.batteryLevel -= batteryConsumed; // 50 - 30 = 20
      console.log(
        `Drove ${distance} km. Battery level is now ${this.batteryLevel}%`
      );
    }
  },

  laden(x) {
    this.batteryLevel += x;
    if (this.batteryLevel > 100) {
      this.batteryLevel = 100;
    }
    console.log(`We have ${x}%. Battery level is now ${this.batteryLevel}%`);
  },
};
car.drive(100); // Drove 100 km. Battery level is now 20%
car.laden(10); // We have 10%. Battery level is now 30%
