import {MongoClient, ServerApiVersion} from "mongodb";

const databaseURL = process.env.MONGO_URL;
console.log({databaseURL});

try {
    //  Verbindung zum Server herstellen
    const connection = await MongoClient.connect(databaseURL, {serverApi:ServerApiVersion.v1});
    console.log("Connected to MongoDB!");
    // Datenbank auswählen
    const db = connection.db("reports");
    // Collection auswählen
    const collection = db.collection("reports");
    // Dokument in der Collection speichern
    const result = await collection.insertOne({user:"John Doe", gender: "male"});
    console.log({result});
} catch (error) {
    console.log(error);
}

