import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about-us">About us</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#legal">Legal</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#shipping">Shipping Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="#instagram">Instagram</a>
        <a href="#x">X</a>
      </div>
      <div className="footer-logo">
        Psylinks Security
      </div>
    </footer>
  );
};

export default Footer;
