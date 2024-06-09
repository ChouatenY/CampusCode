const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true },
    courseCode: { type: String, required: true },
    adminCode: { type: String, required: true },
    password: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
