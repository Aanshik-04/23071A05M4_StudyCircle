import React from 'react';

export default function Contact() {
  return (
    <div className="form-card">
      <h2>Contact Us</h2>
      <p>For any queries or support, please email us at <a href="mailto:support@studycircle.com">support@studycircle.com</a> or call +1-234-567-8901.</p>
      <form className="register-form">
        <label>
          Your Name
          <input type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Your Email
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Message
          <textarea placeholder="Type your message here..." rows={4} required style={{resize:'vertical'}}></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
