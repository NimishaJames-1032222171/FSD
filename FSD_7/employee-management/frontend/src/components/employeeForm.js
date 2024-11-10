import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeName: '',
    employeeId: '',
    departmentName: '',
    phoneNumber: '',
    joiningDate: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', employee);
      navigate('/success');
    } catch (error) {
      console.error(error);
      alert('Error registering employee');
    }
  };

  return (
    <div className="card">
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="employeeName" placeholder="Employee Name" onChange={handleChange} required />
        <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} required />
        <input type="text" name="departmentName" placeholder="Department Name" onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <input type="date" name="joiningDate" placeholder="Joining Date" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/employees')}>View Records</button>
    </div>
  );
};

export default EmployeeForm;
