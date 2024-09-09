
import featured_forbes from "assets/images/main/landing/featured/featured-forbes.svg";
import featured_media from "assets/images/main/landing/featured/featured-media.svg";
import featured_coindesk from "assets/images/main/landing/featured/featured-coindesk.svg";
import featured_bitcoin from "assets/images/main/landing/featured/featured_bitcoin.svg";
import featured_hacknoon from "assets/images/main/landing/featured/featured-hacknoon.svg";
import featured_timeofindia from "assets/images/main/landing/featured/featured-timeofindia.svg";
import featured_lockworks from "assets/images/main/landing/featured/featured-lockworks.svg";
import featured_theblock from "assets/images/main/landing/featured/featured-theblock.svg";
import featured_bloomberg from "assets/images/main/landing/featured/featured_bloomberg.svg";
import featured_decrypt from "assets/images/main/landing/featured/featured-decrypt.svg";
import featured_investing from "assets/images/main/landing/featured/featured_investing.svg";
import featured_cointelegraph from "assets/images/main/landing/featured/featured-cointelegraph.svg";
import featured_defiant from "assets/images/main/landing/featured/featured-defiant.svg";
import featured_bitcoin_com from "assets/images/main/landing/featured/featured_bitcoin_com.svg";

const Featured = () => {

    return (

        <div className="max-w-[1440px] mx-auto">
            <h3 className="text-center font-medium font-[archivo] text-[32px] lg:text-[48px] leading-[40.2px] lg:leading-[64px] mt-10  lg:mt-20">
                As Featured
            </h3>
            <div className="hidden lg:block space-y-4 mt-16">
                <div className="flex justify-between items-center">
                    <img src={featured_forbes} alt="" />
                    <img src={featured_media} alt="" />
                    <img src={featured_coindesk} alt="" />
                    <img src={featured_bitcoin} alt="" />
                    <img src={featured_hacknoon} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <img src={featured_timeofindia} alt="" />
                    <img src={featured_lockworks} alt="" />
                    <img src={featured_theblock} alt="" />
                    <img src={featured_bloomberg} alt="" />
                    <img src={featured_decrypt} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <img src={featured_investing} alt="" />
                    <img src={featured_cointelegraph} alt="" />
                    <img src={featured_defiant} alt="" />
                    <img src={featured_bitcoin_com} alt="" />
                </div>
            </div>
            <div className="lg:hidden block space-y-4 mt-16">
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-full">
                        <img src={featured_forbes} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_media} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_coindesk} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="w-full">
                        <img src={featured_bitcoin} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_hacknoon} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                        <img src={featured_timeofindia} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img src={featured_lockworks} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-full">
                        <img src={featured_theblock} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_bloomberg} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_decrypt} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="w-full">
                        <img src={featured_investing} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_cointelegraph} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="w-full">
                        <img src={featured_defiant} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={featured_bitcoin_com} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured;