// src/pages/Resume.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';  

const Resume = () => {
    return (
        <motion.div
            className="resume-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="resume-header">
                <h1>My Resume</h1>
                <p>Here are my skills, experience, and education.</p>
            </div>

            <div className="resume-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>CSS & SCSS</li>
                    <li>Git & GitHub</li>
                    <li>APIs (RESTful, GraphQL)</li>
                </ul>
            </div>

            <div className="resume-section">
                <h2>Experience</h2>
                <div className="job-experience">
                    <h3>Looking for My First Position</h3>
                    <p className="job-dates">Bootcamp Fullstack Developer: April 2025</p>
                    <ul className="job-description">
                        <li>Completed full-stack web development courses, including JavaScript, React.js, Node.js, Express.js, and PostgreSQL.</li>
                        <li>Collaborated with a team on personal projects like <strong>BookSwap</strong> and <strong>RecycleSmart</strong>, working on different parts of the application and implementing features.</li>
                        <li>Developed features using React.js and Node.js, focusing on both front-end and back-end integration.</li>
                        <li>Worked with RESTful APIs, Git, and GitHub for version control and team collaboration.</li>
                        <li>Focused on building clean, responsive, and user-friendly web applications while following best practices for code quality and team workflows.</li>
                        <li>Ready to contribute as a Junior Developer and gain hands-on experience in a professional environment.</li>
                    </ul>
                </div>

                <div className="job-experience">
                    <h3>Frontend Developer at SheCodes</h3>
                    <p className="job-dates">July 2022 - November 2022</p>
                    <ul className="job-description">
                        <li>Designed responsive user interfaces using React.js and CSS</li>
                        <li>Implemented interactive features with state management libraries (e.g., Redux)</li>
                        <li>Optimized performance of React applications</li>
                    </ul>
                </div>
            </div>

            <div className="resume-section">
  <h2>Education</h2>
  <div className="education">
    <h3>Bachelor of Computer Systems Analyst</h3>
    <p>Zaporizhzhia National Technical University - Graduated in 2010</p>
  </div>
</div>

            <div className="resume-section">
                <h2>Certifications</h2>
                <ul className="certifications-list">
                    <li>Full Stack Web Development - XYZ Academy</li>
                    <li>JavaScript Algorithms and Data Structures - FreeCodeCamp</li>
                </ul>
            </div>
        </motion.div >
    );
};

export default Resume;
