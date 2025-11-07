import React from 'react';
import { Shield, Clock, Users, DollarSign } from 'lucide-react';


const   Features = () => {
  const features = [
    {
      icon: <Shield className="feature-icon-color green" />,
      title: "Bank-Level Security",
      description: "Your documents are protected with 256-bit encryption"
    },
    {
      icon: <Clock className="feature-icon-color blue" />,
      title: "Real-Time Tracking",
      description: "Monitor your filing progress every step of the way"
    },
    {
      icon: <Users className="feature-icon-color purple" />,
      title: "Expert Support",
      description: "Certified tax professionals available when you need them"
    },
    {
      icon: <DollarSign className="feature-icon-color teal" />,
      title: "Maximum Refunds",
      description: "Expert driven optimization to get you every dollar you deserve"
    }
  ];

  return (
    <section className="features">
      <div className="features-content">
        <div className="features-text">
          <h2>Why Aadwik is Different</h2>
          <p>
            We understand the unique challenges faced by non-residents, visa holders, and international students.
            Our platform is built specifically for your needs.
          </p>
          <div className="feature-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-image">
          <img
            src="taxPerson.webp"
            alt="Tax professional working"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
