import React from "react";

const ComparisionTable = () => {
  const headers = [
    "Feature/Service",
    "Aadwik Tax Solutions",
    "Students Tax Filing Portals",
    "Online Tax Filing Portals (Residents)",
    "EAs, CPA's & Local Consultants",
  ];

  // Shuffled services list
  const services = [
    {
      service: "Audit Support",
      values: ["Free (365 days)", "Paid", "Paid", "Paid"],
    },
    {
      service: "Tax Estimates(Detailed)",
      values: [
        "Complete details on forms",
        "Final figure only",
        "Final figure only",
        "Final figure only",
      ],
    },
    {
      service: "Maximum Refunds Guarantee",
      values: ["Full Guarantee", "Limited", "Limited", "Limited"],
    },
    {
      service: "Relook/Examination on (Last 3 years)",
      values: ["Free", "Not Available", "Not Available", "Paid"],
    },
    {
      service: "W4 Assistance",
      values: ["Free", "Paid", "Paid", "Paid"],
    },
    {
      service: "ITIN Guidance",
      values: ["Free Guidance", "Paid", "Paid", "Paid"],
    },
    {
      service: "Customer Service(Phone)",
      values: ["Free", "Not Available", "Paid", "Paid"],
    },
    {
      service: "Electronic Filing",
      values: ["Yes", "No", "Yes", "Yes"],
    },
    {
      service: "FBAR Assessment & E-Filing",
      values: ["Free", "Paid", "Paid", "Paid"],
    },
    {
      service: "Unlimited Consulting with Experts",
      values: ["Free", "Not Available", "Paid (Limited)", "Paid (Limited)"],
    },
    {
      service: "Extension Filing",
      values: ["Free", "Not Available", "Paid", "Paid"],
    },
    {
      service: "Email Assistance",
      values: ["Quick Assistance", "Support", "Support", "Support"],
    },
    {
      service: "State Taxes",
      values: ["Paid", "Paid", "Paid", "Paid"],
    },
  ];

  return (
    <div className="comparison-container">
      <table className="comparison-table">
        <thead>
          <tr>
            {headers.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map((row, idx) => (
            <tr key={idx}>
              <td className="service-col">{row.service}</td>
              {row.values.map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>  
      </table>
    </div>
  );
};

export default ComparisionTable;
