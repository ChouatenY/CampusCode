import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './AdminSignupPage.css'; // Import the CSS file for styling

const AdminSignupPage = () => {
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: '',
        course: '',
        courseCode: '',
        adminCode: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminDetails({
            ...adminDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/admin/signup', adminDetails);
            navigate('/admin/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="signup-container"> {/* Use signup-container class for styling */}
            <div className="signup-card"> {/* Use signup-card class for styling */}
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form"> {/* Use signup-form class for styling */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={adminDetails.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={adminDetails.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="course"
                        placeholder="Course"
                        value={adminDetails.course}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="courseCode"
                        placeholder="Course Code"
                        value={adminDetails.courseCode}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="adminCode"
                        placeholder="Admin Code"
                        value={adminDetails.adminCode}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={adminDetails.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <Link to="/admin/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default AdminSignupPage;
