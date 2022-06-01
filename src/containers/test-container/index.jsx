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

const TestArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--120 mt--20 mb--20">
                <Image
                    src="/images/test/Gitbook Token.png"
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
                        The primary purpose of SKP will be to serve the DeFi Skeptic ecosystem. SKP will be used as a utility token to power all products and services DeFi Skeptic provides. 
                        SKP will be required for purchase of products and services that DeFi Skeptic provides.
                        When SKP is used for purchasing these products and services, 10% of the payment will be burned. This is in addition to the burn coming from the Burn Fund.
                    </p>
                    <p
                        data-sal="slide-left"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        The second purpose will be the gateway to merge failing/failed projects through acquisition of funds & users through our <a href="/merge">DS Merge</a> utility.
                        <br/><br/><b>Note</b>:<i> This secondary purpose is in development and not to be expected at the time of SKP launching.</i>
                    </p>
                </TransparentBox>
                <div className="mt--5 row g-5">
                <div className="col-lg-12">
                        <SolidBox>
                        <h3 
                            data-sal="slide-left"
                            data-sal-duration="1200"
                            data-sal-delay="150"
                        >
                            Discount Swapper (-2%)
                        </h3>
                        <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Skeptic Token will have a swapper contract that will provide you the ability to 
                                purchase SKP tokens at a discounted tax/fee rate. You will be able to send BNB/BUSD 
                                directly to these contracts and it will send you tokens. Using this allows the BNB/BUSD 
                                to be taxed prior to being swapped to tokens, thus no liquidation of SKP is needed as SKP 
                                is not received as tax, which prevents a sell event. To incentive this buying method, 
                                a 2% discount is provided.
                            </p>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <SolidBox>
                        <h3 
                            data-sal="slide-right"
                            data-sal-duration="1200"
                            data-sal-delay="150"
                        >
                            Tokenomics
                        </h3>
                        <div className="rn-author-bg-area position-relative ptb--175 mt--20 mb--20">
                            <Image
                            src="/images/test/tokenomics1.png"
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
                                25% of Supply
                            </h4>
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                This will be a locked reserve to support SKP future features such as potentially adding a liquidity pool farm 
                                for SKP or potentially adding the BNB/SKP pair on other decentralized platforms to further support its utility/use 
                                case by allowing more users access. These tokens will initially be locked for 3 months. They will continue to get 
                                re-locked after each additional lock unless there is a reason to use them. If these tokens have not been used after 
                                1 year, they will be burned. 
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                75% of Supply
                            </h4>
                            <p
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                No tokens will be sold prior to launch. There will be no private/presale tokens. 75% of supply will be added to 
                                initial liquidity. After liquidity has been added on PancakeSwap, the liquidity pool will be locked for 6 months. 
                                It will continue to get re-locked every 6 months unless there is a reason to migrate the LP elsewhere.
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Supply
                            </h4>
                            <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Skeptic Token will have a max supply of 50,000,000 with 35,000,000 being added to initial liquidity as mentioned above.
                            </p>
                            <h4
                                className="title"
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Limitations
                            </h4>
                            <p
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                2% Max Wallet Size (1,000,000 SKP)
                            </p>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <SolidBox style={{height: "100%"}}>
                        <h3 
                            data-sal="slide-left"
                            data-sal-duration="1200"
                            data-sal-delay="150"
                        >
                            Tax Structure
                        </h3>
                        <p
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                To support SKP, a token tax will be imposed. A hardcoded max of 15% will be implemented which 
                                the owner can’t bypass acting as a safety measure for users. The token tax is broken down as follows:
                            </p>
                        <div className="rn-author-bg-area position-relative ptb--180 mt--20">
                            <Image
                            src="/images/test/tax-structure.png"
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
                                Below is a flow chart showing how SKP tax is utilized:
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--200 mt--20 mb--20">
                            <Image
                            src="/images/test/Tax Flow.png"
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
                        <SolidBox style={{height: "100%"}}>
                            <h3 
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                What Is The "Token Fund" Tax?
                            </h3>
                            <p
                                    data-sal="slide-right"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                >
                                    This will support the Burn Fund and token related expenses such as marketing the token itself. Funds collected from this tax will be broken down as follows:
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--140 mt--20 mb--20">
                            <Image
                            src="/images/test/tokenfund.png"
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
                        <SolidBox>
                        <h3 
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                What Is The "Burn Fund"?
                            </h3>
                            <p
                                    data-sal="slide-right"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                >
                                    Out of the funds received from the First Skeptics NFT sale, 50 BNB will be put into the Burn Fund. 
                                    70% of the Token Fund tax will also be directed to this Burn Fund as its received based on token volume.
                                     Additionally, Skeptic Token will employ AaaS to profit from price variation between the BNB and BUSD liquidity pools. 
                                     45% of this profit is directed to the Burn Fund.
                                     
                            </p>
                            <p
                                    data-sal="slide-left"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                >
                                    These funds are then placed in Liquidity Pool Farms which receives variable APR's/APY's. 
                                     
                            </p>
                            <p
                                    data-sal="slide-right"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                >
                                    1-2 times a month at a date and time not to be disclosed, to prevent timed/targeted buys/sells, 
                                    this interest will be pulled and used as follows:
                                     
                            </p>
                            <div className="rn-author-bg-area position-relative ptb--200 mt--20 mb--20">
                            <Image
                            src="/images/test/burnfund.png"
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
                                   <b>Burn Fund</b> powered Buy & Burns are conducted on the SKP/BNB liquidity pool only.
                                     
                            </p>
                        </SolidBox>
                    </div>
                    <div className="col-lg-12">
                        <SolidBox>
                        <h3 
                                data-sal="slide-left"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                SKP + AaaS
                            </h3>
                            <p
                                    data-sal="slide-right"
                                    data-sal-duration="1200"
                                    data-sal-delay="150"
                                >
                                    Skeptic Token (SKP) will employ AaaS to leverage the price fluctuations amongst our SKP/BNB and 
                                    SKP/BUSD liquidity pools. This will generate profit for the project that would otherwise be lost 
                                    to external arbitrage traders. This profit is than split and directed to the Token Fund / Burn Fund 
                                    and First Skeptic NFT holders!
                                     
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

TestArea.propTypes = {
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
TestArea.defaultProps = {
    space: 1,
};

export default TestArea;
