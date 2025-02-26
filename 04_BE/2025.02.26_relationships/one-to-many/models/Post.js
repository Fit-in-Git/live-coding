// Erstellt ein Schema/Model mit owner, content

import {Schema, model} from "mongoose";

const postSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    content: String
});

export const Post = model("Post", postSchema);