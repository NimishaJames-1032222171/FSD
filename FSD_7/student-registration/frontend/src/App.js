import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import UpdateStudent from './components/UpdateStudent';
import SuccessMessage from './components/SuccessMessage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/update/:rollNo" element={<UpdateStudent />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
    </div>
  );
}

export default App;
