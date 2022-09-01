import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import TransparentBox from "@components/transparent-box";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const AdditionalPoolsArea = ({ space, className }) => (
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
                        <h2 className="title">Why You Need Multiple LP's</h2>
                    </div>
                </div>
            </div>
            <TransparentBox>
                <p
                    className="text-justify"
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    If you have arrived at this page, you are probably wondering
                    “why do I need additional liquidity pools?""
                </p>
                <p
                    className="text-justify"
                    data-sal="slide-left"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    If your project revolves around a single liquidity pool (Ex.
                    Token/BNB), than your volatility is 50/50 between your own
                    supply and demand and the price of BNB. By adding additional
                    liquidity pools such as BUSD, Pegged USDC, Pegged ETH,
                    Pegged BTC, etc. . . You can reduce the backing assets
                    control over your tokens price, giving your token more
                    control over its own price!
                </p>
                <br />
                <h6
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    Scenario One (You are solely paired to BNB):
                </h6>
                <ul
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    <li>50% price volatility from your token.</li>
                    <li>50% price volatility from the price of BNB.</li>
                </ul>
                <h6
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    Scenario Two (You have two pairs: BNB and pegged ETH):
                </h6>
                <ul
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    <li>50% price volatility from your token</li>
                    <li>25% price volatility from BNB.</li>
                    <li>25% price volatility from pegged ETH.</li>
                </ul>
                <h6
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    Scenario Three (You have three pairs: BNB, pegged ETH, and
                    BUSD):
                </h6>
                <ul
                    data-sal="slide-right"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    <li>50% price volatility from your token.</li>
                    <li>16.6% price volatility from BNB.</li>
                    <li>16.6% price volatility from pegged ETH.</li>
                    <li>
                        16.6% price volatility from BUSD (which has 0%
                        volatility)
                    </li>
                </ul>
                <br />
                <p 
                    className="text-justify"
                    data-sal="slide-up"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    With each additional liquidity pair you add, you reduce the
                    backing assets impact/control over the price of your token,
                    making your token more stable in terms of controlling its
                    own price!
                </p>
                <p 
                    className="text-justify"
                    data-sal="slide-up"
                    data-sal-duration="1200"
                    data-sal-delay="150"
                >
                    If you do decide to add additional liquidity pairs, be sure
                    to checkout <Anchor path="/arbitrage-service"> <u>Arbitrage as a Service</u></Anchor> which 
                    allows you to generate profit for your project which would otherwise be 
                    lost to random arbitrage traders!
                </p>
                <div data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="150" className="setting-option header-btn">
                    <div className="icon-box d-flex justify-content-center mt--10 pb--50">
                        <Anchor path="/arbitrage-service">
                            <Button
                                color="primary-alta"
                                className="connectBtn"
                                size="large"
                            >
                                Arbitrage as a Service
                            </Button>
                        </Anchor>
                    </div>
                </div>
            </TransparentBox>
        </div>
    </div>
);

AdditionalPoolsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

AdditionalPoolsArea.defaultProps = {
    space: 1,
};

export default AdditionalPoolsArea;
