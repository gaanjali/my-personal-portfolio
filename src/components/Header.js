import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="header-container">
                <h1>Anjali Gadade</h1>
                <button className="menu-icon" onClick={toggleMenu}>&#9776;</button>
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#education" onClick={closeMenu}>Education</a></li> {/* New Education Section */}
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>
                <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={closeMenu}>×</button>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#education" onClick={closeMenu}>Education</a></li> {/* New Education Section */}
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
