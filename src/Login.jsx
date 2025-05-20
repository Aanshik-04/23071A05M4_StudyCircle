import React from 'react';

export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };
  return (
    <div className="form-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
