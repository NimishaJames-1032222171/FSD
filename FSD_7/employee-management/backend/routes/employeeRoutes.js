const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');

// Update an employee by employeeId
router.put('/:employeeId', async (req, res) => {
  const { employeeId } = req.params;
  const { employeeName, departmentName, phoneNumber, joiningDate } = req.body;

  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeId },
      { employeeName, departmentName, phoneNumber, joiningDate },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
