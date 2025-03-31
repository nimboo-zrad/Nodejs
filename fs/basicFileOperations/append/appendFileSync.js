import fs from 'fs';
const file = './file.txt';
const appendData = "This is the second append!\n";

fs.appendFileSync(file, appendData);
console.log("data appended!");