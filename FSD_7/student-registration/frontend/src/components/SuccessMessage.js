import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Success!</h2>
      <p>The operation was completed successfully.</p>
      <button onClick={() => navigate('/students')}>View Records</button>
      <button onClick={() => navigate('/')}>Create New Record</button>
    </div>
  );
};

export default SuccessMessage;
