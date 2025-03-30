import fs from 'fs';
const fileName = './example.txt';
const encoding = 'utf8';

//Async/await:

async function readMe(file, enc){
  try{
  const data = await fs.promises.readFile(file, enc);
  return data;
  }catch(err){
    console.error('Error occured!: ', err);
  }
}

(async ()=>{
  const dataAsync = await readMe(fileName, encoding);
  console.log(`This is the inside of ${fileName} using promises and async/await: ${dataAsync}`);
})();

//then and catch:

fs.promises.readFile(fileName, encoding).then(data =>{
  console.log(`This is inside of ${fileName} using promises and then & catch method: ${data}`);
}).catch(err=>{
  console.error(err);
})