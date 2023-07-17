const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js');

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for your logo text:",
    validate: (input) => input.length <= 3 || 'Please enter up to 3 characters.',
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal number for your text color:",
    default: "black",
  },
  {
    type: "list",
    name: "logoShape",
    message: "Select your logo shape:",
    choices: ["triangle", "square", "circle"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "Enter a color or hexadecimal number for your logo color:",
    default: "blue",
  },
];

function init() {
  inquirer.prompt(questions).then(function(data) {
    const fileName = "logo.svg";
    const shape = makeShape(data.logoShape);
    shape.setColor(data.logoColor);
    const svgContent = generateSVG(shape, data.text, data.textColor);
    writeToFile(fileName, svgContent);
  });
}

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

function generateSVG(shape, text, textColor) {
  const shapeRender = shape.render();
  let textPositionX = '';
  let textPositionY = '';

  if (shape instanceof Triangle) {
    textPositionX = '50%'; // Center horizontally for triangle shape
    textPositionY = '40%'; // Center vertically for triangle shape
  } else if (shape instanceof Circle) {
    textPositionX = '35%'; // Center horizontally for circle shape
    textPositionY = '53%'; // Center vertically for circle shape
  } else if (shape instanceof Square) {
    textPositionX = '50%'; // Center horizontally for square shape
    textPositionY = '50%'; // Center vertically for square shape
  }

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
      ${shapeRender}
      <text x="${textPositionX}" y="${textPositionY}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">
        ${text}
      </text>
    </svg>
  `;
  return svgContent;
}

function makeShape(shapeType) {
  switch (shapeType) {
    case 'triangle':
      return new Triangle();
    case 'circle':
      return new Circle();
    case 'square':
      return new Square();
    default:
      throw new Error(`Invalid shape type: ${shapeType}`);
  }
}

init();
