const express = require('express');
const shelljs = require('shelljs');
const chalk = require('chalk');
const paths = require('../paths');

const app = express();
app.use(express.static(paths.storybookOutputPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * ping
 */
app.use('/ping', (req, res) => {
  res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(paths.storybookOutputServePath);
});
app.get('/*', function (req, res) {
  res.sendFile(paths.storybookOutputServePath);
});
/**
 * To handle 404
 */
app.use('*', (req, res) => {
  res.send('not_found');
});
function main() {
  try {
    const port = process.env.PORT || '8080';
    app.listen(port, (err) => {
      if (err) {
        console.log(chalk.red('Error when starting server ', err));
      } else {
        console.log(
          chalk.yellow(
            `Storybook is running at                   `,
            chalk.cyan.bold(`http://localhost:${port}/`)
          )
        );
        const script = `start http://localhost:${port}/`;
        shelljs.exec(script + ' --color=always');
      }
    });
  } catch (err) {
    console.log('Error when starting server ', err);
  }
}
// Starting server
main();
