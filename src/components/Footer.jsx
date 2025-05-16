import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Assuming you'll create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2025 My Portfolio – Built with passion and code.
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;