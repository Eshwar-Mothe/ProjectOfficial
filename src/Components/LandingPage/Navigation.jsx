import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to know more about your services.");
    window.open(`https://wa.me/8125647154?text=${message}`, '_blank');
  }

  return (
    <>
      <div className="contactUs">
        <img src="whatsapp.png" alt="WhatsApp Chat" width={50} height={50} onClick={handleWhatsAppClick} />
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="logo.png" alt="Logo" className="logo-img" />
          </div>

          <div className="nav-links desktop-only">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/signup" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
