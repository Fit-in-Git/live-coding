import bcrypt from "bcrypt";

// const saltRounds = 10;
// const password = "meinPasswort";

// const salt = await bcrypt.genSalt(saltRounds); // salt wird explizit generiert
// const hash = await bcrypt.hash(password, salt);

// console.log({hash});

async function measureHashTime(){
    const saltRounds = 15;
    const password = "meinPasswort";
    const startTime = Date.now();

    const hash = await bcrypt.hash(password, saltRounds); // salt wird implizit generiert

    const endTime = Date.now();
    const hashTime = ((endTime-startTime)/1000).toFixed(3);

    console.log(`Das Hashen dauerte ${hashTime} Sekunde/n`, {hash});
}

// measureHashTime();

function estimateGenTime(saltRounds){
    const baseTime = 50; // Zeit für 10 salt-Runden in ms
    const timeMultiplier = 2; // Zeit verdoppelt sich für jede Erhöhung um 1
    const estimatedTime = baseTime * Math.pow(timeMultiplier, saltRounds - 10);

    return estimatedTime;
}

// const estimatedTime = estimateGenTime(15);
// console.log(`${estimatedTime} ms, ${estimatedTime/1000} s, ${estimatedTime/1000/60} min, ${estimatedTime/1000/60/60} std, ${estimatedTime/1000/60/60/24} Tage`);

async function checkIdenticalHash(){
    const saltRounds = 12;
    const password = "meinPasswort";
    const salt1 = await bcrypt.genSalt(saltRounds);
    const salt2 = await bcrypt.genSalt(saltRounds);

    const hash1 = await bcrypt.hash(password, salt1);
    const hash2 = await bcrypt.hash(password, salt2);

    console.log({hash1});
    console.log({hash2});

    const isIdentical = hash1 === hash2;

    console.log({isIdentical});
};

// checkIdenticalHash();

// Passwort überprüfen

const saltRounds = 12;
let password = "meinPasswort";

const hash = await bcrypt.hash(password, saltRounds);

const db = {password: hash};

password = "meinPasswort";
console.log("klartext:",password, "gehashed:", db.password);


const isMatching = await bcrypt.compare(password, db.password);
console.log({isMatching});
