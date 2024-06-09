// routes/admin.js
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Admin signup route
router.post('/signup', async (req, res) => {
  const { name, email, course, courseCode, adminCode, password } = req.body;

  if (!name || !email || !course || !courseCode || !adminCode || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    // Create a new admin
    const newAdmin = new Admin({
      name,
      email,
      course,
      courseCode,
      adminCode,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newAdmin.save();
    console.log('Admin saved to the database');

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Error registering admin' });
  }
});

// Admin login route
router.post('/login', async (req, res) => {
  try {
    const { adminCode, password } = req.body;

    const admin = await Admin.findOne({ adminCode });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid admin code or password' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid admin code or password' });
    }

    req.session.adminId = admin._id; // Assuming you are using express-session
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Error logging in admin' });
  }
});

// Protect admin page route
router.get('/dashboard', authMiddleware, (req, res) => {
  res.send('Welcome to the admin dashboard');
});

module.exports = router;
