 import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ProfileCarousel from '../Components/ProfileCarousel'; // Import the new carousel
import './Home.css';

const roles = ["Java Developer", "Backend Developer", "Full Stack Developer"];

const Home = () => {
  const component = useRef(null);
  const introLineRef = useRef(null);
  const [currentFace, setCurrentFace] = useState(0);

  // --- Animation 1: Initial Page Load Animation ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const bigLine = component.current.querySelector('.bigline');
      // Slide in the name only once
      gsap.from(bigLine, { duration: 1.2, x: '-101%', ease: 'power3.out', delay: 0.5 });
    }, component);
    return () => ctx.revert();
  }, []);

  // --- Animation 2: Synchronized Carousel and Role Text ---
  useEffect(() => {
    const introLine = introLineRef.current;

    const rotationInterval = setInterval(() => {
      // Fade out the current text
      gsap.to(introLine, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.in',
        onComplete: () => {
          // After fading out, update the state to trigger the rotation and text change
          setCurrentFace((prev) => (prev + 1) % 3);
        }
      });
    }, 3000); // Pause for 3 seconds on each face

    return () => clearInterval(rotationInterval);
  }, []);

  // Effect to fade the new text in after it has been updated
  useEffect(() => {
    gsap.to(introLineRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out'
    });
  }, [currentFace]);

  const rotationY = currentFace * -120;

  return (
    <section className="home-section" id="home" ref={component}>
      <div className="home-container">
        <div className="wrapper">
          <h1 className="bigline">Karthik VH</h1>
          <p className="introline" ref={introLineRef}>{roles[currentFace]}</p>
        </div>
        <div className="home-image-container">
          <ProfileCarousel rotation={rotationY} />
        </div>
      </div>
    </section>
  );
};

export default Home;

