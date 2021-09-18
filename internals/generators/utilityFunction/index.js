/**
 * Utlity Generator
 */

const constants = require('../constants');
const lengthValidator = require('../utils/lengthValidator');

module.exports = {
  description: 'Creating new Util',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your util name?',
      validate: (value) => {
        const maxLength = 20;
        if (/.+/.test(value)) {
          return lengthValidator(value, maxLength)
            ? `A component name length is greater than maxLength- ${maxLength}`
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'path',
      default: 'utils/',
      choices: ['utils/'],
      // choices: ['utils/', 'library/utils/', 'library/theme/utils/'],
      message: 'Choose the path :',
    },
  ],
  actions: function (data) {
    const actions = [];
    console.log();
    const pathToWrite = `${constants.root}${data.path}`;
    console.log(`${pathToWrite}{{kebabCase name}}/index.tsx`);
    actions.push(
      {
        type: 'add',
        templateFile: './utilityFunction/index.ts.hbs',
        path: `${pathToWrite}{{kebabCase name}}/{{kebabCase name}}.ts`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './utilityFunction/test.ts.hbs',
        path: `${pathToWrite}{{kebabCase name}}/{{kebabCase name}}.test.ts`,
        abortOnFail: true,
      }
    );
    actions.push({
      type: 'prettify',
      path: `/${data.path}`,
    });
    return actions;
  },
};
