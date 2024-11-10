import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching employees');
    }
  };

  const handleDelete = async (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`http://localhost:5000/api/employees/${employeeId}`);
        alert('Employee deleted successfully');
        fetchEmployees();
      } catch (error) {
        console.error(error);
        alert('Error deleting employee');
      }
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="card">
      <h2>Employee Records</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Department Name</th>
            <th>Phone Number</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.departmentName}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.joiningDate}</td>
              <td>
                <button onClick={() => navigate(`/update/${employee.employeeId}`)}>Update</button>
                <button onClick={() => handleDelete(employee.employeeId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Create New Record</button>
    </div>
  );
};

export default EmployeeTable;
