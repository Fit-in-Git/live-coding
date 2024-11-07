// Events

// Browser Events => load - unload - scroll - resize
window.addEventListener("resize", function () {
  console.log("RESIZE📏!!!!");
});

window.addEventListener("scroll", function () {
  console.log("SCROLLED☝!!!!");
});

window.addEventListener("load", function () {
  console.log("LOADED⌛!!!!");
});

window.addEventListener("unload", function () {
  console.log("UNLOADED✋!!!!");
});

// EventListener
// SYNTAX => target.addEventListener("eventType", callbackFunction);

// EXAMPLE-1: click
// selecting
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  button.style.cssText = `background: green; color: lightblue`;
});

// OR

function clickHandler() {
  button.style.cssText = `background: green; color: lightblue`;
}

button.addEventListener("click", clickHandler);

// EXAMPLE-2: mouseenter mouseleave
// selecting
const myDiv = document.getElementById("myDiv1");

myDiv.addEventListener("mouseenter", () => {
  myDiv.style.cssText = `background:hotpink; color:white`;
});

myDiv.addEventListener("mouseleave", () => {
  myDiv.style.cssText = `background:pink; color:black`;
});

// EXAMPLE-3: keydown - keyup
const myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", function (e) {
  console.log("you pressed", e.key);
  console.log(e);
  myInput.style.cssText = `background: lightblue`;
});

// try with keydown

// resize (WITHOUT HTML)
window.addEventListener("resize", () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(`New width is => ${width} and new height is => ${height}`);
});

// EXAMPLE-4: resize
window.addEventListener("resize", () => {
  let width = window.innerWidth;
  let font = width / 20;
  let message = (document.getElementById("test").style.fontSize = font + "px");
  console.log(message);
});

// EXAMPLE-5: Add & Remove eventListener
let btn1 = document.getElementById("myButton1");

function clickHandler2() {
  console.log("****CLICKED****");
}

btn1.addEventListener("click", clickHandler2);

btn1.removeEventListener("click", clickHandler2);

// EXAMPLE-5.1: removeEventListener (We can use eventListener just one time)
let btn2 = document.getElementById("myButton2");

function removeHandler() {
  console.log("🖱");

  btn2.removeEventListener("click", removeHandler);
  console.log("REMOVED!!!!!!!!!!!");
}

btn2.addEventListener("click", removeHandler);
