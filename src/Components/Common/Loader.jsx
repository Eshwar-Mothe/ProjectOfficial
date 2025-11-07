import React from 'react';
import './loaderStyles.css';

const Loader = () => {
    return (
        <div className="centered">
            <div className="animated-square">
                <div className="square border1"></div>
                <div className="square border2"></div>
                <div className="square border3"></div>
            </div>
        </div>

    );
};

export default Loader;
