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
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//Router export time
module.exports = userRouter;
