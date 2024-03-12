//fs is referred to file system
const fs = require("fs");

//-----------------------------------------------------------------
//create file
//writeFile("fileNaem.type" , "What we write in that file", function(){})
//-----------------------------------------------------------------

// fs.writeFile("index.html", `Welcome to my html file`, function (err) {
//   if (err) console.log(err);
//   else console.log(`file created`);
// });

//-----------------------------------------------------------------
//read file
//readFileSync("fileNaem.type")
//readFile("fileNaem.type", function(err.data){} )
//-----------------------------------------------------------------

// console.log(fs.readFileSync("index.html").toString());
// console.log(
//   fs.readFile("index.html", function (err, data) {
//     if (err) console.log(err);
//     else console.log(data.toString());
//   })
// );

//-----------------------------------------------------------------
//rename file
//rename("oldName", "newName", function(){})
//-----------------------------------------------------------------

// fs.rename("source.html", "index.html", function (err) {
//   if (err) console.log(err);
//   else console.log("file has been renamed!!");
// });

//-----------------------------------------------------------------
//copy file
//copyFile("the file we wanna copy", "the target file", function(err){})
//-----------------------------------------------------------------

// fs.copyFile("index.html", "source.html", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file has been copied!!");
//   }
// });

//-----------------------------------------------------------------
//append to a file
//appendFile("targetFile", "what we wanna append", function(err){})
//-----------------------------------------------------------------

// fs.appendFile("index.html", "this is a secret", (err) => {
//   if (err) console.log(err);
//   else console.log("codes has been appendent");
// });

//-----------------------------------------------------------------
//truncate a file
//append("targetFile", Numbers of charechters , function(err){})
//-----------------------------------------------------------------

// fs.truncate("source.html", 12, (err) => {
//   if (err) console.log(err);
//   else console.log("file has been truncated");
// });

//-----------------------------------------------------------------
//stats of a file   stats means getting info
//stat("targetFile", function(err){})
//-----------------------------------------------------------------

// fs.stat("fs.js", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

//-----------------------------------------------------------------
//delete a file
//unlink("targetFile", function(err){})
//-----------------------------------------------------------------

// fs.unlink("source.html", (err) => {
//   if (err) console.log(err);
//   else console.log("file has been deleted");
// });

//////////////////////////////////////////////////////////////////////
// make a folder         mkdir("folderName", (err)=>{})
// read folder           readdir("targetFolder" , (err,folder)=>{})
// delete folder         rmdir("targetFolder", (err)=>{})
