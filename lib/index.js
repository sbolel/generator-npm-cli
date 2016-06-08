'use strict';

const packageInfo = require('../package.json');

module.exports = {
  version: packageInfo.version || 0,
  name: packageInfo.name || 'generator-package',
};
