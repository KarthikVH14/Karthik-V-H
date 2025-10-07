 import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroAnimation.css'; // We will use this CSS file for styling

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// A helper function to create star data
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      cx: Math.random() * 800,
      cy: Math.random() * 450,
      r: Math.random() * 0.9 + 0.2,
      key: i
    });
  }
  return stars;
};


const HeroAnimation = () => {
  const component = useRef(null);
  const svgRef = useRef(null);
  const stars = generateStars(150);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const svg = svgRef.current;
      if (!svg) return;

      // --- MAIN SCROLL-BASED TIMELINE ---
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top top',
          end: 'bottom top', // Animate over the full height of the container
          scrub: 1.5,      // Smoother scrubbing
        },
      });

      // --- ANIMATION SEQUENCE ---

      timeline.to("#sun-moon", { 
        attr: { cy: 650 }, 
        rotation: 10,
        transformOrigin: "400px 480px",
        ease: "power2.inOut" 
      }, 0);

      timeline.to("#sky-gradient stop:nth-child(1)", { stopColor: '#0f172a' }, 0); 
      timeline.to("#sky-gradient stop:nth-child(2)", { stopColor: '#1e3a8a' }, 0); 

      timeline.fromTo("#stars", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1.1, ease: "power1.in" }, 0.1); 

      timeline.to('#background-hills', { y: -30, x: 30, ease: "none" }, 0);
      timeline.to('#midground-hills', { y: -70, x: -40, ease: "none" }, 0);
      timeline.to('#foreground', { y: -10, ease: "none" }, 0);

      timeline.to("#tree-foliage-1, #tree-foliage-2, #tree-trunk", {
          opacity: 0.7,
          fill: "#0f172a",
          stroke: "#2d0600",
          duration: 1.5,
      }, 0.3); 
      timeline.to("#tree-foliage-1", { filter: "url(#dark-blur)", duration: 1.5 }, 0.3);

      // --- INDEPENDENT LOOPS ---
      gsap.to("#stars circle", {
          opacity: () => gsap.utils.random(0.3, 1),
          duration: () => gsap.utils.random(0.8, 2),
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          stagger: {
              each: 0.05,
              from: "random"
          }
      });

    }, component);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="hero-animation-container">
      <svg
        ref={svgRef}
        id="parallax-svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
            <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f97316" /> 
                <stop offset="100%" stopColor="#ea580c" /> 
            </linearGradient>
            
            <radialGradient id="sun-moon-gradient">
                <stop offset="0%" stopColor="#ffffdd" /> 
                <stop offset="50%" stopColor="#fee4a2" />
                <stop offset="100%" stopColor="rgba(254, 250, 224, 0)" />
            </radialGradient>

            <filter id="dark-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
            </filter>
        </defs>
        
        <rect id="sky" width="100%" height="100%" fill="url(#sky-gradient)" />
        <g id="stars" opacity="0">
            {stars.map(star => (
                <circle key={star.key} cx={star.cx} cy={star.cy} r={star.r} fill="white"/>
            ))}
        </g>
        
        <circle id="sun-moon" cx="400" cy="480" r="100" fill="url(#sun-moon-gradient)" />
        
        <g id="landscape">
            <path id="background-hills" d="M -5 480 C 150 450, 250 500, 400 480 C 550 460, 650 510, 805 480 V 605 H -5 Z" fill="#7c2d12"/>
            <path id="midground-hills" d="M -5 530 C 180 500, 320 560, 500 530 C 650 500, 750 550, 805 540 V 605 H -5 Z" fill="#431407"/>
            <path id="foreground" d="M -5 605 V 580 H 805 V 605 H -5 Z" fill="#1c0400"/>
            
            <g id="tree">
                <path id="tree-trunk" d="M675 580 V470 C675 460, 685 460, 685 470 V580 Z" fill="#3b1509" stroke="#2d0600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path id="tree-foliage-1" d="M680 390 C620 380, 600 450, 680 470 C760 450, 740 380, 680 390Z" fill="#2b501b" filter="url(#dark-blur)" stroke="#1e3a24" strokeWidth="1" strokeLinejoin="round" />
                <path id="tree-foliage-2" d="M680 410 C650 400, 640 440, 680 460 C720 440, 710 400, 680 410Z" fill="#4a7c36" stroke="#2f5b20" strokeWidth="1" strokeLinejoin="round" />
            </g>
        </g>
      </svg>
    </div>
  );
};

export default HeroAnimation;

