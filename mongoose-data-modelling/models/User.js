const mongoose = require("mongoose");

//1.Schema

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//2. Model

const User = new mongoose.model("User", userSchema);

//model export TIME
module.exports = User;
