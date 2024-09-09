import { useMediaQuery } from "react-responsive";

import featureImg_1 from "assets/images/main/landing/feature-icon-1.svg";
import featureImg_2 from "assets/images/main/landing/feature-icon-2.svg";
import featureImg_3 from "assets/images/main/landing/feature-icon-3.svg";
import featureImg_4 from "assets/images/main/landing/feature-icon-4.svg";

const FeaturesHome = () => {
    const isTablet = useMediaQuery({ maxWidth: 960 });

    return (
        <div>
            {!isTablet ? (
                <div className="w-full h-full text-white">
                    <h3 className="text-white text-center font-normal text-[16px] leading-[25px] mt-16 mb-12 tracking-wide">
                        FEATURES
                    </h3>
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="feature-box min-h-[350px]">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-1-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_1} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    AI Powered Predictive Analytics
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Apply machine learning to predict financial markets. Use our properiotary algorithm to empower your decision making.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-2-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_2} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Data Analytics & Processing
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Our advanced data processing techniques helps uncover hidden patterns & trends, driving smarter strategies to outperform competition.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-3-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_3} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Financial Market Modelling
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Transform your financial data into a strategic tool. Devise trading & hedging strategies using machine learning models & drive financial success.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-4-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_4} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Trustless Data Sources & Network
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    On-chain financial applications require trustless data sources & low latency data. Our DePIN network acts as massive data warehouse for smooth streaming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full text-white">
                    <h3 className="text-white text-center font-normal text-[16px] leading-[25px] mt-16 mb-12 tracking-wide">
                        FEATURES
                    </h3>
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="feature-box item">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-1-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_1} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    AI Powered Predictive Analytics
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Apply machine learning to predict financial markets. Use our properiotary algorithm to empower your decision making.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box item">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-2-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_2} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Data Analytics & Processing
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Our advanced data processing techniques helps uncover hidden patterns & trends, driving smarter strategies to outperform competition.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box item">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-3-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_3} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Financial Market Modelling
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    Transform your financial data into a strategic tool. Devise trading & hedging strategies using machine learning models & drive financial success.
                                </p>
                            </div>
                        </div>
                        <div className="feature-box item">
                            <div className="feature-wrap p-6 bg-[url('assets/images/main/landing/feature-icon-4-bg.svg')]">
                                <div className="flex">
                                    <img src={featureImg_4} className="w-[83px] h-[83px]" alt="" />
                                </div>
                                <h5 className="font-[archivo] font-medium text-[24px] leading-[30px] mt-[48px]">
                                    Trustless Data Sources & Network
                                </h5>
                                <p className="font-[archivo] font-normal text-[16px] leading-[25px] text-color-light mt-4">
                                    On-chain financial applications require trustless data sources & low latency data. Our DePIN network acts as massive data warehouse for smooth streaming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>

    )
}

export default FeaturesHome;