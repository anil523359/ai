
import image_7_1 from "assets/images/main/landing/7_1.png";
import BlogOSN from "assets/images/main/landing/image_osn.png";

import { useNavigate } from "react-router-dom";

const blogSummaryData = [
    {
        title: "Welcome to Ozak AI: Revolutionizing Predictive Analytics with Decentralized Technology",
        introduction: "Welcome to the official blog of Ozak AI! As a cutting-edge technology enterprise, we are excited to introduce you to our mission of transforming predictive analytics through innovative decentralized technologies. This introductory post will provide a comprehensive overview of our company, our core mission, and the unique technological infrastructure that differentiates us within the industry.",
        image: BlogOSN
    },
    {
        title: "Understanding the Ozak Stream Network (OSN): The Backbone of Real-Time Data Processing",
        introduction: "In our previous post, we provided an overview of Ozak AI and its key components. Today, we turn our focus to the Ozak Stream Network (OSN), a crucial element that underpins our real-time data processing capabilities.",
        image: BlogOSN
    },
    {
        title: "Decentralized Physical Infrastructure Networks (DePIN): Enhancing Security and Resilience",
        introduction: "Welcome back to the Ozak AI blog series. In this installment, we will delve into the concept of Decentralized Physical Infrastructure Networks (DePIN), a critical component that significantly enhances the security and resilience of our platform.",
        image: BlogOSN
    },
    {
        title: "Ozak Data Vaults: Ensuring Data Integrity and Availability",
        introduction: "In this blog post, we turn our attention to Ozak Data Vaults, the secure repositories that form the backbone of data storage and management within the Ozak AI ecosystem.",
        image: BlogOSN
    },
];

const BlogsHome = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#050505] xs:py-2 lg2:py-24 px-6 md:px-10 lg:px-28 flex justify-center">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-center mb-2 font-[archivo] font-medium text-[32px] lg:text-[48px] lg:leading-[65px]">
                    Our Blogs
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg2:grid-cols-4 gap-4  overflow-hidden pt-10">
                    {blogSummaryData?.map((blog, index) => (
                        <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${index + 1}`)}>
                            <img src={blog.image} alt="" className="w-full rounded-t-xl" />
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-2 leading-[32px] line-clamp-3">
                                    {blog.title}
                                </h4>
                                {/* <p className="text-color-semilight text-[16px] font-[archivo] font-normal leading-[23px] line-clamp-4">
                                    {blog.introduction}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogsHome;