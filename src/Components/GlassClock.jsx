 import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GlassClock.css";

// --- SVG Icon Components ---
const SunIcon = () => (
  <svg className="celestial-icon sun" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const FullMoonIcon = () => (
  <svg className="celestial-icon moon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="url(#moon-gradient)" />
  </svg>
);

// The Bird component has been completely removed.

const GlassClock = ({ onLoaded }) => {
  const [timeString, setTimeString] = useState("");
  const [greeting, setGreeting] = useState("");
  const [isDay, setIsDay] = useState(true);
  const sceneRef = useRef(null);

  // Update IST time, greeting, and mode
  useEffect(() => {
    const updateClock = () => {
      const ist = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const hours = ist.getHours();
      const minutes = ist.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
      const displayHour = hours % 12 === 0 ? 12 : hours % 12;
      setTimeString(`${displayHour}:${minutes.toString().padStart(2, "0")} ${period}`);
      
      if (hours >= 5 && hours < 12) setGreeting("Good Morning");
      else if (hours >= 12 && hours < 18) setGreeting("Good Afternoon");
      else if (hours >= 18 && hours < 22) setGreeting("Good Evening");
      else setGreeting("Good Night");
      
      setIsDay(hours >= 6 && hours < 18);
    };
    updateClock();
    const t = setInterval(updateClock, 1000);
    return () => clearInterval(t);
  }, []);

  // Preloader animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the sun or moon icon
      gsap.fromTo(".celestial-icon", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" });
      
      // Fade out the entire preloader
      gsap.to(sceneRef.current, { 
        opacity: 0, 
        duration: 0.8, 
        delay: 4,
        onComplete: onLoaded
      });
    }, sceneRef);
    return () => ctx.revert();
  }, [isDay, onLoaded]);

  return (
    <div className={`scene-container ${isDay ? "day" : "night"}`} ref={sceneRef}>
      {isDay ? <SunIcon /> : <FullMoonIcon />}
      {/* The bird elements have been removed from here */}

      <div className="center-content">
        <h1 className="greeting-text">{greeting}</h1>
        <h2 className="time-text">{timeString}</h2>
        <p className="portfolio-text">Welcome to My Portfolio</p>
      </div>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <radialGradient id="moon-gradient">
            <stop offset="70%" stopColor="#f5f3ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GlassClock;

