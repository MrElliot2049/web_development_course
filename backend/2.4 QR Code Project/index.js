import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
inquirer
  .prompt([
    {
      message: "Enter an URL", name: "url"
    },
  ])
  .then((answers) => {
    const qr_img = qr.image(answers.url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile('url.txt', answers.url, (err) => {
      if (err) throw err;
      console.log('URL saved to url.txt');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error('Prompt could not be rendered in the current environment.');
    } else {
      // Something else went wrong
      console.error('An error occurred:', error);
    }
  });