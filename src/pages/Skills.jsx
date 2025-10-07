 import React from 'react';
import './Skills.css';

// Updated list with 8 core skills
const skillsList = [
  { name: 'Java' },
  { name: 'Spring Boot' },
  { name: 'React.js' },
  { name: 'JavaScript' },
  { name: 'SQL' },
  { name: 'MySQL' }, // Added MySQL
  { name: 'HTML5' },
  { name: 'CSS3' },
];

const Skills = () => {
  return (
    <section className="skills-section section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Toolbox</span>
      <div className="skills-container container">
        {skillsList.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <svg className="skill-hexagon" viewBox="0 0 100 115">
              <path d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z" />
            </svg>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

