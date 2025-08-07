import React, { useState } from 'react';
import {
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Shield,
  Lock,
  Award,
} from 'lucide-react';
import './ServicesStyles.css';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberCount] = useState(847);
  const remainingSlots = 1000 - memberCount;
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/signin');
  };

  // Demo plan features
  const demoFeatures = [
    'Interactive demo walkthrough',
    'Sample tax scenarios',
    'Platform tour',
    'No personal data required',
    '15-minute experience',
  ];

  // Service plans
  const servicePlans = [
    {
      id: 1,
      name: 'Standard Tax Filing',
      originalPrice: 149,
      discountedPrice: 142,
      description: 'Perfect for individuals with straightforward tax situations',
      benefits: [
        'Federal tax return preparation',
        'Standard deduction optimization',
        'Basic audit support',
        'E-filing included',
        'Email support',
        'Tax document storage',
        'Refund tracking',
        'Direct deposit setup',
      ],
      features: [
        'Form 1040 preparation',
        'W-2 and 1099 processing',
        'Basic tax optimization',
        '1 year document storage',
      ],
    },
    {
      id: 2,
      name: 'Planned Tax Filing',
      originalPrice: 299,
      discountedPrice: 284,
      description: 'Comprehensive solution for complex tax situations',
      benefits: [
        'Everything in Standard',
        'Tax planning consultation',
        'Quarterly estimated payments',
        'Multi-state tax filing',
        'Priority phone support',
        'Amended return assistance',
        'Previous year amendments',
        'Tax strategy planning',
        'Investment tax guidance',
        'Business expense optimization',
      ],
      features: [
        'Advanced tax optimization',
        'Multi-state filing',
        'Investment planning',
        'Unlimited consultations',
      ],
      popular: true,
    },
  ];

  const comparisonFeatures = [
    'Federal Tax Return',
    'E-filing Included',
    'Tax Planning Consultation',
    'Multi-state Filing',
    'Priority Support',
  ];

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <motion.div
        className="services-page"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.section className="services-hero" variants={fadeInUp}>
          <div className="container">
            <h1>Choose Your Tax Filing Plan</h1>
            <p>Professional tax preparation services tailored to your needs.</p>
            <motion.div className="discount-banner" whileHover={{ scale: 1.02 }}>
              <Star className="discount-icon" />
              <span>Limited Time: 5% OFF - Only {remainingSlots} spots left!</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          className="pricing-section container"
          variants={staggerContainer}
        >
          <motion.div className="pricing-grid">
            {/* Demo Plan */}
            <motion.div className="pricing-card trial-card" variants={fadeInUp}>
              <div className="card-header">
                <motion.div className="plan-badge trial-badge" whileHover={{ scale: 1.1 }}>
                  <Play size={16} /> Try Demo
                </motion.div>
                <h3>Sample Filing Demo</h3>
                <p>Experience our platform with a sample tax return</p>
              </div>
              <div className="price-section">
                <span className="price-main">FREE</span>
                <p>No credit card required</p>
              </div>
              <ul>
                {demoFeatures.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={16} /> {item}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={handleServiceClick}
                className="select-plan-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={16} /> Try Demo Now
              </motion.button>
            </motion.div>

            {/* Paid Plans */}
            {servicePlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'popular-card' : ''}`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <motion.div className="popular-badge" whileHover={{ scale: 1.1 }}>
                    <Star size={16} /> Most Popular
                  </motion.div>
                )}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="price-section">
                  <span className="price-original">${plan.originalPrice}</span>
                  <span className="price-main">${plan.discountedPrice}</span>
                </div>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>
                      <CheckCircle size={16} /> {benefit}
                    </li>
                  ))}
                </ul>
                <div className="features-tags">
                  {plan.features.map((f, i) => (
                    <span key={i}>{f}</span>
                  ))}
                </div>
                <motion.button
                  className="select-plan-btn"
                  onClick={handleServiceClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Choose {plan.name} <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section
          className="comparison-section container"
          variants={fadeInUp}
        >
          <h2>Compare Our Plans</h2>
          <div className="comparison-table">
            <div className="table-row header">
              <div>Features</div>
              <div>Demo</div>
              <div>Standard</div>
              <div>Planned</div>
            </div>
            {comparisonFeatures.map((feature, i) => (
              <div key={i} className="table-row">
                <div>{feature}</div>
                <div>{i === 0 ? 'Preview Only' : '-'}</div>
                <div>{[0, 1, 4].includes(i) ? <CheckCircle size={16} /> : '-'}</div>
                <div>
                  <CheckCircle size={16} />
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Services;
