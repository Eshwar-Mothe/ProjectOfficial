import React from 'react';

const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Tax Returns Filed" },
    { number: "$5M+", label: "Refunds Processed" },
    { number: "50+", label: "Visa Categories" },
    { number: "99.9%", label: "Accuracy Rate" }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
