import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/survey" className="navbar-link">Survey</Link>
        <Link to="/tool" className="navbar-link">Tool</Link>
        <Link to="/Contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;