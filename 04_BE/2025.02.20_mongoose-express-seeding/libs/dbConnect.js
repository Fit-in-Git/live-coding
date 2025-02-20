import mongoose from "mongoose";

mongoose.connection.on("error", (error)=>{
    console.log("Fehler während der Datenbankverbindung!");
});

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {dbName:process.env.DATABASE});
        console.log("Verbunden mit MongoDB!");
    } catch (error) {
        console.error("Fehler beim Verbinden mit MongoDB!");
    }
}

export default connectDb;