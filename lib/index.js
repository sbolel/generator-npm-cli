#!/usr/bin/env node
'use strict';

var _package = require('../package.json');

module.exports = {
  version: _package.version || 0,
  name: _package.name || 'generator-package'
};