import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminSignupPage from './pages/AdminSignupPage';

// Define a custom route component that redirects unauthorized users to the admin login page
const PrivateAdminRoute = ({ element }) => {
    const isAdminLoggedIn = localStorage.getItem('adminToken'); // Check if admin token is present
    return isAdminLoggedIn ? element : <Navigate to="/admin/login" />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<PrivateAdminRoute element={<AdminPage />} />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/signup" element={<AdminSignupPage />} />
                <Route path="/student/:examCode" element={<StudentPage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
