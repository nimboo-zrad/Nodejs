import fs from 'fs';
const file = './file3';
const secondFile = './file4'

//then and catch method:

fs.promises.unlink(file)
.then(()=> console.log("file deleted!"))
.catch(err => console.error('there has been an error: ',err.message));

//async/await:

async function deleteMe(file){
  try{
    fs.promises.unlink(file);
    console.log('file deleted!');
  }catch(err){
    console.error('There has been an error: ', err.message);
  }
}

deleteMe(secondFile);