import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import TransparentBox from "@components/transparent-box"

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
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        If you have arrived at this page, you are probably wondering “why do I need additional liquidity pools?""
                    </p>
                    <p
                        data-sal="slide-left"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        If your project revolves around a single liquidity pool (Ex. Token/BNB), than your volatility is 50/50 between your own supply and demand and the price of BNB. 
                        By adding additional liquidity pools such as BUSD, Pegged USDC, Pegged ETH, Pegged BTC, etc. . . You can reduce the pair volatility and make your token more 
                        independent, thus reducing impact from the backing assets.
                    </p>
                    <h6
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Scenario One (You are solely paired to BNB):
                    </h6>
                    <ul>
                        <li>50% price volatility from the price of BNB.</li>
                        <li>50% price volatility from your project.</li>
                    </ul>
                    <h6
                        data-sal="slide-right"
                        data-sal-duration="1200"
                        data-sal-delay="150"
                    >
                        Scenario Two (You have two pairs: BNB and BUSD):
                    </h6>
                    <ul>
                        <li>75% price volatility from your project.</li>
                        <li>25% price volatility from BNB.</li>
                        <li>0% price volatility from BUSD.</li>
                    </ul>
                    
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