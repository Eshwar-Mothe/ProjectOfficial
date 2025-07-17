import React, { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import './Styles.css';
import Services from './Services';
import AdPopup from './AdPopup';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    

    return (
        <>
            <AdPopup/>
            <div className="home-page">
                <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Hero />
                <Services />
                <Stats />
                <Features />
                <Testimonials />
                <CTA />
            </div>
        </>
    );
};

export default Home;
