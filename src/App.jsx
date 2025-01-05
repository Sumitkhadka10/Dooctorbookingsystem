import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Contactus from './components/Contactus.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
};

export default App;
