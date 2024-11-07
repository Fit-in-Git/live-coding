// EXAMPLE-1
let section = document.querySelector("#mySection");

// create and append h4
let h4 = document.createElement("h4");
h4.textContent = "I'm happy now 😅";
// OR
// h4.innerText = "I'm happy now 😅";

section.appendChild(h4);
// OR
// section.append(h4);

// create and append article
let article = document.createElement("article");
article.innerHTML = "<p>Today is cold</p>";

section.appendChild(article);
// OR
// section.append(article);

// EXAMPLE-2
let container = document.getElementById("container");

const newColor = document.createElement("li");
newColor.innerText = "Red";

const list1 = container.querySelector("#color-list");
list1.append(newColor);

// append vs. appendChild

// parent.append(x, y); // works
// parent.appendChild(x, y); // ERROR

// list1.append("text"); // works
// list1.appendChild("text"); // ERROR

// EXAMPLE-3
const myList = document.getElementById("myList");

// myList.append("Item1");
// myList.append("Item2");
// myList.append("Item3");

myList.append("Item1", "Item2", "Item3");
// myList.appendChild("Item1", "Item2", "Item3"); // ERROR

// EXAMPLE-4
const myDiv = document.getElementById("myDiv");
myDiv.setAttribute("class", "first");

// myDiv.removeAttribute("class");

// EXAMPLE-5
document.querySelector("#myInput").setAttribute("type", "date");

// EXAMPLE-6
let ex6 = document.getElementById("myElement");

// Add
ex6.classList.add("class1", "class2");

// remove
ex6.classList.remove("class1");
// ex6.classList.remove("class1", "class2");

// classList => add - remove - toggle - contains