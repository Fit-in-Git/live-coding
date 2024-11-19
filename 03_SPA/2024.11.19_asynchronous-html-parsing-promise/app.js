// Blocking code:
// synchronous => line by line
// line by line => each task is completed before moving to the next line
console.log("A");
console.log("B");
console.log("C");

// Non-Blocking code:
// asynchronous
console.log("HTML");
setTimeout(() => {
  console.log("CSS");
}, 5000);
console.log("JS");

// setTimeout(1. callback{}, 2. delay in milliseconds)

function firstName() {
  console.log("Ammar");
}

function lastName() {
  console.log("Messi");
}

setTimeout(firstName, 4000);
lastName();

// ---------------------------------

document.querySelector("button").addEventListener("click", () => {
  const ul = document.querySelector("ul");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const el = data.map((item) => `<li>${item.title}</li>`);
      ul.innerHTML = el.join("");
    })
    .catch(() => console.error("Please try again"));
});

// Promise status
// pending
// fulfilled => success or resolved
// rejected => error


// EXAMPLE-1
const myPromise = new Promise((resolve, reject) => {
  let num = 3 + 2;
  if (num === 5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
myPromise
  .then((x) => console.log("I can come to Berlin", x))
  .catch((x) => console.log("I cannot come to Berlin", x));

// EXAMPLE-2
const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is after 4 seconds done");
  }, 4000);
});
x.then((message) => console.log(message)).catch((y) => console.log(y));

// EXAMPLE-3
function hi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi, how are you?");
    }, 2000);
  });
}
hi()
  .then((x) => console.log(x))
  .catch((y) => console.log(y));
