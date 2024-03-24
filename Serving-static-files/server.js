const express = require("express");
const app = express();

//******* serve static files from public directory
app.use(express.static("public"));

//**IMPORTANT*&*CRUSIAL** configure express to pass data from a form in browsers
app.use(express.urlencoded({ extended: true }));

//home route
app.get("/", (req, res) => {
  //display index.html
  res.sendFile(__dirname + "/public/pages/index.html");
});

//about page route
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/pages/about.html");
});

//add post route
app.post("/addPost", (req, res) => {
  //we have access to the data from the client
  console.log(req.body);
  res.send("Create post");
});

//get post form route
app.get("/get-form", (req, res) => {
  res.sendFile(__dirname + "/public/pages/addPost.html");
});

//listen port
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
