'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// consider putting process.args here as a global and passing it into Input
// node modules
const Input = require('./lib/input');
const Note = require('./lib/notes');

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const input = new Input;
const note = new Note(input);
note.execute();


// TODO: Remove this eventually... it will be replaced by the Note methods`
console.log(input);
console.log(note);



// Creating things is a 2-step process:
// 1 - instantiation in JS is for the mongoose model
// 2 - persistence on mongoDB

// debugging tool, and shows proof of life - not actually needed to connect to DB

// const db = mongoose.connection;
// db.on('open', () => {
  //   console.log('connected to mongo');
  // });