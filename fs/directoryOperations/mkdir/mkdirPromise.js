import fs from 'fs';
const dirName3 = 'testDir3';
const dirName4 = 'testDir4';

//async/await:

async function createDir(dir){
  try{
    await fs.promises.mkdir(dir);
    console.log('directory created!');
  }catch(err){
    console.error('there has been an error: ', err.message);
  }
}

createDir(dirName3);

//then & catch methods: 

fs.promises.mkdir(dirName4)
.then(()=> console.log('directory created!'))
.catch(err => console.error('there has been an error: ', err.message));