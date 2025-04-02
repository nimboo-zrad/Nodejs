import fs from 'fs';
const file = 'file2';

fs.unlinkSync(file);
console.log('file deleted!');