import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  Users,
  BookOpen,
  ClipboardList,
  PieChart,
  Info,
  X,
  UserCheck,
  UserCircle,
  FileSignature,
  Globe,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import "./ServicesStyles.css";
import ComparisionTable from "./ComparisionTable";


const colors = {
  darkGreen: "#15937D",
  green: "#1AA97A",
  cardGray: "#F9FAFB",
  cardLight: "#EAEAEA",
  purple: "#5A146D",
  navy: "#11223A",
  gold: "#FDB241",
  deepGreen: "#145D3F",
  darkBlue: "#152E56",
};

// ✅ helper: decide text color from background brightness
const getTextColor = (bgColor) => {
  if (!bgColor) return "#000";
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 160 ? "#111" : "#fff";
};

// ----------------- DATA -----------------
// Business services (short desc removed, long desc only in modal)
const businessServices = [
  {
    title: "Business Incorporation & Consulting",
    description: `We help entrepreneurs, small business owners, and corporations establish new businesses or subsidiaries in the USA. Our end-to-end services ensure smooth registration and compliance with state and federal requirements.
<strong>Our Services Cover:</strong>
Business name registration through State Corporation Commission or city/county Clerk of Court filings.
Obtaining a Federal Employer Identification Number (FEIN) from the IRS.
Setting up state tax accounts (withholding, unemployment tax, sales & use tax).
Guidance on professional, occupational, and specialty licenses.
Assistance with local business licensing and zoning requirements.
eVA account registration (Virginia’s electronic procurement system).
Small, Woman-Owned, and Minority-Owned (SWaM) certification.
Registration with the State Department of Taxation for sales, withholding, and other applicable taxes.
<strong>Company Formation Assistance</strong>
Once our service fees are paid via PayPal (using debit/credit card), we begin the registration process, including:
Preparation and filing of Articles of Incorporation/Formation.
Company name search & reservation.
EIN application.
Registering your business in other states as required.
Providing certified copies of corporate and S-Corp documents, including Articles of Incorporation or Certificate of Formation.
Filing S-Corp Election (Form 2553).
⚠️ Please note: Fees charged by state or local agencies (e.g., State Corporation Commission, county licensing offices, or professional boards) are separate and payable by the client. We ensure these services are delivered at a very nominal cost.

<strong>Why Work With Us?</strong>
We don’t just file paperwork—we partner with you to build a strong foundation for your business. Our commitment is to provide cost-effective, reliable, and long-term solutions that support your growth and compliance needs.

<strong>Free Consultation</strong>
Call us at <strong>+1(510) 598-9818 / +91 8985641564</strong>  to discuss:
Choosing the right business entity (LLC, LLP, S-Corp, C-Corp).
Formation costs and ongoing filing requirements by state.
Expanding operations to multiple states and foreign qualification.
Understanding state-specific corporate laws.
Assessing tax implications.
Business licensing guidance.

👉 Whether you’re starting a new venture or expanding an existing company, our team ensures a smooth, compliant, and hassle-free incorporation process.
`,
    bgColor: colors.green,
    icon: <Briefcase size={28} color="#fff" />,
  },
  {
    title: "Accounting & Bookkeeping",
    description: `At <strong>Aadwik Tax</strong>, accounting and bookkeeping services form the foundation of our business. We are committed to delivering quality, value-driven accounting solutions while maintaining the highest standards of professionalism, ethics, and integrity.
When you work with Aadwik Tax, you get more than just an accountant – you gain a trusted business advisor. Accurate financial information is vital to keeping your business running smoothly and ensuring long-term sustainability. That’s why we provide personalized accounting services tailored to help you identify opportunities for profitability, growth, and better financial management.
<strong>Our Expertise</strong>
Our accountants and consultants leverage deep knowledge of finance and business services to provide both day-to-day operational support and big-picture strategic guidance.
<strong>Day-to-Day Accounting Services</strong>
Comprehensive bookkeeping
General ledger maintenance
Internal control reviews
Financial statement preparation
Monthly operating statements
Bank reconciliations
Balance sheets & financial graphs
Budget preparation & cost forecasting

<strong>Strategic Advisory Services</strong>
Cash flow planning and financing strategies
Budgeting and forecasting for business growth
Identifying opportunities to improve profitability
Long-term financial planning and analysis

<strong>Who We Serve</strong>
We proudly serve a wide range of clients including:
Individuals & Partnerships
Small Businesses
Not-for-Profit Entities
Corporations across various industries

<strong>QuickBooks Support</strong>
Our team provides full support with QuickBooks accounting software, from initial setup and installation to ongoing maintenance and reviews.
Guidance on choosing the right QuickBooks version (Pro, Premier, or Enterprise)
Conversion from other accounting or payroll systems
Cleanup and correction of prior incorrect setups or data integrity issues
Periodic file review and continued support

<strong>Why Aadwik Tax?</strong>
Accurate books are the backbone of every successful business. With Aadwik Tax, you benefit from comprehensive accounting & bookkeeping solutions designed to strengthen your business’s financial health, streamline operations, and create room for growth.

👉 Whether you need day-to-day bookkeeping or strategic financial guidance, Aadwik Tax ensures you always have the insights and support needed to move your business forward.
`,
    bgColor: colors.cardLight,
    icon: <BookOpen size={28} color={colors.navy} />,
  },
  {
    title: "Payroll Processing",
    description: `Payroll is an essential function for every business—whether you have one employee or a thousand. However, managing payroll with accuracy and compliance can be challenging. In fact, nearly 35% of companies registered with the Electronic Federal Tax Payment System (EFTPS) face penalties due to errors or late payroll tax payments.
At Aadwik Tax, we provide accurate and reliable payroll processing solutions for businesses of all sizes. Our services cover not just salary payments, but also commissions, bonuses, reimbursements, and other compensation methods. With us, you can simplify your payroll process—from time entry and paycheck processing to tax payments and regulatory filings—while ensuring full compliance with federal, state, and local requirements.

<strong>Our Payroll Services Include:</strong>
Payroll processing through Aadwik Tax’s payroll application
Accurate salary calculations
Preparation and submission of payroll statements for wage and tax disbursement to the IRS
Delivery of employee paychecks via email or print
Comprehensive MIS reports for accounting and analysis
Issuance of year-end W-2 statements (copies provided to both client and IRS)
Assistance with federal and state payroll notices
Support during workers’ compensation, DOL, or other audits
Assistance with EEOC report filings and data submission to health insurance providers
Maintenance of payroll registers with lifetime record-keeping
Quarterly and annual tax filings
Preparation and filing of Form W-2 with IRS and states

<strong>Why Outsource Payroll to Aadwik Tax?</strong>
Improve Efficiency – Save valuable time by automating payroll.
Ensure Accuracy – Avoid costly errors and penalties.
Boost Productivity – Focus on your core business while we handle payroll.
Reduce Costs – Eliminate the need for in-house payroll staff.
Peace of Mind – Stay compliant with all federal, state, and local payroll regulations.

With Aadwik Tax, payroll becomes simpler, faster, and 100% compliant, giving you more time to grow your business.
`,
    bgColor: colors.purple,
    icon: <Users size={28} color="#fff" />,
  },
  {
    title: "Tax Return Planning & Preparation",
    description: `At <strong>Aadwik Tax</strong>, we provide end-to-end federal and state tax return planning, preparation, filing, and representation for S-Corporations and other entities. Our services include specialized filings such as AMT, CAT, and related compliance requirements, ensuring complete accuracy and IRS compliance.
We also assist with:
Form 1099 preparation & filing for consultants and independent contractors.
Offering our Corporate Employee Tax Program, enabling your employees to file their tax returns at rates lower than many popular online platforms.

<strong>Corporate Program Benefits for Employees</strong>
Our Corporate Program delivers 10 value-added services in Tax Planning, Representation, and Compliance — provided absolutely FREE to your employees:
FREE Advance Tax Planning Services
FREE Tax Return Evaluation Services
FREE Tax Representation Services (for audits & IRS notices)
FREE ITIN Processing (Form W7 for spouse/children)
FREE FBAR & FATCA Processing (mandatory IRS compliance)
FREE Local Tax Return Preparation (for cities/counties subject to local tax)
FREE Extension Filing (requesting additional time to file returns)
FREE Managed Hosting Services (for clients without a U.S. address)
FREE Tax Expert Consultation (with an EA/CPA for matters not covered above)
FREE CAA Certification for ITIN purposes (document mailing charges apply)

Why Choose Aadwik Tax?
With Aadwik Tax, you get a one-stop solution for all your business and employee tax needs. From corporate tax filings to employee support programs, we ensure accuracy, compliance, and peace of mind — all at a highly competitive cost.

Let Aadwik Tax handle your tax compliance while you focus on growing your business.
`,
    bgColor: "#9fc43a",
    icon: <PieChart size={28} color={colors.navy} />,
  },
];

