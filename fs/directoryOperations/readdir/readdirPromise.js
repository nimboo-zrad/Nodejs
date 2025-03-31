import fs from 'fs';
const dirName = './';

//async/await:

async function readDir(dir){
  try{
    const data = await fs.promises.readdir(dir);
    return data;
  }catch(err){
    console.error("There has been an error: ", err.message);
  }
}

(async ()=> {
  const data = await readDir(dirName);
  data.forEach((val, indx)=>{
  console.log(indx + 1,'.', val);
})
})();


//then & catch methods:

fs.promises.readdir(dirName)
.then(data => data.forEach((val, indx)=>{
  console.log(indx + 1,'.', val);
}))
.catch(err => console.error('There has been an error: ', err.message));