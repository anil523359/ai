import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import Tokenomics from "components/Tokenomics";
import SpreadTehWord from "components/SpreadTheWord";
import image_1_1 from "assets/images/main/presale/presale-1m.svg";

import image_3_1 from "assets/images/main/presale/3_1.png";
import anim_3_1 from "assets/images/main/presale/3_1.webm";

const PresalePage = () => {
  const isTablet = useMediaQuery({ maxWidth: 960 });
  return (
    <div className="w-full h-full flex flex-col presale">
      <div className="bg-[url('assets/images/main/common/page-hero-bg.svg')]  bg-cover bg-center bg-no-repeat  min-h-[755px] pt-[150px]">
        <div className="flex justify-center">
          <div className="inline-block bg-[#ffffff09] bg-[url('assets/images/main/landing/presale-button-bg.svg')] bg-contain bg-no-repeat rounded-full px-2 py-1">
            <h4 className="text-white font-[archivo] font-medium text-[32px] leading-[40px] px-3">
              <span className="mr-1">
                Presale is
              </span>
              <span className="text-[#38d974]">
                Live
              </span>
            </h4>
          </div>
        </div>
        <div>
          <h1 className="text-center font-bold text-[184px] leading-[248px] tracking-[-0.02em] text-white">
            <span className="font-['Inter'] presale-bg-shadow">$10M</span>
          </h1>
          <h4 className="text-center font-[archivo] font-medium text-[32px] leading-[40px] tracking-[-0.02em] text-white">
            Raised So Far.
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-12">
          <div className="box-raised">
            <div className="font-[archivo] text-[24px] font-medium text-[#25D366]">
              0.043
            </div>
            <div className="text-color-light font-[HelveticaNeueLight] font-normal text-white text-[18px] leading-[28.8px]">
              Current Price
            </div>
          </div>
          <div className="box-raised">
            <div className="font-[archivo] text-[24px] font-medium text-white">
              01
            </div>
            <div className="text-color-light font-[HelveticaNeueLight] font-normal text-white text-[18px] leading-[28.8px]">
              Current Phase
            </div>
          </div>
          <div className="box-raised">
            <div className="font-[archivo] text-[24px] font-medium text-white">
              0.002 USD
            </div>
            <div className="text-color-light font-[HelveticaNeueLight] font-normal text-white text-[18px] leading-[28.8px]">
              Starting Price
            </div>
          </div>
          <div className="box-raised">
            <div className="font-[archivo] text-[24px] font-medium text-white">
              1.002 USD
            </div>
            <div className="text-color-light font-[HelveticaNeueLight] font-normal text-white text-[18px] leading-[28.8px]">
              Target Price
            </div>
          </div>
        </div>
      </div>
      <div className="py-32 px-6 md:px-10 lg:px-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-[archivo] font-medium text-[64px] leading-[80px] text-white">
            Refers to Win
          </h2>
          <div className="text-center font-[HelveticaNeueLight] font-normal text-color-semilight text-[16px] leading-[25px] text-white">
            It’s your opportunity to win a share of the huge $1 Million Giveaway and a <br />
            chance to be one of the 100 winners sharing our massive
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full object-cover">
          <img src={image_1_1} alt="" />
        </div>
      </div>
      <div className="py-32 px-6 md:px-8 lg:px-32">
        <div className="flex flex-row items-center justify-center join-ozak xs:flex-col-reverse lg2:flex-row">
          <div className="basis-2/3">
            <h3 className="text-left font-[archivo] font-bold text-[48px] leading-[64.8px] text-white">
              Join the Ozak <br />AI's thrilling giveaway!
            </h3>
            <p className="text-left mt-4 text-color-semilight text-[16px] text-white max-w-[770px]">
              It’s your opportunity to win a share of the huge $1 Million Giveaway and a chance to
              be one of the 100 winners sharing our massive prize pool! Simply engage with us, complete
              as many tasks and boost your chances of winning with bonus entries for each friend you
              bring on board. Remember, participating in the Ozak AI's presale is mandatory in order
              to unlock the chance of being one of the 100 winners, make sure you hold at least $100
              worth of $OZ.
            </p>
            <div className="flex gap-2 items-center justify-start mt-8">
              <a className="btn-2">
                Terms and Condition
              </a>
              <a className="btn-2">
                Disclaimers
              </a>
            </div>
          </div>
          <div className="basis-1/3">
            <video poster={image_3_1} autoPlay loop muted className="w-full h-full object-cover">
              <source src={anim_3_1} type="video/mp4" />
              <source src={anim_3_1} type="video/ogg" />
              <source src={anim_3_1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <Tokenomics></Tokenomics>
      <SpreadTehWord></SpreadTehWord>
    </div>
  );
};
export default PresalePage;
