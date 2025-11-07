import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Video.scss";
import subtitleObj from '../../data/subtitles/VideoSubtitles.json';

const VideoPlayer = ({ widthClass = "w-large", video_name, subtitle_name }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubtitleOpen, setIsSubtitleOpen] = useState(false);

    const subtext = subtitleObj[subtitle_name];

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleRestart = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && !isDragging) {
            setProgress(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    return (
        <div className={`video-container ${widthClass}`}>
            <video
                ref={videoRef}
                className="video-element"
                src={`/videos/${video_name}`}
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            >
                Ihr Browser unterstützt das Video-Tag nicht.
            </video>

            <div className="video-controls">
                <button className="btn-play" onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="btn-restart" onClick={handleRestart}>
                    <FaRedo />
                </button>

                <input
                    className="progress-bar"
                    type="range"
                    min="0"
                    max={duration}
                    value={progress}
                    step="0.01"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => {
                        setIsDragging(false);
                        if (isPlaying) videoRef.current.play();
                    }}
                    onInput={(e) => {
                        if (videoRef.current) {
                            videoRef.current.currentTime = e.target.value;
                        }
                    }}
                />
                <div className="tooltip_containe">

                <button
                    className="btn-toggle-subtitle"
                    title="Untertitel ein-/ausblenden"
                    onClick={() => setIsSubtitleOpen(!isSubtitleOpen)}
                >
                    {isSubtitleOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                </div>

            </div>

            {isSubtitleOpen && (
                <p className="subtitle-container">
                    {subtext}
                </p>
            )}
        </div>
    );
};

export default VideoPlayer;
