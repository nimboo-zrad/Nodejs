import {readFile} from 'fs/promises';
import fs from 'fs';

async function readMyFile(path){
  try{
    const data = await readFile(path, 'utf8');
    return data;
  }catch(err){
    console.error('Error occured!: ', err);
  }
}

async function readMe(path){
  try{
    const data = await fs.promises.readFile(path, 'utf8');
    return data;
  }catch(err){
    console.error("Error occured!", err);
  }
}

(async ()=>{
  const data = await readMyFile('./example.txt');
  const data2 = await readMe('./example.txt');
  console.log('Using destructuring to import promise-based version of fs: ', data);
  console.log('Using dot notation to access promise-based version of fs: ', data2);
})();