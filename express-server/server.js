const { createDir, createFile } = require("./utils");
const express = require("express");
const app = express();
const posts = require("./data/posts.json");

//Create Directory named data to save posts
createDir("data");

//create file and also the content of its
createFile("data/posts.json");

//Routing http methods: app.get /app.post /app.delete /app.put
app.get("/home", (req, res, next) => {
  res.send("home route");
});

app.get("/posts", (req, res, next) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res, next) => {
  res.send("fetch single post is here...");
});

app.post("/posts", (req, res, next) => {
  res.send("Create post route");
});

//*app.put needs params :id *
app.put(`/posts/:id`, (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  res.send("update posts route is here");
});

app.delete("/posts/:id", (req, res, next) => {
  const id = req.params.id;
  res.send("Delete posts route is here!");
});
//create the app server

app.listen(8080, () => {
  console.log("server is runing on port 8080");
});
