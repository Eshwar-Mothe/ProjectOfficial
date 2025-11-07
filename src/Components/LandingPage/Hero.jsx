import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';


const Hero = () => {

  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/signup')
  }

  const handleContactClick = () => {
    navigate('/scheduleCall')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to know more about your services.");
    window.open(`https://wa.me/+15105989818?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero">

      <div className="hero-bg">
        <img
          src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional working on taxes"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div>
          <div className="hero-card">
            <h1 className="hero-title">
              Stress-Free Tax Filing —
              <br />
              <span className="highlight">Tailored for You</span>
            </h1>
            <p className="hero-description">
              We simplify your tax filing whether you're an H1B, student, or visa holder.
              Expert support, secure uploads, and timely filings — all in one place.
            </p>
            <div className="d-flex gap-4">
              <button className="btn" onClick={handleStartClick}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className=' text-light btn' style={{ background: "none", border: "none" }} onClick={handleContactClick}>
                <Phone className="w-5 h-5" /> &nbsp; Schedule Call
              </button>
              <button className='text-light btn' style={{ background: "none", border: "none" }} onClick={handleWhatsAppClick}>
                <FaWhatsapp className="w-5 h-5" style={{ fontSize: "2rem" }} />
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
