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
    name: 'color',
    message: 'Enter a color keyword (OR a hexadecimal number):',
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
    message: 'Enter a color keyword (OR a hexadecimal number):',
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
