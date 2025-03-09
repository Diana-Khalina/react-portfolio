

// src/pages/Contact.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';  // Optional: for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission success (you can add actual form submission logic here)
    setFormSubmitted(true);
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      </div>

      <div className="contact-form">
        {formSubmitted ? (
          <div className="success-message">
            <h2>Thank you for reaching out!</h2>
            <p>Your message has been received. I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
