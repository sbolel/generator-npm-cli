# `npm` module with a CLI

Author: Sinan Bolel <sinanbolel@gmail.com>

An _in-progress_ generator template for a global npm module with command-line tools (CLI).

Requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.org/), which can both be installed by following the instructions on https://nodejs.org/. Installing Node.js also installs npm.

> The command line tools require Node.js version 0.10.0 or greater.

Once you have Node.js and npm installed, you can install the command-line tools via npm:

#### Building from source

`git clone https://bitbucket.org/sbolel/generator-npm-cli-module` - Clone repo & `cd` into directory.

`npm build` - Run this command in the cloned directory to build from the source (runs `npm install -g ./`).

## Package details

### Dependencies

    "chalk": "^1.1.0",
    "debug": "^2.2.0",
    "express": "^4.13.0",
    "firebase": "^2.2.7",
    "firebase-admin": "^2.1.1",
    "firebase-token-generator": "^2.0.0",
    "optimist": "^0.6.1",
    "prompt": "^0.2.14",
    "q": "^1.4.1",
    "replace": "^0.3.0",
    "request": "^2.58.0",
    "request-cookies": "^1.1.0"

### devDependencies

    "firebase-tools": "^1.2.0",
    "grunt": "^0.4.5",
    "grunt-bump": "^0.3.1",
    "grunt-contrib-connect": "^0.10.1",
    "grunt-contrib-copy": "^0.8.0",
    "grunt-contrib-uglify": "^0.9.1",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-jsdoc": "^0.6.7",
    "grunt-open": "^0.2.3",
    "grunt-replace": "^0.9.2",
    "grunt-shell": "^1.1.2",
    "grunt-update-json": "^0.2.1",
    "grunt-wiredep": "^2.0.0",
    "load-grunt-tasks": "^3.2.0",
    "nodemon": "^1.3.7",
    "wiredep": "^2.2.2"


## License

```
The MIT License (MIT)

Copyright (c) 2015 Sinan Bolel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```