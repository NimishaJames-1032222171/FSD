import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching students');
    }
  };

  const handleDelete = async (rollNo) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${rollNo}`);
        alert('Student deleted successfully');
        fetchStudents();
      } catch (error) {
        console.error(error);
        alert('Error deleting student');
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="card">
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll No/ID</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.rollNo}</td>
              <td>{student.contactNumber}</td>
              <td>
                <button onClick={() => navigate(`/update/${student.rollNo}`)}>Update</button>
                <button onClick={() => handleDelete(student.rollNo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Create New Record</button>
    </div>
  );
};

export default StudentTable;
