import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 HealthCare Platform. All Rights Reserved.</p>
      <p>Follow us on:</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
