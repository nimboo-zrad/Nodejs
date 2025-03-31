import fs from 'fs';
const dirName = './';

fs.readdir(dirName, (err, data)=>{
  if (err) throw err;
  data.forEach((val, indx) => console.log(indx + 1,'.',val));
})