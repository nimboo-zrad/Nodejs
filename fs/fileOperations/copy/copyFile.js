import fs from 'fs';
const fileName = './file';
const destinationPath = './destination1';

fs.copyFile(fileName, destinationPath, (err)=>{
  if(err) throw err;
  console.log('file copied successfully!');
})