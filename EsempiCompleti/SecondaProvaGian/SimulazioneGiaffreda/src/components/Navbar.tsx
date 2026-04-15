// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';   // <-- importo Link
import './Navbar.css';

const Navbar: React.FC = () => (
    <nav className="navbar">
        <ul className="nav-list">
            <li><Link to="/#hero" className="nav-link">Home</Link></li>
            <li><Link to="/#eventi" className="nav-link">Eventi</Link></li>
            <li><Link to="/#suggerimento" className="nav-link">Suggerimento</Link></li>

            {/* ------------  nuovo pulsante  ------------ */}
            <li className="nav-admin">
                <Link to="/login" className="btn btn-admin">
                    Admin Area
                </Link>
            </li>
            {/* ------------------------------------------- */}
        </ul>
    </nav>
);

export default Navbar;