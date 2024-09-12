const readline = require("readline-sync");

console.log("Welcome to Schere, Stein, Papier");

let spielNochmal = "ja";

while (spielNochmal.toLowerCase() === "ja") {
  let userInput = readline
    .question("Wähle Schere, Stein oder Papier!🐎 ")
    .toLowerCase();

  while (
    userInput !== "schere" &&
    userInput !== "stein" &&
    userInput !== "papier"
  ) {
    console.log("Versuch nochmal");
    userInput = readline
      .question("Wähle Schere, Stein oder Papier!🐎 ")
      .toLowerCase();
  }

  const computerChoice = ["schere", "stein", "papier"];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomChoice = computerChoice[randomIndex];

  console.log(`der Computer hat ${randomChoice} gewählt`);

  if (userInput === randomChoice) {
    console.log("Unentschieden");
  } else if (
    (userInput === "stein" && randomChoice === "schere") ||
    (userInput === "papier" && randomChoice === "stein") ||
    (userInput === "schere" && randomChoice === "papier")
  ) {
    console.log("Du hast gewonnen!🍻");
  } else {
    console.log("Computer hat gewonnen!!!😭");
  }
  spielNochmal = readline.question("Möchtest du weiter Spielen? (ja/nein) ");
  while (spielNochmal !== "ja" && spielNochmal !== "nein") {
    spielNochmal = readline
      .question("Bitte mit ja oder nein Antworten: ")
      .toLowerCase();
  }
}

console.log("Danke");
// console.clear();

// 1. npm init -y
// 2. npm i readline-sync
