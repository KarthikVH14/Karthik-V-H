 import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // This effect adds an event listener to detect when the user scrolls.
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 50 pixels down, update the state.
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Attach the listener when the component mounts.
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once.

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // The 'scrolled' class is now dynamically added based on the state.
  return (
    <nav className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ScrollLink to="home" smooth={true} duration={500} className="nav-logo" onClick={closeMenu}>
          Karthik VH
        </ScrollLink>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <ScrollLink
                  activeClass="active-link"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <i className={`nav-icon ${isMenuOpen ? 'icon-close' : 'icon-menu'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

