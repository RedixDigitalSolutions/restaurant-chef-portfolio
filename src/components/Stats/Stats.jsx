import React from 'react';
import { FaVideo, FaEye, FaUtensils } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Stats.module.css';

const statsData = [
    {
        icon: FaVideo,
        number: '12+',
        label: 'Videos Created',
        color: '#c12de0'
    },
    {
        icon: FaEye,
        number: '10M+',
        label: 'Total Views',
        color: '#9620c9'
    },
    {
        icon: FaUtensils,
        number: '5+',
        label: 'Restaurant Brands',
        color: '#7817b6'
    }
];

const Stats = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className={styles.stats} ref={ref}>
            <div className={styles.container}>
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className={`${styles.statCard} ${isVisible ? styles.visible : ''}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className={styles.iconWrapper} style={{ background: `${stat.color}20` }}>
                            <stat.icon className={styles.icon} style={{ color: stat.color }} />
                        </div>
                        <h3 className={styles.number}>{stat.number}</h3>
                        <p className={styles.label}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
