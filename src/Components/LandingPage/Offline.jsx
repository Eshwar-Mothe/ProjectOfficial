import React, { useEffect, useRef, useState } from "react";
import "./Offline.css";
import Navigation from "./Navigation";

const Offline = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="offline-container">
                <div className="offline-box">
                    <img src="fishing.png" alt="Offline-Image" className="offline-img" />
                    <h2 className="offline-title">Ooops.....! We are out of reach</h2>
                    <p className="offline-subtitle">Try again after some time</p>
                </div>

            </div>
        </>
    );
};

export default Offline;
