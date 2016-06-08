'use strict';

const index = require('./index');

const help = {
  showHelp: (command) => {
    switch (command) {

      case 'init':
      case 'initialise':
      case 'initialize':
        console.log('\n' +
                    '  generator-package init\n' +
                    '    Initializes in the current directory.\n');
        break;

      default:
        help.showVersion();
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
    };
  },
  showVersion: () => {
    console.log('\n' +
                index.name + ' CLI\n' +
                'Version ' + index.version + '\n');
  },
};

module.exports = help;
