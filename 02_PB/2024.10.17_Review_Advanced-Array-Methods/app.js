// map

// EXAMPLE-1
const users = [
  { fName: "Sandor", lName: "Opiok" },
  { fName: "Yousif", lName: "Paulus" },
  { fName: "Ash", lName: "Ghanei" },
];

console.log(users);

const fullName = users.map((user) => `${user.fName} ${user.lName}`);
console.log(fullName); // [ 'Sandor Opiok', 'Yousif Paulus', 'Ash Ghanei' ]

// EXAMPLE-1
const priceInUSD = [70, 8, 1200, 340];

const priceInEuro = priceInUSD.map((price) => (price * 0.94).toFixed(2)); // [ '65.80', '7.52', '1128.00', '319.60' ]
console.log(priceInEuro);
