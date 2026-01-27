"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        let ticking = false;
        const updateScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setCompletion((window.scrollY / scrollHeight) * 100);
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[2px] z-[150] pointer-events-none bg-white/5">
            <div 
                className="h-full bg-primary transition-transform duration-75"
                style={{ transform: `scaleX(${completion / 100})`, transformOrigin: 'left' }}
            />
        </div>
    );
}