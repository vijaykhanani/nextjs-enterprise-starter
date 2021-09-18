const express = require('express');
const shelljs = require('shelljs');
const chalk = require('chalk');
const paths = require('../paths');

const app = express();
app.use(express.static(paths.outputPath));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.static(paths.assetPath));

/**
 * ping
 */
app.use('/ping', (req, res) => {
  res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(paths.outputServePath);
});
app.get('/*', function (req, res) {
  res.sendFile(paths.outputServePath);
});
/**
 * To handle 404
 */
app.use('*', (req, res) => {
  res.send('not_found');
});
function main() {
  try {
    const port = process.env.PORT || '5300';
    app.listen(port, (err) => {
      if (err) {
        console.log(chalk.red('Error when starting server ', err));
      } else {
        console.log(
          chalk.yellow(
            `Project is running at                   `,
            chalk.cyan.bold(`http://localhost:${port}/`)
          )
        );
        console.log(
          chalk.yellow(
            `webpack output is served from           `,
            chalk.cyan.bold(paths.outputPath)
          )
        );
        console.log(
          chalk.yellow(`Content not from webpack is served from `, chalk.cyan.bold(paths.assetPath))
        );
        console.log(
          chalk.yellow(
            `404s will fallback to                   `,
            chalk.cyan.bold(paths.outputServePath)
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
