// EXAMPLE-1
import { publicVar, publicFunc, secondFunc } from "./app.js";

console.log(publicVar);

publicFunc();

secondFunc();

// EXAMPLE-2: export default
import myPerson from "./app.js";
console.log(myPerson); // {fName: 'Biggie', num: 8}
console.log(myPerson.fName); // Biggie
console.log(myPerson["num"]); // 8

// EXAMPLE-3: named export
import { add, minus } from "./app.js";
console.log(add(10, 7)); // 17
console.log(minus(10, 20)); // -10

// EXAMPLE-4: named export
import { addNumbers, city, myArray, myVar } from "./app.js";

console.log(myArray); // [1, 2]
console.log(myVar + 80); // 90
addNumbers(7, 80); // 87
console.log(city.cityName); // Köln


// EXAMPLE-5: named export 
import * as obj from "./app.js";
console.log(obj.number); // 400
console.log(obj.x2); // {fName: 'Conny', number: 30}
console.log(obj.x1.fName); // Alex 
console.log(obj.myArray); // [1, 2] 

// EXAMPLE-6: (app2.js)
import {car} from "./pro/app2.js";
console.log(car); // {fName: 'Mercedes', number: 1000}