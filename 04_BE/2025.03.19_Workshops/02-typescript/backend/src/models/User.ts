import {Schema, model, Document} from "mongoose";

interface IUser extends Document {
    name:string,
    email:string,
    password:string
}

const userSchema = new Schema({
    name:String,
    email:String,
    password:String
})

const User = model<IUser>("User", userSchema);

export default User;