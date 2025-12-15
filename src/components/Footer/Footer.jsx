import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/restaurant-chef-portfolio/assets/redix.png" alt="Redix Digital Solutions" />
                </div>

                <p className={styles.copyright}>
                    © {currentYear} Redix Digital Solutions. Made with <FaHeart className={styles.heart} /> in Tunisia
                </p>

                <div className={styles.links}>
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
