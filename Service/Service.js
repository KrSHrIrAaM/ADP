import React from 'react';
import './Service.css';
import serviceImage1 from '../Assests/cashback.png';
import serviceImage2 from '../Assests/money.png';
import serviceImage3 from '../Assests/service3.png';
import serviceImage4 from '../Assests/service4.png';
import newsImage1 from '../Assests/5g.png';
import newsImage2 from '../Assests/wifi.png';

const Service = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-card-container">
        <div className="service-card">
          <img src={serviceImage1} alt="Service 1" />
          <h2>Service 1</h2>
          <p>We offer comprehensive service 1 to meet your needs.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage2} alt="Service 2" />
          <h2>Service 2</h2>
          <p>Our service 2 provides exceptional value and quality.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage3} alt="Service 3" />
          <h2>Service 3</h2>
          <p>Experience top-notch service 3 for all your requirements.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage4} alt="Service 4" />
          <h2>Service 4</h2>
          <p>Our service 4 is designed to exceed your expectations.</p>
        </div>
        <div className="service-card">
          <img src={newsImage1} alt="Service 5" />
          <h2>Service 5</h2>
          <p>Service 5 offers unparalleled performance and reliability.</p>
        </div>
        <div className="service-card">
          <img src={newsImage2} alt="Service 6" />
          <h2>Service 6</h2>
          <p>We deliver outstanding service 6 for all your projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
