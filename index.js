import inquirer from "inquirer"
import * as qr from "qr-image"
import {createWriteStream, writeFile} from "fs"

const question = {
    "type": "input",
    "name": "URL",
    "message": "Enter the URL: ",
}
 
inquirer.prompt(question)
  .then(answers => {
    const url = answers["URL"];
    writeFile("url.txt", `${url}`, (err)=>{
        if (err) throw err;
        console.log("success")
    })
    var qr_img = qr.image(`${url}`, {type: "png"})
    qr_img.pipe(createWriteStream(`${url}.png`))
  })
  .catch(error => {
    console.error(error);
  });
