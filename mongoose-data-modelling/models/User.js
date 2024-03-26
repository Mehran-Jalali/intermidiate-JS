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
    //**CRUSIAL** now database relationships come
    //we need to embedd posts id
    // posts: Array,

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        //referencing the exact name of the model in another collection
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

//2. Model

const User = new mongoose.model("User", userSchema);

//model export TIME
module.exports = User;
