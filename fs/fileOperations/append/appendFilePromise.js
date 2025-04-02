import fs from 'fs';
const file = './file.txt';
const appendData = "This is the third append!\n";
const appendSecondData = "This is the fourth append!\n"

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

//then & catch method:

fs.promises.appendFile(file, appendSecondData).then(()=>console.log('data appended!')).catch(err=> console.error('there has been an error: ', err));