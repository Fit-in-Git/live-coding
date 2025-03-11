import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum:["user", "editor", "admin"],
        default: "user"
    }
});

userSchema.pre("save", async function(next){
    try {
        if (!this.isModified("password")) return next();

        const hash = await bcrypt.hash(this.password, 12);
        this.password = hash;

        // if (this.isModified("password")){
        //     const hash = await bcrypt.hash(this.password, 12);
        //     this.password = hash;
        // }
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.authenticate = async function(password){
    return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;