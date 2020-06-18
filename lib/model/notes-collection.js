'use strict';

const Request = require('./notes-schema');

//Implement CRUD operations
// Each method should invoke the proper mongoose method via your schema

class DBInterface {
  constructor(schema) {
    this.schema = schema
  }

  get(payload) {
    const reqParam = payload !== true ? {category: payload} : {} ;
    return Request.find(reqParam)
      .then(results => console.log('Showing list results', results))
      .then(err => console.log(err));
  }

  create(payload, category) {
    const newRequest = new this.schema({payload: payload, category: category});
    return newRequest.save()
      .then(results => console.log('Note Saved:', results))
      .catch(err => console.log(err));
  }

  update() {
    
  }

  delete(payload) {
    return this.schema.deleteOne({_id: payload})
      .then(results => console.log('Deleted note', results))
      .catch(err => console.log(err));
  }
}

let dbInterface = new DBInterface(Request);

module.exports = dbInterface;

// Marlene helped me figure out how the add/ create connections needed to go in order to modularize

