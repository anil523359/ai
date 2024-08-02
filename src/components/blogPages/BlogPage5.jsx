import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BlogImage from "assets/images/main/landing/blog_image.png";
import BlogOSN from "assets/images/main/landing/image_osn.png";

const blogSummaryData = [
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
  {
    title: "Ozak Data Vaults: Ensuring Data Integrity and Availability",
    introduction: "In this blog post, we turn our attention to Ozak Data Vaults, the secure repositories that form the backbone of data storage and management within the Ozak AI ecosystem."
  },
];

const blogData = {
  title: "Customized Prediction Agents: Tailoring AI Models to Your Needs",
  introduction: "Welcome back! In this post, we will explore Prediction Agents (PAs), the customizable AI models that are at the heart of Ozak AI’s predictive analytics capabilities.",
  predictionAgent: "Prediction Agents are sophisticated AI models specifically trained to generate predictions based on a combination of historical and real-time data. These models are highly customizable, allowing users to tailor their functionalities to meet specific analytical needs and objectives.",
  customizationCapabilities: [
    "Model Selection:  Users can choose from a diverse array of AI models depending on the nature of the prediction required, ranging from time series forecasting to classification models.",
    "Parameter Tuning:  Advanced users can fine-tune model parameters to optimize performance, ensuring that the predictions generated are both accurate and relevant.",
    "Data Inputs:  Users have the flexibility to select specific data sources and variables to be utilized by the Prediction Agents, allowing for a high degree of personalization in the analysis.",
  ],
  customizationBenefit: [
    "Personalized Insights:  Tailored predictions provide insights that are directly applicable to the user’s unique context and requirements.",
    "Enhanced Accuracy:  The ability to fine-tune models and select specific data inputs significantly improves the precision of predictions.",
    "Adaptability:  Customizable Prediction Agents can be adapted to evolving market conditions and new data inputs, ensuring their continued relevance and utility.",
  ],
  practicalApplication: [
    "Financial Forecasting:  Users can leverage Prediction Agents to forecast market trends, stock prices, and economic indicators with high accuracy.",
    "Risk Management:  By predicting potential risks, users can take proactive measures to mitigate financial losses.",
    "Investment Strategies:  Customized predictive insights enable the development of data-driven investment strategies, optimizing returns.",
  ],
  conclusion: "Prediction Agents are a powerful tool within the Ozak AI ecosystem, providing highly customizable and accurate predictive insights. In our next post, we will discuss the transformative impact of predictive AI in financial markets.",
};
const BlogPage5 = () => {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const navigate = useNavigate();
  return (
    <div className="bg-[black] px-6 md:px-10 lg:px-28 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 pt-[30px]">
        <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
          10 MAY 2024
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
          <h3 className="text-[24px] md:text-[32px] font-[500]">What are Prediction Agents? </h3>
          <p className="text-[18px] text-[#FFFFFFB2]">{blogData.predictionAgent}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Customization Capabilities</h3>
          <ol className="list-disc pl-5">
            {blogData.customizationCapabilities.map((data, index) => (
              <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                {data}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Benefits of Customization</h3>
          <ol className="list-disc pl-5">
            {blogData.customizationBenefit.map((data, index) => (
              <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                {data}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Practical Applications</h3>
          <ol className="list-disc pl-5">
            {blogData.practicalApplication.map((data, index) => (
              <li key={index} className="mb-2 text-[18px] text-[#FFFFFFB2]">
                {data}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] md:text-[32px] font-[500]">Conclusion</h3>
          <p className="text-[18px] text-[#FFFFFFB2]">{blogData.conclusion}</p>
        </div>
        <div className="w-full">
          <h3 className="font-semibold py-10 font-[archivo] text-[24px] leading-[32px]">
            Read More Blogs
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg2:grid-cols-4 gap-4 rounded-xl overflow-hidden pb-24">
            {blogSummaryData?.map((blog, index) => (
              <div key={index} className="cursor-pointer bg-white/10 rounded-xl" onClick={() => navigate(`/community/blog-${(index + 6) < 7 ? index + 6 : index - 0}`)}>
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
export default BlogPage5;
