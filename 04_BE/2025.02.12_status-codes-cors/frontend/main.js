const BASE_URL = "http://localhost:3000";

// 2. Fetch data from the server
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error("HTTP-Fehler");
    }
    return await response.json();
  } catch (error) {
    console.log("Fetch failed", error);
  }
}

// 3. Render data in the DOM
function renderData(data, elementId) {
  const list = document.getElementById(elementId);
  list.innerHTML = "";
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name || item.title;
    list.appendChild(li);
  });
}

// 1. Load members and books
async function loadData() {
  const members = await fetchData("members");
  const books = await fetchData("books");

  if (members) renderData(members.data, "membersList");
  if (books) renderData(books.data, "booksList");
}

// Add a new member on click
async function addMember() {
  const nameInput = document.getElementById("memberName");
  const emailInput = document.getElementById("memberEmail");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please provide both a name and an email!");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error("HTTP-Fehler");
    }

    // Clear input fields after successful submission
    nameInput.value = "";
    emailInput.value = "";

    loadData();
  } catch (error) {
    console.log("Could not add a member!", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});