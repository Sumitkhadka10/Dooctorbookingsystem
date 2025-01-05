import React, { useState } from "react";
import "../styles/Signup.css";
import leafImage from "../assets/signup.jpeg"; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be blank";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address cannot be blank";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must include '@'";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be blank";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      alert("Signup successful!");
  
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Get Started Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            <button className="signup-btn" type="submit">
              Signup
            </button>
          </form>
          <div className="signup-link">
            <p>
              Have an account? <a href="/login">Sign In</a>
            </p>
          </div>
        </div>
        <div className="signup-image">
          <img src={leafImage} alt="Signup visual" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
