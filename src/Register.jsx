import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className="form-card">
      <h2>Register</h2>
      <form className="register-form">
        <label>
          Username
          <input type="text" placeholder="Enter username" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter email" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" required />
        </label>
        <label>
          Age
          <input type="number" placeholder="Enter age" min="1" max="120" required />
        </label>
        <label>
          Gender
          <select required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Date of Birth
          <input type="date" required max="2025-05-20" />
        </label>
        <label>
          Phone Number
          <input type="text" placeholder="Enter phone number" required />
        </label>
        <label>
          Address
          <input type="text" placeholder="Enter address" required />
        </label>
        <label>
          Institution/School
          <input type="text" placeholder="Enter institution/school" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
