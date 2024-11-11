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
  myDiv.style.cssText = `background:hotPink; color:white`;
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

// KEYBOARD EVENTS:
// keydown => key is pressed
// keyup => key is released
// keypress => when key is pressed and released

// MOUSE EVENTS:
// click - dblclick

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

// EXAMPLE-6: DOMContentLoaded
// DOMContentLoaded => it waits for => videos, images, scripts
// DOMContentLoaded => waits only for HTML document

document.addEventListener("DOMContentLoaded", () => {
  let y = document.getElementById("myD");
  setTimeout(() => {
    y.textContent = "Completed!!!!!!!!🍻";
  }, 5000);
  // 5000 => means 5sec
  // OR
  // y.textContent = "Completed!!!!!!!!🍻";
});

// EXAMPLE-7: event
const button3 = document.querySelector("#myButton3");

function clickTest(event) {
  console.log("Event Object:", event);
  console.log("Event Type:", event.type);
  console.log("Event Target:", event.target);
}

button3.addEventListener("click", clickTest);

// EXAMPLE-8: form
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Sent!🎊");
});

// EXAMPLE-8.1
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // target element with id / with dot notation or bracket notation
  let nameValue = event.target.elements.myName.value;
  let emailValue = event.target.elements["myEmail"].value;

  // target element with name
  let nameValueName = event.target.elements.fullName.value;
  let emailValueEmail = event.target.elements["email"].value;

  console.log(`Welcome ${nameValue}`);
  console.log(`Your E-Mail is ${emailValue}`);

  // element.value
  let input = form.querySelectorAll("input");
  let myUser = input[0].value;
  console.log("++++++++", myUser);

  let myEmail = input[1].value;
  console.log("++++++++", myEmail);
});
