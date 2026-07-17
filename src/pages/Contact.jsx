import React from "react";
import "../css/Contact.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";


import { FaPhone, FaEnvelope,  } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
        </div>
      </div>

      {/* Contact Container */}
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have questions about our products? Feel free to contact us anytime.
          </p>

          <div className="info-box">
            <FaPhone className="icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <span>support@stylehub.com</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
            alt="contact"
            className="contact-image"
          />
        </div>

       
        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              rows="6"
              placeholder="Write Your Message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      

      <footer className="contact-footer">
  <div className="social-icons">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaGooglePlusG /></a>
    <a href="#"><FaYoutube /></a>
  </div>

  <div className="footer-links">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Reviews</a>
  </div>

  <div className="footer-bottom">
    <p>Copyright © 2026 | Designed By Chetan</p>
  </div>
</footer>
    </div>
  );
};

export default Contact;