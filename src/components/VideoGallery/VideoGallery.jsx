import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import { videoData } from '../../utils/videoData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './VideoGallery.module.css';

const VideoGallery = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className={styles.gallery} id="portfolio">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Portfolio</h2>
                    <p className={styles.subtitle}>
                        Crafted with precision, delivered with impact
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`${styles.grid} ${isVisible ? styles.visible : ''}`}
                >
                    {videoData.map((video, index) => (
                        <div
                            key={video.id}
                            className={styles.gridItem}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
