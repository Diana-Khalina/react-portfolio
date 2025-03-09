import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="developer-name">Diana Khalina</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" exact>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
