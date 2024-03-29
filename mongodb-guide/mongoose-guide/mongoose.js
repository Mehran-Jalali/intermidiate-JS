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
  name: "Maggie",
  city: "Los Santos",
  course: ["Computer science", "English", "Machine learning"],
  isMarried: false,
  age: 21,
})
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));

//  **CRUSIAL** find all documents in our model ==> modelName.find() promise

Tutee.find()
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));

//  **CRUSIAL** find specific documents in our model ==> modelName.find({"properties"}) promise

Tutee.find({ isMarried: false })
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));

//  **CRUSIAL** find specific documents by Id in our model ==> modelName.findById("_id number") promise

Tutee.findById("65ff5a03cbee3777b73b669e")
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));

//  **CRUSIAL** Update specific documents   in our model ==> modelName.findById("_id number",{$set: {"properties"}}) promise

Tutee.findByIdAndUpdate("65ff5a03cbee3777b73b669e", {
  $set: { isMarried: true },
})
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));

//OR~OR~OR~OR~OR~

Tutee.findOneAndUpdate({ name: "Maggie" }, { age: 22 }, { new: true })
  .then((tutee) => console.log(tutee))
  .catch((err) => console.log(err));
