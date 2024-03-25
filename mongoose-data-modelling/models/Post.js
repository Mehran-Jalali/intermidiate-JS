const mongoose = require("mongoose");

//1.Schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//2.Model
const Post = new mongoose.model("Post", postSchema);

//Model export time
module.exports = Post;
