import { useEffect } from "react";
import { verticalProgress } from "utils/helper";
import roadmapVerticalPrgressImg from "assets/images/main/landing/roadmap-vertical-prgress.svg";
import roadmapVerticalPrgressTipImg from "assets/images/main/landing/roadmap-progress-tip.svg";
import { useMediaQuery } from "react-responsive";
import { FaRegCircleDot } from "react-icons/fa6";


const RoadMap = () => {
    const isTablet = useMediaQuery({ maxWidth: 960 });

    useEffect(() => {
        verticalProgress('progressbar', 'progressContainer');
    }, []);

    return (
        <div>
            {!isTablet ? (
                <div className="roadmap-wrap mt-28">
                    <div>
                        <div className="roadmap-item">
                            <div className="roadmap-head">
                                <span className="roadmap-num green">01</span>
                                <h4 className="roadmap-head-title mt-4">Launch</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ideation & Initial infrastructure</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Data Vault I</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Research & Design</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Smart Contract Development</span></div>
                            </div>
                        </div>
                        <div className="roadmap-item-space"></div>
                        <div className="roadmap-item">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">03</span>
                                <h4 className="roadmap-head-title mt-4">Development II</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Business Platform</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Data Vault</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Machine Learning Engine</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Stream Network Testnet</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div id="progressContainer" className="progress-container">
                            <div id="progressbar" className="progress-bar"></div>
                            <img src={roadmapVerticalPrgressTipImg} className="progress-bar-tip" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="roadmap-item-space"></div>
                        <div className="roadmap-item">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">02</span>
                                <h4 className="roadmap-head-title mt-4">Development I</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Machine Learning Engine</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Nodes</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Data Vault</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Personal Platform</span></div>
                            </div>
                        </div>
                        <div className="roadmap-item-space"></div>
                        <div className="roadmap-item">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">04</span>
                                <h4 className="roadmap-head-title mt-4">Growth</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Personal Platform</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Business Platform</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak Stream Network Mainnet</span></div>
                                <div className="flex items-center space-x-2"><FaRegCircleDot /><span>Ozak AI Agents (PAs)</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="roadmap-wrap mt-28">
                    <div className="relative">
                        <div id="progressContainer" className="progress-container">
                            <div id="progressbar" className="progress-bar"></div>
                            <img src={roadmapVerticalPrgressTipImg} className="progress-bar-tip" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="roadmap-item">
                            <div className="roadmap-head">
                                <span className="roadmap-num green">01</span>
                                <h4 className="roadmap-head-title-mobile mt-4">Launch</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div>Ideation & Initial infrastructure</div>
                                <div>Ozak Data Vault I</div>
                                <div>Research & Design</div>
                                <div>Smart Contract Development</div>
                            </div>
                        </div>
                        <div className="roadmap-item mt-6">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">02</span>
                                <h4 className="roadmap-head-title-mobile mt-4">Development I</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div>Ozak Machine Learning <br /> Engine</div>
                                <div>Ozak Nodes</div>
                                <div>Ozak Data Vault</div>
                                <div>Ozak Personal Platform</div>
                            </div>
                        </div>
                        <div className="roadmap-item mt-6">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">03</span>
                                <h4 className="roadmap-head-title-mobile mt-4">Development II</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div>Ozak Business Platform</div>
                                <div>Ozak Data Vault</div>
                                <div>Ozak Machine Learning Engine</div>
                                <div>Ozak Stream Network Testnet</div>
                            </div>
                        </div>
                        <div className="roadmap-item mt-6">
                            <div className="roadmap-head">
                                <span className="roadmap-num white">04</span>
                                <h4 className="roadmap-head-title-mobile mt-4">Growth</h4>
                            </div>
                            <div className="roadmap-text mt-4">
                                <div>Ozak Personal Platform</div>
                                <div>Ozak Business Platform</div>
                                <div>Ozak Stream Network Mainnet</div>
                                <div>Ozak AI Agents (PAs)</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default RoadMap;