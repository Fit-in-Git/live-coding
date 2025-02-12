const BASE_URL = "http://localhost:3000";

async function fetchData(endpoint){
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`)
        if (!response.ok){
            throw new Error("Fehler beim Fetchen!")
        }
        return await response.json();
    } catch (error) {
        console.log("Fetch fehlgeschlagen");
    }
}

function renderData(data, elementId){
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    data.forEach((item)=>{
        const li = document.createElement("li");
        li.textContent = item.name || item.title;
        list.appendChild(li);
    })
}

async function loadData(){
    const members = await fetchData("members");
    const books = await fetchData("books");
    console.log({members, books});

    if (members) renderData(members.data, "membersList");
    if (books) renderData(books.data, "bookList")
}

async function addMember(){
    const nameInput = document.getElementById("memberName");
    const emailInput = document.getElementById("memberEmail");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email){
        alert("Name und E-Mail werden beide benötigt!");
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/members`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name, email})
        });

        if (!response.ok){
            throw new Error("Fehler beim Fetchen!")
        }
        console.log({response});
        
        nameInput.value = "";
        emailInput.value = "";

        loadData();
    } catch (error) {
        console.log("Konnte Member nicht hinzufügen!", error);  
    }
}

// loadData();