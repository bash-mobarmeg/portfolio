import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const PartTitle = ({ title }) => {
    const ref = useRef(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setExpanded(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className="border-b border-br font-[500] my-4 py-3 relative"
        >
            <h1 className="text-2xl md:text-4xl text-amber-300 pixel2">{title}</h1>
            <span className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-[2s] ease-out ${expanded ? "w-full" : "w-0"}`}></span>
        </div>
    );
};

PartTitle.prototype = {
    title: PropTypes.string
};

