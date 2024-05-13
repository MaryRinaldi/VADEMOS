import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Private from './components/pages/Private.jsx';
import HomePage from './components/views/HomePage.jsx';
import './components/pages/Modal.jsx'
import NavBar from "./navbar";



function App() {

  const [lightMode, setlightMode] = useState(false);

  const handleToggle = () => {
    const newState = !lightMode;
    setlightMode(newState);
  
    if (newState) {
      document.body.classList.add('light-mode');
      document.getElementById('root').classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.getElementById('root').classList.remove('light-mode');
    }
  };

  
  return (
    <>  
      <div className={`App ${lightMode ? 'light-mode' : ''}`}>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/survey" element={<Survey/>} />
          <Route path="/tool" element={<Tool/>} /> */}
          </Routes>
    </div>
    <div className="toggle-container">
        <input
          type="checkbox"
          id="lightModeSwitch"
          checked={lightMode}
          onChange={handleToggle}
          aria-label={lightMode ? 'Turn on dark mode' : 'Turn on light mode'}
        />
<label htmlFor="lightModeSwitch">
  {lightMode ? 'Light mode' : 'Dark mode'}
</label>
      </div>
      <div className="footer">
      <footer>
        <p>European Commission for the Control of Foot-and-Mouth Disease</p>
        <p>FAST-HOLD strategy. Foot-and-mouth and similar transboundary animal diseases</p>
        <p>www.fao.eufmd.org</p>
        <p>© 2021 | EuFMD</p>
      </footer>    
      <p>&copy; {new Date().getFullYear()} VADEMOS. All rights reserved.</p>
    </div>
    </>
  );
}


export default App;