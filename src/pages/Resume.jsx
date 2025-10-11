 import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section section">
        <div className="resume-bg">
            <div className="resume-container container grid">
                <div className="resume-data">
                    <h2 className="resume-title">Interested in my work?</h2>
                    <p className="resume-description">You can download my resume for a more detailed look at my skills and experience.</p>
                    
                    {/* THE FIX: 
                      1. The path now correctly includes the 'resume' subfolder.
                      2. The filename matches the one in your 'public/resume' folder.
                    */}
                    <a download href="/resume/KarthikVH_JDE_BDE_SDE.pdf" className="resume-button">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Resume;

