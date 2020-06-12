'use strict';

//FIXME: Refactor your lib/notes.js module to save, list, delete notes using the collection interface rather than the schema/mongoose methods directly 

const notesCollection = require('./model/notes-collection');
// const Request = require('../lib/model/notes-schema');

class Note {
  constructor(obj) {
    this.action = obj.action,
    this.payload = obj.payload,
    this.category = obj.category
  }

  execute() {
    switch(this.action) {
      case 'add':
        this.add();
        return this.add();
      case 'delete':
        this.delete();
        return this.delete();
      case 'list':
        this.list();
        return this.list();
      default:
        console.timeLog('error in Note.execute');
    }
  }

  add() {
    return notesCollection.create(this.payload, this.category);
  }
  
  delete() {
    return notesCollection.delete(this.payload);
  }

  list() {
    return notesCollection.get(this.payload);
  }
}

module.exports = Note;
