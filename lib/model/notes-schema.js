'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  payload: {type: String, required: true},
  category: {type: String, require: false},
});

// noteSchema.pre('save', function () {
//   this.payload = this.payload.toUpperCase();
// });


module.exports = mongoose.model('noteSchema', noteSchema);


