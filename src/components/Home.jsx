import React from 'react';
import Header from './Header.jsx'; 
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header /> {/* Render the Header component */}
      <div className="home-content">
        <div className="home-left">
          <h1>Find a plan right for you!</h1>
          <p>We provide health insurance information and quotes</p>
          <button className="get-quote-btn">Get Quote</button>
        </div>
        <div className="home-right">
          <img
            src="/assets/Family.jpeg" 
            alt="Family on beach"
            className="home-image"
          />
          <div className="home-label">Affordable Health Care</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
