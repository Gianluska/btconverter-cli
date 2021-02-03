const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'value',
        type: 'input',
        message: 'Enter the amount of BTC:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Pleas enter the amount of BTC.';
          }
        }
      },
    ];
    return inquirer.prompt(questions);
  },
};