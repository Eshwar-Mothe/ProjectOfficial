import React from 'react';
import { Calculator, Phone, Mail, Clock } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

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
            <li><a href="#">Advanced Tax Planning(ATP)</a></li>
            <li><a href="#">Extension Filing</a></li>
            <li><a href="#">Audit & Notice Support</a></li>
            <li><a href="#">24x7 Customer Support</a></li>
            <li><a href="#">FBAR & FATCA</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <div>
            <div className="contact-item">
              <span>
                <ReactCountryFlag countryCode="IN" svg style={{ width: '1.5em', height: '1.7em' }} title="India" />
                <span>+91 8985641564</span> |
                <ReactCountryFlag countryCode="US" svg style={{ width: '1.5em', height: '1.5em', marginLeft: 12 }} title="United States" />
                <span> +1(510) 598-9818</span>
              </span>
            </div>
            <div className="contact-item">
              <Mail className="w-4 h-4" />
              <span>support@aadwiktaxsolutions.com</span>
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
