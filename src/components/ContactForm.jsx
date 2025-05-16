import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '' });
    } else {
      setMessage({ text: 'Please fill out all fields.', type: 'error' });
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </label>
          <button type="submit">Send Message</button>
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
