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
        break;
      case 'delete':
        this.delete();
        break;
      case 'list':
        this.list();
        break;
    }
  }

  add() {
    const newRequest = new Request({payload: this.payload, category: this.category});
    newRequest.save()
      .then(results => console.log('Adding a note:', results))
      .catch(err => console.log(err));
  }

  delete() {
    console.log(this.payload);
    Request.deleteOne({_id: this.payload})
      .then(results => console.log('Deleted note', results))
      .catch(err => console.log(err));
  }

  list() {
    const reqParam = this.payload === false ? this.payload : 'general';
    console.log(reqParam);
    console.log(this.payload);
    Request.find({category: reqParam})
      .then(results => console.log('Showing list results', results))
      .then(err => console.log(err));
  }
}

module.exports = Note;
