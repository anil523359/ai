import { useEffect } from "react";
import TextScramble, { consoleText } from "utils/helper"
import image_1_1 from "assets/images/main/personal/1_1.webp";

import icon_3_1 from "assets/images/main/personal/icon_3_1.png";
import icon_3_2 from "assets/images/main/personal/icon_3_2.png";
import icon_3_3 from "assets/images/main/personal/icon_3_3.png";

import video_bg_1 from "assets/images/main/personal/personal_preview.png";
import video_1 from "assets/images/main/personal/personal.webm";

const PersonalPage = () => {
  useEffect(() => {

    const phrases = [
      'Predict stock market prices',
      'Monetize Personal Knowledge',
      'Enhance Decision Making',
      'Close Information Gaps',
      'Access Quality Data',
      'Access Quality Data',
      'Forecast Targets & Trading Indicators'
    ];

    const el = document.querySelector('#scrambleText');
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1500 * 2)
      })
      counter = (counter + 1) % phrases.length
    }
    next();
  }, []);
  return (
    <div className="w-full h-full flex flex-col personal">
      <div className="relative flex items-center justify-center min-h-[755px] max-h-[755px] overflow-hidden">
        <video poster={video_bg_1} autoPlay loop muted className="w-full h-full min-h-[755px] max-h-[755px] object-cover">
          <source src={video_1} type="video/mp4" />
          <source src={video_1} type="video/ogg" />
          <source src={video_1} type="video/webm" />
        </video>
        <div className="hero-top flex justify-center items-center w-full">
          <div className="flex items-center justify-center w-full h-full text-white">
            <div className="bg-center bg-cover bg-no-repeat max-w-[1440px] px-4 md:px-[64px] lg:px-[120px] w-full pt-52">
              <h1 className="font-[archivo] font-medium lg:font-bold text-[48px] lg:text-[112px] lg:leading-[120px] tracking-[-0.02em] text-center max-w-[1200px]">
                AI is Personal
              </h1>
              <div className="flex justify-center items-center font-[archivo] relative font-medium text-[24px] leading-[24px] mt-12">
                <div className='scramble-text-container'>
                  <span id='scrambleText'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 md:px-[64px] lg:px-[120px]">
        <div className="max-w-[1200px]">
          <div className="py-24">
            <div className="flex flex-row justify-center items-center gap-12 xs:flex-col lg2:flex-row">
              <div className="text-white flex-1">
                <div className="font-[archivo] font-medium text-center md:text-left text-[32px] lg:text-[64px] lg:leading-[86px] pt-4">
                  Ozak Prediction Agent
                </div>
                <div className="text-color-semilight text-[20px] leading-[32px] font-[archivo] font-normal mt-6">
                  Ozak Prediction Agent (PA) Business extends far beyond anaytics capabilities, autonomously analyzing both external and internal proprietary data to offer reliable decision-making.
                </div>
              </div>
              <div className="flex flex-1 justify-center items-center">
                <img src={image_1_1} alt="" className="w-auto " />
              </div>
            </div>
          </div>
          <div className="py-24 xs:py-22 lg-2:px-24 flex flex-col items-center bg-black">
            <h2 className="font-medium text-center font-[archivo] text-[32px] lg:text-[48px] lg:leading-[64.8px] tracking-[-0.01em] mt-2 mb-2">
              Be Your Own AI
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10 max-w-[959px]">
              <div className="feature-box">
                <img src={icon_3_1} className="drop-shadow-white h-[55px]" alt="" />
                <h3 className="text-white font-medium text-[24px] leading-[32px] tracking-[-0.4px] my-4">
                  Build Your Own Data Vault
                </h3>
                <p className="text-color-semilight text-[16px] font-[archivo] font-normal leading-[24px] text-white">
                  Build data repositories & dashboards with the requisite
                  informartion & data streaming to enhance your data analysis skills
                  & related decision making.
                </p>
              </div>
              <div className="feature-box">
                <img src={icon_3_2} className="drop-shadow-white h-[55px]" alt="" />
                <h3 className="text-white font-medium text-[24px] leading-[32px] tracking-[-0.4px] my-4">
                  Train Your Own AI
                </h3>
                <p className="text-color-semilight text-[16px] font-[archivo] font-normal leading-[24px] text-white">
                  Build data repositories & dashboards with the requisite
                  informartion & data streaming to enhance your data analysis skills
                  & related decision making.
                </p>
              </div>
              <div className="feature-box">
                <img src={icon_3_3} className="drop-shadow-white h-[55px]" alt="" />
                <h3 className="text-white font-medium text-[24px] leading-[32px] tracking-[-0.4px] my-4">
                  Captialize Your Knwoledge
                </h3>
                <p className="text-color-semilight text-[16px] font-[archivo] font-normal leading-[24px] text-white">
                  Build data repositories & dashboards with the requisite
                  informartion & data streaming to enhance your data analysis skills
                  & related decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalPage;
