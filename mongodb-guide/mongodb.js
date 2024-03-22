const { MongoClient } = require("mongodb");

//**CRUSIAL** we need to have connection string from our cluster that mongodb.com gave before
//`mongodb+srv://mehranjalali:<password>@mongodb-demo.xlmspit.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-demo`

//we create a variable called url
// const url =
//   "mongodb+srv://mehranjalali:<password>@mongodb-demo.xlmspit.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-demo";

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

    // Create documents collectionName.insertOne({}) method --One

    const student1 = await students.insertOne({
      name: "Marcus hutchins",
      city: "New York",
    });

    // Create documents collectionName.insertMany([{}]) method --Many

    const student2 = await students.insertMany([
      { name: "John Doe", city: "Los Angles" },
      { name: "Kate Upton", city: "West Wood" },
    ]);

    //**CRUSIAL**  Find all students collectionName.find() method

    const allStudent1 = await students.find();

    // cause It will find all the curser and we just need the array we append toArray() to the find()

    const allStudent = await students.find().toArray();

    //**CRUSIAL**  if we wanna find a specific data and querying data ==> collectionName.findOne({name:"example"}) method

    const foundStudent = await students.findOne({ name: "Marcus hutchins" });

    console.log(foundStudent);
  } catch (err) {
    console.log(err);
  }
};

dbConnection();
