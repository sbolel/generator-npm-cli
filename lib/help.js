'use strict';

var _index = require('./index');

module.exports = {
  showHelp: function(command) {
    switch (command) {

      case 'init':
      case 'initialise':
      case 'initialize':
        console.log('\n' +
                    '  generator-package init\n' +
                    '    Initializes in the current directory.\n');
        break;

      default:
        this.showVersion();
        console.log('Usage: generator-package <command>\n' +
                    '\n' +
                    '  Available commands are:\n' +
                    '\n' +
                    '  init\n' +
                    '    Initializes generator-package (logs "Hello World").\n' +
                    '\n' +
                    '  -h, --help\n' +
                    '    Shows this help screen. Use `generator-package <command> --help` for more detailed\n' +
                    '    help instructions.\n' +
                    '\n' +
                    '  -v, --version\n' +
                    '    Displays the current version.\n');
    }
  },
  showVersion: function() {
    console.log('\n' +
                _index.name + ' CLI\n' +
                'Version ' + _index.version + '\n');
  }
};