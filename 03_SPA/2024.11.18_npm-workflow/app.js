// Before install any Packages => npm init -y
// Let's install something => npm install luxon
// NOTICE: in package.json =>   "type": "module",
import { DateTime } from "luxon";

const now = DateTime.now();
console.log(`current time is ${now}`);

// Year (YYYY): 2024
// Months (MM): 11 (Nov)
// Day (DD): 18
// T => separator => Beginning of the time part

// Hour (HH): 09
// Minute (MM): 43
// Second (SS): 12.414 => 12 seconds and 414 milliseconds

// Offset (+01:00): this is time zone (UTC) => Universal time

console.log(DateTime.now().minus({ week: 1 }).toISO()); // 2024-11-11T09:52:16.093+01:00

// --------------------------------------------
// dependencies vs. devDependencies:
// Dependencies: Needed for the app to run in production (e.g., react, express).
// DevDependencies: Needed only for development/testing (e.g., nodemon).
// How to remove a package => npm uninstall packageName
// devDependencies => npm install packageName --save-dev

// ---------------------------------------------------------------

// Transpiling / Compiling
// Transpiling: The process converts our code in one version (ES6) into older version (ES5)
// Transpiler like Babel is the best choice

// Babel => Transpiled modern JavaScript (ES6) to older version like (ES5) for older Browsers

// polyfill: A Polyfill is code that provides functionality on older Browser
// That means => iT add missing JavaScript features that Babel cannot transpile like Promise

// Bundling: Bundling combine multiple files of code into single file => for better performance and easier deployment
// There is Webpack or Parcel

// ---------------------------------------------------------
// Babel Tasks:
// const => var
// ()=> {} / function(){}

// Polyfill tasks:
// adds Promise to the older Browser => now Promise works on an old Browser
const x = new Promise((x) => x("oooo"));
