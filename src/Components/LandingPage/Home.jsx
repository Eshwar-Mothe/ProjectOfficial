import React, { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Services from './Services';
import AdPopup from './AdPopup';
import './Styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import RefundStatus from './RefundStatus';
import ServicesBox from './ServicesBox';
import TaxBanner from './TaxBanner';
// import Chatbot from './ChatBot';

// Animation variants
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Parallax example for Hero/CTA
const parallaxVariant = {
  hidden: { opacity: 0, y: 90, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

// Popup modal variant
const popupVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.3 } },
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAd, setShowAd] = useState(true);

  return (
    <>
      {/* Animated Popup */}
      <AnimatePresence>
        {showAd && (
          <motion.div
            variants={popupVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="ad-popup-overlay"
            onClick={() => setShowAd(false)}
            style={{ position: 'fixed', zIndex: 1000, inset: 0 }}
          >
            <AdPopup />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Navigation – No animation for better usability */}
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Hero Section with Parallax Animation */}
        <motion.section
          variants={parallaxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <Hero />
        </motion.section>

        {/* Services Section with Stagger Animation */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // or remove "once" if needed
        >
          <motion.div variants={fadeUpVariant}>
            <Services />
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Stats />
        </motion.section>

        {/* <TaxBanner/> */}

        {/* Features Section with Staggered Entrance */}
        <motion.section
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={fadeUpVariant}>
            <Features />
          </motion.div>
        </motion.section>

        <ServicesBox />

        {/* Testimonials Section */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Testimonials />
        </motion.section>

        {/* CTA Section with Parallax Animation */}
        <motion.section
          variants={parallaxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <CTA />
        </motion.section>

        {/* <Chatbot/> */}
      </motion.div>
    </>
  );
};

export default Home;
