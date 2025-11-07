import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram,
  Send, MessageCircle, ChevronDown, ChevronUp, ArrowRight,
  Wheat,
} from 'lucide-react';
import Navigation from './Navigation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const message = encodeURIComponent("Hi! I want to know more about your services.");

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1(510) 598-9818',
      secondary: 'Mon-Fri 9AM-6PM EST',
      color: '#2DD4BF',
      delay: '0.1s',
      url: 'tel:+15105989818'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'support@aadwiktaxsolutions.com',
      secondary: 'We respond within 24 hours',
      color: '#3B82F6',
      delay: '0.2s',
      url: 'mailto:support@aadwiktaxsolutions.com?subject=Support%20Request&body=Hi%2C%20I%20need%20help%20with%20my%20tax%20filing.'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      primary: '#aadwikTaxSolutions',
      secondary: 'Know latest updates',
      color: '#b910a2ff',
      delay: '0.3s',
      url: 'https://www.instagram.com/aadwiktaxsolutions?igsh=NWViNmF5N3BnaHJi'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Available 24/7',
      secondary: 'Instant support online',
      color: '#8B5CF6',
      delay: '0.4s',
      url: `https://wa.me/+15105989818?text=${message}`
    }
  ];

  const faqData = [
    {
      question: 'How long does it take to process my tax return?',
      answer: 'Most tax returns are processed within 3-5 business days. Complex returns with multiple income sources or extensive deductions may take up to 7-10 business days. We provide real-time updates throughout the process.'
    },
    {
      question: 'What documents do I need to upload?',
      answer: 'You\'ll need W-2s from all employers, 1099 forms for additional income, receipts for deductions, previous year\'s tax return, bank statements, and any other relevant tax documents. Our document checklist will guide you through the specific requirements for your situation.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use military-grade 256-bit SSL encryption, multi-factor authentication, and comply with all IRS security standards. Your data is stored in secure, SOC 2 certified data centers with 24/7 monitoring.'
    },
    {
      question: 'Can I track my refund status?',
      answer: 'Yes! You can track your refund status in real-time through your personalized dashboard. We provide updates at every stage: submission, IRS acceptance, processing, and refund approval. You\'ll also receive email and SMS notifications.'
    },
    {
      question: 'What if I need to amend my tax return?',
      answer: 'We offer amendment services for any corrections needed after filing. Our team will review the changes, prepare the amended return (Form 1040X), and handle the submission process. Amendment fees may apply depending on the complexity.'
    },
    {
      question: 'Do you offer audit protection?',
      answer: 'Yes, we provide comprehensive audit protection services. This includes audit representation, document preparation, and professional support throughout the entire audit process. Our certified professionals will handle all communications with the IRS on your behalf.'
    },
    {
      question: 'Can you help with state tax returns?',
      answer: 'Yes, we handle tax returns for all 50 states plus DC. State return preparation is included with most federal return packages. We stay current with all state-specific tax laws and requirements to ensure accurate filing.'
    }
  ];

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="contactPage">
        <div className="contact">
          <section className="contact-hero">
            <div className="hero-background"></div>
            <div className="hero-content">
              <div
                className="hero-text"
                id="hero-text"
                data-animate
                style={{
                  opacity: isVisible['hero-text'] ? 1 : 0,
                  transform: isVisible['hero-text'] ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <h1>Get Expert Tax Help Today</h1>
                <p>Connect with our certified tax professionals and get personalized assistance for all your tax needs. We're here to make tax filing simple and stress-free.</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">1026+</span>
                    <span className="stat-label text-light">Happy Clients</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label text-light">Tax Experts</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label text-light">Accuracy Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="contact-container">
            {/* Contact Methods */}
            <section className="contact-methods-section">
              <div
                className="section-header"
                id="methods-header"
                data-animate
                style={{
                  opacity: isVisible['methods-header'] ? 1 : 0,
                  transform: isVisible['methods-header'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <h2>Multiple Ways to Reach Us</h2>
                <p>Choose your preferred method of communication</p>
              </div>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.url}
                    target={method.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="contact-method-card"
                    id={`method-${index}`}
                    data-animate
                    style={{
                      opacity: isVisible[`method-${index}`] ? 1 : 0,
                      transform: isVisible[`method-${index}`]
                        ? 'translateY(0) scale(1)'
                        : 'translateY(50px) scale(0.9)',
                      transition: `all 0.6s ease-out ${method.delay}`,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div
                      className="method-icon"
                      style={{ backgroundColor: `${method.color}20`, color: method.color }}
                    >
                      <method.icon size={28} />
                    </div>
                    <div className="method-content">
                      <h3>{method.title}</h3>
                      <p className="method-primary">{method.primary}</p>
                      <p className="method-secondary">{method.secondary}</p>
                    </div>
                    <div className="method-arrow">
                      <ArrowRight size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </section>


            {/* Main Content Grid */}
            <section className="contact-content">
              {/* Contact Form */}
              <div
                className="contact-form-section"
                id="contact-form"
                data-animate
                style={{
                  opacity: isVisible['contact-form'] ? 1 : 0,
                  transform: isVisible['contact-form'] ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="form-header">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="tax-filing">Tax Filing Question</option>
                        <option value="document-upload">Document Upload Issue</option>
                        <option value="refund-status">Refund Status Inquiry</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Please describe your question or concern in detail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    <Send size={20} />
                    Send Message
                    <div className="button-shine"></div>
                  </button>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div
                className="contact-info-section"
                id="contact-info"
                data-animate
                style={{
                  opacity: isVisible['contact-info'] ? 1 : 0,
                  transform: isVisible['contact-info'] ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                <div className="info-card">
                  <h3>Quick Contact</h3>
                  <div className="quick-contact-options">
                    <a href="tel:+15105989818" className="quick-contact-btn phone">
                      <Phone size={20} />
                      <div>
                        <span className="btn-title">Call Now</span>
                        <span className="btn-subtitle">+1(510) 598-9818</span>
                      </div>
                    </a>
                    <a
                      href={`mailto:support@aadwiktaxsolutions.com?subject=Support%20Request&body=Hi%2C%20I%20need%20help%20with%20my%20tax%20filing.`}
                      className="quick-contact-btn email"
                    >
                      <Mail size={20} />
                      <div>
                        <span className="btn-title">Email Us</span>
                        <span className="btn-subtitle">support@aadwiktaxsolutions.com</span>
                      </div>
                    </a>


                    <button className="quick-contact-btn chat">
                      <MessageCircle size={20} />
                      <div>
                        <span className="btn-title">Live Chat</span>
                        <span className="btn-subtitle">Available 24/7</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="info-card">
                  <h3>Office Location</h3>
                  <div className="office-info">
                    <div className="office-address">
                      <MapPin size={20} />
                      <div>
                        <p>Fremont BLVD</p>
                        <p>Fremont, CA 94538</p>
                      </div>
                    </div>
                    <div className="office-hours">
                      <Clock size={20} />
                      <div>
                        <p><strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="info-card">
                  <h3>Follow Us</h3>
                  <p>Stay connected for tax tips and updates</p>
                  <div className="social-links">
                    <a href="#" className="social-link facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="social-link twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="social-link linkedin">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="social-link instagram">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div> */}
              </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section className="faq-section">
              <div
                className="section-header"
                id="faq-header"
                data-animate
                style={{
                  opacity: isVisible['faq-header'] ? 1 : 0,
                  transform: isVisible['faq-header'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <h2>Frequently Asked Questions</h2>
                <p>Find answers to common questions about our tax services</p>
              </div>

              <div
                className="faq-container"
                id="faq-container"
                data-animate
                style={{
                  opacity: isVisible['faq-container'] ? 1 : 0,
                  transform: isVisible['faq-container'] ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button
                      className={`faq-question ${openFaq === index ? 'active' : ''}`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;