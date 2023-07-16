const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {generateSVG, makeShape} = requier('./lib/makeSVG');


//WHEN I am prompted for text...

const questions = [
    {//THEN I can enter up to three characters.
        type: "input",
        name: "text",
        message: "Enter up to 3 chatacters for your logo text:",
    },
    {//WHEN I am prompted for the text color. THEN I can enter a color keyword (OR a hexadecimal number).

        type: "input",
        name: "textColor",
        message: "Enter a color keyword or hexixidecimal number for your text color:",
    },
    { //WHEN I am prompted for a shape...THEN I am presented with a list of shapes to choose from: circle, triangle, and square
        type: "list",
        name: "logoShape",
        message: "Select your logo shape:",
        choices: ["triangle", "square", "circle",]
    },
    {  // WHEN I am prompted for the shape's color. THEN I can enter a color keyword (OR a hexadecimal number)
        type: "input",
        name: "logoColor",
        message: "Enter a color or hexidecimal number for your logo color:",
    },
]
//WHEN I have entered input for all the prompts...THEN an SVG file is created named `logo.svg`
function writetoFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(filenaame, content, function(error) {
        if(error) {
            return console.log(error);
        };
    });
//AND the output text "Generated logo.svg" is printed in the command line.
function init( {
    inquirer.prompt(questions).then(function (data)) {
        var fileName "logo.svg";
        writetoFile(fileName, data);
    });
}
//function call to app
init();
