import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // If using React Router

import "../css/NavBar.css";

const NavBar = () => {
  return (
    
    <nav className="navbar">
      <div class="signup-login">
        <Link to="/signup">Sign Up</Link><Link to="/login">Log In</Link>
        </div>

      <div className="company-name">CODING FOR KIDS</div>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/programs">Programs</Link>
        </li>
        <li className="nav-item">
          <Link to="/tutors">Tutoring</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
     
     
      
    </nav>
  );
};

export default NavBar;
