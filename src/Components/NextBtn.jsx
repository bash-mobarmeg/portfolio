import PropTypes from "prop-types";

export const NextBtn = ({ disabled = false, onClick = () => { } }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="flex items-center justify-center gap-2 w-fit px-6 py-1.5 rounded-xl border-t border-br bg-secondary hover:bg-[#232323] active:bg-secondary font-[500] transition-all duration-200 ease-in-out md:opacity-[0.8]"
        >
            <span className="text-md">Next</span>
        </button>
    )
}

NextBtn.prototype = {
    disabled: PropTypes.boolean,
    onClick: PropTypes.func
};

