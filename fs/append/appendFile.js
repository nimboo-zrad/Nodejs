import fs from 'fs';
const file = './file_1.txt';
const appendData = "This is the first append!\n";

fs.appendFile(file, appendData, (err)=>{
  if(err) throw err;
  console.log("data appended!");
})