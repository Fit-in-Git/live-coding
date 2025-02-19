import mongoose from "mongoose";

mongoose.connection.on("error", (error)=>{
    console.log("Fehler während einer aktiven Datenbankverbindung!", error);
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {dbName: process.env.DATABASE});
        console.log("Mit MongoDB verbunden!");
    } catch (error) {
        console.log("Datenbank-Verbindungsfehler", error);
        process.exit(1);
    }
}

export default connectDB;