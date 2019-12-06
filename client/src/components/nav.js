import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)//useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Player's List</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;