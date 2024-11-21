// Converting object to JSON: JSON.stringify(<object>)
// JSON.stringify => Doesn't modify the original object
//  JSON.stringify => returns a new string

// JavaScript object
// EXAMPLE-1
let person = {
  name: "Andre",
  number: 12,
  favouriteColor: "Blue",
};

let jsonString = JSON.stringify(person); // {"name":"Andre","number":12,"favouriteColor":"Blue"}
console.log(jsonString);
console.log(person); // {name: 'Andre', number: 12, favouriteColor: 'Blue'}

// EXAMPLE-2
let myInfo = {
  name: "Chris",
  city: "Berlin",
  number: 8,
  hobbies: ["sport", "PlayStation"],
};
console.log(myInfo);
const str1 = JSON.stringify(myInfo);
console.log(str1); // {"name":"Chris","city":"Berlin","number":8,"hobbies":["sport","PlayStation"]}

// ------------------------------

// parsing: JSON.string => object
// When we getting data from the server or backend
// EXAMPLE-1
const str2 = '{"name": "Ramazan", "city": "Hamburg"}';
console.log(str2); // {"name": "Ramazan", "city": "Hamburg"}

const convertToParse = JSON.parse(str2);
console.log(convertToParse); // {name: 'Ramazan', city: 'Hamburg'}

console.log(str2); // {"name": "Ramazan", "city": "Hamburg"}

// EXAMPLE-2
const str3 =
  '{"fColor": "Orange", "height":"1.83", "data":{"name": "Iman", "city": "Cologne"}}';
console.log(str3);
const y = JSON.parse(str3);
console.log(y); // {fColor: 'Orange', height: '1.83', data: {…}}
console.log(y.fColor); // Orange
console.log(y.data.city); // Cologne
// ---------------------------------
let a = "[1,2,3,4]"; // valid
// let a = "[1,2,3,4,]"; // Invalid
// let b = '{"number": 01}' // Invalid
// let b = '{"number": 1.}' // Invalid
// let b = '{"number": 1.0}' // valid
// let b = "{'number': 1.0}" // Invalid

// ---------------------------------------------------
// Fetch
// https://jsonplaceholder.typicode.com/posts/{id}
// https: Protocol
// jsonplaceholder.typicode.com => Domain name
// posts => resource
// {id} => Parameter

// EXAMPLE-1
fetch("https://jsonplaceholder.typicode.com/posts")
  // This is response object (from a fetch request)
  // The request was successful (status 200)
  //  the data is available (ok: true)
  .then((res) => {
    console.log(res);
    // Parsing JSON
    // When we make a fetch request and receive a response, the content is JSON format
    // res.json() => parses the JSON content and returns JS object
    // res.json() => returns a Promise, so you need to wait for it to resolve before parsing data
    return res.json();
  })
  // this data holds the result or value from the previous promise (then)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// EXAMPLE-2
// https://jsonplaceholder.typicode.com/posts/10
const postId = 10;
const url = "https://jsonplacr.typicode.com/posts";

const fetching = fetch(`${url}/${postId}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Please try again", err));

// EXAMPLE-3
fetch("https://jsonplaceholder.typicode.com/pots")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("response is not ok 😔");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("**********", error));

// Axios => in React
// EXAMPLE-4
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
    const reduceData = data.slice(0, 4);
    // const reduceData = data.slice(-3);
    // const reduceData = [data[1], data[400], data[150]];

    reduceData.forEach((item) => {
      const title = document.createElement("h2");
      const newBody = document.createElement("p");
      title.innerText = item.name;
      newBody.innerText = item.body;
      title.style.background = "green";
      container.append(title, newBody);
    });
  })
  .catch((error) => {
    console.log(error);
    const errorText = document.createElement("h2");
    errorText.textContent = `Page Not Found 404`;
    errorText.style.color = "red";
    container.append(errorText);
  });

// NASA EXAMPLE

const input = document.getElementById("searchNasa");
const imageContainer = document.getElementById("imageContainer");

function fetchImage() {
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"
  )
    .then((res) => res.json())
    .then((data) => {
      const photos = data.photos;
      photos.forEach((photo) => {
        const newImg = document.createElement("img");
        newImg.src = photo.img_src;
        newImg.alt = photo.camera.full_name;
        imageContainer.appendChild(newImg);
      });
    })
    .catch((error) => console.log(error));
}

input.addEventListener("focus", fetchImage);

// Saving data => localStorage
// EXAMPLE-1
let message = "Hello";

localStorage.setItem("example", message);

document.getElementById("x").innerText = localStorage.getItem("example");

console.log(localStorage.getItem("example")); // Hello

// EXAMPLE-2
localStorage.setItem("car", "Mercedes");

console.log(localStorage.getItem(localStorage.key(0))); // Mercedes
console.log(localStorage.getItem(localStorage.key(1))); // Hello
console.log(localStorage.getItem(localStorage.key(6))); // null
console.log(localStorage.getItem("aaa")); // null

// remove
// localStorage.removeItem("example");
// console.log(localStorage.getItem("example")); // null

// remove all
// localStorage.clear();

// sessionStorage: if we open a new tab or close the browser, data doesn't exist anymore
sessionStorage.setItem("color", "orange");
