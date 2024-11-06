// EXAMPLE-1
const myUl = document.getElementById("ex1");

const highlightedItems = myUl.querySelectorAll(".class0");

console.log(highlightedItems);

console.log(highlightedItems[1].textContent); // Vue

console.log(highlightedItems[0].textContent); // JavaScript

// EXAMPLE-2: node vs. element
const myDivEx = document.getElementById("myDiv1");

// Element
const fElementChild = myDivEx.firstElementChild;
console.log(fElementChild); // <h1>Hello</h1>

// Node
const fChildNode = myDivEx.firstChild;
console.log(fChildNode); // #text

// Summary:
// Element => <div> <p> <h1> .....
// Node => elements - whitespace (text nodes) - comments

// EXAMPLE-3
const spanEl = document.querySelector("span");

// Node
const nodePrev = spanEl.previousSibling;
console.log(nodePrev); // #text

// Element
const elPrev = spanEl.previousElementSibling;
console.log(elPrev); // <p>first text</p>

// EXAMPLE-3.1
const x = document.querySelector("#container > p:nth-child(2)");
// const y = document.querySelectorAll(
//   "#container > p:nth-child(2), #container section)"
// );
// const aaa = document.querySelectorAll(
//   "#container > p:nth-of-type(2), #container > span"
// );
// console.log(aaa);
// console.log(y);
console.log(x); // <p>para2</p>
console.log(x.previousElementSibling); // <p>para1</p>
console.log(x.previousSibling); // #text

// EXAMPLE-4
let x1 = document.getElementById("second").previousElementSibling.innerText; // CSS
// let x1 = document.getElementById("second").previousElementSibling.textContent; // CSS

console.log(x1);

let ulElement = document.querySelector("#myList");
let findLastEl = ulElement.lastElementChild.innerText;
console.log(findLastEl); // React

const empty = (document.getElementById("leer").innerText = findLastEl);
console.log(empty); // React

// EXAMPLE-5: closest
const button1 = document.querySelector("#btn1");

console.log(button1);

const closestDiv = button1.closest("div");
closestDiv.style.background = "green";

// EXAMPLE-6: matches => true false
const list = document.querySelectorAll("li");

list.forEach((x) => {
  if (x.matches(".class1")) {
    console.log(x.textContent); // Audi Toyota
  }
});

// EXAMPLE-7
const sport = document.querySelector(".sport");

console.log(sport.firstElementChild); // <p>football</p>
console.log(sport.firstChild); // #text

// Node
sport.childNodes[3].style.background = "red";

// Element
sport.children[2].style.background = "orange";

console.log(sport.childNodes); // NodeList(7) [text, p, text, p, text, p, text]
console.log(sport.children); // HTMLCollection(3) [p, p, p]
console.log(sport.childNodes[1]); // <p>football</p>
console.log(sport.childNodes[1].childNodes[0]); // "Football"

console.log(sport.children[1]); // <p style="background: red;">Basketball</p>

// EXAMPLE-8
const parentEl = document.getElementById("eltern");
const parentChilds = parentEl.children;
console.log(parentChilds); // HTMLCollection(3) [p, p, p]

// HTMLCollection => cannot use forEach, but you can use array.from()
// const x = Array.from(parentEl.children)

for (let i = 0; i < parentChilds.length; i++) {
  console.log(parentChilds[i].textContent);
}

console.log(parentChilds[2].textContent); // child3

// EXAMPLE-9
const xy = document.querySelectorAll(".myDivv");
console.log(xy);
xy[3].style.background = "pink";

// EXAMPLE-10
const findParent = document.querySelector(".second").parentElement.nodeName;
console.log(findParent); // UL

const findParent2 =
  document.querySelector(".third").parentElement.parentElement.nodeName;
console.log(findParent2); // BODY

// nextElementSibling
