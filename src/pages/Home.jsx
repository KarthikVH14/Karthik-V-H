 import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';
import profileImage from '../assets/images/profile.jpeg';

const Home = () => {
  const component = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Java Developer", "Backend Developer", "Full Stack Developer"]; // Add more if needed

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const bigLine = component.current.querySelector('.bigline');
      const introLine = component.current.querySelector('.introline');
      const profilePic = component.current.querySelector('.home-profile-pic');

      gsap.set([introLine, bigLine], { x: '-101%' });
      gsap.set(profilePic, { opacity: 0, scale: 0.8 });

      const timeline = gsap.timeline();
      timeline
        .to(bigLine, { duration: 1.2, x: '0%', ease: 'power3.out', delay: 0.5 })
        .to(introLine, { duration: 1.2, x: '0%', ease: 'power3.out' }, "<0.3")
        .to(profilePic, { duration: 1, opacity: 1, scale: 1, ease: 'power3.out' }, "-=0.8");
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-section" id="home" ref={component}>
      <div className="home-container">
        <div className="wrapper">
          <h1 className="bigline">Karthik VH</h1>
          <p className="introline">{roles[roleIndex]}</p>
        </div>
        <div className="home-image-container">
          <img src={profileImage} alt="Karthik VH" className="home-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
