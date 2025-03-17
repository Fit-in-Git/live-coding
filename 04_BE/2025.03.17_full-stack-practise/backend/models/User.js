import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const escapeString = (str) => {
    return str.replace(/[<>\/\\$%]/g, "");
  };

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Ein Name wird benötigt!"],
        trim: true,
        minlength: [2, "Der Name muss mindestens aus zwei Zeichen bestehen!"],
        maxlength: [50, "Der Name darf nicht länger als 50 Zeichen sein!"],
        set: v => escapeString(v)
    },
    customerId: {
        type: String,
        unique: true,
        required: [true, "Kunden-ID ist erforderlich"],
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, "Die Kundennummer darf nur aus Zahlen und Buchstaben bestehen!"],
        unique:true
      },
      email: {
        type: String,
        required: [true, "E-Mail ist erforderlich"],
        unique: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ungültiges E-Mail-Adresse"]
      },
      password: {
        type: String,
        required: [true, "Passwort ist erforderlich"],
        minlength: [8, "Passwort muss mindestens 8 Zeichen lang sein"],
        // select: false // Alternative zu toJSON
    },
    balance: {
        type:Number,
        default:1000
    },
    transactions: [
        {type:String}
    ],
    roles: 
        {
            type: [String],
            enum:["customer", "manager", "admin"],
            default: "customer",
        }
    
}, {timestamps:true});

userSchema.pre("save", async function (next) {
    try {
      if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
      }
  
      next();
    } catch (error) {
      next(error);
    }
  });

userSchema.methods.authenticate = async function (password) {
    console.log("authenticate", password, this.password);
    
    return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;