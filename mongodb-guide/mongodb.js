const { MongoClient } = require("mongodb");

//**CRUSIAL** we need to have connection string from our cluster that mongodb.com gave before
//`mongodb+srv://mehranjalali7676:<password>@mongodb-demo.xlmspit.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-demo`

//we create a variable called url
const url =
  "mongodb+srv://mehranjalali7676:<password>@mongodb-demo.xlmspit.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-demo";

//now we need to create a new client for our data base and pass the url
//==> new MongoClient(url)

const client = new MongoClient(url);

//now we need an async function to try or catch the err connection

const dbConnection = async () => {
  try {
    //***CONNECT TO DATA BASE==connect() method===  clientName.connect()

    await client.connect();
    console.log("DB connected successfully☺");

    //**CRUSIAL** Create new DB ==> clientName.db("nameOfDb") method

    const doc = client.db("school");

    // Create collection for our document ==> doc.collection("nameOfCollection") method

    const students = doc.collection("students");

    // Create documents   await collectionName.insertOne({}) method --One

    const student1 = await students.insertOne({
      name: "Marcus hutchins",
      city: "New York",
    });

    // Create documents   await collectionName.insertMany([{}]) method --Many

    const student2 = await students.insertMany([
      { name: "John Doe", city: "Los Angeles" },
      { name: "Kate Upton", city: "Los Angeles" },
    ]);

    //**CRUSIAL**  Find all students   await  collectionName.find() method

    const allStudent = await students.find();

    // cause It will find all the curser and we just need the array we append toArray() to the find()

    const allStudent1 = await students.find().toArray();

    //**CRUSIAL**  if we wanna find a specific data and querying data ==>  await collectionName.findOne({name:"example"}) method

    const foundStudent2 = await students.findOne({ name: "Marcus Hutchins" });

    const foundStudent3 = await students.findOne({ city: "Los Angeles" });

    const foundStudent4 = await students
      .find({ city: "Los Angeles" })
      .toArray();

    console.log(foundStudent4);

    //**CRUSIAL** if you wanna update document  await collectionName.updateOne({find/filter the data}, {$set:{name : "example"}}) method

    const updatedStudent = await students.updateOne(
      { name: "Marcus hutchins" },
      {
        $set: {
          name: "Marcus Hutchins",
        },
      }
    );
    console.log(updatedStudent);

    //**CRUSIAL** if you wanna delete a document  await collectionName.deleteOne({find/filter the data} ) method

    const deletedStudent = await students.deleteOne({ city: "Los Angeles" });

    console.log(deletedStudent);
    console.log(await students.find().toArray());
  } catch (err) {
    console.log(err);
  }
};

dbConnection();
