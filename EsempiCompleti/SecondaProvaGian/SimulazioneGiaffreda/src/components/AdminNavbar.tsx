import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar: React.FC = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('jwt');
        navigate('/');
    };

    return (
        <nav className="admin-navbar">
            <Link to="/" className="nav-link">
                <span className="nav-icon">🏠</span> Home
            </Link>
            <button className="nav-btn" onClick={logout}>
                <span className="nav-icon">🚪</span> Esci
            </button>
        </nav>
    );
};

export default AdminNavbar;