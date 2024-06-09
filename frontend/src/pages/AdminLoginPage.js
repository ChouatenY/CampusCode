import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Make sure this path is correct
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
            <nav className="navbar">
                <h1 className="navbar-title">Welcome to the Admin Dashboard</h1>
            </nav>
            <AdminDashboard />
        </div>
    );
};

export default AdminPage;