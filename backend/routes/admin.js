const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken module
const Admin = require('../models/Admin');
const Exam = require('../models/Exam');
const authMiddleware = require('../middleware/auth');
const { TOKEN_SECRET, TOKEN_EXPIRATION } = require('../config'); // Assuming you have a config file with token secret and expiration

const router = express.Router();

// Route to sign up a new admin
router.post('/signup', async (req, res) => {
    const { name, email, course, courseCode, adminCode, password } = req.body;

    if (!name || !email || !course || !courseCode || !adminCode || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const newAdmin = new Admin({
            name,
            email,
            course,
            courseCode,
            adminCode,
            password: hashedPassword
        });

        // Save the admin to the database
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({ message: 'Error registering admin' });
    }
});

// Route to log in an admin
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

        // Generate JWT token with expiration time
        const token = jwt.sign({ adminId: admin._id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRATION });

        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        console.error('Error logging in admin:', error);
        res.status(500).json({ message: 'Error logging in admin' });
    }
});

// Route to create a new exam (requires authentication)
router.post('/create-exam', authMiddleware, async (req, res) => {
    try {
        // Create a new exam based on the request body
        const newExam = await Exam.create(req.body);
        res.status(201).json(newExam);
    } catch (error) {
        console.error('Error creating exam:', error);
        res.status(500).json({ message: 'Error creating exam' });
    }
});

// Route to access the admin dashboard (requires authentication)
router.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Welcome to the admin dashboard');
});

module.exports = router;
