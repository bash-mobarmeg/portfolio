import { forwardRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SpaceLetters } from "../Components/SpaceLetters";
import { MobileName } from "../Components/MobileName";
import { Link } from "react-router-dom";

export const Hero = forwardRef((props, ref) => {

    const handleScroll = () => {
        const helloRef = props.helloRef;
        if (helloRef?.current) {
            helloRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="pt-32 flex flex-col items-center z-10" ref={ref}>

            <div className="flex flex-col items-center justif-center gap-5 text-amber-400">
                <h1 className="text-2xl md:text-3xl font-[500] text-amber-400 pixel1">Good for you!</h1>
                <h1 className="text-lg md:text-3xl text-center font-[500] text-amber-400 pixel1">You&apos;ve found the perfect place</h1>
                <SpaceLetters />
                <MobileName />
            </div>


            <div className="mt-8 w-full flex flex-col items-center justify-center gap-4 opacity-[0.8]">
                <button
                    onClick={handleScroll}
                    className="w-fit px-6 py-2 flex items-center justify-center gap-2 bg-secondary hover:bg-[#232323] active:bg-secondary font-[500] rounded-full border border-br transition-all duration-200 ease-in-out"
                >
                    <span>Check my api</span>
                    <MdKeyboardDoubleArrowDown className="text-lg flow" />
                </button>
                <a href="/portfolio/CV.pdf" className="w-fit px-6 py-1.5 flex items-center justify-center gap-2 bg-secondary hover:bg-[#232323] active:bg-secondary font-[500] rounded-full border border-br transition-all duration-200 ease-in-out">CV</a>
            </div>
        </div>
    )
});

