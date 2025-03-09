// src/pages/AboutMe.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';  

const AboutMe = () => {
  return (
    <motion.div
      className="about-me-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-me-header">
        <h1>About Me</h1>
      </div>
      <div className="about-me-photo">
        
          <img src="IMG_0099.jpg" alt="Diana" className="profile-photo" />
        </div>
      <div className="about-me-content">
        <p>
          Hi, I'm Diana, a passionate web developer with a strong focus on creating interactive and user-friendly applications.
          I love working with modern technologies like React, Node.js, and PostgreSQL. My goal is to build applications that make a difference.
        </p>
        <p>I have successfully completed the Front-End course from SheCodes and am currently advancing my skills in Full Stack Development through a Bootcamp at Minnesota University.</p>
        <p>
          Outside of coding, I love spending time with my family and friends, I enjoy hiking, reading, and exploring new places. I'm always eager to learn more and collaborate with others to solve challenging problems.
        </p>
      </div>
      
      <div className="about-me-footer">
        <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/diana-khalina-a1212b236/">LinkedIn</a>.</p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
