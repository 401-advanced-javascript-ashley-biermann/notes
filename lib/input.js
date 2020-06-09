'use strict';

function Input() {
  const args = process.argv.slice(2);
  console.log(args);
  this.action = this.getAction(args[0]);
  this.payload = this.payload(args[1]);
}
//getCommand needs to be a switch to tell which -a -d -l is coming from the terminal, it needs to return command = 'add' 'delete' or 'list'

Input.prototype.getAction = function (command = '') {
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

Input.prototype.payload = function (payload = '') {
  return payload ? payload : undefined;
}

module.exports = Input;

