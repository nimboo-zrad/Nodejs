import fs from 'fs';

const dataSync = fs.readFileSync('example.txt', 'utf8');

console.log('This is the text using readFileSync: ', dataSync);

fs.readFile('example.txt', 'utf8', (err, data)=>{
  if(err) throw err;
  console.log('This is the text using readFile: ', data);
});


