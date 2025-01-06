import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import PlantImage from '../assets/login.png';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome back!</h2>
          <p>Enter your credentials to access your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password
                </Link>
              </div>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
        <div className="login-image">
          <img src={PlantImage} alt="Decorative plant image for login page" />
        </div>
      </div>
    </div>
  );
};

export default Login;
