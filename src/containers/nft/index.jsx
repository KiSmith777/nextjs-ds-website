import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import HeadingLabel from "@components/heading-label"
import TransparentBox from "@components/transparent-box";

const NFTArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150 mt--20 mb--100">
                <Image
                    src="/images/test/NFT Set v2.png"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                />
            </div>
            <div
                className={clsx(
                    "rn-author-area",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
            </div>
            <div className="container">
                <HeadingLabel section="NFT" className="mt--20" style={{padding: 4, justifyContent: 'center', alignItems: "flex-start", display: 'flex', margin: 0}} title="First Skeptic NFTs"/>
                    <TransparentBox>
                        <p className="mt_dec--30">To kick off DeFi Skeptics mission of bettering DeFi, we had an NFT sale. 
                            This NFT sale funded the Skeptic Token fair launch. That's right, there was no tokens sold prior to launch! You'll want to read on...
                        <br />
                        <br />
                        <b>Note</b>:
                        <i>
                            {" "}
                            Skeptic Tokens are also interchangeable with First Skeptic NFTs at a 200k to 1 conversion rate. 
                            This is done through the <a href="https://app.defiskeptic.com/vault">Skeptic Vault</a>. 
                        </i>
                        </p>
                        <div className="mt--10 row g-5">
                            <div className="col-lg-6" >
                            
                            <HeadingLabel
                            className=""
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                                
                            }}
                            title="NFT Details"
                        />
                        <TransparentBox className="ptb--5 h--85">
                                    <ul>
                                        <li >
                                            Initial price of 1 BNB.
                                        </li>
                                        <li>
                                            Limited set of 250 total NFTs.
                                        </li>
                                        <li>
                                            There is no max to how many NFTs any individual can own.
                                        </li>
                                        <li>
                                        Each NFT is unique with its own number. NFTs 1-50 will be "<b>Rare</b>" with individual designs.
                                        NFTs 51-250 will be "<b>Common</b>" with the same design. NFT minting is randomized, they are not minted in numerical order, providing a fair chance for everyone!
                                        </li>
                                    </ul>
                           </TransparentBox>
                           </div>
                        
                        
                        <div className="col-lg-6">
                        <HeadingLabel
                            className=""
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                                
                            }}
                            title="Proceeds Usage"
                        /> 
                        <TransparentBox className="ptb--10 h--85">
                                <p >DeFi Skeptic raised 102 BNB from the public which funded some of the initial liquidity and all of the pre-launch marketing.</p>
                                <br />
                                <p >The team behind DeFi Skeptic also put up 93 BNB from their own pockets which funded some of the initial liquidity and all of the Skeptic Funds intitial funding.</p>
                                    </TransparentBox>
                            </div>
                        </div>
                            <div className="mt--20 mb--20 row g-5">
                            <div className="col-lg-12">
                                
                            <HeadingLabel
                           
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                                
                            }}
                            title="Common"
                        /> 
                        <TransparentBox className="ptb--10 h--80">
                                    <ul className="mt--20">
                                    <li>
                                    The First Skeptics NFT set will receive 3% of all Skeptic Token (SKP) 
                                    buys & sells. This benefit is perpetual and never stops.
                                    </li>
                                    <li>
                                    Skeptic Token (SKP) employs Arbitrage as a Service (AaaS) to realize profit between our SKP/BNB and SKP/XUSD liquidity pools. 
                                    50% of this profit will be directed to all First Skeptic NFT holders. This benefit is perpetual and never stops.
                                    </li>
                                    <li>
                                    The First Skeptics NFT set will also receive 40% of the of the Skeptic Funds interest as its harvested. 
                                    This benefit is perpetual and never stops.
                                    </li>
                                    <li>
                                    Periodically, DeFi Skeptic will direct a portion of revenue from our products & services to the First Skeptics NFTs.
                                    </li>
                                    </ul>
                              </TransparentBox>  
                            </div>
                            </div>
                            <div className="mt--20 mb--20 row g-5">
                            <div className="col-lg-12">
                                
                            <HeadingLabel
                           
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                                
                            }}
                            title="Rare"
                        /> 
                        <TransparentBox className="ptb--10 h--80">
                                    <ul className="mt--20">
                                        <li>
                                            Everything "Common" gets.
                                        </li>
                                        <li>
                                            Additionally, DeFi Skeptic intends to provide a form of monthly raffle/lottery for "Rare" NFT holders.
                                        </li>
                                        <li>
                                            Additional "Rare" NFT holder benefits may be added at a later date.
                                        </li>
                                    </ul>
                              </TransparentBox>  
                            </div>
                            </div>
                       
                        


                    </TransparentBox>
                    
                    
                
            </div>
        </>
    );
};

NFTArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
NFTArea.defaultProps = {
    space: 1,
};

export default NFTArea;
