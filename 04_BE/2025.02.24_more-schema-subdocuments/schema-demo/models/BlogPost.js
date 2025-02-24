import { Schema, model } from "mongoose";

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        maxlenght: 20
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    tags: [{
        type: String,
        enum: ["Tech", "Lifestyle", "Food"]
    }],
    likes: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export const BlogPost = model("BlogPost", blogPostSchema);