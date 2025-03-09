import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/Diana-Khalina" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/diana-khalina-a1212b236" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.facebook.com/diana.khalina" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
