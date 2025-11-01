import PropTypes from "prop-types";

export const PreviousBtn = ({ disabled = false, onClick = () => { } }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="active:bg-secondary bg-secondary border-br border-t duration-200 ease-in-out flex font-[500] gap-2 hover:bg-[#232323] items-center justify-center md:opacity-[0.8] px-6 py-1.5 rounded-xl transition-all w-fit"
        >
            <span className="text-md">Prev</span>
        </button>
    )
}

PreviousBtn.prototype = {
    disabled: PropTypes.boolean,
    onClick: PropTypes.func
};

