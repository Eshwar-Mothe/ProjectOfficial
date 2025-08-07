import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate()

  const handleScheduleCall = ()=>{
    navigate('/scheduleCall')
  }
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to File Your Taxes with Confidence?</h2>
        <p>
          Join thousands of satisfied customers who trust Aadwik for their US tax filing needs.
        </p>
        <div className="cta-buttons">
          <button className="btn-cta-primary" >
            Start Your Filing Now
          </button>
          <button className="btn-cta-secondary" onClick={handleScheduleCall}>
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
