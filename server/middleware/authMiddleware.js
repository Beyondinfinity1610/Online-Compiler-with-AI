import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const authMiddleware = async (req, res, next) => {
  try {
    // Check if token exists
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied. No Token Provided!" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request

    // Check if user exists
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    // Differentiate between different types of errors
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid Token!" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired!" });
    }

    res.status(500).json({ message: "Authentication Error" });
  }
};

export default authMiddleware;
