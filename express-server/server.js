const { createDir, createFile } = require("./utils");
const express = require("express");
const fs = require("fs");
const app = express();
const posts = require("./data/posts.json");

//***************Pass incoming data in middleware app.use(express.json())
app.use(express.json());

//Create Directory named data to save posts
createDir("data");

//create file and also the content of its
createFile("data/posts.json");

//Routing http methods: app.get /app.post /app.delete /app.put
app.get("/home", (req, res, next) => {
  res.send("home route");
});

app.get("/posts", (req, res, next) => {
  res.json({ msg: "Posts fetched successfully", posts });
});

app.get("/posts/:id", (req, res, next) => {
  //Get the ID from the post
  const id = req.params.id;
  //Find post by ID
  const postFound = posts.find((post) => {
    return post.id === id;
  });
  // console.log(postFound);

  // res.send("fetch single post is here...");
  if (!postFound) {
    res.json({ message: "the Post you're looking for is not found" });
  } else {
    res.json({ postFound });
  }
});

// Add new Post
app.post("/posts", (req, res, next) => {
  // const newPost = req.body(json);
  const newPost = req.body;
  // Push new post to posts array json and write dynamic ID
  posts.unshift({
    ...newPost,
    id: posts.length.toString(),
  });
  console.log(posts);
  // write the data in the posts.json file
  fs.writeFile("data/posts.json", JSON.stringify(posts), (err) => {
    if (err) console.log(err);
    res.json({
      message: "new post created and add to the data",
    });
  });
});

// UPDATE posts ROUTE      *app.put needs params :id *
app.put(`/posts/:id`, (req, res, next) => {
  const id = req.params.id;

  const { title, url, description } = req.body;
  // Find the post we wanna update
  const foundPost = posts.find((post) => {
    return post.id === id;
  });
  if (!foundPost) return res.json({ message: "post is not found; try again" });

  // filter all posts without the foound post
  const filteredPost = posts.filter((post) => {
    if (post.id !== id) {
      return post;
    }
  });

  //Update th found post
  foundPost.title = title;
  foundPost.url = url;
  foundPost.description = description;

  // push the updated post to filtered post
  filteredPost.unshift(foundPost);

  //Write to the purpose file(posts.json)
  fs.writeFile("data/posts.json", JSON.stringify(filteredPost), (err) => {
    if (err) console.log(err);
  });
  res.json({ message: "post Updated successfully!!" });
});

app.delete("/posts/:id", (req, res, next) => {
  //Find the ID of the post we wanna delete
  const id = req.params.id;
  //Filter out all the posts id
  const filteredPosts = posts.filter(function (post) {
    return post.id !== id;
  });

  fs.writeFile("data/posts.json", JSON.stringify(filteredPosts), (err) => {
    if (err) console.log(err);
  });

  res.json({ message: "post deleted successfully" });
});
//create the app server

app.listen(8080, () => {
  console.log("server is runing on port 8080");
});
