import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const escapeString = (str) => {
  return str.replace(/[<>\/\\$%]/g, "");
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "PW länger als 8 Zeichen bitte."],
    },
    balance: {
      type: Number,
      default: 1000,
    },
    transactions: [
      {
        transaction: { type: String, required: true },
        value: { type: Number, required: true },
        date: { type: String, required: true },
      },
    ],
    roles: {
      type: [String],
      enum: ["customer", "manager", "admin"],
      required: true,
      default: "customer",
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }

    this.name = escapeString(this.name);
    this.customerId = escapeString(this.customerId);
    this.email = escapeString(this.email);

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.authenticate = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = model("User", userSchema);
export default User;
