import React, { useEffect } from 'react';
import './AboutMe.css';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const AboutMe = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement('div');
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.1;

      particle.style.position = 'absolute';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = 'white';
      particle.style.borderRadius = '50%';
      particle.style.opacity = opacity;
      particle.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;

      particlesContainer.appendChild(particle);
    }

    const handleMouseMove = (e) => {
      const mouseX = e.clientX / containerWidth;
      const mouseY = e.clientY / containerHeight;
      if (particlesContainer) {
        particlesContainer.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bodyy">
      <div className="particles-container">
        <div id="particles"></div>
      </div>

      <section className="about-section">
        <h4 className="intro-heading">INTRODUCTION</h4>
        <h2 className="about-heading">About Me.</h2>
        <p className="about-description">
         
          I thrive in collaborative environments, demonstrating strong <strong>teamwork</strong> and <strong>communication</strong> skills. I consistently deliver projects <strong>before deadlines</strong> through solid <strong>time management</strong> and a disciplined workflow.<br /><br />
          I focus on building modern, responsive, and user-centric applications that solve real problems and deliver delightful user experiences.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gungun-sharma-9688a1249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/__sharma_gungun/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576205321015" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
