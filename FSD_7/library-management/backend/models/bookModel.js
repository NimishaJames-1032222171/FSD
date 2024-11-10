const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  isbnNo: { type: String, required: true, unique: true },
  bookTitle: { type: String, required: true },
  authorName: { type: String, required: true },
  publisherName: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
