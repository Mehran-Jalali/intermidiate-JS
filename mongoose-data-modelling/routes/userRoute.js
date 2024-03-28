const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");

//POST User
userRouter.post("/", async (req, res) => {
  try {
    //To create documents just ==> ModelName.create({}) promise
    const user = await User.create({
      fullName: req.body.fullName,
      country: req.body.country,
    });
    res.json(user);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//GET user

userRouter.get("/", async (req, res) => {
  try {
    //find all documents in our model ==> modelName.find() promise

    //*** When we set the Schema as  type: mongoose.Schema.Types.ObjectId;  you need to fetch user
    // by populate them / populate is used to convert all the IDes into normal object
    //so you should say //find all documents in our model ==> modelName.find().populate('posts') promise in postRoute
    const users = await User.find().populate("posts");
    res.json(users);
  } catch (err) {
    res.json({
      message: "err",
    });
  }
});

//Router export time
module.exports = userRouter;
