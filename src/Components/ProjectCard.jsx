import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ shortTitle, title, description, techStack, liveUrl, githubUrl }) => {
  return (
    <div className="project-card">
      {/* The new header section that replaces the image */}
      <div className="project-card__header">
        <h2 className="project-card__main-title">{shortTitle}</h2>
      </div>
      
      {/* The rest of the project details */}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-card__links">
          
          
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

