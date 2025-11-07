import React, { useState } from 'react';
import {
  Shield, Globe, Users, Zap, Server, Lock, CheckCircle, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import './AboutStyles.css';
import { motion } from 'framer-motion';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: 'easeOut'
    }
  }
};

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <motion.section
        className="about-hero-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="hero-overlay"></div>
        <div className="hero-bg-element hero-bg-1"></div>
        <div className="hero-bg-element hero-bg-2"></div>

        <div className="container about-container">
          <motion.div className="hero-content" variants={fadeUp}>
            <h1 className="hero-title">
              Empowering Tax Filers
              <span className="hero-title-gradient">Across Borders</span>
            </h1>
            <p className="hero-description">
              Aadwik Tax Solutions is your trusted partner for accurate, secure, and stress-free U.S. tax filing — whether you're an NRI, F1/OPT student, H1B professional, or green card holder.
            </p>
            <div className="hero-buttons">
              <motion.button
                onClick={handleButtonClick}
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Today <ArrowRight className="btn-icon" />
              </motion.button>
              <motion.button
                onClick={() => navigate('/services')}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="aboutPage"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <section id="learn-more" className="about-section">

          <div className="container">
            <div className="about-grid">
              <motion.div className="about-content" variants={fadeUp}>
                <h2 className="section-title">Who We Are</h2>
                <div className="about-text">
                  <p>
                    <span className="highlight">Aadwik</span> emerged from a vision:
                    <em className="italic"> to simplify U.S. tax filing for global citizens</em>.
                  </p>
                  <p>
                    Headquartered in the U.S. with expert advisors around the globe, we combine deep tax knowledge with
                    advanced technology, helping thousands file their taxes confidently and on time.
                  </p>
                </div>
              </motion.div>
              <motion.div className="stats-card-container" variants={fadeUp}>
                <div className="stats-card-bg"></div>
                <div className="about-stats-card">
                  <div className="about-stats-grid">
                    {[
                      { value: '99.9%', label: 'Client Satisfaction' },
                      { value: '1026+', label: 'Happy Clients' },
                      { value: '15+', label: 'Services' },
                      { value: '24/7', label: 'Support' }
                    ].map((stat, index) => (
                      <motion.div key={index} className="stat-item" variants={fadeUp}>
                        <div className="about-stat-number">{stat.value}</div>
                        <div className="about-stat-label">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="benefits-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2 className="section-title">Why Join the Aadwik Family?</h2>
            <p className="section-subtitle">
              Experience the difference with our comprehensive suite of services designed for global tax filers
            </p>
          </motion.div>

          <div className="about-benefits-grid">
            {[
              { icon: <Users />, title: 'Tailored Filing Solutions', desc: 'Visa-specific filing flows for F1, OPT, H1B, L1, Green Card, and NRI users.' },
              { icon: <Shield />, title: 'End-to-End Support', desc: 'Get personalized help from real tax experts — not chatbots.' },
              { icon: <Zap />, title: 'Smart, Secure Platform', desc: 'Upload documents, track progress, and receive updates in real time.' },
              { icon: <Globe />, title: 'Global Accessibility', desc: 'File from anywhere — India, UAE, U.S., or beyond.' },
              { icon: <CheckCircle />, title: 'No Surprises', desc: 'Transparent pricing, no hidden fees. Ever.' }
            ].map((item, i) => (
              <motion.div key={i} className="about-benefit-card" variants={fadeUp}>
                <div className="about-benefit-icon">{item.icon}</div>
                <h3 className="about-benefit-title">{item.title}</h3>
                <p className="about-benefit-description">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="tech-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2 className="section-title">Built with Trust & Technology</h2>
            <p className="section-subtitle">
              Our platform is engineered using a modern, scalable stack — optimized for speed, security, and reliability.
            </p>
          </motion.div>

          <div className="tech-grid">
            {[
              { label: 'Frontend', icon: <Server />, tools: ['React.js', 'Tailwind CSS', 'Ant Design'] },
              { label: 'Backend', icon: <Server />, tools: ['Node.js', 'Express.js'] },
              { label: 'Databases', icon: <Server />, tools: ['MongoDB (NoSQL)', 'PostgreSQL (Relational)'] },
              { label: 'Cloud & DevOps', icon: <Globe />, tools: ['AWS (S3, EC2)', 'Docker', 'Nginx'] },
              { label: 'Security', icon: <Lock />, tools: ['JWT Authentication', 'HTTPS', 'RBAC'] },
              { label: 'Real-Time Sync', icon: <Zap />, tools: ['Socket.IO for instant', 'admin-user updates'] }
            ].map((item, i) => (
              <motion.div key={i} className="tech-card" variants={fadeUp}>
                <div className="tech-icon">{item.icon}</div>
                <h3 className="tech-category">{item.label}</h3>
                <ul className="tech-list">
                  {item.tools.map((tool, j) => <li key={j}>{tool}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section
        className="leadership-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2 className="section-title">Meet the Torch Bearers of Aadwik</h2>
            <p className="section-subtitle">Passionate leaders driving innovation in Tax Solutions</p>
          </motion.div>

          <div className="leadership-grid">
            {[

              {
                name: 'Shravan Martha',
                initials: 'SM',
                role: 'COO & Strategy Lead',
                avatarClass: 'avatar-purple',
                bio: 'Shravan is dedicated to designing customer-centric strategies that streamline every stage of the tax filing process and consistently deliver measurable results.'
              },
              {
                name: 'Shiva Prasad',
                initials: 'SP',
                role: 'Certified Public Accountant',
                avatarClass: 'avatar-purple',
                bio: 'Brings over 8 years of specialized expertise in U.S. taxation, serving individuals and businesses, And ensures clients achieve long-term financial security and IRS compliance through proven methods and dedicated client focus.'
              }
            ].map((leader, i) => (
              <motion.div key={i} className="leader-card" variants={fadeUp}>
                <div className="leader-avatar">
                  <div className={`avatar-gradient ${leader.avatarClass}`}>
                    {leader.initials}
                  </div>
                </div>
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-bio">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="cta-overlay"></div>
        <div className="cta-bg-element cta-bg-1"></div>
        <div className="cta-bg-element cta-bg-2"></div>

        <div className="container">
          <motion.div className="cta-content" variants={fadeUp}>
            <h2 className="cta-title">Ready to File with Confidence?</h2>
            <p className="cta-description">
              Join thousands of global filers who trust Aadwik to get it done — accurately, on time, and stress-free.
            </p>
            <motion.a
              href="/signup"
              className="btn btn-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started Today <ArrowRight className="btn-icon" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
