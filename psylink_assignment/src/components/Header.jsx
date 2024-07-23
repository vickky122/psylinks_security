import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Psylinks Security</div>
      <nav>
        <ul>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#career">Career</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
