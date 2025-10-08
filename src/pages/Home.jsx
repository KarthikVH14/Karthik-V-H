 import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';
// THE FIX: The folder name is corrected from "image" to "images".
import profileImage from '../assets/images/Profile.png'; 

const Home = () => {
  const component = useRef(null);
  const introLineRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Java Developer", "Backend Developer", "Full Stack Developer"];

  // Animation 1: Initial Page Load Animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const bigLine = component.current.querySelector('.bigline');
      const introLine = introLineRef.current;
      const profilePic = component.current.querySelector('.home-profile-pic');

      gsap.set([introLine, bigLine], { x: '-101%' });
      gsap.set(profilePic, { opacity: 0, scale: 0.8 });

      const mainTimeline = gsap.timeline();
      mainTimeline
        .to(bigLine, { duration: 1.2, x: '0%', ease: 'power3.out', delay: 0.5 })
        .to(introLine, { duration: 1.2, x: '0%', ease: 'power3.out' }, "<0.3")
        .to(profilePic, { duration: 1, opacity: 1, scale: 1, ease: 'power3.out' }, "-=0.8");
    }, component);

    return () => ctx.revert(); 
  }, []);

  // Animation 2: Rotating Text Loop
  useEffect(() => {
    const introLine = introLineRef.current;
    
    const interval = setInterval(() => {
      gsap.to(introLine, { 
        opacity: 0, 
        duration: 0.4, 
        ease: 'power1.in',
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          gsap.to(introLine, { 
            opacity: 1, 
            duration: 0.4, 
            ease: 'power1.out'
          });
        }
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="home-section" id="home" ref={component}>
      <div className="home-container">
        <div className="wrapper">
          <h1 className="bigline">Karthik VH</h1>
          <p className="introline" ref={introLineRef}>{roles[roleIndex]}</p>
        </div>
        <div className="home-image-container">
          <img src={profileImage} alt="Karthik VH" className="home-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;

