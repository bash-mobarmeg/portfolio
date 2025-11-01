import { forwardRef } from "react";
import { PartTitle } from "../Components/PartTitle"
import { SkillCard } from "../Components/SkillCard";

const skills = [
    { name: "Node.js", level: 5 },
    { name: "Express.js", level: 5 },
    { name: "REST APIs", level: 5 },
    { name: "OAuth", level: 5 },
    { name: "MySql", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "React.js", level: 4 },
    { name: "Vite", level: 4 },
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "TailwindCSS", level: 5 },
    { name: "Typescript", level: 5 },
    { name: "Git", level: 4 },
    { name: "Github", level: 4 },
    { name: "Docker", level: 4 },
    { name: "Postman", level: 5 },
    { name: "Linux", level: 5 },
    { name: "Cyber Security", level: 4 },
    { name: "Penetration Testing", level: 3 },
];


const languages = [
    { name: "javascript", level: 5, loveit: false },
    { name: "rust", level: 5, loveit: true },
    { name: "c/c++", level: 4, loveit: false },
    { name: "python", level: 3, loveit: false },
];

export const Skills = forwardRef((pros, ref) => {
    return (
        <div ref={ref} className="mt-72 pt-8 md:pt-20 z-10">

            <PartTitle title={"/my/skills"} />

            <span className="font-[500] text-gray-300">
                I build robust, scalable backend systems, design APIs, manage databases, and ensure secure and efficient server-side operations.
            </span>

            <div className="flex flex-wrap gap-3 mt-6">
                {
                    skills.map((item, idx) => (
                        <SkillCard key={idx} name={item.name} level={item.level} />
                    ))
                }
            </div>

            <div className="flex flex-col gap-4 mt-10">
                <span className="py-2 text-xl font-[500] border-b border-br">
                    Languages I’m skilled in
                </span>

                <div className="flex items-start justify-start gap-3">
                    {
                        languages.map((item, idx) => (
                            <SkillCard key={idx} name={item.name} level={item.level} loveit={item.loveit} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
});

