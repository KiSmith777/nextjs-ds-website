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
                <HeadingLabel className="mt--20" style={{padding: 4, justifyContent: 'center', alignItems: "center", display: 'flex', margin: 0}} title="First Skeptic NFTs"/>
                <TransparentBox>
                    <p>To kick off DeFi Skeptics mission of bettering DeFi, we are having an NFT sale. 
                        This NFT sale will fund the SKEPTIC TOKEN fair launch. <br/><br/>
                        That's right, there will be no tokens sold prior to launching! You'll want to read on...
                    </p>
                    
                    <TransparentBox className="ptb--40">
                        <h4 style={{textAlign: "center"}}>NFT Details</h4>
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
                        <h4 style={{textAlign: "center"}}>Proceeds Usage</h4>
                        <p className="ml--10">DeFi Skeptic will use the 250 BNB from the First Skeptics NFT minting as follows:</p>
                        <ul>
                            <li>
                                (20%) - 50 BNB allocated to initial liquidity for SKP/BNB.
                            </li>
                            <li>
                                (20%) - 50 BNB allocated to initial liquidity for SKP/BUSD. 
                            </li>
                            <li>
                                (20%) - 50 BNB allocated to the Burn Fund.
                            </li>
                            <li>
                                (40%) - 100 BNB allocated to pre/post launch marketing for Skeptic Token (SKP).
                            </li>
                        </ul>
                        <div className="ml--10 mr--10 row g-5">
                            <div className="col-lg-6">
                                <TransparentBox> 
                                    <h4 style={{textAlign: "center"}}>Common</h4>
                                    <h6 style={{textAlign: "center"}}>Permanent Benefits</h6>
                                    <ul>
                
                                        <li>
                                            The First Skeptics NFT set will receive 3% of all Skeptic Token (SKP) buys, 
                                            sells and buy & burns coming from the Burn Fund. This equals out to 0.012% per NFT. 
                                            This benefit is perpetual and never stops.
                                        </li>
                                        <li>
                                            Skeptic Token (SKP) employs <a href="/arbitrage-service">AaaS</a> to realize profit between our SKP/BNB and SKP/BUSD liquidity pools. 
                                            45% of this profit will be directed to all First Skeptic NFT holders. This equals out to 0.18% per NFT. 
                                            This benefit is perpetual and never stops.
                                        </li>
                                        <li>
                                            First Skeptic NFT holders will also be added to an exclusive community on Telegram where they will get first insight to new products & services, 
                                            beta testing opportunities, first insight to new partnerships and affiliations and potentially periodic BNB bonuses.
                                        </li>
                                    </ul>
                                    <h6 style={{textAlign: "center"}}>Temporary Benefits</h6>
                                    <ul>
                                        <li>
                                            The First Skeptics NFT set will also receive 20% of the of the Burn Funds interest as its harvested which is detailed in the Burn Fund section. 
                                            This equals out to 0.08% per NFT. This benefit stops once 250 BNB in total payments have been dispersed to the NFT holders (the initial mint contribution). 
                                        </li>
                                    </ul>
                                </TransparentBox>
                            </div>
                            <div className="col-lg-6">
                                <TransparentBox>
                                    <h4 style={{textAlign: "center"}}>Rare</h4>
                                    <ul>
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
