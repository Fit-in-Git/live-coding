fetch("https://example.com", {
  method: "POST", // HTTP method (GET, POST, DELETE)
  headers: {
    "Content-Type": "application/json", // Tells the server the type of data the we sent
  },
  body: JSON.stringify({ name: "Ramazan", num: 123 }), // The actual data sent to server
})
  .then((response) => response.json()) //  convert the response to json
  .then((data) => console.log(data)) // Logs the response
  .catch((error) => console.error(error)); // Handles Errors

// WITH ASYNC - AWAIT
async function getData() {
  try {
    const response = await fetch("https://example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Ramazan", num: 123 }),
    });

    if (!response.ok) {
      throw new Error("We have Error");
    }
    const data = await response.json();
    console.log(data); // JavaScript object => { name: "Ramazan", num: 123 }
  } catch (error) {
    console.log(error);
  }
}

getData(); // Call the function to make the request

// -----------------------------

// CORS
// What is CORS? Cross Origin Resource Sharing
//
// IMPORTANT
// 1. Website A (your Website) tried to access Website B
// 2. Website B says NO, you cannot use me
// 3. The browser stopped it for safety

// EXAMPLE-1
const fetchData = async () => {
  const main = document.querySelector("#main");
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://openwhyd.org/adrien?format=json");
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  data.forEach((item)=>{
    const paragraph = document.createElement("p");
    paragraph.textContent = item.name;
    main.appendChild(paragraph)
  })
};
fetchData();

// Without corsproxy => No 'Access-Control-Allow-Origin'
// https://corsproxy.io/?

// IMPORTANT 
// 1. Instead of your Browser talk to Website B => Cors Proxy Talks to Website B
// 2. The Cors Proxy make a request to Website B 
// 3. The Cors proxy says to your Browser => It's OK, you can use the data from Website B
