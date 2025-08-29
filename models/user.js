

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },   // match controller
  role: { type: String, enum: ["user", "admin"], default: "user" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);