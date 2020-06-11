'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Request = require('./lib/model/notes-schema');

// consider putting process.args here as a global and passing it into Input
// node modules
const Input = require('./lib/input');
const Note = require('./lib/notes');

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('open', () => {
  console.log('connected to mongo');
});


const input = new Input;
const note = new Note(input);
note.execute();


// TODO: Update this to reflect a better on screen confirmation message for the user (probably `note`)
console.log(input);
console.log(note);



// Creating things is a 2-step process:
// 1 - instantiation in JS is for the mongoose model
// 2 - persistence on mongoDB

