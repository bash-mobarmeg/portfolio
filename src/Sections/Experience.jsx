import { forwardRef } from "react"
import { PartTitle } from "../Components/PartTitle"

export const Experience = forwardRef((props, ref) => {
    return (
        <div className="mt-72 z-10" ref={ref}>

            <PartTitle title={"/my/experience"} />

            <div className="space-y-10">
                <div>
                    <p className="text-xl font-[500]">E-commerce Web Application (Clothes & Shoes)</p>
                    <TagsCard tags={["Node.js (Express.js)", "React.js", "TailwindCSS"]} />
                    <p className="mt-2 px-2 font-[500] text-gray-400">
                        Designed and developed a full-stack e-commerce platform using React.js, Node.js, MySQL, and Tailwind CSS. Implemented features that allow traders to upload and manage their products, while customers can make purchases through secure credit card processing. Built an admin dashboard to manage traders, products, advertisements, and customers, ensuring a smooth and secure user experience.
                    </p>
                </div>


                <div>
                    <p className="text-xl font-[500]">Online Pharmacy Marketplace</p>
                    <TagsCard tags={["Node.js (Express.js)", "React.js", "TailwindCSS"]} />
                    <p className="mt-2 px-2 font-[500] text-gray-400">
                        Created a full-stack online platform for pharmacies using React.js, Node.js, MySQL, and Tailwind CSS. Enabled pharmacy owners to list products for sale, manage inventory, and engage with customers through a customizable interface. Focused on security and usability to ensure a seamless shopping experience for medical products.
                    </p>
                </div>


                <div>
                    <p className="text-xl font-[500]">Social Media Platform</p>
                    <TagsCard tags={["Node.js (Express.js)", "Svelt.js", "TailwindCSS"]} />
                    <p className="mt-2 px-2 font-[500] text-gray-400">
                        Developed a full-stack social media application using React.js, Node.js, MySQL, and Tailwind CSS. Built core features for users to share posts, images, and videos. Implemented backend services for real-time data handling, media management, and seamless interactions, creating an engaging platform for user content sharing.
                    </p>
                </div>

            </div>

        </div>
    )
});


const TagsCard = ({ tags }) => {
    return (
        <div className="my-3 flex items-center flex-wrap gap-3">
            {
                tags?.map((tag, idx) => (
                    <span key={idx} className="py-0.5 px-2 bg-secondary text-sm font-[500] text-[#b3b3b3] border-t border-[#252525] rounded-full">{tag}</span>
                ))
            }
        </div>
    )
}
