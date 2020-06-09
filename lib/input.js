'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  console.log(args);
  this.command = this.getCommand(args.a);
  this.payload = this.payload(args.n);
}
//getCommand needs to be a switch to tell which -a -d -l is coming from the terminal, it needs to return command = 'add' 'delete' or 'list'
Input.prototype.getCommand = function (command = '') {
  const commands = ['add', 'delete', 'list'];
  
  return commands.includes(command.toLowerCase()) ? command.toLowerCase() : 'try "add", "delete", or "list"';
}

    // switch (entry) {
    //   case entry.a:
    //     this.command += 'add';
    //     break;
    //   case entry.d:
    //     this.command += 'delete';
    //     break;
    //   case entry.l:
    //     this.command += 'list';
    //     break;
    //   default: undefined;
    // }

Input.prototype.payload = function (payload = '') {
  return payload ? payload : undefined;
}

module.exports = Input;
