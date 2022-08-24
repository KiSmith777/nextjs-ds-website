import PropTypes from "prop-types";
import clsx from "clsx";
import ArbitrageForm from "@components/forms/arbitrage-form";
import Image from "next/image";
import TransparentBox from "@components/transparent-box";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { useState } from "react";

const ArbitrageServiceArea = ({ space, className }) => {
    const [show, setShow] = useState(false);
    const [showPrev, setShowPrev] = useState(true);

    return (
        <div
            className={clsx(
                "rn-contact-top-area bg_color--5",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="150"
                        data-sal-duration="800"
                    >
                        <div className="section-title mb--30 text-center">
                            <h2 className="title">
                                Arbitrage as a Service (AaaS)
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="rn-author-bg-area position-relative ptb--150 mt--20 mb--20">
                    <Image
                        src="/images/test/AaaS.png"
                        alt="Slider BG"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </div>
                <TransparentBox>
                    <p
                        className="text-justify"
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Arbitrage as a Service (AaaS) allows any project owner
                        to stabilize the price of their Token across every
                        liquidity pool or decentralized exchange, while earning
                        revenue to build up their ecosystem. Typically,
                        arbitrage revenue is lost to trading bots. With AaaS
                        this revenue can be kept by your team to continuously
                        support your project. This advanced mathematical
                        algorithm will win over 99% of trades, while trading
                        with precise values to yield the maximum profit possible
                        from any price discrepancy.
                    </p>
                    <p
                        className="text-justify"
                        data-sal="slide-left"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        AaaS is free to sign up, and the bot will automatically
                        forward 85% of all profits generated to a wallet that
                        you specify. All that is required is for our AaaS Smart
                        Contract to be exempt from fees. This is to ensure we
                        have a guarantee to win all arbitrage trades. This
                        guarantee allows us to forego the gas war that arbitrage
                        bots typically endure, and as such, allows us to give
                        85% of all profit back to your team/ecosystem. All you
                        have to do is let it work its magic!
                    </p>
                    <p
                        data-sal="slide-up"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        <u>Benefits of using AaaS</u>
                    </p>
                    <ul>
                        <li>Stabilized price across all liquidity pools</li>
                        <li>
                            Profit generation for your platform, otherwise lost
                        </li>
                        <li>
                            …<b>FREE TO USE</b>
                        </li>
                    </ul>

                    <p
                        data-sal="slide-up"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Only have one liquidity pair? Find out{" "}
                        <Anchor path="/additional-pools">
                            why you need more
                        </Anchor>
                        .
                    </p>
                    <div className={clsx("setting-option header-btn pt--50", showPrev === false && "noShowForm")}>
                        <div className="icon-box d-flex justify-content-center mt--10">
                            <Button
                                color="primary-alta"
                                className="connectBtn"
                                size="large"
                                onClick={() => {
                                    setShow(true);

                                    setShowPrev(false);
                                }}
                            >
                                Request Service
                            </Button>
                        </div>
                    </div>
                    <ArbitrageForm
                        className={clsx("noShowForm", show && "showForm")}
                    />
                </TransparentBox>
                <br />
            </div>
        </div>
    );
};

ArbitrageServiceArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ArbitrageServiceArea.defaultProps = {
    space: 1,
};

export default ArbitrageServiceArea;
