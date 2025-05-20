import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Payment from './Payment';
import UploadMaterial from './UploadMaterial';
import CheckMaterial from './CheckMaterial';
import Contact from './Contact';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simple login handler for demonstration
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="navbar">
        <div className="logo">Study Circle</div>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          {isLoggedIn && <Link to="/payment">Payment</Link>}
          {isLoggedIn && <Link to="/upload">Upload Material</Link>}
          {isLoggedIn && <Link to="/check">Check Material</Link>}
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          {isLoggedIn && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn && <Route path="/payment" element={<Payment />} />}
          {isLoggedIn && <Route path="/upload" element={<UploadMaterial />} />}
          {isLoggedIn && <Route path="/check" element={<CheckMaterial />} />}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<div className="welcome"><h2>Welcome to Study Circle App</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
