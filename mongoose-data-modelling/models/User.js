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
  //   { timestamps: true },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//to find the total post which created by this user we should add ,{json{virtuals: true}} to the Schema and then↓

userSchema.virtual("postCount").get(function () {
  //this means the user properties
  return this.posts.length;
});

//2. Model

const User = new mongoose.model("User", userSchema);

//model export TIME
module.exports = User;
