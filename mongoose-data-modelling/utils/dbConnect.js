const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mehranjalali7676:048wxpMgZAkL3CyJ@mongodb-demo.xlmspit.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-demo"
  )
  .then(() => {
    console.log("DB connected successfully☺");
  })
  .catch((err) => {
    console.log(err.message);
  });

//export time
module.exports(mongoose);
