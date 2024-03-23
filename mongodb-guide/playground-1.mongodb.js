// we wanna interact with maongo database in vsCode so ==> use(nameOfDb)

use("school");

// db.collectionName.find() method

db.students.find({ city: "New York" });

// create new student

db.students.insertOne({ name: "kata Upton", city: "Las Vegas" });

db.students.find();
