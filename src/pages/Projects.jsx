 import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';

const projectData = [
  {
    shortTitle: 'ClarityHub',
    title: 'ClarityHub Backend',
    description: 'A robust backend system for a real-time communication platform, featuring secure authentication, WebSocket-based messaging, and a scalable microservices architecture.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Rest API' ],
    liveUrl: '#',
    githubUrl: 'https://github.com/karthik-vh/clarityhub',
  },
  {
    shortTitle: 'Library App',
    title: 'Library Management App',
    description: 'A full-stack web app to manage books — add, view, and list books using a Spring Boot REST API with a JavaScript/React frontend.',
    techStack: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'React'],
    liveUrl: '#',
    githubUrl: ' https://github.com/KarthikVH14/Library-App ',
  },
];

const Projects = () => {
  return (
    <section className="projects-section section" id="projects">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most Recent Work</span>
      <div className="projects-container container grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

