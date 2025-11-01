import { forwardRef } from "react";
import { PartTitle } from "../Components/PartTitle";
import { ProjectCard } from "../Components/ProjectCard";

export const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="mt-72 z-10" >
            <PartTitle title={"/projects?page=1&size=4"} />

            <div className="grid gap-6 md:grid-cols-2 mt-6">
                <ProjectCard title={"Portfolio Website"} tags={["React.js", "Vite.js"]} explain={"Personal portfolio built with React.js and Tailwind CSS to showcase my work, skills, and projects."} link={"https://github.com/bash-mobarmeg/portfolio"} />
                <ProjectCard title={"Auth System"} tags={["Node.js", "Express.js", "Typescript", "OAuth"]} explain={"Authentication system with Node.js and Express.js, supporting OAuth and role-based access control."} link={"https://github.com/bash-mobarmeg/auth-kit-ts"} />
                <ProjectCard title={"Rust Markdown"} tags={["rust", "egui"]} explain={"Markdown editor built with Rust and eGUI, featuring live preview, syntax highlighting, and file management."} link={"https://github.com/bash-mobarmeg/rust-markdown"} />
                <ProjectCard title={"Rust Opengl"} tags={["rust", "gl", "ECS", "Rapier3d"]} explain={"🦀 A minimal Rust + OpenGL project that renders textured 3D cubes with camera controls and shader support."} link={"https://github.com/bash-mobarmeg/rust-opengl"} />
            </div>

        </div>
    );
});

