import { useEffect, useRef, useState } from "react";

// Components
import { Particles } from "../Components/Particles";
import { WaterContact } from "../Components/WaterContact";

// Sections
import { HelloWorld } from "../Sections/HelloWorld";
import { Skills } from "../Sections/Skills";
import { Projects } from "../Sections/Projects";
import { Contact } from "../Sections/Contact";
import { Experience } from "../Sections/Experience";
import { Hero } from "../Sections/Hero";
import { PreviousBtn } from "../Components/PreviousBtn";
import { NextBtn } from "../Components/NextBtn";
import { Education } from "../Sections/Education";
import { Activities } from "../Sections/Activities";


const parts = [
    { name: "hero" },
    { name: "hello-world" },
    { name: "skills" },
    { name: "projects" },
    { name: "experience" },
    { name: "education" },
    { name: "activities" },
    { name: "contact" },
];

export const Home = () => {
    const [activeSection, setActiveSection] = useState("hero");

    const sectionRefs = {
        hero: useRef(null),
        "hello-world": useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        experience: useRef(null),
        education: useRef(null),
        activities: useRef(null),
        contact: useRef(null),
    };

    // Smooth scroll helper
    const scrollToSection = (name) => {
        const ref = sectionRefs[name];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setActiveSection(name);
        }
    };

    // Move to next or previous section
    const handleNext = () => {
        const currentIndex = parts.findIndex(p => p.name === activeSection);
        if (currentIndex < parts.length - 1) {
            const nextName = parts[currentIndex + 1].name;
            scrollToSection(nextName);
        }
    };

    const handlePrev = () => {
        const currentIndex = parts.findIndex(p => p.name === activeSection);
        if (currentIndex > 0) {
            const prevName = parts[currentIndex - 1].name;
            scrollToSection(prevName);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries.find(e => e.isIntersecting);
                if (visible) setActiveSection(visible.target.id);
            },
            { threshold: 0.6 }
        );

        Object.keys(sectionRefs).forEach(name => {
            const ref = sectionRefs[name];
            if (ref.current) {
                ref.current.id = name;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <main className="relative w-full h-full flex flex-col justify-center px-[3%] md:px-[20%] bg-primary">
                <Particles />
                <WaterContact />

                <img src="/portfolio/spacechip.webp" className="hidden md:block fixed top-40 right-20 w-20 -rotate-45 opacity-50 z-0 invert" alt="spacechip" />
                <img src="/portfolio/rocket.webp" className="hidden md:block fixed bottom-40 left-20 w-20 -rotate-90 opacity-50 z-0 invert" alt="rocket" />

                <div className="fixed bottom-1 md:bottom-3 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-[35rem] h-fit px-6 flex items-end justify-between z-20">
                    <PreviousBtn disabled={activeSection === "hero"} onClick={handlePrev} />
                    <NextBtn disabled={activeSection === "contact"} onClick={handleNext} />
                </div>

                <Hero ref={sectionRefs.hero} helloRef={sectionRefs["hello-world"]} />

                <HelloWorld ref={sectionRefs["hello-world"]} />

                <Skills ref={sectionRefs.skills} />

                <Projects ref={sectionRefs.projects} />

                <Experience ref={sectionRefs.experience} />

                <Education ref={sectionRefs.education} />

                <Activities ref={sectionRefs.activities} />

                <Contact ref={sectionRefs.contact} />

                <div className="min-h-80 z-10" />

            </main>
        </>
    )
}

