 import React from 'react';
import './Certifications.css';

const certificationsData = [
  {
    name: 'Java Full Stack Development',
    issuer: 'Alpha Tech Academy',
    year: '2025',
    link: 'https://tinyurl.com/53v4v4b8' // Updated URL
  },
  {
    name: 'Java Programming',
    issuer: 'Besant Technologies',
    year: '2025',
    link: 'https://tinyurl.com/54jxxv4h' // Updated URL
  },
  {
    name: 'SQL Programming',
    issuer: 'Besant Technologies',
    year: '2025',
    link: 'https://tinyurl.com/5n68dk37' // Updated URL
  },
  {
    name: 'Prompt Engineering',
    issuer: 'GUVI, OpenAI',
    year: '2023',
    link: '#' // This one has not been changed
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <span className="section-subtitle">Hover to Reveal</span>
      <div className="certifications-container container">
        {certificationsData.map((cert, index) => (
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="certification-card" 
            key={index}
            aria-label={`View certification for ${cert.name}`}
          >
            <figure>
              <img src={`https://placehold.co/600x400/0A192F/64FFDA?text=${encodeURIComponent(cert.name)}`} alt={cert.name} className="certification-image" />
              <span className="certification-title">{cert.name}</span>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

