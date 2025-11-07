import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { ArrowRightCircle } from "lucide-react";

const { Title } = Typography;

const ServicesBox = () => {
  const leftServices = [
    "Unlimited Consultations with Tax Experts",
    "Accurate Tax Estimate Preparation",
    "Complimentary E-Filing of Form 1040 for Incomes up to $28,000",
    "Tax Planning Services for Tax Years 2022 and 2023",
    "Assessment and Examination of Filed Tax Returns",
    "ITIN Guidance and Support Services",
    "FBAR and FATCA Compliance Guidance and E-Filing",
    "Assistance with Filing Tax Extensions",
    "W-4 Form Guidance and Support",
    "Guidance on FICA Tax Withholdings and Withdrawals",
  ];

  const rightServices = [
    "Accuracy Guarantee on All Tax Filings",
    "Comprehensive Audit and Assurance Services",
    "Strict Confidentiality and Privacy Protection",
    "365 Days a Year Customer Support",
    "Fast Refund Processing Within Short Timeframes",
    "Maximum Refunds Ensured Through Expert Tax Knowledge",
    "100% Data Security and Protection",
    "Secure Preservation of Tax Returns for Up to Nine Years",
    "Compliance with Data Protection Regulations",
    "100% Client Satisfaction Guarantee",
  ];

  return (
    <div className="service-box-container">
      <Row gutter={[24, 24]}>
        {/* Left Column */}
        <Col xs={24} md={12}>
          <Card className="service-box-card">
            <Title level={4} className="service-box-header">
              Enroll Today,  unlock Premium Package for Free
            </Title>
            <ul className="service-box-list">
              {leftServices.map((service, i) => (
                <li key={i} className="service-box-item">
                  <ArrowRightCircle className="icon" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12}>
          <Card className="service-box-card">
            <Title level={4} className="service-box-header">
              File Smart with us , Privileges Awaits you
            </Title>
            <ul className="service-box-list">
              {rightServices.map((service, i) => (
                <li key={i} className="service-box-item">
                  <ArrowRightCircle className="icon" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesBox;
