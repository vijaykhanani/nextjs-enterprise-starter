const path = require('path');

const root = path.resolve(__dirname, '../');
const configPahs = {
  root,
  storybookOutputPath: path.resolve(root, './storybook-static'),
  storybookOutputServePath: path.resolve(root, './storybook-static/index.html'),
  tsConfigPath: path.resolve(root, './tsconfig.json'),
};
module.exports = configPahs;

//  If everything passes... Now we can commit
//  echo '🤔🤔🤔🤔... Alright... Code looks good to me... Trying to build now. 🤔🤔🤔🤔'
//  npm run build ||
//  (
//      echo '❌👷🔨❌ Better call Bob... Because your build failed ❌👷🔨❌
//              Next build failed: View the errors above to see why.
//      '
//      false;
//  )
