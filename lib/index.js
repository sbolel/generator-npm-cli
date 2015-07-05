var packageInfo = require('../package.json'),
    chalk = require('chalk');

module.exports = {
  version: packageInfo.version || 0,
  name: packageInfo.name || 'generator-package'
};