// Individual services
const individualServices = [
  {
    title: "Tax Planning & Advisory",
    description: `Effective tax planning is crucial for optimizing financial outcomes and should be performed before the tax year concludes. At Aadwik Tax, we go beyond traditional tax preparation by offering strategic tax reduction and planning solutions designed to complement long-term financial and retirement goals.

Our experienced team specializes in both individual and business tax planning—including LLCs, S-Corporations—ensuring that complex situations are handled with expertise.

Our priority is to help clients retain more of their earnings through comprehensive financial coaching and tailored tax strategies. We provide guidance aimed at maximizing refunds, minimizing tax liabilities, avoiding costly penalties, and managing important deadlines for both federal and state taxes.

For those not yet clients, Aadwik Tax offers complimentary reviews of previous year tax returns. Simply scan and email us your past returns, and our team will provide feedback—completely free of charge.

Experience the Aadwik Tax advantage: expert support, increased refunds, reduced taxes, and peace of mind at no extra cost.`,
    bgColor: colors.gold,
    icon: <UserCheck size={28} color={colors.navy} />,
  },
  {
    title: "Tax Return Services",
    description: `Preparing personal tax returns can be a complex and stressful task. Aadwik Tax can relieve this burden by expertly preparing your personal tax returns for you. Our comprehensive Personal Tax Return Service perfectly complements our Corporation Tax Return Service. Backed by a team of highly qualified and experienced tax accountants, we ensure your taxes are minimized and the overall process remains efficient, easy, and cost-effective.
Our Personal Tax Return Services include:
Preparation of tax computations
Preparation of self-assessment tax returns
Submission of personal tax returns
Advance notifications of personal tax payments
Handling related correspondence with the tax authorities
Choosing Aadwik Tax for your individual tax returns means partnering with registered tax agents who possess substantial hands-on experience. Our professionals are committed to helping clients achieve their financial goals and take pride in delivering highly personalized service.
Key areas we focus on include:
Maximizing work-related deductions
Rental properties
Superannuation contributions
Fast lodgement with maximum refunds guaranteed*
Maximizing rebates and tax offsets
Capital gains
Foreign assets and income
Personal Tax Return Service represents a vital component of the accounting and finance solutions provided by Aadwik Tax. For more information on our Individual Tax Return Services, please contact us. We are always here to support you!`,
    bgColor: colors.deepGreen,
    icon: <FileText size={28} color="#fff" />,
  },
  {
    title: "Tax Consultant & Advisory",
    description: `Aadwik Tax is a leading professional tax consulting firm specializing in delivering world-class services. With a team of highly experienced and skilled tax consultants, we promise to guide you through all your taxation needs with in-depth knowledge of Indian and international tax laws.
Over the years, we have assisted a diverse range of industries in various aspects of tax advisory, company audits, company law matters, corporate taxation, and related services. Established as an accredited Tax Consultant Service Organization, we are committed to meeting the growing needs of businesses, individuals, and trade establishments both domestically and internationally.
Our firm is equipped with the required manpower and infrastructure to support the expanding demands of business and industrial sectors. A key feature of our service is accessibility — our team of high-caliber business assessment experts and development executives is available around the clock to meet customer requirements.
Aligned with our strategy, our primary goal is to fulfill our customers' expectations by delivering high-quality services at the most competitive costs. Aadwik Tax combines the best of human expertise and technology to excel in development, research, service delivery, sales, and marketing of products and solutions aimed at enhancing the welfare of all humankind.`,
    bgColor: colors.darkBlue,
    icon: <FileSignature size={28} color="#fff" />,
  },
  {
    title: "ITIN Guidance",
    description: `Aadwik Tax is an approved Certifying Acceptance Agent specializing in obtaining U.S. Individual Taxpayer Identification Numbers (ITINs) for all qualifying applicants at very competitive charges. As ITIN specialists, we assist resident and non-resident aliens, as well as other foreign taxpayers, in applying for ITIN processing through the Internal Revenue Service (IRS).
We take the time to fully understand your unique situation to ensure your Form W-7 application is filed accurately in line with IRS rules and procedures. Additionally, we are experts in minimizing the likelihood of delays or rejections of your ITIN application by the IRS. By using our services, you can avoid the burdensome risks associated with sending original identity documents, reducing the potential risk of loss.
As a certified Certifying Acceptance Agent (CAA), Aadwik Tax can certify your identification documents as part of the ITIN application and preparation process. Furthermore, we will sign your completed Form W-7 and provide you with a Certificate of Accuracy, which is attached to your tax return and submitted to the IRS.
Avoid the hassle and complexities of obtaining an IRS ITIN number on your own. Use Aadwik Tax’s tax ID number application service to apply for your Individual Taxpayer Identification Number with confidence today!`,
    bgColor: colors.cardLight,
    icon: <UserCircle size={28} color={colors.navy} />,
  },
  {
    title: "FBAR & FATCA Processing",
    description: `The Foreign Bank Account Report, or FBAR, is a filing requirement for Americans who have more than $10,000 in bank accounts outside the United States at any time during the year. Although it has existed since 1970, enforcement has intensified in recent years as the U.S. government focuses more on retrieving taxes from U.S. citizens’ money and investments abroad.
The FBAR (FinCEN Form 114) must be filed online while keeping the following information related to declared accounts for six years following filing:
Account numbers
Name on each account
Types of accounts
Name and address of the foreign institution(s) where the accounts are held
Maximum value of each account during the relevant tax year
If you haven’t filed because you were unaware of the requirement, come to Aadwik Tax. Our team of experts specializes in all matters related to FBAR filing and the Streamlined Procedure. With clients in over 150 countries, Aadwik Tax is a leading tax service provider. If you have any questions regarding your tax situation, don’t hesitate to get in touch for advice. We are ready to listen and assist you.`,
    bgColor: colors.navy,
    icon: <Globe size={28} color="#fff" />,
  },
  {
    title: "Tax Extension Filing",
    description: `Not ready to file your tax return by the due date? The first step is to file an extension with the IRS to avoid late-filing penalties (note: filing an extension does not prevent late payment penalties). Filing a tax extension with experts like Aadwik Tax allows you to push your filing deadline forward by six months. We specialize in filing tax extensions for both Federal and State returns, for personal and business filings alike.
If you fail to file either a tax extension or your tax return by the appropriate deadline, don’t worry! As professional tax preparers, we help you assess your tax situation and advise on IRS installment arrangements if needed. We also assist with Estimated Tax Returns to help you get the most out of your money.
A tax filing extension is especially useful if you do not have all the necessary documentation required to complete your return on time. If you believe you may need this extension, let Aadwik Tax help you secure it. However, if you are expecting a tax refund, you typically do not need to file for an extension. With our expert assistance, you have up to three years from the original tax deadline to file your return and claim your refund.`,
    bgColor: colors.darkGreen,
    icon: <Clock size={28} color="#fff" />,
  },
];

