// src/components/Project.jsx

import React from 'react';
import './Project.css'; 

const Project = ({ title, description, link, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
