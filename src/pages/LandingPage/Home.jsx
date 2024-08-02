import { useEffect, useState } from "react";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import systemArchitectureImg from "assets/images/main/landing/system-architecture.svg";
// import ozakAiAppViewImg from "assets/images/main/landing/ozak-ai-app-view.svg";
import ozakAiAppViewImg from "assets/images/main/landing/dashboard.png"

import video_bg_1 from "assets/images/main/common/hero-bg-1.png";
import video_1 from "assets/images/main/common/hero-bg-1.webm";
import system_architecture from "assets/images/main/common/system-architecture.webm";

import SpreadTehWord from "components/SpreadTheWord";
import RoadMap from "components/RoadMap";
import BlogsHome from "components/BlogsHome";
import BuiltOn from "components/BuiltOn";
import Featured from "components/Featured";
import FeaturesHome from "components/FeaturesHome";

const HomePage = () => {
  const isTablet = useMediaQuery({ maxWidth: 960 });

  return (
    <div className="w-full h-full flex flex-col home">
      <div className="relative flex items-center justify-center min-h-[755px] max-h-[755px] overflow-hidden">
        <video poster={video_bg_1} autoPlay loop muted className="w-full h-full min-h-[755px] max-h-[755px] object-cover">
          <source src={video_1} type="video/mp4" />
          <source src={video_1} type="video/ogg" />
          <source src={video_1} type="video/webm" />
        </video>
        <div className="hero-top w-full">
          <div className="flex items-center justify-center w-full h-full text-white pt-[150px]">
            <div className="bg-center bg-cover bg-no-repeat max-w-[1440px] px-6 md:px-[64px] lg:px-[120px]">
              <h1 className="font-[archivo] font-medium lg:font-bold text-[48px] lg:text-[112px] lg:leading-[120px] tracking-[-0.02em] text-center max-w-[1200px]">
                Predict the future with Predictive AI
              </h1>
              <p className="text-center text-white font-[HelveticaNeueLight] font-normal md:text-[32px] leading-[32px] mt-8">
                Ozak is Predictive AI powered decentralized <br />network for
                advance data analytics & interpretation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-cover bg-bottom flex justify-center px-6 md:px-10 lg:px-28">
        <div className="max-w-[1200px] ">
          <div className="h-fit w-full py-12 pb-20 ">
            <FeaturesHome />
          </div>
          <div className="w-full py-12 pb-20">
            <div className="w-full h-full min-h-[755px] max-h-[755px] relative">
              <video poster={video_bg_1} autoPlay loop muted className="w-full h-full min-h-[755px] max-h-[755px] object-cover">
                <source src={system_architecture} type="video/mp4" />
                <source src={system_architecture} type="video/ogg" />
                <source src={system_architecture} type="video/webm" />
              </video>
              <div className="absolute top-0 left-0 h-full w-full "></div>
            </div>
            <div className="flex mt-24">
              <img src={ozakAiAppViewImg} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full py-12 pb-20 px-6 md:px-10 lg:px-28">
          <div className="container mx-auto">
            <h2 className="text-white text-center font-[archivo] text-[32px] lg:text-[48px] font-medium leading-[64px] mb-2 tracking-wide">
              Our Roadmap
            </h2>
            <RoadMap />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[url('assets/images/main/common/spread-the-word.svg')] bg-cover bg-top py-32 px-6 md:px-10 lg:px-28 min-h-[789px] xs:min-h-[482px]">
        <div className="container mx-auto">
          <SpreadTehWord />
        </div>
      </div>


      {/* <div className="rounded-container">
        <div className="container mx-auto">
          <SpreadTehWord />
        </div>
      </div> */}

      <div className="">
        <div className="bg-[#050505] pt-32 pb-5 px-6 md:px-10 lg:px-28">
          <Featured />
          <BuiltOn />
        </div>
        <BlogsHome />
      </div>
    </div>
  );
};
export default HomePage;
