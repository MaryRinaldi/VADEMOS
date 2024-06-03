import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo_EuFMD_2023_white.png';
import './App.css';

function NavBar({darkMode}) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img src={Logo} alt="EuFMD Logo" className="logo" />
        <Link to="/" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Home</Link>
        <Link to="/feedback" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Feedback</Link>
        <Link to="/tools" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Tools</Link>
        <Link to="/Contact" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;