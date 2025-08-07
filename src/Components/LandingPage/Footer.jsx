import React from 'react';
import { Calculator, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const year = new Date()
  const yearOfCurrent = year.getFullYear()
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-brand">
            <div className="logo">
          <img src="logoWhite.png" alt="Logo" className="logo-img" />
        </div>
            <span className="logo-text">Aadwik</span>
          </div>
          <p className="footer-description">
            Simplifying US tax filing for non-residents, visa holders, and international students 
            with expert guidance and cutting-edge technology.
          </p>
          <div className="footer-credentials">
            <p>IRS Authorized e-file Provider</p>
            <p>Certified Tax Professionals</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#">H1B Tax Filing</a></li>
            <li><a href="#">Student Tax Returns</a></li>
            <li><a href="#">L1 Visa Filing</a></li>
            <li><a href="#">Tax Consultation</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <div>
            <div className="contact-item">
              <Phone className="w-4 h-4" />
              <span>8125647154</span>
            </div>
            <div className="contact-item">
              <Mail className="w-4 h-4" />
              <span>support@aadwik.com</span>
            </div>
            <div className="contact-item">
              <Clock className="w-4 h-4" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {yearOfCurrent} Aadwik. All rights reserved. | Privacy Policy | Terms of Service | Security</p>
      </div>
    </footer>
  );
};

export default Footer;
