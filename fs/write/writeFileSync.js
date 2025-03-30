import fs from 'fs';
const fileName = './example.txt'
const second_message = 'This text will override the first message\n'

fs.writeFileSync(fileName, second_message);
console.log('The file has written successfuly!');