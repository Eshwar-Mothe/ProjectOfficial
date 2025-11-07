import React from 'react';

const Stats = () => {
  const stats = [
    { number: "1026+", label: "Trusted Filings" },
    { number: "15+", label: "Expert Solutions" },
    { number: "99.9%", label: "Client Trust" },
    { number: "24/7", label: "Global Access" }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
