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

export const MobileName = () => {
    return (
        <div className="md:hidden flex flex-col items-center justify-center space-x-0 md:space-x-2 h-32 w-full relative z-20">
            <div className="flex flex-row">
                {letters.slice(0, 8).map((letter, index) => (
                    <img
                        key={index}
                        src={letter.path}
                        alt={letter.char}
                        className="w-11 opacity-80 pointer-events-none"
                    />
                ))}
            </div>

            <div className="flex flex-row">
                {letters.slice(8).map((letter, index) => (
                    <img
                        key={index}
                        src={letter.path}
                        alt={letter.char}
                        className="w-11 opacity-80 pointer-events-none"
                    />
                ))}
            </div>
        </div>
    );
};

