// EXAMPLE-1
// propagation
// Capturing phase => starts from root until target element
// Bubbling phase =>  After the event reaches to target element, it starts bubbling up

document.getElementById("parent").addEventListener("click", () => {
  alert("I'm parent");
});

document.getElementById("child").addEventListener("click", (e) => {
  //   e.stopPropagation();
  alert("I'm child");
});

// e.stopPropagation(); => prevent the event from bubbling up to parent

// Again Capturing phase => events start at the top of DOM till target element

// EXAMPLE-2: difference between target and currentTarget
document.querySelector("#parent2").addEventListener("click", (e) => {
  console.log(e.target); // child regardless of event propagation
  console.log(e.currentTarget); // parent => capturing and bubbling (event propagation)
});

// EXAMPLE-3: difference between target and currentTarget
const myParent = document.querySelector("#myParent");
myParent.addEventListener("click", (e) => {
  console.log("target", e.target);
  console.log("current target:", e.currentTarget);
});

// EXAMPLE-4
const parent3 = document.querySelector("#parent3");
const buttons = parent3.querySelectorAll(".child");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});

// If we have more children in HTML that means we have many event listener
// it makes our Website slower and increase memory consumption

// What do do?
// single eventListener to parent for its child
// delegation
parent3.addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    console.log(e.target.textContent);
  }
});

// EXAMPLE-5
const myList = document.querySelector("#myList");
myList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// Reversing propagation
// target.addEventListener("", callback,useCapture)
// useCapture => boolean => default value => false
// When we use false => bubbling propagation
// When we use true => capturing propagation

// w3School example to better understanding
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_usecapture
