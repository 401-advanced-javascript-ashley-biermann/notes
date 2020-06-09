'use strict';

const args = process.argv.slice(2);
// console.log(args);

class Input {
  constructor() {
    this.action = this.getAction(args[0]);
    this.payload = this.payload(args[1]);
  }

  getAction(command = '') {
    const commands = ['-a', '-d', '-l']; // FIXME: this is intended, now, to go in a separate validator function
    let action = '';
    switch (command) {
      case '-a':
        action = 'add';
        break;
      case '-d':
        action = 'delete';
        break;
      case '-l':
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


// function Input() {
//   this.action = this.getAction(args[0]);
//   this.payload = this.payload(args[1]);
// }

// looked up switch statement syntax on W3Schools
// Input.prototype.getAction = function (command = '') {
//   const commands = ['-a', '-d', '-l']; // FIXME: this is intended, now, to go in a separate validator function
//   let action = '';
//   switch (command) {
//     case '-a':
//       action = 'add';
//       break;
//     case '-d':
//       action = 'delete';
//       break;
//     case '-l':
//       action = 'list';
//       break;
//     default:
//       action = undefined;
//   }
//   return action;
// }

// Input.prototype.payload = function (payload = '') {
//   return payload ? payload : undefined;
// }
