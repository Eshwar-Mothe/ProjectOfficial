import React from 'react';
import { Button } from 'antd';
import {Link} from 'react-router-dom'

const slide = {
  title: 'Stress-Free Tax Filing — Tailored for You',
  description:
    "We simplify your tax filing whether you're an NRI, student, or visa holder. Expert support, secure uploads, and timely filings — all in one place.",
  buttonContent: 'Get Started Now',
  bgImage: './banner.jpeg',
};

const HeroSection = () => {
  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${slide.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '1in 5% 1in 5%',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      <div
        className="banner-content"
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          marginBlockStart: '3rem',
          padding: '4rem',
          borderRadius: '12px',
          maxWidth: '50rem',
          textAlign: 'left',
        }}
      >
        <h1 style={{ letterSpacing: '1px', fontSize: '2.7rem', marginBottom: '20px', fontWeight: '700' }}>
          {slide.title}
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '25px', lineHeight: '1.6' }}>
          {slide.description}
        </p>
        <Button
          type="primary"
          size="large"
          style={{
            background: '#00b386',
            border: 'none',
            fontWeight: 600,
            padding: '10px 24px',
            fontSize: '1rem',
          }}
        >
          <Link to='/singup' style={{textDecoration:'none'}}>
            {slide.buttonContent}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
