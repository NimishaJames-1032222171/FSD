import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
  const [book, setBook] = useState({
    bookName: '',
    isbnNo: '',
    bookTitle: '',
    authorName: '',
    publisherName: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', book);
      navigate('/success'); // Navigate to success page
    } catch (error) {
      console.error(error);
      alert('Error registering book');
    }
  };

  return (
    <div className="container"> {/* Added container class */}
      <div className="card">
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="bookName" placeholder="Book Name" onChange={handleChange} required />
          <input type="text" name="isbnNo" placeholder="ISBN No" onChange={handleChange} required />
          <input type="text" name="bookTitle" placeholder="Book Title" onChange={handleChange} required />
          <input type="text" name="authorName" placeholder="Author Name" onChange={handleChange} required />
          <input type="text" name="publisherName" placeholder="Publisher Name" onChange={handleChange} required />
          <button type="submit">Add Book</button>
        </form>
        <div className="button-container"> {/* Wrap buttons in a div */}
          <button onClick={() => navigate('/books')}>View Books</button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
