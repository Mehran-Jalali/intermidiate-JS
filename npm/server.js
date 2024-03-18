// It's better to install npm in local(not globally) by typy in terminal: npm install packageName OR npm i packageName
// console.log(h2, btn);

// const Color = require("color");

// const color = Color("#7743CE").alpha(0.5).lighten(0.5);
// console.log(color);
const fs = require("fs");
const http = require("http");

//==============
// Create server
//==============
const server = http.createServer(function (req, res) {});

//==============
//listen to server
//==============
server.listen(9000, function () {
  console.log(`Server is running on port 9000`);
});
//==============
//listen to event on server
//==============

server.on("request", (req, res) => {
  console.log(req.method);
  // get url
  const url = req.url;
  if (url === "/login") {
    // read content on login heme page
    fs.readFile("login.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  // Home
  if (url === "/") {
    // read content on login heme page
    fs.readFile("home.html", (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  //register
  if (url === "/register")
    // read content
    fs.readFile("register.html", (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });

  // parse incoming data (payload)
  if (url === "/create-post" && req.method === "POST") {
    //Receive the incoming data
    const post = [];
    req
      .on("data", (chunck) => {
        console.log(chunck);
        post.push(chunck);
      })
      .on("end", function () {
        //pass the buffer data into string
        console.log(`real post is: ${post}`);
        // const parsedData = Buffer.concat(post);
        // console.log(`parsedData is: ${parsedData}`);
        // res.writeHead(200, { "Content-Type": "text/json" });
        res.write("post created");
        res.end();
      });
  }
});
