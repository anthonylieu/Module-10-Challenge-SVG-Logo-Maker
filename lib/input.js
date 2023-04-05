const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colors = require('./colors.json');

async function getInquirer() {
  const { default: inquirer } = await import('inquirer');
  return inquirer;
}

async function promptUser() {
  const inquirer = await getInquirer();

  const textQuestion = {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters:',
    validate: function (input) {
      if (input.length > 3) {
        return 'Please enter no more than 3 characters';
      }
      return true;
    },
  };

  const colorQuestion = {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number:',
    filter: function (input) {
      if (input.match(hexRegex)) {
        return input;
      }
      return Object.prototype.hasOwnProperty.call(colors, input)
        ? colors[input]
        : input;
    },
  };

  const shapeQuestion = {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  };

  const shapeColorQuestion = {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number:',
    filter: function (input) {
      if (input.match(hexRegex)) {
        return input;
      }
      return Object.prototype.hasOwnProperty.call(colors, input)
        ? colors[input]
        : input;
    },
  };

  const answers = await inquirer.prompt([
    textQuestion,
    colorQuestion,
    shapeQuestion,
    shapeColorQuestion,
  ]);

  return answers;
}

module.exports = promptUser;