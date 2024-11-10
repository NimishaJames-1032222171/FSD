const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  departmentName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  joiningDate: { type: Date, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
