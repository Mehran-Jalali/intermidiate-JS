const express = require("express");
const postRouter = express.Router();
const Post = require("../models/Post");
//**CRUSIAL we need the User to find user Id in each post*/
const User = require("../models/User");

//POST=> Post
postRouter.post("/", async (req, res) => {
  try {
    //**CRUSIAL** 1)find the author id by modelName.findById("_id number") promise

    // const author = await User.findById(req.body.author);

    //To create documents just ==> ModelName.create({}) promise
    const savedPost = await Post.create({
      title: req.body.title,
      content: req.body.content,

      author: req.body.author,
    });
    //**CRUSIAL** 2)we need to push the author that has been found into
    //*********** User Schema posts Array

    // author.posts.push(savedPost);
    //**CRUSIAL** 3) resave the author

    // await author.save();

    //

    //1.find the user
    const userFound = await User.findById(req.body.author);
    if (!userFound) res.json({ message: "user not found!!" });

    //2.save the created posts into users posts array
    userFound.posts.push(savedPost._id);

    //3.re save
    await userFound.save();
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

    //*** When we set the Schema as  type: mongoose.Schema.Types.ObjectId;  you need to fetch user
    // by populate them / populate is used to convert all the IDes into normal object
    //so you should say //find all documents in our model ==> modelName.find().populate('author') promise in postRoute

    // const posts = await Post.find().populate("author");

    //or

    const posts = await Post.find().populate({
      path: "author",
      populate: {
        path: "posts",

        model: "Post",
      },
    });
    res.json(posts);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//Router export time
module.exports = postRouter;
