import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Success!</h2>
      <p>The operation was completed successfully.</p>
      <button onClick={() => navigate('/books')}>View Records</button> {/* Updated link */}
      <button onClick={() => navigate('/')}>Create New Record</button>
    </div>
  );
};

export default SuccessMessage;
