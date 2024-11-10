import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching books');
    }
  };

  const handleDelete = async (isbnNo) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${isbnNo}`);
        setMessage('Book deleted successfully!');
        fetchBooks(); // Refresh the book list
      } catch (error) {
        console.error(error);
        alert('Error deleting book');
      }
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container"> {/* Added container class */}
      <div className="card">
        <h2>Library Books</h2>
        {message && <div className="success-message">{message}</div>} {/* Display success message */}
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>ISBN No</th>
              <th>Book Title</th>
              <th>Author Name</th>
              <th>Publisher Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.isbnNo}>
                <td>{book.bookName}</td>
                <td>{book.isbnNo}</td>
                <td>{book.bookTitle}</td>
                <td>{book.authorName}</td>
                <td>{book.publisherName}</td>
                <td>
                  <button onClick={() => navigate(`/update-book/${book.isbnNo}`)}>Update</button>
                  <button onClick={() => handleDelete(book.isbnNo)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => navigate('/')}>Add New Book</button>
      </div>
    </div>
  );
};

export default BookTable;
