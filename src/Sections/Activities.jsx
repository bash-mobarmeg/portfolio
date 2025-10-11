import { forwardRef } from "react"
import { PartTitle } from "../Components/PartTitle"

export const Activities = forwardRef((props, ref) => {
    return (
        <div className="mt-[28rem] pt-8 md:pt-32 z-10" ref={ref}>
            <PartTitle title={"/activities"} />

            <div className="space-y-6">

                <div>
                    <p className="text-xl font-[500]">School Activities</p>
                    <p className="mt-2 px-2 font-[500] text-gray-400">
                        Regularly participated in school events, including organizing sports activities and festivals, developing strong leadership and teamwork skills.
                    </p>
                </div>

            </div>


        </div>
    )
})

