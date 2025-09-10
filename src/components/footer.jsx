// import React from 'react';
import './footer.css';
import logo from '../assets/logo.png';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-company-info">
            <div className="footer-logo">
              <div className="logo"><img src={logo} alt="Logo" style={{ width: '135px', height: '84px' }} /></div>
              
            </div>
            <p className="footer-description">
              Revolutionizing urban mobility through AI-powered traffic management solutions
              that reduce congestion and improve city life.
            </p>
          </div>

          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="#">CCTV Integration</a></li>
              <li><a href="#">AI Engine</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2025 Traffix. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
