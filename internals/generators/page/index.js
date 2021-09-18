/**
 * Page Generator
 */

const constants = require('../constants');
const lengthValidator = require('../utils/lengthValidator');

module.exports = {
  description: 'Creating new react page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your page name?',
      validate: (value) => {
        const maxLength = 15;
        if (/.+/.test(value)) {
          return lengthValidator(value, maxLength)
            ? `A page name length is greater than maxLength- ${maxLength}`
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'component',
      default: 'ComponentName',
      message: 'What is your Component Name to be called?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = `${constants.root}pages/`;

    actions.push({
      type: 'add',
      templateFile: './page/index.tsx.hbs',
      path: `${pathToWrite}{{camelCase name}}/index.tsx`,
      abortOnFail: true,
    });
    actions.push({
      type: 'prettify',
      path: '/pages/',
    });
    return actions;
  },
};
