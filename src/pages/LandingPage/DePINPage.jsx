import { useEffect } from "react";
import TextScramble, { consoleText } from "utils/helper"
import image_1_1 from "assets/images/main/depin/1_1.webp";
import image_1_2 from "assets/images/main/depin/1_2.webp";
import image_2_1 from "assets/images/main/depin/2_1.png";
import anim_2_1 from "assets/images/main/depin/2_1.webm";

import video_bg_1 from "assets/images/main/common/hero-bg-2.png";
import video_1 from "assets/images/main/depin/depin.webm";

const DePINPage = () => {
  useEffect(() => {

    const phrases = [
      'Distributed Network',
      'Low Latency Data',
      'Fault Tolerant',
      'Trustless',
      'Multiple Sources',
      'Data Aggregation'
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
    <div className="w-full h-full flex flex-col depin">
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
                Leverage<br /> Decentralized Physical<br /> Infrastructure (DePIN)<br /> to source high quality<br />data
              </h1>
              <h1 className="hidden lg:block font-[archivo] font-bold text-[64px] leading-[72px] tracking-[-0.02em] text-center max-w-[1200px]">
                Leverage<br /> Decentralized Physical Infrastructure <br /> (DePIN) to source high quality data
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
          <div className="py-32">
            <div className="grid grid-cols-1 lg2:grid-cols-2 gap-6 mt-16 ">
              <div className="text-white frame-left p-12 xs:flex xs:flex-col-reverse lg2:flex-col">
                <div>
                  <img
                    src={image_1_1}
                    alt=""
                    className="mb-16 mx-auto"
                  />
                </div>
                <div>
                  <div className="font-medium font-[archivo] text-[32px] lg:text-[48px] lg:leading-[65px]">
                    On-chain aggregation & financial analysis requires trustless data sources
                  </div>
                  <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-normal mt-6">
                    OSN - Ozak Stream Network ensure that data that is fed into our systems is sourced from multiple networks, tamper proof, trustless & accurate.
                  </p>
                </div>
              </div>
              <div className="text-white frame-right p-12 xs:flex xs:flex-col lg2:flex-col">
                <div>
                  <div className="font-medium font-[archivo] text-[32px] lg:text-[48px] lg:leading-[65px]">
                    Distributed networks delivers extreme fault tolerance, ensuring reliability & real time availability
                  </div>
                  <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-normal mt-6">
                    DePIN enables autonomous, real time interactions inside physical infrastructures to technologies like smart contracts, Internet of Things (IoT), increasing system responsiveness and adaptability to human demands.
                  </p>
                </div>
                <div>
                  <img
                    src={image_1_2}
                    alt=""
                    className="mt-16 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-18">
            <div className="flex flex-row justify-center items-center xs:flex-col lg2:flex-row xs:px-8">
              <div className="flex-1">
                <h2 className="font-normal text-left font-[archivo] text-[32px] lg:text-[48px] lg:leading-[64px] text-white xs:text-center lg:text-left">
                  OSN leverages most distributed DePIN to provide you best quality data.
                </h2>
              </div>
              <div className="flex flex-1 justify-items-start">
                <video poster={image_2_1} autoPlay loop muted className="w-full h-full object-cover">
                  <source src={anim_2_1} type="video/mp4" />
                  <source src={anim_2_1} type="video/ogg" />
                  <source src={anim_2_1} type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DePINPage; 