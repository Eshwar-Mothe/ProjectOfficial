import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Zap, Clock10, Percent, ShieldCheck } from 'lucide-react';

const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleOfferClick = () => {
    navigate('/signin')
  }

  if (!showPopup || location.pathname !== '/') return null;

  return (
    <div className="ad-overlay">
      <div className="ad-popup">
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          <X size={18} />
        </button>

        <div className="popup-tagline">🔥 Limited Time Offer</div>
        <h2 className="popup-title">Get Up to <span className="highlight">25% OFF</span></h2>
        <p className="popup-subtext">File your taxes with Aadwik tax solutions and enjoy unbeatable savings.</p>

        <div className="popup-benefits">
          <div className="benefit-card">
            <Percent size={18} /> 25% off Premium Plan
          </div>
          <div className="benefit-card">
            <ShieldCheck size={18} /> Free Audit Protection
          </div>
          <div className="benefit-card">
            <Clock10 size={18} /> 24-Hour Expert Filing
          </div>
          <div className="benefit-card">
            <Zap size={18} /> Instant Refund Estimate
          </div>
        </div>

        <button className="popup-cta" onClick={handleOfferClick}>🎁 Claim Your Offer</button>
        <p className="popup-expiry">Offer expires <strong>July 31</strong></p>
      </div>
    </div>
  );
};

export default AdPopup;
