import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import { Shield, Globe, Users, Zap, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import './AboutStyles.css'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/signup')
    }
    return (
        <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {/* Hero Section */}
            <section className="about-hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-bg-element hero-bg-1"></div>
                <div className="hero-bg-element hero-bg-2"></div>

                <div className="container about-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Empowering Tax Filers
                            <span className="hero-title-gradient">
                                Across Borders
                            </span>
                        </h1>
                        <p className="hero-description">
                            Adwik Tax Consultancy is your trusted partner for accurate, secure, and stress-free U.S. tax filing —
                            whether you're an NRI, F1/OPT student, H1B professional, or green card holder.
                        </p>
                        <div className="hero-buttons">
                            <button onClick={handleButtonClick} className="btn">
                                Get Started Today
                                <ArrowRight className="btn-icon" />
                            </button>
                            <button onClick={()=>navigate('/services')} className="btn btn-secondary">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Organization Section */}
            <section className="aboutPage">
                <section id="learn-more" className="about-section">
                    <div className="container">
                        <div className="about-grid">
                            <div className="about-content">
                                <h2 className="section-title">Who We Are</h2>
                                <div className="about-text">
                                    <p>
                                        Founded in <span className="highlight">2023</span>, Adwik emerged from a vision:
                                        <em className="italic"> to simplify U.S. tax filing for global citizens</em>.
                                        From NRIs managing dual-taxation, to international students navigating IRS jargon for the first time —
                                        we built our firm to serve you with empathy, speed, and precision.
                                    </p>
                                    <p>
                                        Headquartered in the U.S. with expert advisors around the globe, we combine deep tax knowledge with
                                        advanced technology, helping thousands file their taxes confidently and on time.
                                    </p>
                                </div>
                            </div>
                            <div className="stats-card-container">
                                <div className="stats-card-bg"></div>
                                <div className="stats-card">
                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <div className="stat-number">2023</div>
                                            <div className="stat-label">Founded</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-number">1000+</div>
                                            <div className="stat-label">Happy Clients</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-number">50+</div>
                                            <div className="stat-label">Countries</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-number">24/7</div>
                                            <div className="stat-label">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Join the Adwik Family?</h2>
                        <p className="section-subtitle">
                            Experience the difference with our comprehensive suite of services designed for global tax filers
                        </p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Users />
                            </div>
                            <h3 className="benefit-title">Tailored Filing Solutions</h3>
                            <p className="benefit-description">Visa-specific filing flows for F1, OPT, H1B, L1, Green Card, and NRI users.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Shield />
                            </div>
                            <h3 className="benefit-title">End-to-End Support</h3>
                            <p className="benefit-description">Get personalized help from real tax experts — not chatbots.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Zap />
                            </div>
                            <h3 className="benefit-title">Smart, Secure Platform</h3>
                            <p className="benefit-description">Upload documents, track progress, and receive updates in real time.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Globe />
                            </div>
                            <h3 className="benefit-title">Global Accessibility</h3>
                            <p className="benefit-description">File from anywhere — India, UAE, U.S., or beyond.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <CheckCircle />
                            </div>
                            <h3 className="benefit-title">No Surprises</h3>
                            <p className="benefit-description">Transparent pricing, no hidden fees. Ever.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Built with Trust & Technology</h2>
                        <p className="section-subtitle">
                            Our platform is engineered using a modern, scalable stack — optimized for speed, security, and reliability.
                        </p>
                    </div>

                    <div className="tech-grid">
                        <div className="tech-card">
                            <div className="tech-icon">
                                <Server />
                            </div>
                            <h3 className="tech-category">Frontend</h3>
                            <ul className="tech-list">
                                <li>React.js</li>
                                <li>Tailwind CSS</li>
                                <li>Ant Design</li>
                            </ul>
                        </div>

                        <div className="tech-card">
                            <div className="tech-icon">
                                <Server />
                            </div>
                            <h3 className="tech-category">Backend</h3>
                            <ul className="tech-list">
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>

                        <div className="tech-card">
                            <div className="tech-icon">
                                <Server />
                            </div>
                            <h3 className="tech-category">Databases</h3>
                            <ul className="tech-list">
                                <li>MongoDB (NoSQL)</li>
                                <li>PostgreSQL (Relational)</li>
                            </ul>
                        </div>

                        <div className="tech-card">
                            <div className="tech-icon">
                                <Globe />
                            </div>
                            <h3 className="tech-category">Cloud & DevOps</h3>
                            <ul className="tech-list">
                                <li>AWS (S3, EC2)</li>
                                <li>Docker</li>
                                <li>Nginx</li>
                            </ul>
                        </div>

                        <div className="tech-card">
                            <div className="tech-icon">
                                <Lock />
                            </div>
                            <h3 className="tech-category">Security</h3>
                            <ul className="tech-list">
                                <li>JWT Authentication</li>
                                <li>HTTPS</li>
                                <li>RBAC</li>
                            </ul>
                        </div>

                        <div className="tech-card">
                            <div className="tech-icon">
                                <Zap />
                            </div>
                            <h3 className="tech-category">Real-Time Sync</h3>
                            <ul className="tech-list">
                                <li>Socket.IO for instant</li>
                                <li>admin-user updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet the People Behind Adwik</h2>
                        <p className="section-subtitle">Passionate leaders driving innovation in tax consultancy</p>
                    </div>

                    <div className="leadership-grid">
                        <div className="leader-card">
                            <div className="leader-avatar">
                                <div className="avatar-gradient avatar-blue">
                                    RM
                                </div>
                            </div>
                            <h3 className="leader-name">Rohan Mehta</h3>
                            <p className="leader-role">Founder & CEO</p>
                            <p className="leader-bio">
                                With over a decade of experience in international tax compliance, Rohan envisioned a platform that bridges
                                global complexity with simplicity. His mission: make tax filing easy, accessible, and accurate for every U.S. taxpayer abroad.
                            </p>
                        </div>

                        <div className="leader-card">
                            <div className="leader-avatar">
                                <div className="avatar-gradient avatar-purple">
                                    SL
                                </div>
                            </div>
                            <h3 className="leader-name">Sarah Lin</h3>
                            <p className="leader-role">COO & Strategy Lead</p>
                            <p className="leader-bio">
                                Sarah brings operational excellence from fintech and edtech startups. Her passion is building scalable systems
                                and customer-first journeys that deliver results with empathy and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="cta-bg-element cta-bg-1"></div>
                <div className="cta-bg-element cta-bg-2"></div>

                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to File with Confidence?</h2>
                        <p className="cta-description">
                            Join thousands of global filers who trust Adwik to get it done — accurately, on time, and stress-free.
                        </p>
                        <a href="/signup" className="btn btn-cta">
                            Get Started Today
                            <ArrowRight className="btn-icon" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;