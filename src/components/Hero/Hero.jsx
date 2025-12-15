import React from 'react';
import { FaPlay } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Showcase Your Culinary Art with <br />
                    <span className={styles.gradient}>Stunning Video Content</span>
                </h1>

                <p className={styles.description}>
                    We transform your signature dishes into viral-worthy reels that attract customers and build your brand
                </p>

                <a href="#portfolio" className={styles.ctaButton}>
                    <FaPlay className={styles.icon} />
                    See Our Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
