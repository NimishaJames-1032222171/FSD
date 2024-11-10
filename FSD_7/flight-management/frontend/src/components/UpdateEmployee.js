import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const { employeeId } = useParams(); // Get employee ID from URL params
  const [employee, setEmployee] = useState({
    employeeName: '',
    employeeId: '',
    departmentName: '',
    phoneNumber: '',
    joiningDate: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${employeeId}`);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching employee details');
      }
    };

    fetchEmployee();
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/${employeeId}`, employee);
      navigate('/success');
    } catch (error) {
      console.error(error);
      alert('Error updating employee');
    }
  };

  return (
    <div className="card">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={employee.employeeName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="departmentName"
          placeholder="Department Name"
          value={employee.departmentName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={employee.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          value={employee.joiningDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
