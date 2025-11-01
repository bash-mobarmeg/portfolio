import { MdMarkEmailUnread } from "react-icons/md"
import { PartTitle } from "../Components/PartTitle"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { forwardRef } from "react"

export const Contact = forwardRef((_, ref) => {
    return (
        <div className="mt-[26rem] pt-32 z-10" ref={ref}>
            <PartTitle title={"/contact/me"} />

            <p className="mt-4 text-gray-300 text-lg font-[500]">
                Feel free to reach out if you’d like to collaborate, discuss opportunities, or just say hello!
            </p>

            <div className="flex flex-col gap-3 mt-6">
                <a
                    href="mailto:mohammed-ghaly@outlook.com"
                    className="flex items-center gap-3 text-lg font-[500] text-blue-300 hover:underline"
                >
                    <MdMarkEmailUnread />
                    mohammed-ghaly@outlook.com
                </a>
                <a
                    href="https://github.com/bash-mobarmeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-[500] text-blue-300 hover:underline"
                >
                    <FaGithub />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/mohammed-ghaly-aa709b313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-[500] text-blue-300 hover:underline"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
            </div>

        </div>
    )
});

