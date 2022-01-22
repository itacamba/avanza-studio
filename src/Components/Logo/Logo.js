import React from 'react';
import './Logo.css';
import rotatingLogo from '../../Images/full_circle.svg';
import logo from '../../Images/logo.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={rotatingLogo} className="rotating-logo" alt="logo" />
            <div className="logo">
                <img src={logo} alt="Avanza Logo" />
            </div>
        </div>
    );
};

export default Logo;