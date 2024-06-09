// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';  // Import the CSS file

const LoginPage = () => {
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        matricule: '',
        major: '',
        specialization: '',
        session: '',
        courseCode: '',
        semester: '',
        consent: false,
        examCode: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setStudentDetails({
            ...studentDetails,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(studentDetails).some(value => !value)) {
            setError('All fields are required');
            return;
        }
        try {
            await axios.post('http://localhost:5000/student/login', studentDetails);
            navigate(`/student/${studentDetails.examCode}`);
        } catch (error) {
            setError('Error saving student details');
            console.error('Error saving student details:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Student Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={studentDetails.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="matricule"
                        placeholder="Matricule"
                        value={studentDetails.matricule}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="major"
                        placeholder="Major"
                        value={studentDetails.major}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="specialization"
                        placeholder="Specialization"
                        value={studentDetails.specialization}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="session"
                        placeholder="Session"
                        value={studentDetails.session}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="courseCode"
                        placeholder="Course Code"
                        value={studentDetails.courseCode}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="semester"
                        placeholder="Semester"
                        value={studentDetails.semester}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="examCode"
                        placeholder="Exam Code"
                        value={studentDetails.examCode}
                        onChange={handleChange}
                    />
                    <label className="consent-label">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={studentDetails.consent}
                            onChange={handleChange}
                        />
                        I consent that the answers are mine.
                    </label>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Start Exam</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
