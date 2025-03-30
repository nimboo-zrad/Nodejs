import fs from 'fs';
const fileName = './example.txt';
const third_message = 'this will override the first and second message!\n';

async function writeMe(file){
  try{
    await fs.promises.writeFile(file, third_message);
    console.log('The file has written successfuly!');
  }catch(err){
    console.error("There has been an error: ", err);
  }
}

writeMe(fileName);