import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AdminLoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({
        name: '',
        adminCode: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', loginDetails);
            localStorage.setItem('token', response.data.token);
            navigate('/admin');
        } catch (error) {
            // The error message is no longer printed to the console
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={loginDetails.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="adminCode"
                placeholder="Admin Code"
                value={loginDetails.adminCode}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginDetails.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to="/admin/signup">Sign Up</Link></p>
        </form>
    );
};

export default AdminLoginPage;
