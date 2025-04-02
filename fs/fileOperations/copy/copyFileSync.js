import fs from 'fs';
const fileName = './file';
const destinationPath = './destination2';

fs.copyFileSync(fileName, destinationPath);
console.log('file copied successfully!')