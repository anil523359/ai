import icon from "assets/images/main/logo.svg";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <div className="w-full bg-[url('assets/images/main/footer-bg.svg')] bg-cover bg-bottom">
      <div className=" w-full pt-6 px-6 md:px-10 lg:px-28 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="flex items-center justify-center">
            <img src={icon} className="" alt="" />
          </div>
          <hr className="mt-8 mb-8 md:mb-16 border-[#FFFFFF29] h-[1px]" />
          <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between text-white mb-12">
            <h3 className="font-[archivo] font-normal text-[24px] leading-[38.4px] text-left pl-3 max-w-[330px]">
              Ozak is predictive AI powered decentralized network for advance data analytics & interpretation.
            </h3>
            <div className="flex flex-wrap justify-between gap-4 md:gap-10 lg:gap-20">
              <div className="">
                <p className="footer-link-header">
                  Sitemap
                </p>
                <a href="/predictive-ai">
                  <p className="footer-link-title">
                    Predictive AI
                  </p>
                </a>
                <a href="/depin">
                  <p className="footer-link-title">
                    DePIN
                  </p>
                </a>
                <a href="/personal">
                  <p className="footer-link-title">
                    Personal
                  </p>
                </a>
                <a href="/business">
                  <p className="footer-link-title">
                    Business
                  </p>
                </a>
              </div>
              <div className="">
                <p className="footer-link-header">
                  Legal
                </p>
                <p className="footer-link-title">
                  Terms of Use
                </p>
                <p className="footer-link-title">
                  Cookie Policy
                </p>
                <p className="footer-link-title">
                  Privacy Policy
                </p>
                <p className="footer-link-title">
                  Disclaimers
                </p>
              </div>
              <div>
                <p className="footer-link-header">
                  Socials
                </p>
                <a href="https://t.me/OzakAGI" target="_blank">
                  <p className="footer-link-title">
                    Telegram
                  </p>
                </a>
                <a href="https://linktr.ee/ozakagi" target="_blank">
                  <p className="footer-link-title">
                    Linktree
                  </p>
                </a>
                <a href="https://x.com/OzakAGI" target="_blank">
                  <p className="footer-link-title">
                    Twitter X
                  </p>
                </a>
                {/* <a href="">
                  <p className="footer-link-title">
                    Medium
                  </p>
                </a> */}
                <a href="https://www.reddit.com/user/ozakAGI/" target="_blank">
                  <p className="footer-link-title">
                    Reddit
                  </p>
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-6 mb-8 border-[#FFFFFF29] h-[1px]" />
          <p className="text-[14px] font-[archivo] font-normal leading-[15.23px text-center text-white pb-8">
            Copyright © OZAK AI
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
