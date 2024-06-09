import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({
        name: '',
        adminCode: '',
        password: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State variable for success message
    const [errorMessage, setErrorMessage] = useState(''); // State variable for error message
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
        if (!loginDetails.name) {
            setErrorMessage('Name is required.'); // Set error message if name is empty
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', loginDetails);
            localStorage.setItem('token', response.data.token);
            setShowSuccessMessage(true); // Set success message visibility to true
            navigate('/admin');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Invalid credentials');
                setErrorMessage('Invalid credentials. Please try again.'); // Set error message for invalid credentials
            } else {
                console.error('Login failed:', error);
                setErrorMessage('An error occurred. Please try again later.'); // Set error message for other errors
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={loginDetails.name}
                        onChange={handleChange}
                        required // Make name input required
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
                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                </form>
            </div>
            {/* Conditionally render success message */}
            {showSuccessMessage && (
                <div className="success-message">
                    <p>Login successful!</p>
                </div>
            )}
        </div>
    );
};

export default AdminLoginPage;
