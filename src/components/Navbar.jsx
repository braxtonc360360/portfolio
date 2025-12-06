import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = ({ brand, links }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        {brand}
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path}
            // Matches .nav-item
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;