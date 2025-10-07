import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/KarthikVH14' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/karthik-v-h-7425182b3' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Karthik VH</h2>
        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              {social.name}
            </a>
          ))}
        </div>
        <span className="footer-copy">
          &#169; {new Date().getFullYear()} Karthik VH. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

