import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          Doctor Booking<span className="plus">System</span>
        </h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
      <Link to="/login" className="login-btn">
        Log In
      </Link>
    </header>
  );
};

export default Header;
