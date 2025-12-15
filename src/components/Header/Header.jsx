import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/restaurant-chef-portfolio/assets/redix.png" alt="Redix Digital Solutions" />
                </div>

                <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
