import React from 'react';

const MainSection = () => {
  const CardData = [
    {
      image: 'passport.png',
      heading: 'Visa-Specific Filing Expertise',
      desc: 'We specialize in tax filing for NRIs, OPT/F1 students, H1B professionals, Green Card holders, and other visa types. Our tax advisors understand the unique challenges of each category and ensure 100% accurate compliance with U.S. tax laws.',
      buttonContent: 'Explore More'
    },
    {
      image: 'security.png',
      heading: 'Bank-Level Data Security',
      desc: 'Your sensitive documents and personal information are stored securely using end-to-end encryption, with regular audits and industry-standard security practices. We prioritize your privacy and IRS compliance at every step.',
      buttonContent: 'Explore More'
    },
    {
      image: 'schedule.png',
      heading: 'Book a Call with a Tax Expert',
      desc: 'Get personalized assistance by scheduling a one-on-one consultation with a certified tax advisor. We’ll guide you through document uploads, answer any questions, and ensure you understand every part of your filing.',
      buttonContent: 'Explore More'
    },
    {
      image: 'tracking.png',
      heading: 'Fast Filing with Real-Time Tracker',
      desc: 'Our intuitive dashboard keeps you informed at every stage of your tax filing. Upload your documents, track the review progress live, and receive timely notifications so you’re never left guessing.',
      buttonContent: 'Explore More'
    },
    {
      image: 'human.png',
      heading: 'Smart Review: Human + AI Accuracy',
      desc: 'Every return undergoes a double-layered review process: first by our intelligent software and then manually verified by a licensed tax professional to ensure nothing is missed.',
      buttonContent: 'Explore More'
    },
    {
      image: 'support.png',
      heading: 'Global Filing Support',
      desc: 'Whether you’re in India, the U.S., UAE, UK, or anywhere else, Adwik enables you to file your U.S. taxes without stress. Our platform is accessible worldwide and designed to work across time zones.',
      buttonContent: 'Explore More'
    }
  ];

  return (
    <>
      <h4 className='text-center my-5'>Here’s Why Thousands Choose Adwik Every Tax Season..!</h4>

      <div className="container card-container my-4">
        <div className="row">
          {CardData.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm p-3">
                <img
                  src={card.image}
                  alt="Feature Icon"
                  className="text-center mb-4"
                  style={{ height: '60px', objectFit: 'contain', }}
                />
                <h5 className="card-title">{card.heading}</h5>
                <p className="card-text" style={{ fontSize: '0.95rem' }}>{card.desc}</p>
                <button className="btn btn-outline-danger mt-auto">{card.buttonContent}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
