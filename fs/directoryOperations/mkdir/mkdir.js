import fs from 'fs';
const dirName1 = 'testDir1';

fs.mkdir(dirName1, (err)=>{
  if(err) throw err;
  console.log('directory created!');
})