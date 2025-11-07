import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "International Student",
      content: "Aadwik made my first US tax filing so simple. The visa-specific guidance was exactly what I needed.",
      rating: 5,
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rajesh Naik",
      role: "H1B Software Engineer",
      content: "Got my maximum refund with zero stress. The real-time tracker kept me informed throughout the process.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Aisha Patel",
      role: "L1 Visa Holder",
      content: "The expert consultation was invaluable. They understood my unique situation and maximized my deductions.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Trusted by Thousands</h2>
        <p className="section-subtitle">
          See what our clients say about their experience with Aadwik
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div>
                  <div className="author-name">-{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
