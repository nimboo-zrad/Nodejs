import fs from 'fs';
const dirName = './';

const dirList = fs.readdirSync(dirName);
dirList.forEach((val, indx) => console.log(indx + 1,'.',val));
