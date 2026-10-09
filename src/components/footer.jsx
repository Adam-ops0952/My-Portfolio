import {
  ArrowUp,
  Mail
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"

import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>HassanTech</h2>
          <p>
            Frontend Developer focused on building modern,
            responsive and user-friendly web applications.
          </p>

          <div className="social-icons">
    
              https://github.com/YOUR\_GITHUB\_USERNAME
                <FaGithub size={20} />

              https://linkedin.com/in/YOUR\_LINKEDIN\_USERNAME
                <FaLinkedinIn size={20} />

              https://instagram.com/YOUR\_INSTAGRAM\_USERNAME
                <FaInstagram size={20} />

              yourgmail@gmail.com
                <Mail size={20} />
          </div>
        </div>

         <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>


        <div className="footer-links">
          <p>Services</p>
          Web Development
          UI/UX Design
          React Applications
          Responsive Design
        </div>
      </div>

      <div className="footer-bottom">
        <p>
           {year} HassanTech. All rights reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
           <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;