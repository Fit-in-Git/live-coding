import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    online: {
        type: Boolean,
        default: false
    },
    messages: [
        {
            content: {type:String, required: true},
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const User = model("User", userSchema);

export default User;