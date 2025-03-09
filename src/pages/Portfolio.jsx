// src/pages/Portfolio.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Project from '../components/Project'; 
import './Portfolio.css';  

const Portfolio = () => {
  const projects = [
    {
      title: 'BookSwap: Community-Based Book Exchange',
      description: 'A web app that allows users to swap books with others locally or via mail.',
      link: 'https://github.com/Diana-Khalina/BookSwap/tree/main/600x400', 
      image: '/Book.JPG', 
    },
    {
      title: 'Pizza lending page',
      description: 'The Pizza Project is a website for a pizza restaurant. It was designed to allow a customer to view the menu, see deals and specials,find a location and sign up for a waitlist to get a table.',
      link: 'https://tcs3000.github.io/projectOne/', 
      image: '/Pizza.JPG', 
    },
    {
      title: 'Personal Portfolio',
      description: 'A portfolio website to showcase my work and projects.',
      link: 'https://github.com/Diana-Khalina/react-portfolio', 
      image: '/portfolio.jpg', 
    },
  ];

  return (
    <motion.div
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Here are some of the projects I have worked on:</p>
      </div>

      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
