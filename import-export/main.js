// this require function connect the other file to this file
// const file1 = require("./utils");

// ↓ this way is not offered ; instead we destructure the file
// console.log(file1.greet(), file1.sum(5, 4));

const { greet, sum } = require("./utils");
greet();
sum(2, 3);
