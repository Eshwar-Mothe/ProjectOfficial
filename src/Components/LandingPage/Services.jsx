import React from 'react';
import {
  FileText,
  Shield,
  Calendar,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  

  const services = [
    {
      icon: <FileText className="w-12 h-12" style={{ color: '#059669' }} />,
      title: "Visa-Specific Filing Expertise",
      description: "We specialize in tax filing for non-US/IT residents and visa holders. Our tax advisors understand the unique challenges of each category and ensure 100% accurate filing with maximum refunds.",
      buttonText: "Learn More About Visa Filing",
      linkTo: '/about'
    },
    {
      icon: <Globe className="w-12 h-12" style={{ color: '#ea580c' }} />,
      title: "Global Filing Support",
      description: "Whether you're inside the US, UK, CA, or anywhere else, our global experts can help you with US taxes without any geographical barriers. We're equipped to work across time zones.",
      buttonText: "Explore Global Services",
      linkTo:'/services'
    },
    {
      icon: <Shield className="w-12 h-12" style={{ color: '#2563eb' }} />,
      title: "Bank-Level Data Security",
      description: "Your sensitive documents and personal information are protected with military-grade encryption. We require audit and security checklist review protocols. We promise your privacy and IRS compliance at every step.",
      buttonText: "See Our Security Standards",
      linkTo: '/about'
    },
    {
      icon: <Calendar className="w-12 h-12" style={{ color: '#dc2626' }} />,
      title: "Book a Call with a Tax Expert",
      description: "Get personalized assistance by scheduling a consultation with our certified tax professionals. We'll review your documents, answer any questions, and ensure you understand every part of your filing.",
      buttonText: "Schedule Your Call Today",
      linkTo: "/scheduleCall"
    },
    {
      icon: <Target className="w-12 h-12" style={{ color: '#7c3aed' }} />,
      title: "Fast Filing with Real-Time Tracker",
      description: "Our intuitive dashboard keeps you informed at every step of your tax filing. Upload your documents, track your progress, and get real-time updates on your refund status with our advanced IRS reporting.",
      buttonText: "Start Your Filing Process",
      linkTo: "/signin"
    },
    {
      icon: <Zap className="w-12 h-12" style={{ color: '#0891b2' }} />,
      title: "Smart Refund Estimates - AI Accuracy",
      description: "Using advanced AI and machine learning models, our smart filing tool intelligently calculates deductions and credits to maximize your refund. Get accurate estimates in minutes.",
      buttonText: "Get Your Refund Estimate",
      linkTo:'/services'
    },
  ];

  const handleNavigate = (linkTo) => {
    navigate(linkTo);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">
          Here's Why Thousands Choose Aadwik Every Tax Season..!
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="btn-service"
                onClick={() => handleNavigate(service.linkTo)}
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
