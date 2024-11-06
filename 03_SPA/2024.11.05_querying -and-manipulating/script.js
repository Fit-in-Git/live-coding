//EXAMPLE-1: querySelector

// first step => selecting
let el1 = document.querySelector(".myClass");
console.log(el1);

el1.style.color = "#84cc16";
el1.style.fontSize = "5rem";

// OR
el1.style.cssText = `
color: #155e75;
border: 8px solid black;
border-radius: 10px;
padding: 3em;

`;

// EXAMPLE-2: querySelectorAll

// first step => selecting
const el2 = document.querySelectorAll(".myClass2, .myClass22");
console.log(el2);

// first way
// for loop
for (i = 0; i < el2.length; i++) {
  el2[i].style.color = "orange";
  el2[i].style.fontSize = "3rem";

  // OR

  el2[i].style.cssText = `
    font-size: 4rem;
    color: orange;
    
    `;
}

// second way (better way)
// forEach

// without destructuring
el2.forEach((element) => (element.style.cssText = `color: red`));

// with destructuring
// {style} is object destructuring
//
el2.forEach(({ style }) => (style.cssText = `color: green`));
// el2.forEach(({ style: x }) => (x.cssText = `color: green`));

// EXAMPLE-3
// selecting
let el3 = document.getElementById("myId1");
el3.style.cssText = `
border: 4px solid red;
background-color: #bae6fd;
padding: 1em

`;

// EXAMPLE-4
document.querySelector("#myId2").style.cssText = `background: pink`;

// EXAMPLE-5
const el4 = document.getElementsByClassName("myClass3");
console.log(el4);

const el44 = document.querySelectorAll(".myClass3");
console.log(el44);

const el444 = document.getElementsByTagName("div");
console.log(el444);

// NOTICE: querySelectorAll => NodeList => we can use many methods like forEach
// NOTICE: getElementsByClassName => HTMLCollection => you cannot use all methods like forEach and you are limited

// EXAMPLE-6
// selecting
const ul1 = document.querySelector("ul");
console.log(ul1);

const newLi = document.createElement("li");

ul1.append(newLi);
newLi.innerText = "fourth";

// Add attribute
newLi.setAttribute("class", "blue ourClass");

// remove attribute
newLi.removeAttribute("class");

// remove the tag
newLi.remove();

// EXAMPLE-7
document.querySelector("#myInput").value = "Felix";
document.querySelector("#myInput").setAttribute("type", "range");

// EXAMPLE-8
// selecting
const x = document.getElementById("myP");

x.classList.remove("blue");
x.classList.add("red");

// There is toggle in classList as well

// EXAMPLE-9
const test = document.getElementById("example");

// innerHTML
console.log("innerHTML:", test.innerHTML); //   <p>this is innerHTML vs. innerText</p>
// innerText
console.log("innerText", test.innerText); // innerText this is innerHTML vs. innerText

// NOTICE:
// A NodeList is not exactly the same as an array, although they share some similarities.
// - An array is a built-in JavaScript data structure specifically designed to hold an ordered collection of values.
// - It has various built-in methods like map, forEach, filter, and more.

// - A NodeList is a collection of DOM elements (such as HTML elements) returned by methods like querySelectorAll.
// - It behaves somewhat like an array, but it lacks many of the array methods.
