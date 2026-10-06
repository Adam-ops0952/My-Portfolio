import { NavLink, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Blog from "../pages/Blog.jsx";
import "../Styles/Navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="main_nav">
        <div className="logo">
          <Link to="/">HassanTech</Link>
        </div>

        <div className="nav-links">
        <Link to="/">Home</Link> {"       "}
        <Link to="/Services">Services</Link> {"       "}
        <Link to="/About">About</Link> {"       "}
        <Link to="/Contact">Contact</Link> {"       "}
        <Link to="/Blog">Blog</Link>
        </div>

        <button className="menu-btn"
        onClick={() =>
          setIsOpen(!isOpen)
        } 
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
    );
}

export default Navbar;