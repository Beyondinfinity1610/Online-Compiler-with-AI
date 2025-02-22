// models/userSchema.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  code: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Code",
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;

