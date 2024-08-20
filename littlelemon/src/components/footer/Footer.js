import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Main Street, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurant.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;