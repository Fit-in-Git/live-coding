// Basic Typescript Typen

let id:number = 5;
let company: string = "DCI";
let isPublished: boolean = false;
isPublished = true;

console.log({id});

let x:any = "Some string"
x = 5;
x = true;
x = "hey";

// unknown
let something: unknown;

// Simulierte API-Antwort
something = getApiResponse();

function getApiResponse():unknown {
    return Math.random() > 0.5 ? "Hello World!" : 101;
}

// Type-check um den Datentyp einzugrenzen
if (typeof something === "string"){
    console.log("string", something.toUpperCase());
} else if (typeof something === "number"){
    console.log("number", something + 10);
} else {
    console.log("Unbekannter Datentyp");  
}

let username: string = "Jackson";
username.toLocaleLowerCase();
// username.toFixed(2)
console.log({username});

// Typescript hilft auch bei Logikfehlern

const ofAge = Math.random() * 20 < 18 ? false : true;

// if (ofAge !== true){
//     console.log("nein");
// } else if (ofAge === false){
//     console.log("ja");
// }

// Funktionen

function addTwo(a:number, b:number):number {
    return a + b;
}

const addResult = addTwo(1, 2);
console.log({addResult});

// Inferred type

let animal = "horse";
animal = "bird";

// Eine Funktion ohne return 

function getMessage(message:string):void{
    console.log({message});
};

getMessage("Hallo Welt");

// Arrays

const fruit:string[] = ["apple", "banana"];
fruit.pop();
fruit.push("kiwi");
fruit.unshift("ananas");
console.log({fruit});

// Objekte (inferred vs. explizit)

const benutzer = {
    id: 0,
    name: "Tina Turner"
}

const pet:{name:string, age:number} = {
    name: "Bob",
    age: 1
}

// Union

let searchTerm: number | string | boolean;

searchTerm = 1200;
searchTerm = "product"
searchTerm = true
// searchTerm = undefined // Fehler

let pid: number | string = 10;

pid = "myProduct";

// Tuple (Sammlung fester Größe und Struktur)

let person:[number, string, boolean] = [12, "Teenie", true];

person = [25, "Adult", false];

let employee: [number, string][]
employee = [[1, "John"], [2, "Jane"]]

// Tuple vs. Array (Array erlaubt beliebig viele Elemente, kein Index-check)

const numbers: (string | number)[] = [1, "two", 3, "four"];

// Enum

enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    BadRequest = 400,
    ServerError = 500
};

const responseCode: HttpStatusCode = HttpStatusCode.NotFound
console.log({responseCode});

enum UserRole {
    User,
    Moderator,
    Admin
}

function checkUserRole(userRole:UserRole):void {
    if (userRole === UserRole.Admin){
        console.log("Du hast Admin-Rechte!");
    } else if (userRole === UserRole.Moderator){
        console.log("Du hast Moderatoren-Rechte!");
    } else {
        console.log("Du hast nur User-Rechte!");
    }
}

checkUserRole(UserRole.Admin);

// Custom types

type User = {
    id:number,
    name: string
}

const user:User = {id:1, name: "John"}
console.log({user});

// Optionale keys werden mit Fragezeichen (?) gekennzeichnet

type Person = {
    name:string,
    age:number,
    email?:string
}

const player1:Person = {name:"Batman", age: 120};

function getPerson(name:string, age:number):Person {
    const newPlayer:Person = {
        name:name,
        age:age
    }
    return newPlayer;
}

const result: Person = getPerson("Spiderman", 100);
console.log({result});

// Inferfaces (Ähnlich wie type kann aber anderen Interfaces erweitern)

interface Animal {
    name:string
    age:number
}

const cat:Animal = {name:"jumper", age: 6}
console.log({cat});

// Das Animal-interface erweitern

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

const dog: Dog = {
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever",
    bark: ()=>{
        console.log("Woof");  
    }
}

console.log({dog});
dog.bark();

// Generics (Typensicherheit trotz unterschiedlicher Typen)

function getFirstElement<T>(arr:T[]):T {
    return arr[0];
};

const numbersArr = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbersArr);

const stringArr = ["apple", "banana", "orange"];
const firstString = getFirstElement(stringArr);

console.log({firstNumber});
console.log({firstString});
