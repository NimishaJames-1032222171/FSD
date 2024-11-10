const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// Insert new book
router.post('/', async (req, res) => {
  const { bookName, isbnNo, bookTitle, authorName, publisherName } = req.body;

  try {
    const newBook = new Book({ bookName, isbnNo, bookTitle, authorName, publisherName });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a book by ISBN
router.get('/:isbnNo', async (req, res) => {
  try {
    const book = await Book.findOne({ isbnNo: req.params.isbnNo });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a book by ISBN
router.put('/:isbnNo', async (req, res) => {
  const { bookName, bookTitle, authorName, publisherName } = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { isbnNo: req.params.isbnNo },
      { bookName, bookTitle, authorName, publisherName },
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book by ISBN
router.delete('/:isbnNo', async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ isbnNo: req.params.isbnNo });
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
