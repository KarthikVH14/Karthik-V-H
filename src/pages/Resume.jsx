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
                    <a download="KarthikVH_Resume.pdf" href="../assets/resume/KarthikVH_JDE_BDE_SDE.pdf" className="resume-button">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Resume;

