import React, { useState } from 'react';
import './Navigation.css'
import Logo from '../Logo/Logo'

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const menuLinks = [
        {
            ref: '#services',
            name: 'Services'
        },
        {
            ref: '#about',
            name: 'About'
        },
        {
            ref: '#portfolio',
            name: 'Portfolio'
        },
        {
            ref: '#process',
            name: 'Process'
        },
    ]

    return (
        <div className='nav-container'>
            
            <div className='navigation'>

                {/* only appears on mobile view */}
                <div className="call-btn">
                    <a href="tel:954-648-3405"><i className="fas fa-phone"></i></a>
                </div>

                <Logo />
                {/* only appears on mobile view */}
                <div className="menu-icon" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                </div>
                
                {/* Desktop View */}
                <div className="desktop-nav">
                    <nav>
                        {
                            menuLinks.map((link, i) => 
                            <a key={i} href={link.ref} onClick={() => setOpen(!open)}>{link.name}</a>
                            )
                        }
                        <a href="#contact" className='action-btn'>Get Quote</a>
                    </nav>
                </div>
            </div>

            {/* Mobile View */}
            {
                open ?
                <div className="menu-content">
                    <div className="x-icon" onClick={() => setOpen(!open)}>
                        <i className="fas fa-times"></i>
                    </div>
                    <nav>
                    {
                        menuLinks.map((link, i) => 
                        <a key={i} href={link.ref} onClick={() => setOpen(!open)}>{link.name}</a>
                        )
                    }
                        <a href="#contact" className='action-btn' onClick={() => setOpen(!open)}>Get Quote</a>
                    </nav>
                </div>
                : null
            }
        </div>
    );
};

export default Navigation;