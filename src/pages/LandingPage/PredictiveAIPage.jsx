import { useEffect } from "react";
import TextScramble, { consoleText } from "utils/helper"
import image_1_1 from "assets/images/main/predictive/1_1.webp";
import image_1_2 from "assets/images/main/predictive/1_2.webp";

import image_2_1 from "assets/images/main/predictive/2_1.png";
import anim_2_1 from "assets/images/main/predictive/2_1.webm";

import video_bg_1 from "assets/images/main/common/hero-bg-2.png";
import video_1 from "assets/images/main/predictive/predictive.webm";

const PredictiveAIPage = () => {
  useEffect(() => {

    const phrases = [
      'Financial Models',
      'Prediction Models',
      'Forecasting',
      'Market Intelligence',
      'Sentiment Analysis',
      'Data Aggregation & Interpretation'
    ];

    const el = document.querySelector('#scrambleText');
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1000 * 2)
      })
      counter = (counter + 1) % phrases.length
    }
    next();
  }, []);
  return (
    <div className="w-full h-full flex flex-col predictive">
      <div className="relative flex items-center justify-center min-h-[755px] max-h-[755px] overflow-hidden">
        <video poster={video_bg_1} autoPlay loop muted className="w-full h-full min-h-[755px] max-h-[755px] object-cover">
          <source src={video_1} type="video/mp4" />
          <source src={video_1} type="video/ogg" />
          <source src={video_1} type="video/webm" />
        </video>
        <div className="hero-top flex justify-center items-center w-full">
          <div className="flex items-center justify-center w-full h-full text-white">
            <div className="bg-center bg-cover bg-no-repeat max-w-[1440px] px-4 md:px-[64px] lg:px-[120px] w-full">
              <h1 className="lg:hidden block font-[archivo] font-medium text-[32px] tracking-[-0.02em] text-center max-w-[1200px]">
                Use AI to accurately<br /> predict global financial <br /> markets
              </h1>
              <h1 className="hidden lg:block font-[archivo] font-bold text-[96px] leading-[100px] tracking-[-0.02em] text-center max-w-[1200px]">
                Use AI<br /> to accurately predict <br /> global financial markets
              </h1>
              <div className="flex justify-center items-center font-[archivo] relative font-normal text-[16px] lg:text-[34px] leading-[24px] lg:leading-[34px] mt-12">
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
          <div className="bg-[#050505] py-20">
            <div className="flex flex-row justify-center justify-items-center xs:flex-col-reverse lg2:flex-row gap-8">
              <div className="flex flex-1 justify-start xs:justify-center lg2:justify-start">
                <img src={image_1_1} alt="" className="mix-blend-luminosity" />
              </div>
              <div className="flex flex-1 flex-col text-white justify-center items-center mt-[-50px]">
                <div className="font-medium font-[archivo] text-[32px] lg:text-[48px] lg:leading-[65px] tracking-[-0.01em]">
                  Slow, inaccurate metrics are currently used to predict financial markets
                </div>
                <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-light mt-6">
                  The traditional methods used to predict financial market trends often suffer from delays and inaccuracies, hampering decision-making processes.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center xs:flex-col lg2:flex-row gap-8 mt-8">
              <div className="flex-1 text-white pt-[50px]">
                <div className="font-medium font-[archivo] text-[32px] lg:text-[48px] lg:leading-[65px] tracking-[-0.01em]">
                  Prediction models require a vast amount of pristine data & complex algorithms to function
                </div>
                <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-light mt-6">
                  The effectiveness of AI-driven prediction models relies heavily on the quality and volume of data they process. OSN brings a foundation of pristine, comprehensive data, ensuring its forecasts are both accurate and reliable.
                </p>
              </div>
              <div className="flex flex-1 justify-end items-center xs:justify-center lg2:justify-end">
                <img src={image_1_2} alt="" className="mix-blend-luminosity" />
              </div>
            </div>
          </div>
          <div className="py-18">
            <h2 className="hidden md:block font-medium text-center font-[archivo] text-[48px] leading-[64.8px] tracking-[-0.01em] mt-4 text-white">
              We are building state of the art platform <br /> to provide you an edge over the markets.
            </h2>
            <h2 className="block md:hidden font-medium text-center font-[archivo] text-[24px] tracking-[-0.01em] mt-4 text-white">
              We are building state of the art platform to provide you an edge over the markets.
            </h2>
            <div className="flex flex-row justify-center items-center lg:mt-[-100px]">
              <video poster={image_2_1} autoPlay loop muted className="w-[800px]">
                <source src={anim_2_1} type="video/mp4" />
                <source src={anim_2_1} type="video/ogg" />
                <source src={anim_2_1} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PredictiveAIPage;
