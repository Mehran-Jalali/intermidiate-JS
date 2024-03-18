const express = require("express");
const app = express();

//at the end if we wanna third party middleware we use a package called morgan so nmp i morgan
// with morgan middleware we can see the request object [18/Mar/2024:01:56:58 +0000] "DELETE /posts/4 HTTP/1.1" 200 56 "-" "PostmanRuntime/7.37.0 and ...

const morgan = require("morgan");

//==============
//USE MORGAN MIDDLEWARE
//==============
// app.use(morgan("combined"));
// [18/Mar/2024:01:56:58 +0000] "DELETE /posts/4 HTTP/1.1" 200 56 "-" "PostmanRuntime/7.37.0"

// app.use(morgan("common"));
//[18/Mar/2024:01:58:00 +0000] "DELETE /posts/4 HTTP/1.1" 200 56

app.use(morgan("dev"));
//DELETE /posts/4 200 2.903 ms - 56

// MIDDLEWARE CHALLENGE
//a challenge to check and also control the number of requests made to the server**********
let requestCountVal = 15;

const requestCount = (req, res, next) => {
  if (requestCountVal > 10) {
    res.status(429).json({ message: "too many requests" });
    //status(429) means too many requests made to the server
  } else {
    next();
  }
};
app.use(requestCount);

//==============
//CREATE MIDDLEWARE
//==============

// const logger = (req, res, next) => {
//   console.log("I'm a logger middleware,WHO ARE YOU??");
//   //allow express to proceed on to the next middleware we write next()
//   next();
// };

//==============
//USE MIDDLEWARE
//==============

// app.use(function (req, res, next) {
//   console.log("I'm a logger middleware,WHO ARE YOU??");
//   next();
// });

//==============
//CHAINING MIDDLEWARE
//==============

// app
//   .use(function (req, res, next) {
//     console.log("First 1 MiddleWare");
//     next();
//   })
//   .use(function (req, res, next) {
//     console.log("Second 2 MiddleWare");
//     next();
//   })
//   .use(function (req, res, next) {
//     console.log("Third 3 MiddleWare");
//   });

//now let's make our middleware
//protect route middleware isLogin Middleware

const protected = (req, res, next) => {
  let userLoginDetail = {
    isLogin: false,
    userName: "Marcus",
  };
  //let's provide our conditions
  if (userLoginDetail.isLogin) {
    next();
  } else {
    res.json({
      message: "You Are Not Allowed, First Login Please!!!",
    });
  }
};

//isAdmin Middleware

const isAdmin = (req, res, next) => {
  let userLoginDetail = {
    isLogin: true,
    isAdmin: false,
    userName: "Marcus",
  };
  //let's provide our conditions
  if (userLoginDetail.isAdmin) {
    next();
  } else {
    res.json({
      message: "You Are Not Allowed, You Are Not Admin ☺!!!",
    });
  }
};

// now if we want to protect a specific route we must pass in "(protected)" in that route
// for instance app.post("/create-post", protected, (req,res)=>{})
// but app.use(protected) will protect all the route
// we can pass several middleware in a specific route

//Home route
app.get("/", (req, res, next) => {
  res.send("Hello world");
});

//Login route
app.get("/login", (req, res, next) => {
  res.send("login successfull");
});

// Authenticated USER ONLY
//create post request
app.post("/create-post", protected, (req, res, next) => {
  res.json({ message: "post created" });
});

//public USER
//fetch all posts
app.get("/posts", (req, res, next) => {
  res.json({ message: "posts fetched" });
});

// Admin USER ONLY
//delete post
app.delete("/posts/:id", protected, isAdmin, (req, res, next) => {
  res.json({ message: "posts deleted" });
});

///start server
app.listen(8080, console.log("server is running on port 8080"));
