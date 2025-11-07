import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const serviceMenu = [
  { name: "ITIN Guidance and Processing", route: "/services/itin-guidance" },
  { name: "1040 and 1040NR Tax return filing", route: "/services/1040-filing" },
  { name: "Form 4868 extension filing", route: "/services/4868-extension" },
  { name: "W4 Assistance", route: "/services/w4-assistance" },
  { name: "FBAR and FATCA Filing", route: "/services/fbar-fatca" },
  { name: "Audit and Assurance", route: "/services/audit-assurance" },
  { name: "Professional Tax Planning", route: "/services/tax-planning" },
  { name: "Unlimited Tax Consultations", route: "/services/unlimited-tax" }
];

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to know more about your services.");
    window.open(`https://wa.me/+15105989818?text=${message}`, '_blank');
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
            <Link to="/refundStatus" className={`nav-link ${isActive('/refundStatus') ? 'active-link' : ''}`}>Refund Status</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-link' : ''}`}>About</Link>
            <Link to="/referral" className={`nav-link ${isActive('/referral') ? 'active-link' : ''}`}>Refer & Earn</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`}>Contact Us</Link>
            <Link to="/signup" className={`btn-primary ${isActive('/signup') ? 'active-link' : ''}`}>Sign In / Sign Up</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>

          <div className="logo">
            <img src="irs-logo.png" alt="Logo" className="irs-logo-img" />
          </div>
        </div>

        <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`${isActive('/') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className={`${isActive('/services') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/refundStatus" className={`${isActive('/refundStatus') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Refund Status</Link>
          <Link to="/about" className={`${isActive('/about') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/referral" className={`${isActive('/referral') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Refer & Earn</Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/signup" className={`btn-primary ${isActive('/signup') ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Get Started</Link>
        </div>
      </nav >
    </>
  );
};

export default Navigation;
