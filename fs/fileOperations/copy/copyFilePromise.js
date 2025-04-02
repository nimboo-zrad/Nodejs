import fs from 'fs';
const fileName = './file';
const destinationPath = './destination3';
const secondDestinationPath = './destination4';

//async/await:

async function copyMe(file, dest){
  try{
    await fs.promises.copyFile(file, dest);
    console.log('file coppied sucessfully!');
  }catch(err){
    console.error('there has been an error: ', err.message);
  }
}

copyMe(fileName, destinationPath);

//then and catch methods:

fs.promises.copyFile(fileName, secondDestinationPath)
.then(()=> console.log('file has coppied!'))
.catch(err => console.error('there is a problem!: ', err.message));