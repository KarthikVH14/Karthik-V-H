 import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>
      <div className="about-container container grid">
        {/* The image tag has been removed from here */}
        <div className="about-data">
          <p className="about-description">
          <p>
      Hi, I’m <strong>Karthik V H</strong>, an Electronics and Communication Engineering graduate with a passion for building impactful software solutions. I specialize in <strong>backend development</strong> using <strong>Java and Spring Boot</strong>, with expertise in <strong>MySQL, JWT authentication</strong>, and creating full-stack web applications.
    </p>
    <p>
      I’m the creator of <strong>ClarityHub</strong>, a platform designed to simplify <em>a platform designed to simplify knowledge sharing and collaboration, showcasing my ability to design scalable backend systems and seamless user experiences.</em>, showcasing my ability to design scalable backend systems and seamless user experiences. I enjoy tackling real-world problems through code, continuously learning new technologies, and building products that make a difference.
    </p>
    <p>
      When I’m not coding, I love exploring emerging tech trends, experimenting with new ideas, and turning concepts into practical solutions.
    </p>
          </p>
          <div className="about-info">
            <div>
              <span className="about-info-title">0+</span>
              <span className="about-info-name">Years <br /> experience</span>
            </div>
            <div>
              <span className="about-info-title">03+</span>
              <span className="about-info-name">Completed <br /> projects</span>
            </div>
       <div>
  <span className="about-info-title">3</span> 
  <span className="about-info-name">Internship <br /> Experience</span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

