import fs from 'fs';
const fileName = './example.txt';
const third_message = 'this will overwrite the first and second message!\n';
const fourth_message = 'if the message is shorter than the previous text it will replace the first characters only!!!\n';

//async/await:

async function writeMe(file){
  try{
    await fs.promises.writeFile(file, third_message);
    console.log('The file has written successfuly!');
  }catch(err){
    console.error("There has been an error: ", err);
  }
}

writeMe(fileName);

//then & catch method:

fs.promises.writeFile(fileName, fourth_message).then(()=> console.log("The file has written successfuly!")).catch(err => {
  console.error("there has been an error: ", err);
});