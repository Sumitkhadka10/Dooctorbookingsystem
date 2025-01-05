import React from 'react';
import Header from './Header.jsx';
import '../styles/LandingPage.css';
import DoctorImage from '../assets/Landingpageimg.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/ */}
      <Header />

      <main className="main-content">
        {/* Text Content */}
        <div className="text-content">
          <p className="tagline-title">Health Matters ❤️</p>
          <h2 className="headline">
            Appoint Your Doctor Now <br /> Choose The Best Doctor For You.
          </h2>
          <p className="description">Easyyyyy</p>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search your doctor"
              className="search-input"
            />
            <div className="search-icons">
              <button className="icon-btn search-btn">
                <span role="img" aria-label="Search">
                  🔍
                </span>
              </button>
              <button className="icon-btn camera-btn">
                <span role="img" aria-label="Camera">
                  📷
                </span>
              </button>
              <button className="icon-btn mic-btn">
                <span role="img" aria-label="Microphone">
                  🎙️
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Illustration */}
        <div className="image-content">
          <img
            src={DoctorImage}
            alt="Doctor Illustration"
            className="doctor-image"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
