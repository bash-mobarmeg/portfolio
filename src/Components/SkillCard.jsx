import PropTypes from "prop-types";

export const SkillCard = ({ name, level, loveit = null }) => {
    return (
        <div className="relative flex group">
            <span className="bg-secondary border-[#242424] border-t cursor-pointer duration-200 ease-in-out font-medium hover:bg-amber-400 hover:text-gray-800 px-2.5 py-2 relative rounded-xl transition-all">
                {name}
            </span>


            {loveit ? (
                <div className="absolute bg-secondary border border-br bottom-full duration-200 flex gap-2 group-hover:opacity-100 items-center left-1/2 mb-1 opacity-0 pointer-events-none px-2 py-2 rounded-md text-sm text-white transform -translate-x-1/2 transition-opacity w-max z-20">
                    {Array.from({ length: level }).map((_, idx) => (
                        <img
                            key={idx}
                            src="/portfolio/heart.png"
                            alt={`heart-${idx + 1}`}
                            className="w-4 scale-[120%]"
                        />
                    ))}
                </div>
            ) : (
                <div className="absolute bg-secondary border border-br bottom-full duration-200 flex gap-2 group-hover:opacity-100 items-center left-1/2 mb-1 opacity-0 pointer-events-none px-2 py-2 rounded-md text-sm text-white transform -translate-x-1/2 transition-opacity w-max z-20">
                    {Array.from({ length: level }).map((_, idx) => (
                        <img
                            key={idx}
                            src="/portfolio/star.webp"
                            alt={`star-${idx + 1}`}
                            className="w-4"
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

SkillCard.prototype = {
    name: PropTypes.string,
    level: PropTypes.number
};

