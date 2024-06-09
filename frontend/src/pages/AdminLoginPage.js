import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        adminCode: '',
        password: ''
    });
    const [error, setError] = useState('');
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
        if (!adminDetails.name || !adminDetails.adminCode || !adminDetails.password) {
            setError('All fields are required');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/admin/login', adminDetails);
            if (response.status === 200) {
                // Store token in local storage
                localStorage.setItem('adminToken', response.data.token);
                // Redirect to the admin dashboard
                navigate('/admin');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Invalid admin code or password');
            } else {
                setError('Error logging in. Please try again.');
            }
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Admin Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={adminDetails.name}
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
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/admin/signup">Sign Up</a></p>
            </div>
        </div>
    );
};

export default AdminLoginPage;
