import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

const question = {
    "type": "input",
    "name": "URL",
    "message": "Enter the URL: ",
}
 
inquirer.prompt(question)
  .then(answers => {
    const url = answers["URL"];
    fs.writeFile("url.txt", `${url}`, (err)=>{
        if (err) throw err;
        console.log("success")
    })
    var qr_img = qr.image(`${url}`, {type: "png"})
    qr_img.pipe(fs.createWriteStream(`${url}.png`))
  })
  .catch(error => {
    console.error(error);
  });
