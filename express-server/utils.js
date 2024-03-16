const fs = require("fs");

//Create a directory
const createDir = (dirName) => {
  //check if directory is exist or not
  if (!fs.existsSync(dirName)) {
    //create the folder
    fs.mkdirSync(dirName);
  }
};

//because we save our post as a json file so It's better to have default one and
// to prevent to save it like an object.js we should Ctrl+S in ''
const defaultFile =
  '[{"id": "2024","title": "html","url": "http://localhost:8080/posts","description": "the best express ever",}]';

//Create a file
const createFile = (file) => {
  //check if the file is exist or not
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, defaultFile);
  }
};

//export these two fns

module.exports = {
  createDir,
  createFile,
};
