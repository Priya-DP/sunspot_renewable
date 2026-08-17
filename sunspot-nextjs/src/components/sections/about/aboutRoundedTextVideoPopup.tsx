'use client';

import { useState } from "react";

const AboutRoundedTextVideoPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="video-btn">
                <a onClick={() => setIsOpen(true)} className="video-popup ripple cursor-pointer">
                    <i className="fa-solid fa-play" />
                </a>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4" onClick={() => setIsOpen(false)}>
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-xl font-bold bg-slate-900/80 p-2 rounded-full z-10">
                            ✕
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/solarpasangachennai?autoplay=1"
                            title="Sunspot Solar Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutRoundedTextVideoPopup;
