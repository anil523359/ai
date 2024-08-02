import image_7_1 from "assets/images/main/landing/7_1.png";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BlogImage from "assets/images/main/landing/blog_image.png";
import BlogOSN from "assets/images/main/landing/image_osn.png";

const blogSummaryData = [
  {
    title: "Decentralized Physical Infrastructure Networks (DePIN): Enhancing Security and Resilience",
    introduction: "Welcome back to the Ozak AI blog series. In this installment, we will delve into the concept of Decentralized Physical Infrastructure Networks (DePIN), a critical component that significantly enhances the security and resilience of our platform."
  },
  {
    title: "Ozak Data Vaults: Ensuring Data Integrity and Availability",
    introduction: "In this blog post, we turn our attention to Ozak Data Vaults, the secure repositories that form the backbone of data storage and management within the Ozak AI ecosystem."
  },
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
];

const blogData = {
  title: "Understanding the Ozak Stream Network (OSN): The Backbone of Real-Time Data Processing",
  introduction: "In our previous post, we provided an overview of Ozak AI and its key components. Today, we turn our focus to the Ozak Stream Network (OSN), a crucial element that underpins our real-time data processing capabilities",
  streamNetwork: "The Ozak Stream Network (OSN) is meticulously designed to handle the real-time flow of data across the Ozak AI ecosystem. By ensuring low latency and high accuracy in data transmission, OSN plays a pivotal role in delivering timely and reliable insights.",
  technicalArchitecture: [
    "Real-Time Data Ingestion:  OSN is equipped to collect data from a multitude of sources, including financial markets, economic indicators, and other relevant data feeds.",
    "Low-Latency Transmission:  The network is optimized to process and transmit data swiftly to downstream components such as DePIN nodes and Ozak Data Vaults, minimizing latency.",
    "Scalability:  The architecture of OSN is inherently scalable, capable of accommodating increasing data volumes and user demands without compromising performance.",
  ],
  application: [
    "Market Analysis:  The OSN enables real-time analysis of market trends, providing users with up-to-date information.",
    "Risk Management:  Timely data processing aids in effective risk management by allowing for prompt decision-making in volatile market conditions.",
  ],
  conclusion: "The Ozak Stream Network is the cornerstone of our real-time data processing infrastructure, enabling Ozak AI to offer unparalleled insights. In our next post, we will examine the role of Decentralized Physical Infrastructure Networks (DePIN) in enhancing the security and resilience of our platform.",
};
const BlogPage2 = () => {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const navigate = useNavigate();
  return (
    <div className="bg-[black] px-6 md:px-10 lg:px-28 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 pt-[30px]">
        <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
          10 JUL 2024
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
          <h3 className="text-[24px] md:text-[32px] font-[500]">The Ozak Stream Network</h3>
          <p className="text-[18px] text-[#FFFFFFB2]">{blogData.streamNetwork}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Technological Architecture</h3>
          <ol className="list-disc pl-5">
            {blogData.technicalArchitecture.map((data, index) => (
              <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                {data}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Practical Applications</h3>
          <ol className="list-disc pl-5">
            {blogData.application.map((data, index) => (
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
              <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${(index + 3) < 7 ? index + 3 : 1}`)}>
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
export default BlogPage2;
