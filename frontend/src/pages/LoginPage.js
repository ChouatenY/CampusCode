// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        localStorage.setItem('studentDetails', JSON.stringify(studentDetails));
        navigate('/student');
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <label>
                <input
                    type="checkbox"
                    name="consent"
                    checked={studentDetails.consent}
                    onChange={handleChange}
                />
                I consent that the answers are mine.
            </label>
            <button type="submit">Start Exam</button>
        </form>
    );
};

export default LoginPage;
