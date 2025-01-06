import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import leafImage from "../assets/signup.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be blank";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address cannot be blank";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
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
    setSuccessMessage(""); // Clear previous messages
    if (validate()) {
      console.log("Form submitted successfully", formData);
      setSuccessMessage("Signup successful!"); // Set success message
      // Reset the form
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Get Started Now</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
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
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>
          <div className="signup-link">
            <p>
              Have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
        <div className="signup-image">
          <img src={leafImage} alt="Decorative signup page visual" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
