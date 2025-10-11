 import React from 'react';
import './ProfileCarousel.css';

// TODO: Replace these with your actual image imports
import profileImage1 from '../assets/images/Profile.png';
import profileImage2 from '../assets/images/Profile2.png'; // Placeholder for your 2nd image
import profileImage3 from '../assets/images/Profile3.png'; // Placeholder for your 3rd image

const images = [profileImage1, profileImage2, profileImage3];

const ProfileCarousel = ({ rotation }) => {
  return (
    <div className="carousel-scene">
      <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
        {images.map((img, index) => (
          <div
            key={index}
            className="carousel__panel"
            // THE FIX: Adjusted translateZ for the new narrower shape
            style={{ transform: `rotateY(${index * 120}deg) translateZ(220px)` }}
          >
            <img src={img} alt={`Karthik VH profile ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;

