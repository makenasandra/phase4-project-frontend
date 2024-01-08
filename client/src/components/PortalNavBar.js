import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // If using React Router

import "../css/NavBar.css";

const PortalNavBar = () => {
  return (
    
    <nav className="navbar">
      <div class="signup-login">
       <Link to="/">Log Out</Link>
        </div>

      <div className="company-name">CODING FOR KIDS</div>
     
      
    </nav>
  );
};

export default PortalNavBar;
