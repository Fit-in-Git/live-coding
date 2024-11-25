// then catch

// fetch("")

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = true;
    if (x) {
      resolve("Success!");
    } else {
      reject("Failed");
    }
  }, 7000);
});

myPromise
  .then((result) => console.log(`Erfolg ${result}`))
  .catch(function (error) {
    console.log("Error", error);
  });

console.log("Good Morning");
console.log("How are you?");

// -----------------------------
// try - catch
// SYNTAX
try {
  // try this code, if we have no error
} catch {
  // If we have error => error exceptions
}

try {
  let name = undefined;
  console.log(name.length);
} catch (error) {
  console.log("You have error", error);
}

// 4 / 0 => ERROR
function devide(x, y) {
  if (y === 0) {
    throw new Error("Don't use Zero!!!!");
  }
  return x / y;
}
try {
  let x = devide(4, 1);
  console.log(x);
} catch (error) {
  console.log(error);
}

// -----------
try {
  let myName = false;
  if (!myName) {
    throw new Error("Doesn't work");
  }
  console.log("Hey", myName);
} catch (error) {
  console.log(error);
}

// async - await
// You can write Promise easier
// Modern way
// async function returns a Promise

async function sport() {
  return "Football";
}

function sport2() {
  return new Promise();
}

// EXAMPLE-1
// Arrow function
const fetchData = async () => {
  try {
    // The await keyword pauses the fetchData function
    // first await => it waits until HTTP request is complete
    const res = await fetch("https://jsonplaceholde.typicode.com/posts");
    // it waits until promise returned
    // when promise is resolved => it translate to JS
    const data = await res.json();
    const container = document.getElementById("container");

    data.forEach((info) => {
      const title = document.createElement("h2");
      const newBody = document.createElement("p");
      title.textContent = info.title;
      newBody.textContent = info.body;
      title.style.background = "pink";
      container.append(title, newBody);
    });
  } catch (error) {}
};

fetchData();

// -----------------------------
// GET => We getting the data (request DATA) / GET is default
// POST => send data to server

let sendData = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    // headers => allow to server to understand the format of the data that we sent
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Ash", city: "Koeln" }),
});

sendData
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(() => console.log("That's error"));

// Now with async - await
async function sendData1() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        // headers => allow to server to understand the format of the data that we sent
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Andre", city: "Tokyo" }),
    });
    if (!response.ok) {
      throw new Error("YOu have ERRORRRRRRR");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

sendData1();
// ----------------------------------------------------------------
// CREATE A JSON FILE
// 1. Create a new file => db.json
// 2. Define your API in json file
// 3. npm install -g json-server
// 4. json-server --watch db.json
// 5. open your API link => http://localhost:3000/users
// EXAMPLE-2
const url = "http://localhost:3000/users";

const myFetch = (e) => {
  e.preventDefault();
  const city = document.getElementById("city");
  const cityName = city.value;
  if (cityName) {
    const data1 = {
      city: cityName,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("+++++++++", err));
  } else {
    console.log("Your input is empty");
  }
};

const form = document.getElementById("myForm");
form.addEventListener("submit", myFetch);

// with async - await
const url1 = "http://localhost:3000/users";
const myFetch1 = async (e) => {
  e.preventDefault();
  const city = document.getElementById("city");
  const cityName = city.value;
  if (cityName) {
    const data = {
      nameOfCity: cityName,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add city!!!");
      }
      await response.json();
    } catch (err) {
      console.log(err);
    }
  }
};

const form1 = document.getElementById("myForm");
form1.addEventListener("submit", myFetch1);

// EXAMPLE-3
// DELETE
const cityId = "9374";
const deleteFunction = async () => {
  try {
    await fetch(`${url}/${cityId}`, {
      method: "DELETE",
    });
  } catch (err) {}
};
const deleting = document.getElementById("del");
deleting.addEventListener("click", deleteFunction);

// EXAMPLE-4: DELETE

const cities = async () => {
  try {
    const response = await fetch(url);
    const ourCities = await response.json();
    console.log(ourCities);
    showCities(ourCities);
  } catch (error) {}
};

const showCities = (x) => {
  const parentUl = document.getElementById("list");
  x.forEach((myCity) => {
    const item = document.createElement("li");
    const deleteBtn = document.createElement("button");
    item.textContent = myCity.city;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteCity(myCity.id);
    });
    item.appendChild(deleteBtn);
    parentUl.appendChild(item);
  });
};

const deleteCity = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    cities();
  } catch (error) {
    console.log(error);
  }
};

cities();
