import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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
            await axios.post('http://localhost:5000/api/admin/signup', adminDetails); // Ensure this URL matches your backend
            navigate('/admin/login');
        } catch (error) {
            console.error(error); // Removed the 'Signup failed:' message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
};

export default AdminSignupPage;
