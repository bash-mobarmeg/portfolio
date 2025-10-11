
// Icons
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { MdMarkEmailUnread } from 'react-icons/md';
import { PiReadCvLogoBold } from 'react-icons/pi';

export const WaterContact = () => {
    return (
        <div className="fixed h-36 hidden left-10 md:block top-10 w-11 z-10">
            <div className="bg-[#1a1a1a] border border-[#282828] h-fit py-2 flex flex-col items-center justify-around gap-2 relative rounded-xl w-full">
                <a
                    className="border border-[transparent] duration-200 ease-in-out flex h-8 hover:border-amber-600 hover:bg-[#282828] items-center justify-center rounded-full transition-all w-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/bash-mobarmeg"
                >
                    <FaGithub />
                </a>

                <a
                    className="border border-[transparent] duration-200 ease-in-out flex h-8 hover:border-amber-600 hover:bg-[#282828] items-center justify-center rounded-full transition-all w-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mohammed-ghaly-aa709b313/"
                >
                    <FaLinkedin />
                </a>

                <a
                    className="border border-[transparent] duration-200 ease-in-out flex h-8 hover:border-amber-600 hover:bg-[#282828] items-center justify-center rounded-full transition-all w-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:mohammed-ghaly@outlook.com"
                >
                    <MdMarkEmailUnread />
                </a>

                <a
                    className="border border-[transparent] duration-200 ease-in-out flex h-8 hover:border-amber-600 hover:bg-[#282828] items-center justify-center rounded-full transition-all w-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/portfolio/CV.pdf"
                >
                    <PiReadCvLogoBold />
                </a>
            </div>
        </div>
    )
}

