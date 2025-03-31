import fs from 'fs';
const file = 'file1';

fs.unlink(file, err => {
  if(err) throw err;
  console.log('file deleted!');
})