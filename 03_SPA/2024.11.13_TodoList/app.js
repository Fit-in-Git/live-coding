// Select all elements
let main = document.querySelector("main");
let form = document.querySelector("form");
let input = document.querySelector("input");
let button = document.querySelector("button");
let section = document.querySelector("section");

let errorMessage = document.createElement("p");
errorMessage.textContent = "Please enter your text 🗒";
// errorMessage.style.color = "red";
// errorMessage.style.display = "none";
// OR
errorMessage.style.cssText = `
color: red;
display: none;
`;
main.appendChild(errorMessage);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputText = input.value.trim();
  if (inputText === "") {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";

  let paragraph = document.createElement("p");
  let spanText = document.createElement("span");
  let iconSpan = document.createElement("span");
  iconSpan.innerHTML = "<i class='fa fa-check'></i>";
  spanText.innerText = inputText;
  paragraph.appendChild(spanText);
  paragraph.appendChild(iconSpan);
  section.appendChild(paragraph);

  // OR
  //   paragraph.append(spanText, iconSpan);
  input.value = "";

  paragraph.addEventListener("click", () => {
    
    paragraph.classList.add("completed");
  });

  iconSpan.addEventListener("click", (e) => {
    e.stopPropagation();
    paragraph.classList.toggle("completed");
  });
});
