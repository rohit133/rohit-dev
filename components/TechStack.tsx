import React, { useRef, useEffect } from "react";

const logos = [
    "/logos/react.svg",
    "/logos/typescript.svg",
    "/logos/nodejs.svg",
    "/logos/nextjs.svg",
    "/logos/graphql.svg",
    "/logos/docker.svg",
    // Add more logo paths as needed
];

const SCROLL_SPEED = 1; // px per frame

const TechStack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let scrollLeft = 0;

        const scroll = () => {
            scrollLeft += SCROLL_SPEED;
            if (scrollLeft >= container.scrollWidth / 2) {
                scrollLeft = 0;
            }
            container.scrollLeft = scrollLeft;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Duplicate logos for seamless infinite scroll
    const allLogos = [...logos, ...logos];

    return (
        <div
            ref={containerRef}
            style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #eee",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
        >
            <div
                style={{
                    display: "inline-flex",
                    minWidth: "200%",
                }}
            >
                {allLogos.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt="Tech logo"
                        style={{
                            height: 48,
                            width: 48,
                            margin: "16px 32px",
                            objectFit: "contain",
                            filter: "grayscale(60%)",
                            transition: "filter 0.2s",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TechStack;