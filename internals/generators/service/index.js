/**
 * Page Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new react service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your service name?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = constants.root;

    actions.push({
      type: 'add',
      templateFile: './service/index.ts.hbs',
      path: `${pathToWrite}api/{{camelCase name}}-api/index.ts`,
      abortOnFail: true,
    });
    actions.push({
      type: 'prettify',
      path: '/api/',
    });
    return actions;
  },
};
