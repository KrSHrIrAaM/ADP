import React, { useState } from 'react';
import './ContactUs.css'; 
import Chatbot from '../Chatbot/Chatbot'; // Import the chatbot component
import botImage from '../Assests/bot.png'; // Import the logo image
import Jiocar from '../Assests/JioCare.mp4';
import Jioiso from '../Assests/ios.mp4';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // State to manage chatbot visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSuccess(true);
    console.log('Form Data:', formData);
    // Optionally, send data to the server here
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            aria-required="true"
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && !error && <p className="success-message">Your message has been sent successfully!</p>}
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="chatbot-trigger" onClick={toggleChatbot}>
        <img src={botImage} alt="Chatbot Logo" />
      </div>

      <Chatbot showChatbot={showChatbot} toggleChatbot={toggleChatbot} /> {/* Pass props to control visibility */}

      {/* Videos section */}
      <div className="videos-container">
        <video controls className="video">
          <source src={Jiocar} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className="video">
          <source src={Jioiso} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ContactUs;
