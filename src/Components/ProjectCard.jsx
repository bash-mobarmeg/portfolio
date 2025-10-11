import PropTypes from "prop-types";

export const ProjectCard = ({ title, explain, link, tags }) => {
    return (
        <div className="relative bg-primary border border-[#252525] duration-200 ease-in-out hover:bg-secondary hover:border-amber-400 p-4 rounded-xl scale-up shadow-sm transition-all">
            <h2 className="text-xl font-[500]">{title}</h2>

            <div className="my-3 flex items-center flex-wrap gap-3">
                {
                    tags?.map((tag, idx) => (
                        <span key={idx} className="bg-secondary border-[#252525] border-t text-[#b3b3b3] text-sm font-[400] px-2 py-0.5 rounded-full">{tag}</span>
                    ))
                }
            </div>

            <p className="my-3 mb-10 text-sm text-gray-400">
                {explain}
            </p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-block text-blue-300 font-medium hover:underline"
            >
                view/?on=gitHub
            </a>
        </div>
    )
}

ProjectCard.prototype = {
    title: PropTypes.string,
    explain: PropTypes.string,
    link: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
};

