import React from 'react';
import '../style/Footer.css';

export default function Footer(){
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">EasyLearn</span>
          </div>
          <p>Making learning easy & accessible for everyone</p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Stay Connected</h4>
            <ul>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#facebook">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EasyLearn.com. All rights reserved.</p>
      </div>
    </footer>
  );
};