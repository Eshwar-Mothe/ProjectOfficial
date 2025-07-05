import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/signup')
  }

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
            <button className="btn-hero" onClick={handleStartClick}>
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
