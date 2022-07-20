import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import HeadingLabel from "@components/heading-label";
import TransparentBox from "@components/transparent-box";
import SolidBox from "../../components/solid-box";

const TokenArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--100 mt--20 mb--20">
                <Image
                    src="/images/test/GitBook-Token.png"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                />
            </div>
            <div className="container">
                <HeadingLabel
                    className="mt--20"
                    style={{
                        padding: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        margin: 0,
                    }}
                    title="Skeptic Token (SKP)"
                />
                <TransparentBox>
                    <p
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Skeptic Token Conctract Address:
                        <br />
                        <u>0x1234AE511876FCAaCe685fcDC292d9589A88dC2b</u>
                        <br />
                        <br />
                        The primary purpose of SKP will be to serve the DeFi Skeptic ecosystem. 
                        Skeptic Token (SKP) will integrate with some of the DeFi Skeptic products 
                        and services and act as a utility token for the DeFi Skeptic ecosystem. 
                        Depending on the integration, this may result in tokens being burned, 
                        used as payment or directed towards other features of the DeFi Skeptic ecosystem, 
                        all with the purpose of benefiting the platform.
                    </p>
                    <p
                        data-sal="slide-left"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Additionally, SKP will be the gateway to merge failing/failed projects through acquisition 
                        of funds and users through our <a href="/merge">DS Merge</a> utility.
                        <br />
                        <br />
                        <b>Note</b>:
                        <i>
                            {" "}
                            Skeptic Tokens are also interchangeable with First Skeptic NFTs at a 200k to 1 conversion rate. 
                            This is done through the <a href="https://app.defiskeptic.com/vault">Skeptic Vault</a>. 
                        </i>
                    </p>
                </TransparentBox>
                <div className="mt--5 row g-5">
                    <div className="col-lg-12">
                        <HeadingLabel
                            className="mt--5"
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                            }}
                            title="Discount Swapper (-2%)"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Skeptic Token will have a swapper contract that will provide 
                                you the ability to purchase SKP tokens at a discounted tax/fee rate. 
                                Using this allows the BNB to be taxed prior to being swapped to tokens, 
                                thus no liquidation of SKP is needed as SKP is not received as tax, 
                                which prevents a contract triggered sell event. To incentive this buying method, 
                                a 2% discount is provided.
                            </p>
                            <p
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Using the discount swapper can be done two ways. 
                                <br />
                                1. You can send BNB directly to the contract and it will send you the proper amount of tokens.
                                <br />
                                2. You can connect to the <a href="https://app.defiskeptic.com/">Discount Swapper</a> if you prefer that method.
                                <br />
                                <br />
                                Discount Swapper Conctract Address:
                                <br />
                                <u>0xE2aC92Bb9f89d125974654a14857264E9d9209f1</u>
                            </p>
                        </SolidBox>
                    </div>
                </div>
                <div className="mt--5 row g-5">
                    <div className="col-lg-6">
                        <HeadingLabel
                            className="mt--5"
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                                
                            }}
                            title="Tokenomics"
                        />
                        <SolidBox className="rn-about-card trans-bg" style={{ height: "94%" }}>
                            <div className="rn-author-bg-area position-relative ptb--175 mt--20 mb--20">
                                <Image
                                    src="/images/test/Allocation.png"
                                    alt="Slider BG"
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    priority
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                />
                            </div>

                            <h4
                                className="title"
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                48% - Initial NFT Sale
                            </h4>
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Skeptic Token and First Skeptic NFTs are intertwined in terms of redeemable for each other via the Skeptic Vault. 
                                There will be a total max supply of 50,000,000 SKP and 250 NFTs. The conversion rate is 200,000 per NFT. 
                                Tokens in circulation will depend on how many NFTs are owned at any given time. We will initially sold 120 NFTs, 
                                which removes 24,000,000 tokens from supply (48%). The remaining 26,000,000 were used as follows.
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                40% - Initial Liquidity
                            </h4>
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                SKP/BNB - 10,000,000 SKP
                                <br />
                                <a href="https://mudra.website/?certificate=yes&type=0&lp=0xc7e7a16f00bf486388d7caf9792f483faa8c019d">View Locker</a>
                                <br />
                                <br />
                                SKP/XUSD - 10,000,000 SKP
                                <br />
                                <a href="https://mudra.website/?certificate=yes&type=0&lp=0xc7e7a16f00bf486388d7caf9792f483faa8c019d">View Locker</a>
                                <br />
                                <br />
                                Liquidity will be on a repetitive 6 month lock. 
                                This lock will continue to get renewed as long as 
                                there is no reason to move the Liquidity Pools elsewhere.
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                10% - Reserve
                            </h4>
                            <p
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                At 10% of total max supply, this reserve will be used for potential 
                                future DEX listings and a potential Liquidity Pool Farm for SKP. 
                                This reserve will be on a repetitive 3 month lock for 1 year. 
                                Any tokens not used from this reserve after 1 year will be burned.
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                2% - Giveaways/Lottery/Promotional
                            </h4>
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                These tokens will be used for lottery prizes, community giveaways, 
                                promotional events, collaborative events, etc. Any tokens not used 
                                after 6 months will be burned.
                            </p>
                        </SolidBox>
                    </div>

                    <div className="col-lg-6">
                        <HeadingLabel
                            className="mt--5"
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                            }}
                            title="Tax Structure"
                        />
                        <SolidBox
                            className="rn-about-card trans-bg"
                            style={{ height: "94%" }}
                        >
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                To support SKP, a token tax will be imposed. A
                                hardcoded max of 15% will be implemented which
                                the owner can’t bypass acting as a safety
                                measure for users. The token tax is broken down
                                as follows:
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--180 mt--20">
                                <Image
                                    src="/images/test/SKPTax.png"
                                    alt="Slider BG"
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    priority
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                />
                            </div>

                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Below is a flow chart showing how SKP tax is
                                utilized:
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--200 mt--20 mb--20">
                                <Image
                                    src="/images/test/Tax-Flow.png"
                                    alt="Slider BG"
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    priority
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                />
                            </div>
                        </SolidBox>
                    </div>
                </div>

                <div className="mt--5 row g-5">
                    <div className="col-lg-6">
                        <HeadingLabel
                            className="mt--5"
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                            }}
                            title={`The Skeptic Fund`}
                        />
                        <SolidBox
                            className="rn-about-card trans-bg"
                            style={{ height: "88%" }}
                        >
                        
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Funds collected and allocated to the Skeptic Fund will be placed into various low/medium risk 
                                external components that generate variable APRs/APYs.
                                <br />
                                <br />
                                The Skeptic Fund receives income from the following:
                                <br />
                                • 4% of SKP tax.
                                <br />
                                • 50% of AaaS profit.
                                <br />
                                • Compounding Interest.
                                <br />
                                • Revenue from our products & services.
                                <br />
                                <br />
                                Once a month this interest will be harvested and used as follows:
                                <br />
                                • 40% sent to the First Skeptic NFT holders.
                                <br />
                                • 40% is compounded to ensure fund growth.
                                <br />
                                • 20% is directed to marketing.
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--140 mt--20 mb--20">
                                <Image
                                    src="/images/test/fund.gif"
                                    alt="Slider BG"
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    priority
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                />
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                    <HeadingLabel
                            className="mt--5"
                            style={{
                                padding: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                margin: 0,
                            }}
                            title={`Employing Arbitrage as a Service`}
                        />
                        <SolidBox className="rn-about-card trans-bg" style={{ height: "88%" }}>
                          
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Skeptic Token (SKP) will employ Arbitrage as a Service (AaaS) to leverage 
                                the price fluctuations amongst our SKP/BNB and SKP/XUSD liquidity pools. 
                                This will generate profit for the platform that would otherwise be lost to external arbitrage traders. 
                                <br />
                                <br />
                                This profit will be used as follows:
                                <br />
                                • 50% directed to First Skeptic NFT holders.
                                <br />
                                • 50% directed into the Skeptic Fund.

                            </p>
                            <div className="rn-author-bg-area position-relative ptb--200 mt--20 mb--20">
                                <Image
                                    src="/images/test/AaaS on token.png"
                                    alt="Slider BG"
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    priority
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                />
                            </div>
                        </SolidBox>
                    </div>
                </div>
            </div>
        </>
    );
};

TokenArea.propTypes = {
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
TokenArea.defaultProps = {
    space: 1,
};

export default TokenArea;
