import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons'; // Updated for payment icons
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Example for "Powered By"
import './NavDown.css'; 

const NavDown = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/bug-bounty">Bug Bounty</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help & Support</h4>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/mobile-apps">Mobile Apps</a></li>
          <li><a href="/payment-options">Payment Options</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/become-a-partner">Become a Partner</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/grievance-policy">Grievance Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Verified By</h4>
        <div className="verified-by">
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcMastercard} />
          <FontAwesomeIcon icon={faCcDiscover} />
          {/* Add any additional verified icons as needed */}
        </div>
      </div>
      <div className="footer-section">
        <h4 className='ranga'>Connect Us</h4>
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>           
      <div className="footer-section">
        <h4>Powered By</h4>
        <FontAwesomeIcon icon={faCheckCircle} className="zaakpay-logo" />
      </div>
    </footer>
  );
}

export default NavDown;
