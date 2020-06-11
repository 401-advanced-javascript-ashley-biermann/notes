'use strict';

const minimist = require('minimist');
const parsedArgs = minimist(process.argv.slice(2));

const flagCommand = Object.keys(parsedArgs)[1];
const payloadEntry = Object.values(parsedArgs)[1];
const categoryFlag = Object.keys(parsedArgs)[2];
const category = Object.values(parsedArgs)[2];
const actions = ['add', 'delete', 'list']; // unused ... maybe move this to a module

class Input {
  constructor() {
    this.action = this.getAction(flagCommand);
    this.payload = this.payload(payloadEntry);
    this.category = this.category(category);
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
        action = '';
    }
    return action;
  }

  payload(payload = '') {
    return payload ? payload : undefined;
  }

  category(category = '') {
      return categoryFlag === 'c' ? category : 'general';
  }
}

module.exports = Input;

