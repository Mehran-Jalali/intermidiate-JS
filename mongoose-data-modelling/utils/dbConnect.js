const mongoose = require("mongoose");

//the name of database will be blog-app

mongoose
  .connect(
    "mongodb+srv://mehranjalali:<password>@mongodb-demo.xlmspit.mongodb.net/blog-app?retryWrites=true&w=majority&appName=mongodb-demo"
  )
  .then(() => {
    console.log("DB connected successfully☺");
  })
  .catch((err) => {
    console.log(err.message);
  });

//export time
module.exports = mongoose;
