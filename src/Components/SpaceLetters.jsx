import { useRef, useEffect, useState, useLayoutEffect } from "react";

const letters = [
    { char: "m", path: "/portfolio/letter-m.png" },
    { char: "o", path: "/portfolio/letter-o.png" },
    { char: "h", path: "/portfolio/letter-h.png" },
    { char: "a", path: "/portfolio/letter-a.png" },
    { char: "m", path: "/portfolio/letter-m.png" },
    { char: "m", path: "/portfolio/letter-m.png" },
    { char: "e", path: "/portfolio/letter-e.png" },
    { char: "d", path: "/portfolio/letter-d.png" },
    { char: "g", path: "/portfolio/letter-g.png" },
    { char: "h", path: "/portfolio/letter-h.png" },
    { char: "a", path: "/portfolio/letter-a.png" },
    { char: "l", path: "/portfolio/letter-l.png" },
    { char: "y", path: "/portfolio/letter-y.png" },
];

export const SpaceLetters = () => {
    const [positions, setPositions] = useState([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const rafRef = useRef(null);
    const lettersRef = useRef([]);
    const idleTimeoutRef = useRef(null);
    const containerRef = useRef(null);
    const isMobile = useRef(false);

    useEffect(() => {
        isMobile.current = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }, []);

    useLayoutEffect(() => {
        const initPositions = () => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect || rect.width === 0) return; // Wait for layout to exist

            const w = rect.width;
            const h = rect.height;
            const startX = w / 2 - (letters.length * 50) / 2;
            const startY = h / 2;

            const initial = letters.map((_, i) => ({
                x: startX + i * 50,
                y: startY,
                vx: 0,
                vy: 0,
                targetX: startX + i * 50,
                targetY: startY,
            }));

            lettersRef.current = initial;
            setPositions(initial);
        };

        // Delay slightly for Tailwind layout
        const timeout = setTimeout(initPositions, 100);
        window.addEventListener("resize", initPositions);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", initPositions);
        };
    }, []);

    useEffect(() => {
        if (isMobile.current) {
            const staticLetters = lettersRef.current.map((p) => ({
                ...p,
                x: p.targetX,
                y: p.targetY,
            }));
            setPositions(staticLetters);
            return;
        }

        const el = containerRef.current;
        if (!el) return;

        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
            const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
            mouseRef.current = { x, y, active: true };

            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = setTimeout(() => {
                mouseRef.current.active = false;
            }, 1500);
        };

        const onLeave = () => (mouseRef.current.active = false);

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);

        const update = () => {
            const mouse = mouseRef.current;
            const newLetters = lettersRef.current.map((p) => {
                let { x, y, vx, vy, targetX, targetY } = p;

                if (mouse.active) {
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const maxDist = 200;
                    if (dist < maxDist) {
                        const force = Math.min(150 / dist, 0.8);
                        vx += (dx / dist) * force * 0.8;
                        vy += (dy / dist) * force * 0.8;
                    }
                } else {
                    const dx = targetX - x;
                    const dy = targetY - y;
                    vx += dx * 0.02;
                    vy += dy * 0.02;
                }

                vx *= 0.9;
                vy *= 0.9;

                x += vx;
                y += vy;

                return { x, y, vx, vy, targetX, targetY };
            });

            lettersRef.current = newLetters;
            setPositions([...newLetters]);
            rafRef.current = requestAnimationFrame(update);
        };

        rafRef.current = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(rafRef.current);
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
        };
    }, []);

    return (
        <div className="relative z-20 h-32 w-full md:opacity-100 opacity-0 transition-opacity duration-300">
            <div ref={containerRef} className="relative h-full w-full">
                {positions.map((p, i) => (
                    <img
                        key={i}
                        src={letters[i].path}
                        alt={letters[i].char}
                        className="absolute w-6 md:w-20 opacity-80 pointer-events-none"
                        style={{
                            transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`,
                            transition: "transform 0.02s linear",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

