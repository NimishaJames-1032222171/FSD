import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prn: '',
    year: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check if name is empty
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Email format is incorrect';
    }

    // Check if phone is empty
    if (!formData.phone) {
      validationErrors.phone = 'Phone number is required';
    }

    // Check if PRN is empty
    if (!formData.prn) {
      validationErrors.prn = 'PRN is required';
    }

    // Check if course is empty
    if (!formData.course) {
      validationErrors.course = 'Course is required';
    }

    // Check if year is empty
    if (!formData.year) {
      validationErrors.year = 'Year is required';
    }

    // If errors exist, prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true); // Successful submission
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Move the title inside the form */}
        <form onSubmit={handleSubmit} className="form-container">
          <h1>Registration Form</h1> {/* Title inside the form */}

          <div className="form-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-field">
            <label>PRN:</label>
            <input
              type="text"
              name="prn"
              value={formData.prn}
              onChange={handleChange}
              className={errors.prn ? 'input-error' : ''}
            />
            {errors.prn && <span className="error-message">{errors.prn}</span>}
          </div>

          <div className="form-field">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={errors.course ? 'input-error' : ''}
            />
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>

          <div className="form-field">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={errors.year ? 'input-error' : ''}
            />
            {errors.year && <span className="error-message">{errors.year}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>

        {isSubmitted && <div className="success-message">Form submitted successfully!</div>}
      </header>
    </div>
  );
}

export default App;
