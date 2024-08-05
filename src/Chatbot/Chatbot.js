import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ showChatbot, toggleChatbot }) => {
  const [chatMessages, setChatMessages] = useState([]); // Define chatMessages state
  const faqs = [
    { question: "What is this app about?", answer: "This app allows you to recharge your mobile phone easily and quickly." },
    { question: "How do I contact support?", answer: "You can contact support through the Contact Us page or via email at support@example.com." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, and mobile wallets." },
    // Add more FAQs as needed
  ];

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.chatInput.value;
    if (message) {
      // Add user message to chat
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      e.target.elements.chatInput.value = '';

      // Find response for the user's message
      const response = faqs.find(faq => message.toLowerCase().includes(faq.question.toLowerCase()))?.answer || "Sorry, I don't understand that question.";
      
      // Simulate bot response
      setTimeout(() => {
        setChatMessages([...chatMessages, { text: message, sender: 'user' }, { text: response, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className={`chatbot ${showChatbot ? 'open' : ''}`}>
      <div className="chatbot-header">
        <h3>Chatbot</h3>
        <button className="chatbot-close" onClick={toggleChatbot}>X</button>
      </div>
      <div className="chatbot-messages">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleChatSubmit} className="chatbot-input">
        <input type="text" name="chatInput" placeholder="Ask me anything..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
