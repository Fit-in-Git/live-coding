import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name:String,
    customerId:String,
    email:String,
    password:String,
    balance:{
        type:Number,
        default: 1000
    },
    transaction:Array,
    roles: [
        {
            type:String,
            enum: ["user", "editor", "admin"]
        }
    ]
});

userSchema.pre("save", async function(next){
    try {
        if (!this.isModified("password")) return next();

        const hash = await bcrypt.hash(this.password, 12);
        this.password = hash;

        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.authenticate = async function(password){
    return await bcrypt.compare(password, this.password);
};

/*
Die methods Schema-Methode "toJSON" ist eine spezielle Methode. Der Name ist reserviert. Diese Funktion wird immer aufgerufen, wenn wir in unserer App etwas in json umwandeln wollen (z.B. mit "send" oder "json")
*/
userSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user.password;
    return user;
}

const User = model("User", userSchema);

export default User;