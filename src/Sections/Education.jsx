import { forwardRef } from "react"
import { PartTitle } from "../Components/PartTitle"

export const Education = forwardRef((props, ref) => {
    return (
        <div className="mt-72 pt-8 md:pt-32 z-10" ref={ref}>
            <PartTitle title={"/education"} />

            <div className="w-full flex flex-col items-start">
                <h1 className="text-2xl font-[500]">College of Arts</h1>

                <div className="mt-2 px-4 flex flex-col items-start">
                    <span className="text-base font-[400] text-gray-400">2019 - 2025 | Kafr Elshekh</span>
                    <span className="mt-4 text-lg font-[400] text-gray-200">Department of Eastern Languages, Hebrew Section</span>
                </div>
            </div>

        </div>
    )
})

