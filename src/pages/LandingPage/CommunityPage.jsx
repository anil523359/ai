import image_7_1 from "assets/images/main/landing/7_1.png";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BlogsHome from "components/BlogsHome";
import BlogOSN from "assets/images/main/landing/image_osn.png";


const blogSummaryData = [
  // {
  //   title: "Welcome to Ozak AI: Revolutionizing Predictive Analytics with Decentralized Technology",
  //   introduction: "Welcome to the official blog of Ozak AI! As a cutting-edge technology enterprise, we are excited to introduce you to our mission of transforming predictive analytics through innovative decentralized technologies. This introductory post will provide a comprehensive overview of our company, our core mission, and the unique technological infrastructure that differentiates us within the industry."
  // },
  {
    title: "Understanding the Ozak Stream Network (OSN): The Backbone of Real-Time Data Processing",
    introduction: "In our previous post, we provided an overview of Ozak AI and its key components. Today, we turn our focus to the Ozak Stream Network (OSN), a crucial element that underpins our real-time data processing capabilities."
  },
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
];

const CommunityPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const navigate = useNavigate();
  return (
    <div className="bg-[black] px-6 md:px-10 lg:px-28 flex justify-center">
      <div className="max-w-[1200px]">
        <div className="pt-8">
          {!isTablet ? (
            <a href="/community/blog-1">
              <div className="grid grid-cols-3 gap-0 rounded-xl overflow-hidden">
                <div>
                  <img src={BlogOSN} alt="" className="w-full" />
                </div>
                <div className="col-span-2 bg-[#0E0E0E] p-6 md:p-8 space-y-3">
                  <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
                    20 JUL 2024
                  </p>
                  <h1 className="font-normal font-[archivo] text-[32px] leading-[40px]">
                    Welcome to Ozak AI: Revolutionizing Predictive Analytics with Decentralized Technology
                  </h1>
                  <p className="text-color-semilight font-[300] text-[16px] leading-[25px] font-[archivo]">
                    Welcome to the official blog of Ozak AI! As a cutting-edge technology enterprise, we are excited to introduce you to our mission of transforming predictive analytics through innovative decentralized technologies. This introductory post will provide a comprehensive overview of our company, our core mission, and the unique technological infrastructure that differentiates us within the industry.
                  </p>
                </div>
              </div>
            </a>

          ) : (
            <div className="rounded-xl overflow-hidden">
              <div className="bg-[#0E0E0E] p-6 md:p-8 space-y-3">
                <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
                  12 JUN 2024
                </p>
                <div className="font-normal font-[archivo] text-[32px] leading-[40px]">
                  Welcome to Ozak AI: Revolutionizing Predictive Analytics with Decentralized Technology
                </div>
                <p className="text-color-semilight font-[300] text-[16px] leading-[25px] font-[archivo]">
                  Welcome to the official blog of Ozak AI! As a cutting-edge technology enterprise, we are excited to introduce you to our mission of transforming predictive analytics through innovative decentralized technologies. This introductory post will provide a comprehensive overview of our company, our core mission, and the unique technological infrastructure that differentiates us within the industry.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          <h3 className="font-semibold py-10 font-[archivo] text-[24px] leading-[32px]">
            {" "}
            All Blogs
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg2:grid-cols-4 gap-4 rounded-xl overflow-hidden pb-24">
            {blogSummaryData?.map((blog, index) => (
              <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${index + 2}`)}>
                <img src={BlogOSN} alt="" className="w-full rounded-t-xl" />
                <div className="p-6">
                  <h4 className="text-[24px] font-normal mb-2 leading-[32px] line-clamp-3">
                    {blog.title}
                  </h4>
                  <p className="text-color-semilight text-[16px] font-[archivo] font-normal leading-[23px] line-clamp-4">
                    {/* {blog.introduction} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityPage;
