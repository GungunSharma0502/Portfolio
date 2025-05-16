import React, { useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Create particles
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size (smaller particles)
      const size = Math.random() * 2 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Style the particle
      particle.style.position = 'absolute';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = 'white';
      particle.style.borderRadius = '50%';
      particle.style.opacity = opacity;
      
      // Add subtle animation
      particle.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
      
      // Add to container
      particlesContainer.appendChild(particle);
    }
    
    // Add parallax effect on mouse move
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
          Aspiring full-stack developer with a strong passion for frontend design. Over the past year, I've built and deployed multiple real-world projects, including a feature-rich <strong>To-Do List App</strong>, a custom <strong>WordPress website</strong>, and a modern <strong>Expense Tracker</strong> using the MERN stack.<br /><br />

          I've also crafted a professional UI for <strong>SolveX</strong>—an AI-based social media automation tool—focusing on responsiveness and intuitive UX.<br /><br />

          Beyond personal projects, I've worked with clients to design and develop their business websites as a <strong>web development intern</strong>, gaining real-world experience in collaboration, timelines, and feedback-driven design.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;