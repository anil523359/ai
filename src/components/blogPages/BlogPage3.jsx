import image_7_1 from "assets/images/main/landing/7_1.png";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BlogImage from "assets/images/main/landing/blog_image.png";
import BlogOSN from "assets/images/main/landing/image_osn.png";

const blogSummaryData = [
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
  {
    title: "Understanding the Ozak Stream Network (OSN): The Backbone of Real-Time Data Processing",
    introduction: "In our previous post, we provided an overview of Ozak AI and its key components. Today, we turn our focus to the Ozak Stream Network (OSN), a crucial element that underpins our real-time data processing capabilities."
  },
];

const blogData = {
  title: "Decentralized Physical Infrastructure Networks (DePIN): Enhancing Security and Resilience",
  introduction: "Welcome back to the Ozak AI blog series. In this installment, we will delve into the concept of Decentralized Physical Infrastructure Networks (DePIN), a critical component that significantly enhances the security and resilience of our platform.",
  understandingDePIN: "DePIN comprises a network of distributed nodes that provide the underlying decentralized infrastructure essential for Ozak AI's operations. This decentralized approach offers numerous advantages, particularly in terms of security and resilience.",
  advantageOfDecentralization: [
    "Enhanced Security:  By distributing data across multiple nodes, the risk of data breaches and cyber-attacks is substantially reduced. Each node independently contributes to the network's security, making it highly resistant to centralized points of failure.",
    "Network Resilience:  The decentralized nature of DePIN ensures continuous network operation even if individual nodes fail, thereby enhancing overall system robustness.",
    "Data Integrity:  Decentralized processing guarantees the accuracy and consistency of data, as multiple nodes validate and store information independently.",
  ],
  operationalMechanism: [
    "Data Storage:  DePIN nodes are responsible for securely storing data collected by the OSN.",
    "Data Processing:  Distributed processing capabilities of DePIN nodes enhance the speed and efficiency of data analytics.",
    "Secure Transmission:  The network ensures secure data transmission across different nodes, maintaining the confidentiality and integrity of the data.",
  ],
  conclusion: "Decentralized Physical Infrastructure Networks play a crucial role in bolstering the security and resilience of Ozak AI. In our next post, we will explore the functionalities of Ozak Data Vaults and their importance in effective data management.",
};


const BlogPage3 = () => {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const navigate = useNavigate();
  return (
    <div className="bg-[black] px-6 md:px-10 lg:px-28 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 pt-[30px]">
        <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
          22 JUN 2024
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
          <h3 className="text-[24px] md:text-[32px] font-[500]">Understanding DePIN</h3>
          <p className="text-[18px] text-[#FFFFFFB2]">{blogData.understandingDePIN}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Advantages of Decentralization</h3>
          <ol className="list-disc pl-5">
            {blogData.advantageOfDecentralization.map((data, index) => (
              <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                {data}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Operational Mechanisms</h3>
          <ol className="list-disc pl-5">
            {blogData.operationalMechanism.map((data, index) => (
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
              <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${(index + 4) < 7 ? index + 4 : index - 2}`)}>
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
export default BlogPage3;
