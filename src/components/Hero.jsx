import React, { useEffect } from 'react';
import './Hero.css';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation.json';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

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

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="container">
      <div className="particles-container">
        <div id="particles"></div>
      </div>

      <div className="toopp">
        <div className="top-sign-up">
          <button className="btn-sign-up" onClick={() => navigate('/contact')}>
            Contact Me! <span className="icon">↗</span>
          </button>
        </div>
      </div>

      <main>
        <section className="main-content full-screen">
          <div className="text-content">
            <h1>
              Hi I'm<br />
              <span className="highlight">Gungun Sharma</span>
            </h1>
            <p className="description">
              I'm a full-stack developer with a frontend-first mindset—<br />
              passionate about crafting visually stunning, responsive, and user-focused web experiences that blend performance with design.
            </p>
            <div className="btn-group">
              <button className="btn-get-started" onClick={() => navigate('/contact')}>
                Contact Me <span className="icon">↗</span>
              </button>
              <button className="btn-get-started">
                Hire Me <span className="icon">↗</span>
              </button>
            </div>
          </div>

          <div className="lottie-animation">
            <Lottie options={defaultLottieOptions} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero;
