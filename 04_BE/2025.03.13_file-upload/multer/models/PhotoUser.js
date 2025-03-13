import { Schema, model } from "mongoose";

const photoSchema = new Schema({
    username: String,
    password: String,
    profilePicture: String
});

const Photo = model("Photo", photoSchema);

export default Photo;