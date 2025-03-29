import fs from 'fs';
import {readFileSync as rfs, readFile as rf} from 'fs';
import {readFile as rfp} from 'fs/promises';

// rfs!

const data = rfs('example.txt', 'utf8');
console.log('Using readFileSync: ', data);

//rf!

rf('example.txt', 'utf8', (err, data)=>{
  if(err) throw err;
  console.log('Using readFile: ', data);
});

//rfp!

async function readMe(path){
  try{
  const data = await rfp('example.txt', 'utf8');
  return data;
  }catch(err){
    console.error('Error occured!: ', err);
  }
}

async function readMe2(path){
  try{
    const data = await fs.promises.readFile(path, 'utf8');
    return data;
  }catch(err){
    console.error('Error occured!: ', err);
  }
}

(async ()=>{
  const dataAsync = await readMe('./example.txt');
  const dataAsync2 = await readMe2('./example.txt');
  console.log('Using destructuring to import promise-based version of fs:', dataAsync);
  console.log('Using dot notation to access promise-based version of fs: ', dataAsync2);
})();