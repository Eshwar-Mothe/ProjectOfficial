import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      const hasSeenPopup = sessionStorage.getItem("hasSeenAdPopup");
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setShowPopup(true);
          sessionStorage.setItem('hasSeenAdPopup',"true")
        }, 2000);
        return () => clearTimeout(timer);
      }
    };
}, [location.pathname])


const handleOfferClick = () => {
  navigate("/referral");
};

if (!showPopup || location.pathname !== "/") return null;

return (
  <div className="ad-overlay">
    <div className="ad-popup">
      {/* Close button */}
      <button className="close-btn" onClick={() => setShowPopup(false)}>
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="popup-title">
        Refer a Friend &amp; Get upto <span>75% Off</span>
      </h2>

      {/* Subtext */}
      <p className="popup-subtext">
        Refer a friend and you’ll get up to 75% off after your friend completes their filing with us.
      </p>

      {/* CTA Button */}
      <button className="popup-cta" onClick={handleOfferClick}>
        Yes! Refer a friend
      </button>

      {/* Secondary link */}
      <button
        className="popup-dismiss"
        onClick={() => setShowPopup(false)}
      >
        Nah, I’m good thanks.
      </button>
    </div>
  </div>
);
};

export default AdPopup;
