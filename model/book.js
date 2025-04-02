let mongoose = require('mongoose');
const User = require('./user');

let bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  descripiton: { type: String, required: true },
  imgURL: { type: String, required: true },
  rented: { type: Boolean },
  user: { type: mongoose.Schema.Types.ObjectId, ref: User },
});

module.exports = mongoose.model('Book', bookSchema);
