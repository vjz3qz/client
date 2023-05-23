import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import logo from '../styles/HooHacksLogo2.png'; 

function NavigationBar() {
    return (
        <div className="nav-bar">
          <div className="nav-logo">
            <Link to="/">
                Leftover Link
                <img src={logo} alt="Logo" style={{ height:"90px",width: "90px", verticalAlign: "middle" }}/>
                
            </Link>
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





