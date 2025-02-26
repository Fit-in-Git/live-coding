// Erstellt ein Schema/Model mit name, posts

import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }]
});

export const User = model("User", userSchema);