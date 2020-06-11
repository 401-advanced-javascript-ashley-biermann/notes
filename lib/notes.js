'use strict';

const Request = require('../lib/model/notes-schema');

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
    const newRequest = new Request({payload: this.payload, category: this.category});
    return newRequest.save()
      .then(results => console.log('Note Saved:', results))
      .catch(err => console.log(err));
  }

  delete() {
    return Request.deleteOne({_id: this.payload})
      .then(results => console.log('Deleted note', results))
      .catch(err => console.log(err));
  }

  list() {
    const reqParam = this.payload !== true ? {category: this.payload} : {} ;
    return Request.find(reqParam)
      .then(results => console.log('Showing list results', results))
      .then(err => console.log(err));
  }
}

module.exports = Note;

// abstract mongoose stuff to its own special class

// class DBInterface {
//   constructor(schema) {
//     this.schema = schema
//   }
//   get()
//   create()
// }
