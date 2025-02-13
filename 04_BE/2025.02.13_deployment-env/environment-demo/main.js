if (process.env.NODE_ENV === "testing"){
    console.log("Running in test mode!");
}

console.log("Environment", process.env.NODE_ENV);
console.log("Port:", process.env.PORT);

