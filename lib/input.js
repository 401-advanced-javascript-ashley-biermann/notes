'use strict';

const minimist = require('minimist');
const parsedArgs = minimist(process.argv.slice(2));

const flagCommand = Object.keys(parsedArgs)[1];
const payloadEntry = Object.values(parsedArgs)[1];

const actions = ['add', 'delete', 'list'];

// console.log('flagCommand: ' + flagCommand, 'payloadEntry: ' + payloadEntry);

// for (let key in parsedArgs) {
//   // console.log(key);
// }

class Input {
  constructor() {
    // console.log(payloadEntry);
    this.action = this.getAction(flagCommand);
    this.payload = this.payload(payloadEntry);
  }

  getAction(command = '') {
    let action = '';
    switch (command) {
      case 'a':
        action = 'add';
        break;
      case 'd':
        action = 'delete';
        break;
      case 'l':
        action = 'list';
        break;
      default:
        action = undefined;
    }
    return action;
  }

  payload(payload = '') {
    return payload ? payload : undefined;
  }
}

module.exports = Input;

