import React, { useEffect, useRef, useLayoutEffect } from 'react';
import './ScrollSkills.css';
import Lottie from 'react-lottie';
import staranimationData from '../assets/starAnimation.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSkills = () => {
  const scrollContainerRef = useRef(null);
  const scrollTextRef = useRef(null);

  useLayoutEffect(() => {
    if (!scrollContainerRef.current || !scrollTextRef.current) return;

    const containerWidthScroll = scrollContainerRef.current.offsetWidth;
    const textWidth = scrollTextRef.current.scrollWidth;
    const scrollAmount = Math.max(0, textWidth - containerWidthScroll);

    gsap.to(scrollTextRef.current, {
      x: -scrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'top top',
        end: `+=${scrollAmount}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    const words = document.querySelectorAll('.highlight-word');
    words.forEach((word) => {
      const animDirection = word.dataset.anim || 'bottom';
      const customColor = word.dataset.color;
      let startX = 0,
        startY = 0;

      switch (animDirection) {
        case 'left': startX = -100; break;
        case 'right': startX = 100; break;
        case 'top': startY = -100; break;
        case 'bottom': startY = 100; break;
      }

      gsap.set(word, {
        x: startX,
        y: startY,
        opacity: 0,
        color: customColor || '#eee',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: word,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 0.5,
        },
      });

      tl.to(word, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });

      if (customColor) {
        tl.to(word, { color: customColor, duration: 0.3 }, '-=0.5')
          .to(word, { color: '#fff', duration: 0.3 })
          .to(word, { color: customColor, duration: 0.3 })
          .to(word, { color: '#eee', duration: 0.5 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const particlesContainer = document.getElementById('scroll-particles');
    if (!particlesContainer) return;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
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

    return () => {
      if (particlesContainer) particlesContainer.innerHTML = '';
    };
  }, []);

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: staranimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const frontendSkills = [
    ['HTML', 'Structure of web pages'],
    ['CSS', 'Styling & Layouts'],
    ['JavaScript', 'Interactive Logic'],
    ['React', 'Component-based UI'],
  ];

  const backendSkills = [
    ['Node.js', 'Server-side Logic'],
    ['Express.js', 'Routing & APIs'],
    ['Mongodb', 'Database'],
    ['Git & GitHub', 'Version Control'],
  ];

  return (
    <>
      <div className="scroll-particles-container">
        <div id="scroll-particles"></div>
      </div>

      {/* LINE SCROLL SECTION */}
      <section className="scroll-scroll-section" ref={scrollContainerRef}>
        <div className="scroll-text-track">
          <div className="scroll-scroll-text" ref={scrollTextRef}>
            <div className="scroll-star-animation">
              <Lottie options={defaultLottieOptions} isClickToPauseDisabled />
            </div>
            {[
              ['left', 'Fueled'],
              ['bottom', 'by'],
              ['right', 'passion', '#FF6B6B'],
              ['top', 'and'],
              ['left', 'discipline', '#4ECDC4'],
              ['right', "I'm"],
              ['bottom', 'a'],
              ['top', 'self-driven', '#FFE66D'],
              ['left', 'workaholic', '#7B3CC2'],
              ['right', 'who'],
              ['bottom', 'thrives'],
              ['top', 'on'],
              ['left', 'turning'],
              ['right', 'ideas', '#6BFFB8'],
              ['bottom', 'into'],
              ['top', 'impactful'],
              ['left', 'results.'],
            ].map(([anim, word, color], idx) => (
              <span className="scroll-word-box" key={idx}>
                <span className="highlight-word" data-anim={anim} data-color={color}>
                  {word}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="scroll-skills-section">
        <h1>My Skills</h1>

        <h2 className="skills-subheading">Frontend Skills</h2>
        <div className="scroll-skills-grid">
          {frontendSkills.map(([title, desc], idx) => (
            <div className="scroll-card" key={`frontend-${idx}`}>
              <div className="card-inner">
                <div className="card-front">{title}</div>
                <div className="card-back">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="skills-subheading">Beginner-level backend skills</h2>
        <div className="scroll-skills-grid">
          {backendSkills.map(([title, desc], idx) => (
            <div className="scroll-card" key={`backend-${idx}`}>
              <div className="card-inner">
                <div className="card-front">{title}</div>
                <div className="card-back">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScrollSkills;
