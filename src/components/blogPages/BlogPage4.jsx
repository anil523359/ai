import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BlogImage from "assets/images/main/landing/blog_image.png";
import BlogOSN from "assets/images/main/landing/image_osn.png";

const blogSummaryData = [

  {
    title: "Customized Prediction Agents: Tailoring AI Models to Your Needs",
    introduction: "Welcome back! In this post, we will explore Prediction Agents (PAs), the customizable AI models that are at the heart of Ozak AI’s predictive analytics capabilities."
  },
  {
    title: "The Power of Predictive AI in Financial Markets",
    introduction: "In this installment, we will delve into the transformative potential of predictive AI within financial markets. Ozak AI leverages advanced predictive algorithms to deliver actionable insights that significantly enhance decision-making processes."
  },
  {
    title: "Welcome to Ozak AI: Revolutionizing Predictive Analytics with Decentralized Technology",
    introduction: "Welcome to the official blog of Ozak AI! As a cutting-edge technology enterprise, we are excited to introduce you to our mission of transforming predictive analytics through innovative decentralized technologies. This introductory post will provide a comprehensive overview of our company, our core mission, and the unique technological infrastructure that differentiates us within the industry."
  },
  {
    title: "Understanding the Ozak Stream Network (OSN): The Backbone of Real-Time Data Processing",
    introduction: "In our previous post, we provided an overview of Ozak AI and its key components. Today, we turn our focus to the Ozak Stream Network (OSN), a crucial element that underpins our real-time data processing capabilities."
  },
  {
    title: "Decentralized Physical Infrastructure Networks (DePIN): Enhancing Security and Resilience",
    introduction: "Welcome back to the Ozak AI blog series. In this installment, we will delve into the concept of Decentralized Physical Infrastructure Networks (DePIN), a critical component that significantly enhances the security and resilience of our platform."
  },
];

const blogData = {
  title: "Ozak Data Vaults: Ensuring Data Integrity and Availability",
  introduction: "In this blog post, we turn our attention to Ozak Data Vaults, the secure repositories that form the backbone of data storage and management within the Ozak AI ecosystem.",
  overview: "Ozak Data Vaults are meticulously designed to store and manage data securely. These vaults ensure that data remains available, intact, and readily accessible for both real-time and historical analysis.",
  keyFeatures: [
    "Data Security:  Ozak Data Vaults incorporate advanced security measures to protect data from unauthorized access and potential breaches. Encryption and multi-factor authentication are standard features.",
    "Data Integrity:  Ensuring the accuracy and consistency of stored data is paramount. Ozak Data Vaults utilize checksums and other integrity verification methods to maintain data quality.",
    "Data Availability:  The architecture of the data vaults is optimized to ensure that data is always available for analysis and predictive modeling, facilitating continuous operations.",
  ],
  role: [
    "Primary Storage:  Ozak Data Vaults serve as the principal storage locations for data ingested by the OSN.",
    "Lifecycle Management:  These vaults manage the entire data lifecycle, from initial storage to retrieval and eventual archiving.",
    "Support for Prediction Agents:  Data stored in the vaults is readily accessible by Prediction Agents, enabling them to generate precise and customized predictive insights.",
  ],
  conclusion: "Ozak Data Vaults are integral to maintaining data integrity and availability within the Ozak AI ecosystem. Our next post will focus on Prediction Agents and how their customizable features drive personalized and accurate predictions.",
};
const BlogPage4
  = () => {
    const isTablet = useMediaQuery({ maxWidth: 900 });
    const navigate = useNavigate();
    return (
      <div className="bg-[black] px-6 md:px-10 lg:px-28 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-6 pt-[30px]">
          <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
            08 JUN 2024
          </p>
          <div className="text-[32px] lg:text-[48px] font-semibold">
            {blogData.title}
          </div>
          <img src={BlogImage} className="w-full h-full" />
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[32px] font-[500]">Introduction</h3>
            <p className="text-[18px] text-[#FFFFFFB2]">{blogData.introduction}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[32px] font-[500]"> Ozak Data Vaults: An Overview</h3>
            <p className="text-[18px] text-[#FFFFFFB2]">{blogData.overview}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[32px] font-[500]">Key Features of Ozak Data Vaults</h3>
            <ol className="list-disc pl-5">
              {blogData.keyFeatures.map((data, index) => (
                <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                  {data}
                </li>
              ))}

            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[32px] font-[500]"> Role within Ozak A</h3>
            <ol className="list-disc pl-5">
              {blogData.role.map((data, index) => (
                <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                  {data}
                </li>
              ))}

            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[48px] font-semibold">Conclusion</h3>
            <p className="text-[18px] text-[#FFFFFFB2]">{blogData.conclusion}</p>
          </div>
          <div className="w-full">
            <h3 className="font-semibold py-10 font-[archivo] text-[24px] leading-[32px]">
              Read More Blogs
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg2:grid-cols-4 gap-4 rounded-xl overflow-hidden pb-24">
              {blogSummaryData?.map((blog, index) => (
                <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${(index + 5) < 7 ? index + 5 : index - 1}`)}>
                  <img src={BlogOSN} alt="" className="w-full rounded-t-xl" />
                  <div className="p-6">
                    <h4 className="text-[24px] font-normal mb-2 leading-[32px] line-clamp-3">
                      {blog.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default BlogPage4
  ;
