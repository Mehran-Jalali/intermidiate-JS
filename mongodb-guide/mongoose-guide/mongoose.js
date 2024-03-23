// mongoose for mongodb is like express for node-JS; It's easy to use and connect in comparison  to mongodb
const mongoose = require("mongoose");

// Connect to mongoose ==> mongoose.connect("connection string")
//  we can set the name of database inside the string right after >> .mongodb.net/<DBname>?retryWrites=tr..
mongoose
  .connect(
    "mongodb+srv://mehranjalali:<password>@mongodb-demo.xlmspit.mongodb.net/academy?retryWrites=true&w=majority&appName=mongodb-demo"
  )
  .then(() => {
    console.log("DB connected successfully☺");
  })
  .catch((err) => {
    console.log(err.message);
  });

//In mongoose the most common codes are schema and model

//1. **CRUSIAL** Schema ==> new mongoose.Schema({})
// name
// city
// course
// age

const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  course: Array,
  isMarried: Boolean,
  age: Number,
});

//2. **CRUSIAL** Model : Model helps us to create collection in mongoose
// const NameOfCollection = new mongoose.model('NameOfCollection',SchemaName)

const Tutee = new mongoose.model("Tutee", studentSchema);

//  **CRUSIAL**  To create documents just ==> ModelName.create({}) promise

Tutee.create({
  name: "Kally",
  city: "Düsseldorf",
  course: ["CSS", "Python", "JS"],
  isMarried: true,
  age: 27,
})
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));
