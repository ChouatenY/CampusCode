import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminSignupPage from './pages/AdminSignupPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/signup" element={<AdminSignupPage />} />
                <Route path="/student/:examCode" element={<StudentPage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
