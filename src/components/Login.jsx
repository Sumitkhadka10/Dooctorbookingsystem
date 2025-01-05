import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; 
import PlantImage from '../assets/login.png'; 

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome back!</h2>
          <p>Enter your Credentials to access your account</p>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="password-container">
                <input type="password" placeholder="Enter your password" />
                <Link to="/forgot-password" className="forgot-password">
                  forgot password
                </Link>
              </div>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
        <div className="login-image">
          <img src={PlantImage} alt="Plant" />
        </div>
      </div>
    </div>
  );
};

export default Login;
