import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// AdminPage.js
import AdminDashboard from '../components/Admin/AdminDashboard';




const AdminPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Welcome to the Admin Dashboard</h1>
            {/* Display content of AdminDashboard component */}
            <AdminDashboard />
        </div>
    );
};

export default AdminPage;
