// ResumeSection.jsx
import React from 'react';
import './ResumeSection.css';

const ResumeSection = () => {
  return (
    <div className="resume-section">
      <h2>My Resume</h2>
      <p>Click below to view or download my resume:</p>
      <a
        href="GungunSharmaResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeSection;
