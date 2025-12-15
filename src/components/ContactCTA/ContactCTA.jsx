import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
    return (
        <section className={styles.cta} id="contact">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Elevate Your Brand?</h2>
                    <p className={styles.subtitle}>
                        Let's create stunning video content that captures your restaurant's essence
                    </p>

                    <div className={styles.buttons}>
                        <a href="mailto:contact@redixsolutions.pro" className={styles.primaryBtn}>
                            <FaEnvelope />
                            <span>Get in Touch</span>
                        </a>
                        <a href="tel:+21692861655" className={styles.secondaryBtn}>
                            <FaPhone />
                            <span>Call Us</span>
                        </a>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/redixdigitalsolutions/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61560535962106" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
