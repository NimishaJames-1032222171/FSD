import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import SuccessMessage from './SuccessMessage';
import UpdateEmployee from './UpdateEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeTable />} />
          <Route path="/success" element={<SuccessMessage />} />
          <Route path="/update/:employeeId" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
