const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel'); // Ensure correct path

// Update a student by rollNo
router.put('/:rollNo', async (req, res) => {
  const { rollNo } = req.params;
  const { firstName, lastName, password, contactNumber } = req.body;

  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { rollNo },
      { firstName, lastName, password, contactNumber },
      { new: true, runValidators: true } // Add runValidators to ensure validation
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(updatedStudent);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; // Ensure you export the router
