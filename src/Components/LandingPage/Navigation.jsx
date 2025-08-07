import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to know more about your services.");
    window.open(`https://wa.me/8125647154?text=${message}`, '_blank');
  };

  return (
    <>
      <div className="contactUs">
        <img src="whatsapp.png" alt="WhatsApp Chat" width={50} height={50} onClick={handleWhatsAppClick} />
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="logowbg.png" alt="Logo" className="logo-img" />
          </div>

          <div className="nav-links desktop-only">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active-link' : ''}`}>Home</Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active-link' : ''}`}>Services</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-link' : ''}`}>About</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`}>Contact Us</Link>
            <Link to="/signup" className={`btn-primary ${isActive('/signup') ? 'active-link' : ''}`}>Get Started</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`${isActive('/') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className={`${isActive('/services') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" className={`${isActive('/about') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/signup" className={`btn-primary ${isActive('/signup') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Get Started</Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
