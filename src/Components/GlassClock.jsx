 import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GlassClock.css';

const GlassClock = ({ onLoaded }) => {
  const hourHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);
  const numbersRef = useRef(null);

  useEffect(() => {
    // Animate the numbers fading in for a polished effect
    gsap.from(numbersRef.current.children, {
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
    });

    // Real-time clock logic for India Standard Time (IST)
    const setISTClock = () => {
      const now = new Date();
      // Get current time in UTC and add the IST offset (5 hours and 30 minutes)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (330 * 60000)); // 330 minutes = 5.5 hours

      const seconds = istTime.getSeconds();
      const minutes = istTime.getMinutes();
      const hours = istTime.getHours();

      const secondDeg = (seconds / 60) * 360 + 90;
      const minuteDeg = (minutes / 60) * 360 + 90;
      const hourDeg = (hours / 12) * 360 + 90;

      gsap.set(secondHandRef.current, { rotation: secondDeg });
      gsap.set(minuteHandRef.current, { rotation: minuteDeg });
      gsap.set(hourHandRef.current, { rotation: hourDeg });
    };

    setISTClock();
    const clockInterval = setInterval(setISTClock, 1000);

    // Fade out logic remains the same
    const fadeOutTimer = setTimeout(() => {
      gsap.to('.glass-clock-wrapper', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: onLoaded,
      });
    }, 4000);

    return () => {
      clearInterval(clockInterval);
      clearTimeout(fadeOutTimer);
    };
  }, [onLoaded]);

  return (
    <div className="glass-clock-wrapper">
      <div className="glass-clock">
        {/* Numbers for the clock face */}
        <div className="clock-numbers" ref={numbersRef}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`number number-${i + 1}`}>
              {i + 1}
            </span>
          ))}
        </div>

        {/* Clock Hands */}
        <div className="hand hour-hand" ref={hourHandRef}></div>
        <div className="hand minute-hand" ref={minuteHandRef}></div>
        <div className="hand second-hand" ref={secondHandRef}></div>
        <div className="hand-center"></div>
      </div>
      <h1 className="welcome-message">Welcome to my Portfolio</h1>
    </div>
  );
};

export default GlassClock;

