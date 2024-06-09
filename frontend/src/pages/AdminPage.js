import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            {/* Admin dashboard content */}
        </div>
    );
};

export default AdminPage;
