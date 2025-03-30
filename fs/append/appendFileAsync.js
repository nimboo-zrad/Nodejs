import fs from 'fs';
const file = './file_1.txt';
const appendData = "This is the third append!\n";

async function appendMe(file, message){
  try{
    await fs.promises.appendFile(file, message);
    console.log("data appended!");
  }catch(err){
    console.error('There has been an error: ', err);
  }
}

(async ()=>{
  await appendMe(file, appendData);
})();