// ----------------- COMPONENT -----------------

const arrowVariants = {
  hidden: { opacity: 0, x: 20 },
  hover: { opacity: 1, x: 0 },
};

const boxHover = {
  scale: 1.03,
  boxShadow: "0 8px 32px rgba(23,73,77,0.10)",
};


const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const renderServiceCard = (svc) => {
    const textColor = getTextColor(svc.bgColor);

    return (
      <motion.div
        key={svc.title}
        className="services-card"
        style={{ background: svc.bgColor, color: textColor }}
        onClick={() => navigate("/signin")}
        whileTap={{ scale: 0.98 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 32px rgba(23,73,77,0.10)",
        }}
      >
        {/* Info Button */}
        <button
          className="info-btn"
          onClick={(e) => {
            e.stopPropagation();
            setActiveService(svc);
          }}
        >
          <span>info</span>
          <Info size={18} color="#333" />
        </button>

        <div className="services-icon">{svc.icon}</div>
        <div className="services-content">
          <h3 className="services-heading" style={{ color: textColor }}>
            {svc.title}
          </h3>
        </div>

        {/* Hover Arrow */}
        <div className="hover-arrow">
          <ArrowRight size={22} color={textColor} />
        </div>
      </motion.div>

    );
  };

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <motion.div
        className="services-section"
        initial="hidden"
        animate="visible"
      >
        {/* Individual */}
        <section style={{ marginTop: 54 }}>
          <h2 className="services-title">Individual Services</h2>
          <motion.div className="services-grid">
            {individualServices.map((svc) => renderServiceCard(svc))}
          </motion.div>
        </section>


        {/* Business */}
        <section style={{ marginTop: 54 }}>
          <h2 className="services-title">Business Services</h2>
          <motion.div className="services-grid">
            {businessServices.map((svc) => renderServiceCard(svc))}
          </motion.div>
        </section>

      </motion.div>

      {/* Popup Modal */}
      {activeService && (
        <>
          <div
            className="info-overlay"
            onClick={() => setActiveService(null)}
          />
          <div className="info-popup">
            <button
              className="close-btn"
              onClick={() => setActiveService(null)}
            >
              <X size={20} />
            </button>
            <h4>{activeService.title}</h4>
            <div
              className="info-description"
              style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}
              dangerouslySetInnerHTML={{ __html: activeService.description }}
            />
            <button
              className="btn-primary mt-4"
              onClick={() => navigate("/signin")}
            >
              Get Started →
            </button>
          </div>
        </>
      )}
      <ComparisionTable />
    </>
  );
};

export default Services;
