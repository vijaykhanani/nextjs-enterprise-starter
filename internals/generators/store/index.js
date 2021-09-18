/**
 * Store Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new mobx store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your store name?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = `${constants.root}store/`;

    actions.push(
      {
        type: 'add',
        templateFile: './store/index.ts.hbs',
        path: `${pathToWrite}{{camelCase name}}/index.ts`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './store/test.ts.hbs',
        path: `${pathToWrite}{{camelCase name}}/{{camelCase name}}.test.ts`,
        abortOnFail: true,
      }
    );
    actions.push({
      type: 'prettify',
      path: '/store/',
    });
    return actions;
  },
};
