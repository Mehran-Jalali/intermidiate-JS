const express = require("express");
const app = express();

//**IMPORTANT*&*CRUSIAL**  Set View engine for ejs
app.set("view engine", "ejs");
//*************************************************

app.get("/", function (req, res) {
  //   res.send("Hello World");

  //**IMPORTANT*&*CRUSIAL** we use >> res.render << when
  //we wanna connect server to embedded javascript template (for example ejs files) NOT res.sendFile (X)

  //by default views is home directory in render view engine so ...
  res.render("index.ejs");
});

app.get("/about", function (req, res) {
  res.render("about.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});

app.get("/profile", function (req, res) {
  //you can send data to ejs template when use app.render("name", {})
  let user = {
    name: "Marcus Hutchins",
    age: 25,
    city: "New York",
    isAdmin: false,
  };
  res.render("profile", {
    user,
  });
});

app.get("/posts", function (req, res) {
  //you can send data to ejs template when use app.render("name", {})
  let posts = [
    {
      desc: "All you need to know about Front-end Web development-HTML",
      title: "HTML",
    },
    {
      desc: "All you need to know about Front-end Web development-CSS",
      title: "CSS",
    },
    {
      desc: "All you need to know about Front-end Web development-JavaScript",
      title: "JavaScript",
    },
    {
      desc: "All you need to know about Back-end Web development-Node JS",
      title: "Node JS",
    },
  ];
  res.render("posts", {
    posts,
  });
});

//listen port
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
