import fs from 'fs';
const fileName = './example.txt';
const encoding = 'utf8';

fs.readFile(fileName, encoding, (err, data)=>{
  if(err) throw err;
  console.log(`This is inside of ${fileName} using readFile without promises: ${data}`);
});


