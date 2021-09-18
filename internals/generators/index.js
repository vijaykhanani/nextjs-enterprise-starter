/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const pageGenerator = require('./page/index.js');
const storeGenerator = require('./store/index.js');
const serviceGenerator = require('./service/index.js');
const utilGenerator = require('./utilityFunction/index.js');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('c', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('p', pageGenerator);
  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('service', serviceGenerator);
  plop.setGenerator('utils', utilGenerator);
  plop.setGenerator('u', utilGenerator);

  plop.setActionType('prettify', (answers, config) => {
    let fileName;
    if (config.path === '/api/') {
      fileName = plop.getHelper('camelCase')(answers.name) + '-api';
    } else if (config.path === '/store/') {
      fileName = plop.getHelper('camelCase')(answers.name);
    } else if (config.path === '/pages/') {
      fileName = plop.getHelper('camelCase')(answers.name);
    } else if (config.path.includes('utils')) {
      fileName = plop.getHelper('kebabCase')(answers.name);
    } else {
      fileName = plop.getHelper('properCase')(answers.name);
    }
    const folderPath = `${path.join(__dirname, '/../../src/', config.path, fileName)}`;
    try {
      execSync(`npm run prettier -- "${folderPath}\"`);
      return folderPath;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  plop.setActionType('addStore', (answers, config) => {
    const folderPath = `${path.join(__dirname, '/../../src/', config.path)}index.ts`;
    try {
      let content = fs.readFileSync(folderPath, 'utf8');
      console.log(content);
      return folderPath;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
