/**
 * Component Generator
 */

const constants = require('../constants');
const lengthValidator = require('../utils/lengthValidator');

module.exports = {
  description: 'Creating new react components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
      validate: (value) => {
        const maxLength = 15;
        if (/.+/.test(value)) {
          return lengthValidator(value, maxLength)
            ? `A component name length is greater than maxLength-${maxLength}`
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      default: true,
      name: 'wantTests',
      message: 'Would you like to create a test file?',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Would you like to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantCss',
      default: false,
      message: 'Would you like to create a corresponding stylesheet file?',
    },
    {
      type: 'confirm',
      name: 'wantStory',
      default: false,
      message: 'Would you like to create a corresponding story?',
    },
    {
      type: 'confirm',
      name: 'wantLazy',
      default: false,
      message:
        'Would you like to create a corresponding lazy file (a file that lazy-loads your component out of the box and enables code splitting: https://reactjs.org/docs/code-splitting.html#code-splitting) with each component you generate?',
    },
    {
      type: 'input',
      name: 'path',
      default: 'components/',
      message: 'Enter path :',
    },
  ],
  actions: function (data) {
    const actions = [];
    const pathToWrite = `${constants.root}${data.path}`;
    actions.push({
      type: 'add',
      templateFile: './component/index.tsx.hbs',
      path: `${pathToWrite}{{pascalCase name}}/index.tsx`,
      abortOnFail: true,
    });

    if (data.wantTests) {
      actions.push({
        type: 'add',
        templateFile: './component/test.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        abortOnFail: true,
      });
    }
    if (data.wantCss) {
      actions.push({
        type: 'add',
        templateFile: './component/index.css.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.css`,
        abortOnFail: true,
      });
    }
    if (data.wantLazy) {
      actions.push({
        type: 'add',
        templateFile: './component/index.lazy.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.lazy.tsx`,
        abortOnFail: true,
      });
    }
    if (data.wantStory) {
      actions.push({
        type: 'add',
        templateFile: './component/index.stories.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
        abortOnFail: true,
      });
    }
    actions.push({
      type: 'prettify',
      path: '/components/',
    });
    return actions;
  },
};
