import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
// import Register from './components/pages/Register.jsx';
// import Login from './components/pages/Login.jsx';
// import Private from './components/pages/Private.jsx';
import HomePage from './components/views/HomePage.jsx';
import './components/pages/Modal.jsx'
import NavBar from "./navbar";
import Tools from './components/views/Tools.jsx';
import Feedback from './components/views/Feedback.jsx'




function App() {

  const [darkMode, setdarkMode] = useState(false);

  const handleToggle = () => {
    const newState = !darkMode;
    setdarkMode(newState);
  
    if (newState) {
      document.body.classList.add('dark-mode');
      document.getElementById('root').classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('root').classList.remove('dark-mode');
    }
  };

  
  return (
    <>  
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <NavBar darkMode={darkMode}/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/tools" element={<Tools/>} /> 
          </Routes>
    </div>
    <div className="toggle-container">
        <input
          type="checkbox"
          id="darkModeSwitch"
          checked={darkMode}
          onChange={handleToggle}
          aria-label={darkMode ? 'Turn on light mode' : 'Turn on dark mode'}
        />
<label className='toggleLabel' htmlFor="darkModeSwitch">
  {darkMode ? 'Light mode' : 'Dark mode'}
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