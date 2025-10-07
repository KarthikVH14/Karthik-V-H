 import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'Java Programming Trainee',
    company: 'Besant Technologies, Bengaluru',
    period: 'Sep 2024 - Sep 2024',
    description: 'Completed an intensive one-month training program focused on core and advanced Java programming concepts and application development.'
  },
  {
    role: 'Java Full Stack Development Intern',
    company: 'Alpha Tech Academy, Bengaluru',
    period: 'Feb 2025 - July 2025',
    description: 'Built and deployed web applications using Java Spring Boot, React.js, and MySQL. Designed secure REST APIs with JWT authentication and performed unit testing, reducing defects by 20%.'
  },
  {
    role: 'SQL Trainee',
    company: 'Besant Technologies, Bengaluru',
    period: 'Mar 2025 - May 2025',
    description: 'Designed and optimized relational databases using advanced SQL, joins, and stored procedures, enhancing query efficiency by 15%.'
  }
];

const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <h2 className="section-title">Experience</h2>
      <span className="section-subtitle">My Professional Journey</span>
      <div className="experience-container container">
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div className="experience-item" key={index}>
              {/* The dot is now a sibling to the content, not inside it */}
              <span className="experience-dot"></span>
              <div className="experience-content">
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-company">{item.company}</span>
                <div className="experience-period">{item.period}</div>
                <p className="experience-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

