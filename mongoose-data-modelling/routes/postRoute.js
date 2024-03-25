const express = require("express");
const postRouter = express.Router();
const Post = require("../models/Post");

//POST=> Post
postRouter.post("/", async (req, res) => {
  try {
    //To create documents just ==> ModelName.create({}) promise
    const savedPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.json(savedPost);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//GET=> Post
postRouter.get("/", async (req, res) => {
  try {
    //find all documents in our model ==> modelName.find() promise
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//Router export time
module.exports = postRouter;
