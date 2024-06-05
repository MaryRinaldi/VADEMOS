import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logo from './assets/Logo_EuFMD_2023_white.png';
import './App.css';
import Modal from './components/pages/Modal'
import Feedback from './components/views/Feedback.jsx'
import Private from './components/pages/Private.jsx';

function NavBar({darkMode}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }; 

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img src={Logo} alt="EuFMD Logo" className="logo" />
        <Link to="/" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Home</Link>
        {/* <Link to="#" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`} onClick={openModal}>Feedback</Link> */}
        <Link to="#" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`} onClick={(e) => {
        if (!localStorage.getItem("token")) {
          e.preventDefault();
              // Customized alert
              const alertDiv = document.createElement('div');
              alertDiv.classList.add('custom-alert');
              alertDiv.innerHTML = `<p>Welcome back! Please login to VADEMOS.</p>`;
              document.body.appendChild(alertDiv);
              // Remove the alert after 3 seconds
              setTimeout(() => {document.body.removeChild(alertDiv);}, 3000);}
              else {openModal}
          }}>Feedback</Link>
        <Link to="/tools" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Tools</Link>
        <Link to="/Contact" className={`navbar-link ${darkMode ? 'dark-mode' : ''}`}>Contact</Link>
      </div>
      {showModal && <Modal showModal={showModal} closeModal={closeModal} modalContent={<Feedback />} />}
    </nav>
  );
}

export default NavBar;