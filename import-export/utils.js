// console.log("Hello my users!");

// module literal
// It Makes an object with a key(msg) & value("blahblah")

// module.exports.msg = "Welcome to my website";
// module.exports.user = "Marcus Hutchins";
// module.exports.city = "London";

//exports Object

// module.exports = {
//   product: "chicken",
//   price: 5.23,
//   desc: "meat",
// };

//export functions ==> module.exports = fncName

const greet = () => {
  console.log("What's Popin??!");
};

const sum = (a, b) => {
  console.log(a + b);
};

module.exports = {
  greet: greet,
  sum: sum,
};
