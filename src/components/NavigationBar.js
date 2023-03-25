import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <div className = "navBar">
            <div className = "navLogo">
            <Link to="/">Leftover Love</Link>
            </div>
            <div className="navLinks">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default NavBar;