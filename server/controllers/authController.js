// controllers/authController.js
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { name, emailId, password } = req.body;

  // Basic validation
  if (!name || !emailId || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      emailId,
      password: hashedPassword,
      code: [], // Initialize with empty array
    });

    await user.save();

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        emailId: user.emailId,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password from user object
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", details: error.message });
  }
};

export const Login = async (req, res) => {
  const { emailId, password } = req.body;

  // Basic validation
  if (!emailId || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        emailId: user.emailId,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password from user object
    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
