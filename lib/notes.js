'use strict';
//TODO: figure out how to connect this all. see requirements for lab01
//I think it might take info from Input
function Note() { }


Note.prototype.execute = function (object) {
  if (object.action === 'add') {
    this.add(object.payload);
  }
}

Note.prototype.add = function (payload) {
  const note = {
    id: 'Math.floor(Math.random() * 100)', // place holder for now until we have read id data. creates a random number in the 100s and rounds off decimals
    text: payload,
  }
}

module.exports = Note;
