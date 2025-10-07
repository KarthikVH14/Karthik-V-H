import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section section" id="education">
      <h2 className="section-title">Education</h2>
      <span className="section-subtitle">My Academic Background</span>
      <div className="education-container container">
        <div className="education-item">
          <h3 className="education-degree">B.E. in Electronics and Communication Engineering</h3>
          <p className="education-institution">SEA College of Engineering and Technology, Bangalore</p>
          <span className="education-period">Nov 2021 - June 2025</span>
          <span className="education-grade">CGPA: 7.54/10</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
