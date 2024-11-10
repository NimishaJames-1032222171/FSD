import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {
  const { rollNo } = useParams(); // Get roll number from URL params
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    rollNo: '',
    password: '',
    contactNumber: ''
  });
  const navigate = useNavigate();

  // Fetch student data when the component mounts
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${rollNo}`);
        setStudent(response.data); // Set the student data in state
      } catch (error) {
        console.error(error);
        alert('Error fetching student details');
      }
    };

    fetchStudent();
  }, [rollNo]);

  // Handle input changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${rollNo}`, student);
      navigate('/success'); // Redirect to success page
    } catch (error) {
      console.error(error);
      alert('Error updating student');
    }
  };

  return (
    <div className="card">
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No/ID"
          value={student.rollNo}
          onChange={handleChange}
          required // Allow changes to roll number
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={student.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={student.contactNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
