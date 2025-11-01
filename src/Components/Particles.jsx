import { useEffect, useRef } from "react";

export const Particles = () => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, active: false });
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const setSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        setSize();
        window.addEventListener("resize", setSize);

        // init particles
        const createParticles = () => {
            const arr = [];
            for (let i = 0; i < 20; i++) {
                arr.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: 0,
                    vy: 0,
                    r: 4,
                });
            }
            particlesRef.current = arr;
        };
        createParticles();

        // mouse / touch
        const onMove = (e) => {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            mouseRef.current.x = clientX;
            mouseRef.current.y = clientY;
            mouseRef.current.active = true;
        };
        const onLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("touchend", onLeave);

        // animation loop
        const updateAndDraw = () => {
            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const w = window.innerWidth;
            const h = window.innerHeight;

            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // mouse attraction (only when close enough)
                if (mouse.active && mouse.x != null && mouse.y != null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                    const maxDist = 150; // 👈 attraction radius
                    if (dist < maxDist) {
                        const force = Math.min(120 / dist, 0.6);
                        p.vx += (dx / dist) * force * 0.9;
                        p.vy += (dy / dist) * force * 0.9;
                    }
                }


                // particle–particle repulsion
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const minDist = 25; // distance threshold

                    if (dist < minDist) {
                        // normalize
                        const nx = dx / dist;
                        const ny = dy / dist;

                        // push both apart equally
                        const repulse = (minDist - dist) * 0.02; // repulsion strength
                        p.vx += nx * repulse;
                        p.vy += ny * repulse;
                        q.vx -= nx * repulse;
                        q.vy -= ny * repulse;
                    }
                }

                // velocity damping
                p.vx *= 0.96;
                p.vy *= 0.96;

                // update position
                p.x += p.vx;
                p.y += p.vy;

                // draw glow around particle
                const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
                g.addColorStop(0, "rgba(60, 60, 60, 0.5)");
                g.addColorStop(1, "rgba(60, 60, 60, 0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
                ctx.fill();

                // bright inner core
                ctx.beginPath();
                ctx.fillStyle = "rgba(110, 110, 110, 0.8)";
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

            }

            rafRef.current = requestAnimationFrame(updateAndDraw);
        };

        rafRef.current = requestAnimationFrame(updateAndDraw);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("touchend", onLeave);
            window.removeEventListener("resize", setSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hidden md:block"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                background: "transparent",
                zIndex: 0,
            }}
        />
    );
};

