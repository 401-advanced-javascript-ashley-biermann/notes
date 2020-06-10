'use strict';
//TODO: figure out how to connect this all. see requirements for lab01
//I think it might take info from Input

const minimist = require('minimist');
const parsedArgs = minimist(process.argv.slice(2));

console.log(parsedArgs);

class Note {
  constructor(obj) {
    this.action = obj.action,
    this.payload = obj.payload,
    this.id = Math.floor(Math.random() * 100) // place holder
  }

  execute(action) {
    const commands = ['a', 'd', 'l']; 
    if (command.includes(action)) {
      this.add(obj);
    }
  }

  add(obj) {
    //creates a new note, based on this info, and console . log the note
    const note = new Note(obj);
    console.log(note);
  }
}

module.exports = Note;
