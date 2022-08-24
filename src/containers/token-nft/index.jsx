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
import Button from "@ui/button";

const TokenNFTArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="container">
                <HeadingLabel
                    className="mt--40"
                    style={{
                        padding: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        margin: 0,
                    }}
                    title="Tokenized NFTs"
                />
                <TransparentBox>
                    <p
                        className="text-justify"
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        We have decided to take things up a notch, no more having to buy both Tokens and NFTs, 
                        welcome to Tokenized NFTs! Through the <Anchor path="https://app.defiskeptic.com/vault"><u>Skeptic Vault</u>
                        </Anchor>, the user can convert back and forth, tax free, between Skeptic Tokens and First Skeptic NFTs. 
                        This allows the user to own both by owning one and provides the user with the freedom to decide what aspect they want at that exact time!
                    </p>  
                </TransparentBox>
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
                            title="Utility Token"
                        />
                        <SolidBox
                            className="rn-about-card trans-bg"
                            style={{ height: "100%" }}
                        >
                            <div className="rn-author-bg-area position-relative ptb--60 mb--20">
                                <Image
                                    src="/images/logo/Main-Logo.png"
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
                                className="text-center"
                                style={{justifyContent: "center"}}
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                                
                            >
                                Token Address
                                <br />
                                <section id="contract-address">0x1234AE511876FCAaCe685fcDC292d9589A88dC2b</section>
                            </p>
                            <br />
                            <p
                                className="text-justify"
                                style={{padding: '0px 20px'}}
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                The primary purpose of <u>Skeptic Token (SKP)</u> will be to serve the DeFi Skeptic ecosystem. 
                                SKP will integrate with some of the DeFi Skeptic products and services and be used as a 
                                utility token for the DeFi Skeptic ecosystem. The total supply is 50,000,000 SKP.
                            </p>
                            <div className="row g-5 justify-content-around plr--120">
                                <Button
                                    path="https://docs.defiskeptic.com/skeptic-token-skp"
                                    target="_blank"
                                    color="primary-alta"
                                    className="connectBtn"
                                    size="large"
                                >
                                Learn More
                                </Button>
                                <Button
                                    path="files/audit.pdf" 
                                    target="_blank"
                                    color="primary-alta"
                                    className="connectBtn"
                                    size="large"
                                >
                                View Audit
                                </Button>
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
                            title="Rewards NFT"
                        />
                        <SolidBox
                            className="rn-about-card trans-bg"
                            style={{ height: "100%" }}
                        >
                              <div className="rn-author-bg-area position-relative ptb--60 mb--20">
                                <Image
                                    src="/images/logo/Main-NFT.png"
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
                                className="text-center"
                                style={{justifyContent: "center"}}
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                NFT Address
                                <br />
                                <section id="contract-address">0xe82d1E44a1f8a37f74A718Ee797F29Eb3aE1D84A</section>
                            </p>
                            <br />
                            <p
                                className="text-justify"
                                style={{padding: '0px 20px'}}
                                data-sal="slide-right"
                                data-sal-duration="1200"
                                data-sal-delay="150"
                            >
                                Our <u>First Skeptic NFTs</u> provide the holder with growing rewards that are not token volume reliant 
                                and which have multiple revenue streams. These NFTs are a set of 250 with 50 being rare. 
                                Rare holders enjoy the base rewards in addition to a monthly raffle!
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button
                                    path="https://docs.defiskeptic.com/first-skeptics-nft"
                                    target="_blank"
                                    color="primary-alta"
                                    className="connectBtn"
                                    size="large"
                                >
                                Learn More
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                </div>
            </div>
        </>
    );
};

TokenNFTArea.propTypes = {
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
TokenNFTArea.defaultProps = {
    space: 1,
};

export default TokenNFTArea;
