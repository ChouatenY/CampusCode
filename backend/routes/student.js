const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');
const Submission = require('../models/Submission');
const Student = require('../models/student'); // Make sure to import the Student model

// Fetch exam by exam code
router.get('/exam/:examCode', async (req, res) => {
    try {
        // Find the exam using the exam code parameter
        const exam = await Exam.findOne({ examCode: req.params.examCode });
        
        // If the exam is not found, return a 404 error
        if (!exam) {
            return res.status(404).json({ error: 'Exam not found' });
        }
        
        // If the exam is found, return it in the response
        res.json(exam);
    } catch (error) {
        // If there's an error, return a 500 error with the error message
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to submit exam answers
router.post('/submit', async (req, res) => {
    // Create a new submission object using the request body
    const newSubmission = new Submission(req.body);
    
    try {
        // Save the new submission to the database
        const savedSubmission = await newSubmission.save();
        
        // Return the saved submission in the response
        res.status(201).json(savedSubmission);
    } catch (error) {
        // If there's an error, return a 400 error with the error message
        res.status(400).json({ error: error.message });
    }
});

// Handle saving student details
router.post('/login', async (req, res) => {
    try {
        const studentData = req.body;
        const newStudent = new Student(studentData);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
