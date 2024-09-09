import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import icon_5_1 from "assets/images/main/common/icon_5_1.png";
import icon_5_2 from "assets/images/main/common/icon_5_2.png";
import icon_5_3 from "assets/images/main/common/icon_5_3.png";
import icon_5_4 from "assets/images/main/common/icon_5_4.png";
import icon_5_5 from "assets/images/main/common/icon_5_5.png";
import icon_5_6 from "assets/images/main/common/icon_5_6.png";

const SpreadTehWord = () => {
    const CopyAddress = () => {
        const address = 'https://www.ozak.ai/';
        navigator.clipboard.writeText(address);

        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className="z-20 flex items-center justify-center w-full">
            <div>
                <p className="text-center text-color-semilight text-[16px] font-[archivo] font-normal">
                    REFERRAL
                </p>
                <h2 className="font-normal text-center font-[archivo] text-[40px] lg:text-[64px] lg:leading-[86px] mt-6 mb-4">
                    <span className="text-[#ffe486]">Spread</span> the Word
                </h2>
                <p className="text-center text-color-semilight text-[16px] font-[archivo] font-normal leading-[26px]">
                    Share with your friends & family to build a stronger community around. Refer & Earn as <br />
                    more & more of community members join the network.
                </p>
                <div className="mt-16 flex justify-center">
                    <div className="flex gap-6 xs:gap-2 sm:gap-6 items-center justify-between rounded-full social-button-group px-8 py-6">
                        {/* <a href="https://twitter.com/intent/tweet?text=%20Follow%20&%20Refer%20to%20Earn%20more%20$%20OZ%20Ozak%20AI%20-https://www.ozak.ai%20Airdrop%20soon!!" target="_blank"><img src={icon_5_1} alt="" className="drop-shadow-x" /></a> */}
                        <a href="https://twitter.com/intent/tweet?text=Follow%20%26%20Refer%20to%20Earn%20more%20$OZ.%20Ozak%20AI%20-%20https://www.ozak.ai%20Airdrop%20soon!!" target="_blank">
                            <img src={icon_5_1} alt="Twitter" className="drop-shadow-x" />
                        </a>
                        <a href="https://telegram.me/share/url?url=Follow%20%26%20Refer%20to%20Earn%20more%20$OZ.%20Ozak%20AI%20-%20https://www.ozak.ai%20Airdrop%20soon!!" target="_blank"><img src={icon_5_2} alt="" className="drop-shadow-telegram" /></a>
                        <a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.ozak.ai" target="_blank"><img src={icon_5_3} alt="" className="drop-shadow-facebook" /></a>
                        <a href="https://api.whatsapp.com/send?text=Follow%20%26%20Refer%20to%20Earn%20more%20$OZ.%20Ozak%20AI%20-%20https://www.ozak.ai%20Airdrop%20soon!!" target="_blank"><img src={icon_5_4} alt="" className="drop-shadow-whatsapp" /></a>
                        <a href="https://reddit.com/submit?url=Follow%20%26%20Refer%20to%20Earn%20more%20$OZ.%20Ozak%20AI%20-%20https://www.ozak.ai%20Airdrop%20soon!!" target="_blank"><img src={icon_5_5} alt="" className="drop-shadow-discord" /></a>
                        <span onClick={CopyAddress}><img src={icon_5_6} alt="" className="drop-shadow-discord cursor-pointer" /></span>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpreadTehWord;