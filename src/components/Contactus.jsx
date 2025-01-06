import React from "react";
import Header from './Header.jsx'; 
import "../styles/Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-us-page">
      {/* Importing the Header */}
      <Header />

      <div className="contact-header">
        <h1>Contact Us</h1>
        <hr />
      </div>

      <div className="contact-details">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10973.982189066575!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e73fba22222222%3A0x3f8718f9d7b20a3f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1698888888888!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-info">
          <h2>DOCTOR BOOKING SYSTEM</h2>
          <p>Good Health for You</p>
          <p>
            <strong>Address:</strong> Kageshwori,Manohara 09 <br />
            Kathmandu, Nepal
          </p>
          <p>
            <strong>Phone:</strong> 9813000000
          </p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">What do you need help with?</label>
            <textarea id="message" placeholder="Message"></textarea>
          </div>

          <button className="send-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
