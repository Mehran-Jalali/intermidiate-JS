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
    //**CRUSIAL** now database relationships come
    //we need to embedd auther/user id
    // author: {
    //   // type: String,

    //   //**CRUSIAL** or we can save all info about author by set the type as an Object
    //   // type: Object

    //   //**CRUSIAL** or the recommended way we can save author as mongoose.Schema.Types.ObjectId and also
    //   // referencing the User Model by  ref : 'User'

    //   //*** Also you need to fetch user by populate them / populate is used to convert all the IDes into normal object
    //   //so you should say //find all documents in our model ==> modelName.find().populate('author') promise in postRoute
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      //referencing the exact name of the model in another collection
      ref: "User",
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
