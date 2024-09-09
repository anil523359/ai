import cn from "classnames";
import { useMediaQuery } from "react-responsive";
import tokenomicsGraphImg from "assets/images/main/common/tokenomics-graph.svg";

const Tokenomics = () => {
    const isTablet = useMediaQuery({ maxWidth: 960 });
    return (
        <div className="bg-[#0d0d0d] py-32 px-6 md:px-10 lg:px-28">
            <div className="flex flex-row gap-6 xs:flex-col-reverse md:flex-col-reverse lg:flex-row">
                <div className="basis-2/3">
                    <p className="font-normal text-[16px] font-[archivo] tracking-wide text-color-semilight">
                        TOKENOMICS
                    </p>
                    <div className="font-bold font-[archivo] text-[48px] leading-[65px]">
                        Transparent and <br />
                        Fair Token Distribution
                    </div>
                    <p className="text-[27px] font-bold font-[archivo] mb-6 mt-2">
                        <span className="text-[#59EF95] mr-4">70B</span>
                        <span className="text-white mr-4">$OZ</span>
                        <span className="text-color-semilight text-[20px] font-normal">
                            Tokens in Presale & Community
                        </span>
                    </p>
                    <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-normal">
                        OZAK AI ensures a balanced, transparent & fair token allocation
                        & distribution to support the growth & sustainability of our
                        ecosystem. Here's how the tokens are distributed:
                    </p>
                </div>
                <div className="flex basis-1/2 justify-end sm:justify-center sm:mb-20">
                    <img src={tokenomicsGraphImg} alt="" />
                </div>
            </div>

            <hr className="mt-12 mb-6 border-[#474646]" />
            <div className={cn("flex gap-4", { "flex-col": isTablet })}>
                <div>
                    <p className="text-color-semilight text-[18px] leading-[29px] font-[archivo] font-normal">
                        OZAK AI ensures a balanced, transparent & fair token allocation &
                        distribution to support the growth & sustainability of our
                        ecosystem. Here's how the tokens are distributed:
                    </p>
                </div>
                <div className="flex gap-2 items-center justify-end">
                    <a className="btn-2">
                        Learn More
                    </a>
                    <a className="btn-2">
                        Whitepaper
                    </a>
                    <a className="btn-2">
                        Audit
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics;