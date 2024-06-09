const mongoose = require('mongoose');

const adminSignupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  courseCode: { type: String, required: true },
  adminCode: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminSignup = mongoose.model('AdminSignup', adminSignupSchema);

module.exports = AdminSignup;
