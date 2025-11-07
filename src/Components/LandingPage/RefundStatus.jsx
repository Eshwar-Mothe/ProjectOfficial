import React, { useState } from "react";
import Navigation from "./Navigation";

const RefundStatus = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showStates, setShowStates] = useState(false);

    const cards = [
        {
            title: "Federal Refund Status",
            link: "https://sa.www4.irs.gov/wmr/",
            image: "/federal-image.jpg",
        },
        {
            title: "State Refund Status",
            link: "#",
            image: "/state.jpg",
        },
    ];

    const statesData = [
        { name: "Alabama", link: "https://myalabamataxes.alabama.gov/tap/_/#1" },
        { name: "Alaska", link: "https://tax.alaska.gov/" },
        { name: "Arizona", link: "https://aztaxes.gov/Home/CheckRefund" },
        { name: "Arkansas", link: "https://atap.arkansas.gov/_/" },
        { name: "California", link: "https://webapp.ftb.ca.gov/refund/login?Submit=Check+refund&Lang=en-us" },
        { name: "Colorado", link: "https://www.colorado.gov/revenueonline/_/#1" },
        { name: "Connecticut", link: "https://drs.ct.gov/eservices/_/#1" },
        { name: "Delaware", link: "https://tax.delaware.gov/rptp/portal/individual/checkrefundstatus/!ut/p/z1/jY_BCoJAFEW_pYVb33Msm9oNIZYJFWLabELDRkMdUdPfT7JNkNLb3cu5Bx5wCIAXYZuKsEllEWZ9vnDjisQxtB3FPV2ZiOxoLqmreQRPGvgDMHIMgf-1Hwf4tN4H_kZ0ihtri8S2PJcgOzBvfmZ2byAfYMJhAxeZjIZ3WRHpVACv4ntcxZX6rPo6aZqyXiuoYNd1qpBSZLF6k7mCvyaJrBsIvkkocy_AxyJrHTZ7AcMyQ8Y!/dz/d5/L2dBISEvZ0FBIS9nQSEh/" },
        { name: "Florida", link: "https://taxapps.floridarevenue.com/Refunds/RefundCheckStatus.aspx" },
        { name: "Georgia", link: "https://gtc.dor.ga.gov/_/" },
        { name: "Hawaii", link: "https://hitax.hawaii.gov/_/" },
        { name: "Idaho", link: "https://idahotap.gentax.com/tap/_/" },
        { name: "Illinois", link: "https://mytax.illinois.gov/_/" },
        { name: "Indiana", link: "https://www.in.gov/dor/i-am-a/individual/check-refund/" },
        { name: "Iowa", link: " https://govconnect.iowa.gov/TAP/_/" },
        { name: "Kansas", link: " https://govconnect.iowa.gov/TAP/_/" },
        { name: "Kentucky", link: "https://refund.ky.gov/" },
        { name: "Louisiana", link: "Server Busy" },
        { name: "Maine", link: "https://revenue.maine.gov/_/" },
        { name: "Maryland", link: "https://interactive.marylandtaxes.gov/indiv/refundstatus/home.aspx" },
        { name: "Massachusetts", link: "https://mtc.dor.state.ma.us/mtc/_/" },
        { name: "Michigan", link: "https://etreas.michigan.gov/iit/p/iitWMR" },
        { name: "Minnesota", link: ":https://www.mndor.state.mn.us/tp/OnlineServices/_/" },
        { name: "Mississippi", link: "https://tap.dor.ms.gov/_/" },
        { name: "Missouri", link: "SERVER BUSY" },
        { name: "Montana", link: "https://tap.dor.mt.gov/_/" },
        { name: "Nebraska", link: "SERVER BUSY" },
        { name: "Nevada", link: "https://mynevadatax.nv.gov/" },
        { name: "New Hampshire", link: "https://www.revenue.nh.gov/resource-center/taxpayer-assistance/taxpayer-bill-rights/claim-refund" },
        { name: "New Jersey", link: "https://www16.state.nj.us/TYTR_TGI_INQ/jsp/prompt.jsp" },
        { name: "New Mexico", link: "https://tap.state.nm.us/Tap/_/#1" },
        { name: "New York", link: "https://www8.tax.ny.gov/PRIS/prisGateway" },
        { name: "North Carolina", link: "https://eservices.dor.nc.gov/wheresmyrefund/refundinput.jsp" },
        { name: "North Dakota", link: "https://apps.nd.gov/tax/tap/_/" },
        { name: "Ohio", link: "Server Busy" },
        { name: "Oklahoma", link: "https://oktap.tax.ok.gov/oktap/web/_/#1" },
        { name: "Oregon", link: "https://revenueonline.dor.oregon.gov/tap/_/" },
        { name: "Pennsylvania", link: "https://www.mypath.pa.gov/_/" },
        { name: "Rhode Island", link: "https://taxportal.ri.gov/rptp/portal/home/wheresmyrefund/!ut/p/z1/jY9LC4JAFIV_Swu33ju-kHZDhM8yCNNmExo2GuqImv79xNoEJZ3VvYfvHDjAIAZWJ0PBk74QdVJO_5kZF8fRFSdAQuz9YYsG8Xzq7VSCiBDNAP4QRWD_5BcAtlwfAZsR1cSNZaPiWuFRQRrQUDtRd7q0N7DQ4QLjpUhfc2mdqiYH1ma3rM1a-dFOdt73TbeWUMJxHGUuBC8z-SoqCb9FctH1EH-S0FRhjHe9HHy6egI_Xrzh/dz/d5/L2dBISEvZ0FBIS9nQSEh/" },
        { name: "South Carolina", link: "Server Busy" },
        { name: "South Dakota", link: "https://dor.sd.gov/" },
        { name: "Tennessee", link: "https://www.tn.gov/revenue/for-businesses/letters-waivers-refunds/request-a-refund.html" },
        { name: "Texas", link: "https://comptroller.texas.gov/taxes/refunds/" },
        { name: "Utah", link: "Server Busy" },
        { name: "Vermont", link: "Server Busy" },
        { name: "Virginia", link: "https://www.individual.tax.virginia.gov/IOP/#/refund" },
        { name: "Washington", link: "https://secure.dor.wa.gov/gteunauth/_/" },
        { name: "West Virginia", link: "https://mytaxes.wvtax.gov/_/#1" },
        { name: "Wisconsin", link: "Server Busy" },
        { name: "Wyoming", link: "https://revenue.wyo.gov/" },
    ];

    return (
        <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <div className="refund-container my-5">
                <h2 className="refund-title">State Refund Status</h2>

                {!showStates ? (
                    <div className="refund-grid">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="refund-card"
                                onClick={() =>
                                    card.title === "State Refund Status"
                                        ? setShowStates(true)
                                        : window.open(card.link, "_blank")
                                }
                            >
                                <img src={card.image} alt={card.title} className="refund-image" />
                                <div className="refund-overlay" />
                                <div className="refund-content">
                                    <h3 className="refund-card-title">{card.title}</h3>
                                    <span className="refund-link">Click Here →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <p className="text-center">Click the link below</p>
                        <div className="states-grid">
                            {statesData.map((state, idx) => (
                                <a
                                    key={idx}
                                    href={state.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="state-card mx-3"
                                >
                                    {state.name}
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default RefundStatus;
