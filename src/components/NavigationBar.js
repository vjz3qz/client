import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function NavigationBar() {
    return (
        <div className="nav-bar">
          <div className="nav-logo">
            <Link to="/">Leftover Love</Link>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/addfood">Add Food</Link>
          </div>
        </div>
      );
}

export default NavigationBar;