import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './VideoCard.module.css';

const VideoCard = ({ video }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current && !isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={styles.videoCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    loop
                    muted
                    playsInline
                    poster=""
                >
                    {video.mp4 && <source src={video.mp4} type="video/mp4" />}
                    {video.mov && <source src={video.mov} type="video/quicktime" />}
                </video>

                <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
                    <button className={styles.playButton} onClick={handlePlayPause}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                </div>

                <div className={styles.info}>
                    <span className={styles.category}>{video.category}</span>
                    <h3 className={styles.title}>{video.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
