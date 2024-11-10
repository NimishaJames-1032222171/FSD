import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import UpdateBook from './components/UpdateBook';
import SuccessMessage from './components/SuccessMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/books" element={<BookTable />} />
        <Route path="/update-book/:isbnNo" element={<UpdateBook />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
