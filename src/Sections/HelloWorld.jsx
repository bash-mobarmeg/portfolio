import { forwardRef } from "react"
import { PartTitle } from "../Components/PartTitle"

export const HelloWorld = forwardRef((props, ref) => {
    return (
        <div className="mt-72 pt-8 md:pt-20 z-10" ref={ref}>
            <PartTitle title={"/hello-world"} />

            <div className="text-lg">
                <p className="font-[500] text-gray-300">
                    Hi 👋 my name is&nbsp;

                    <span className="text-xl font-semibold">
                        Mohammed Ghaly
                    </span>

                    ,&nbsp;and I’m a backend developer passionate about building reliable and scalable applications.

                    <br />
                    <br />

                    &bull; I specialize in
                    <span className="font-bold"> Node.js, Express.js, </span>
                    and TypeScript, creating RESTful APIs, secure authentication systems, and efficient server-side logic.

                    <br />
                    <br />
                    &bull; While backend development is my main focus, I also have experience with React.js, HTML, and CSS, which helps me collaborate across the full stack.
                </p>
            </div>

        </div>
    )
})

