import React, { useState } from 'react';
import {
    CheckCircle, Star, Play, ArrowRight, Shield, Lock, Award
} from 'lucide-react';
import './ServicesStyles.css';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [memberCount] = useState(847);
    const remainingSlots = 1000 - memberCount;
    const navigate = useNavigate()
    const {isMenuOpen, setIsMenuOpen} = useState(false)

    const handleServiceClick = () => {
        navigate('/signin')
    }

    const demoFeatures = [
        'Interactive demo walkthrough',
        'Sample tax scenarios',
        'Platform tour',
        'No personal data required',
        '15-minute experience',
    ];

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

    const trustStats = [
        { num: '1000+', label: 'Happy Clients' },
        { num: '99.8%', label: 'Accuracy Rate' },
        { num: '24/7', label: 'Support' },
        { num: '50+', label: 'Countries Served' },
    ];

    const trustBadges = [
        { icon: <Shield />, text: 'IRS Authorized' },
        { icon: <Lock />, text: 'Bank-Level Security' },
        { icon: <Award />, text: 'CPA Certified' },
    ];

    return (
        <>
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="services-page">
                {/* Hero */}
                <section className="services-hero">
                    <div className="container">
                        <h1>Choose Your Tax Filing Plan</h1>
                        <p>Professional tax preparation services tailored to your needs.</p>
                        <div className="discount-banner">
                            <Star className="discount-icon" />
                            <span>Limited Time: 5% OFF - Only {remainingSlots} spots left!</span>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="pricing-section container">
                    <div className="pricing-grid">
                        {/* Demo Plan */}
                        <div className="pricing-card trial-card">
                            <div className="card-header">
                                <div className="plan-badge trial-badge"><Play /> Try Demo</div>
                                <h3>Sample Filing Demo</h3>
                                <p>Experience our platform with a sample tax return</p>
                            </div>
                            <div className="price-section">
                                <span className="price-main">FREE</span>
                                <p>No credit card required</p>
                            </div>
                            <ul>{demoFeatures.map((item, i) => (
                                <li key={i}><CheckCircle /> {item}</li>
                            ))}</ul>
                            <button className="select-plan-btn" onClick={handleServiceClick}><Play /> Try Demo Now</button>
                        </div>

                        {/* Paid Plans */}
                        {servicePlans.map(({ id, name, description, originalPrice, discountedPrice, benefits, features, popular }) => (
                            <div key={id} className={`pricing-card ${popular ? 'popular-card' : ''}`}>
                                {popular && <div className="popular-badge"><Star /> Most Popular</div>}
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <div className="price-section">
                                    <span className="price-original">${originalPrice}</span>
                                    <span className="price-main">${discountedPrice}</span>
                                </div>
                                <ul>{benefits.map((benefit, i) => (
                                    <li key={i}><CheckCircle /> {benefit}</li>
                                ))}</ul>
                                <div className="features-tags">
                                    {features.map((f, i) => <span key={i}>{f}</span>)}
                                </div>
                                <button className="select-plan-btn" onClick={handleServiceClick}>Choose {name} <ArrowRight /></button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="comparison-section container">
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
                                <div>{[0, 1, 4].includes(i) ? <CheckCircle /> : '-'}</div>
                                <div><CheckCircle /></div>
                            </div>
                        ))}
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default Services;
