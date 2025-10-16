import React, { useState } from 'react';

const ProjectsDropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      title: "My Portfolio",
      content: (
        <>
          <strong>Tech Stack:</strong> React, CSS, Node.js, Express, MySQL, GSAP<br /><br />
          My Portfolio is a clean and expressive personal website that showcases both creativity and technical depth. It delivers a dynamic user experience with smooth transitions and interactive animations.<br /><br />
          <em>"This project reflects my passion for design and my full-stack capabilities, making me a strong fit for any tech-driven internship."</em><br /><br />
          👉 <a href="https://portfolio-gamma-red-21.vercel.app/" target="_blank" style={styles.link}>Click here to visit the project</a>
        </>
      )
    },
    {
      title: "KiddyPlanner",
      content: (
        <>
          KiddyPlanner is a colorful and simple to-do list app created especially for children. It encourages young users to manage their tasks with joy.<br /><br />
          <em>"It combines functionality with fun—ideal for developing productive habits in a playful environment."</em><br /><br />
          👉 <a href="https://kiddy-planner.vercel.app/" target="_blank" style={styles.link}>Click here to visit the project</a>
        </>
      )
    },
    {
      title: "Expense Tracker",
      content: (
        <>
          Expense Tracker helps users manage their finances by tracking income, expenses, and savings all in one place. It's designed for clarity and ease of use.<br /><br />
          <em>"This project shows my ability to build practical, real-life tools with efficient logic and user-centered design."</em><br /><br />
          👉 <a href="https://expense-tracker-pi-dusky.vercel.app/" target="_blank" style={styles.link}>Click here to visit the project</a>
        </>
      )
    },
    {
      title: "SunScriptService",
      content: (
        <>
          A sleek and modern animated website built with my team to create a visually stunning and engaging experience.<br /><br />
          <em>"This work displays my UI/UX skills and collaborative development approach."</em><br /><br />
          👉 <a href="https://sunscriptservice.com " target="_blank" style={styles.link}>Click here to visit the project</a>
        </>
      )
    },
    {
      title: "WealthByVishal",
      content: (
        <>
          WealthByVishal is a website built for a professional LIC agent to help users understand and explore insurance policies easily.<br /><br />
          <em>"An elegant client-focused site that converts visitors into trusted leads through intuitive interaction."</em><br /><br />
          👉 <a href="https://vishal-one.vercel.app/" target="_blank" style={styles.link}>Click here to visit the project</a>
        </>
      )
    },
    {
  title: "CartCraft",
  content: (
    <>
      CartCraft is an elegant React-based shopping application that offers dark mode, real-time product filtering, and a smooth, user-friendly shopping experience for online retail.<br /><br />
      <em>"This project reflects my focus on creating responsive, visually appealing, and performance-optimized frontend applications."</em><br /><br />
      👉 <a href="https://cartcraftt.vercel.app/" target="_blank" style={styles.link}>Click here to visit the project</a>
    </>
  )
}

  ];

  return (
    <div style={styles.bodyy}>
      <div style={styles.aboutSection}>
        <h2 style={styles.aboutHeading}>WHAT I HAVE DONE <br /><span style={styles.span}>Projects.</span></h2>

        <div style={styles.accordion}>
          {projects.map((project, index) => (
            <div key={index} style={styles.accordionItem}>
              <div 
                style={{
                  ...styles.accordionHeader,
                  ...(activeIndex === index && styles.accordionHeaderHover)
                }} 
                onClick={() => toggleAccordion(index)}
              >
                {project.title}
                <span style={{
                  ...styles.arrow,
                  ...(activeIndex === index && styles.arrowActive)
                }}>▶</span>
              </div>
              <div 
                style={{
                  ...styles.accordionBody,
                  ...(activeIndex === index && styles.accordionBodyOpen)
                }}
              >
                {project.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  bodyy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
  },
  aboutSection: {
    maxWidth: '1200px',
    background: 'transparent',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    // border: '1px solid rgba(255, 255, 255, 0.2)',
    // backdropFilter: 'blur(10px)',
  },
  aboutHeading: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '1.2rem',
      textAlign: 'center',
  },
  span: {
    fontSize: '2.5rem',
    fontWeight: 900,
    color: '#0be8c7',
  },
  accordion: {
    width: '100%',
  },
  accordionItem: {
    marginBottom: '10px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  accordionHeader: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '15px 20px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
//   accordionHeaderHover: {
//     backgroundColor: 'rgba(11, 232, 199, 0.2)',
//   },
  arrow: {
    transition: 'transform 0.3s ease',
    color: '#0be8c7',
  },
  arrowActive: {
    transform: 'rotate(90deg)',
  },
  accordionBody: {
    maxHeight: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '0 20px',
    color: '#fff',
    transition: 'max-height 0.4s ease, padding 0.3s ease',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    borderRadius: '0 0 8px 8px',
  },
  accordionBodyOpen: {
    maxHeight: '1000px',
    padding: '15px 20px',
  },
  link: {
    display: 'inline-block',
    marginTop: '8px',
    color: '#0be8c7',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.3s ease, transform 0.2s ease',
  },
  linkHover: {
    color: '#fff',
    transform: 'translateX(4px)',
  }
};

export default ProjectsDropdown;