import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css'; 
import mobiletowerImage from '../Assests/mobiletower.png';
import willamImage from '../Assests/willambro.png';
import ollyImage from '../Assests/olly.png';
import serviceImage1 from '../Assests/cashback.png';
import serviceImage2 from '../Assests/money.png';
import serviceImage3 from '../Assests/service3.png';
import serviceImage4 from '../Assests/service4.png';
import newsImage1 from '../Assests/5g.png';
import newsImage2 from '../Assests/wifi.png';
import newsImage3 from '../Assests/plans.png';
import newsImage4 from '../Assests/highspeed.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isPrepaid, setIsPrepaid] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate(); 

  const handleToggle = () => {
    setIsPrepaid(!isPrepaid);
  };

  const handleProceed = () => {
    if (validateForm()) {
      navigate('/plans');
    } else {
      setError('Please enter valid details');
    }
  };

  const validateForm = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return false;
    }
    if (!isPrepaid && amount <= 0) {
      return false;
    }
    return true;
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      navigate('/register', { state: { email } });
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="home-container">
      <Carousel fade className="home-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={mobiletowerImage} alt="First slide" />
          <Carousel.Caption className="home-carousel-caption">
            <h1 className="home-carousel-caption-size">User Friendly</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={willamImage} alt="Second slide" />
          <Carousel.Caption className="home-carousel-caption">
            <h1 className="home-carousel-caption-size">Create a Bond</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ollyImage} alt="Third slide" />
          <Carousel.Caption className="home-carousel-caption">
            <h1 className="home-carousel-caption-size">Connect With Others</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="home-phase">
        <h1 className="home-phase-text">Here is Why Everyone Prefers Jio</h1>
      </div>

      <div className="home-cards-container">
        <div className="home-card">
          <div className="home-card-body">
            <h5 className="home-card-title">Plans for all</h5>
            <h6 className="home-card-subtitle mb-2 text-muted"></h6>
            <p className="home-card-text">Explore plans with unlimited voice calls, data, SMS, and a host of benefits. Experience the internet at lightning speed with no latency.</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-body">
            <h5 className="home-card-title">Pan-India coverage</h5>
            <h6 className="home-card-subtitle mb-2 text-muted"></h6>
            <p className="home-card-text">Enjoy HD-quality voice calls and faster data speeds anywhere in India. Enliven your digital life with a bouquet of FREE Jio apps.</p>
          </div>
        </div>
      </div>

      <div className="home-toggle-section">
        <div className="home-toggle-button">
          <button className={isPrepaid ? 'active' : ''} onClick={() => setIsPrepaid(true)}>
            Prepaid
          </button>
          <button className={!isPrepaid ? 'active' : ''} onClick={() => setIsPrepaid(false)}>
            Postpaid
          </button>
        </div>
        <div className="home-input-container">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {!isPrepaid && (
            <div className="home-input-amount">
              <span className="rupee-symbol">₹</span>
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          )}
          <button className="proceed-button" onClick={handleProceed}>
            Proceed
          </button>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>

      <div className="home-featured-services">
        <h1><h1>Our Featured Services</h1></h1>
        <div className="home-services-cards">
          <div className="home-service-card">
            <img src={serviceImage1} alt="Service 1" />
            <h3>E-Sim</h3>
            <p>Looking to upgrade your physical SIM to eSIM? Now no more visiting stores or doing any paperwork. Just send a request through SMS, confirm, and it’s done.</p>
          </div>
          <div className="home-service-card">
            <img src={serviceImage2} alt="Service 2" />
            <h3>Caller Tune</h3>
            <p>Set any song from JioTunes' collection of over 1 million tracks as your hello tune or change it anytime to go with your mood, it's FREE!</p>
          </div>
          <div className="home-service-card">
            <img src={serviceImage4} alt="Service 2" />
            <h3>Cashbacks</h3>
            <p>Get exciting Cashbacks/Rewards for Jio Recharges on leading digital wallets/apps.</p>
          </div>
          <div className="home-service-card">
            <img src={serviceImage3} alt="Service 2" />
            <h3>Pay Securely</h3>
            <p>Pay securely using MyJio Wallet and get many exciting cashbacks and redeem points.</p>
          </div>
        </div>
      </div>

      <div className="home-customer-reviews">
        <h1><h1>What Our Customers Say</h1></h1>
        <div className="customer-reviews-container">
          <div className="customer-review">
            <p>"Excellent service! Recharge was quick and hassle-free."</p>
            <div className="customer-review-stars">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
            </div>
            <h4>John Doe</h4>
          </div>
          <div className="customer-review">
            <p>"Very convenient and user-friendly interface. Highly recommend!"</p>
            <div className="customer-review-stars">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
            </div>
            <h4>Jane Smith</h4>
          </div>
          <div className="customer-review">
            <p>"Great customer support and quick response times. Satisfied with the service."</p>
            <div className="customer-review-stars">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
            </div>
            <h4>Michael Johnson</h4>
          </div>
          <div className="customer-review">
            <p>"Satisfied with the service. Quick responses and many new features and cashbacks."</p>
            <div className="customer-review-stars">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
            </div>
            <h4>Michael Johnson</h4>
          </div>
        </div>
      </div>

      <div className="home-guidance">
        <h2>Need Guidance?</h2>
        <div className="guidance-buttons">
          <button className="guidance-button" onClick={() => navigate('/contact')}>Contact Us</button>
          <button className="guidance-button" onClick={() => setShowChatbot(true)}>Chat to Us</button>
        </div>
      </div>

      {showChatbot && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button onClick={() => setShowChatbot(false)}>X</button>
          </div>
          <div className="chatbot-body">
            {/* Chatbot content here */}
            <p>Hello! How can I assist you today?</p>
          </div>
        </div>
      )}

      <div className="home-news-section">
        <h2>Latest News</h2>
        <div className="home-news-container">
          <div className="home-news-card">
            <img src={newsImage1} alt="News 1" />
            <h3>New Feature: Auto-Recharge</h3>
            <p>We are excited to introduce our new auto-recharge feature, ensuring you never run out of balance!</p>
          </div>
          <div className="home-news-card">
            <img src={newsImage2} alt="News 2" />
            <h3>Summer Promotion: 20% Off</h3>
            <p>Enjoy a 20% discount on all prepaid recharges this summer. Don't miss out on this limited-time offer!</p>
          </div>
          <div className="home-news-card">
            <img src={newsImage3} alt="News 3" />
            <h3>Partnership with XYZ Telecom</h3>
            <p>We are thrilled to announce our new partnership with XYZ Telecom to bring you better coverage and services.</p>
          </div>
          <div className="home-news-card">
            <img src={newsImage4} alt="News 4" />
            <h3>Partnership with XYZ Telecom</h3>
            <p>We are thrilled to announce our new partnership with XYZ Telecom to bring you better coverage and services.</p>
          </div>
        </div>
      </div>

      <div className="home-cta">
        <h2>Stay Updated!</h2>
        <p>Sign up for our newsletter to receive the latest news and updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
        {emailError && <p className="error-text-email">{emailError}</p>}
      </div>

      <div className="home-contact">
        <p>Email: contact@company.com</p>
        <p>Phone: (123) 456-7890</p>
        <div className="home-map">
          <iframe src="https://www.google.com/maps/embed?..." allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
