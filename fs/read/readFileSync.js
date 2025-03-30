import fs from 'fs';
const fileName = './example.txt';
const encoding = 'utf8';

const data = fs.readFileSync(fileName, encoding);
console.log(`This is inside of ${fileName} using readFileSync method: ${data}`);