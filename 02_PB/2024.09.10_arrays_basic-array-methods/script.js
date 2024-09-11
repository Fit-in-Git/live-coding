// console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

// ["5", "10", "Iman", "Ghanei" ]

const x = parseInt(args[0]) * parseInt(args[1]);
console.log(x); // 50

const firstName = args[2];
const lastName = args[3];
console.log(`Hi ${firstName} ${lastName}`);
