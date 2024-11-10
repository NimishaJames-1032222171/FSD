import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { isbnNo } = useParams(); // Get isbnNo from URL
  const [book, setBook] = useState({
    bookName: '',
    isbnNo: '',
    bookTitle: '',
    authorName: '',
    publisherName: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${isbnNo}`);
        setBook(response.data); // Populate fields with the fetched book data
      } catch (error) {
        console.error(error);
        alert('Error fetching book details');
      }
    };
    fetchBook();
  }, [isbnNo]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/books/${book.isbnNo}`, book);
      navigate('/books'); // Redirect to books page after successful update
    } catch (error) {
      console.error(error);
      alert('Error updating book');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Update Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            value={book.bookName} // Bind value to state
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="isbnNo"
            placeholder="ISBN No"
            value={book.isbnNo} // Bind value to state
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={book.bookTitle} // Bind value to state
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            value={book.authorName} // Bind value to state
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="publisherName"
            placeholder="Publisher Name"
            value={book.publisherName} // Bind value to state
            onChange={handleChange}
            required
          />
          <button type="submit">Update Book</button>
        </form>
        <div className="button-container">
          <button onClick={() => navigate('/books')}>View Books</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
