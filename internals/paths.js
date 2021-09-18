const path = require('path');

const root = path.resolve(__dirname, '../');
const configPahs = {
  root,
  storybookOutputPath: path.resolve(root, './storybook-static'),
  storybookOutputServePath: path.resolve(root, './storybook-static/index.html'),
  tsConfigPath: path.resolve(root, './tsconfig.json'),
};
module.exports = configPahs;

