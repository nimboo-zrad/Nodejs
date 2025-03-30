import fs from 'fs';
const fileName = './example.txt';
const first_message = 'this text has written in example.txt\n';

fs.writeFile(fileName, first_message, (err)=>{
  if(err) throw err;
  console.log('The file has written successfuly!');
});