import User from "../models/User.js";
import { generateToken } from "../middleware/auth.js";

// Create User Funktion
export const createUser = async (req, res) => {
  try {
    const { name, customerId, email, password } = req.body;

    // Inputvalidation guard clause
    if (!email || !password || !customerId) {
      return res
        .status(400)
        .json({ message: "Email, and password are required." });
    }

    // Check if user with that email or customerId already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { customerId }],
    });

    if (existingUser) {
      return res.status(409).json({
        message:
          existingUser.email === email
            ? "Email is already in use."
            : "Customer Number is already taken.",
      });
    }

    // Create the user
    const user = await User.create({
      name,
      email,
      password,
      customerId,
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message:
          "Duplicate field error. Please check your customer number or email.",
      });
    }

    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const passwordMatch = await user.authenticate(password);

    if (!passwordMatch)
      return res.status(401).json({ message: "Email or Password wrong" });
    const token = generateToken({ userId: user._id });
    res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 600 * 1000,
      })
      .json({ message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) return res.status(404).json({ messaeg: "User not found." });

    res.status(200).json({
      balance: user.balance,
      transactions: user.transactions,
    });
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const depositMoney = async (req, res) => {
  try {
    const { newBalance, transactions } = req.body;

    if (!newBalance || isNaN(newBalance) || newBalance < 0) {
      return res.status(400).json({ message: "Invalid balance amount." });
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.balance = newBalance;
    user.transactions = transactions;

    await user.save();

    res.status(200).json({
      message: "Deposit successful",
      balance: user.balance,
      transactions: user.transactions,
    });
  } catch (error) {
    console.error("Deposit error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const withdrawMoney = async (req, res) => {
  try {
    const { newBalance, transactions } = req.body;
    console.log("!!! +++ DEBUG: new balance:", newBalance);
    if (!newBalance || isNaN(newBalance)) {
      return res.status(400).json({ message: "Invalid balance amount." });
    }

    if (!Array.isArray(transactions)) {
      return res.status(400).json({ message: "Invalid transaction format" });
    }

    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (newBalance > user.balance) {
      return res.status(400).json({ message: "Insufficient funds." });
    }

    user.balance = newBalance;
    user.transactions = transactions;

    await user.save();
    return res.status(200).json({
      message: "Withdrawal successful",
      balance: user.balance,
      transactions: user.transactions,
    });
  } catch (error) {
    console.error("Withdrawal error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found." });

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted." });
  } catch (error) {
    console.error("Delete User Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const logout = (req, res) => {
  try {
    res
      .clearCookie("jwt", {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json({ message: "Logout succesful" });
  } catch (error) {
    console.error("Logout Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
