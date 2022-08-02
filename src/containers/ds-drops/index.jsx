import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";

const DSDropsArea = ({ className, id, space, data }) => (
    <div className="rn-section-gapTop">
        <div className="container text">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="DS Drops" />
                    <Image
                        src="/images/icons/DS-Drops.png"
                        alt="Slider BG"
                        height={167}
                        width={150}
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                    <p>
                        NOTE:
                        <br />
                        <i>
                            This service requires Skeptic Token to be launched.
                            Having launched already, we anticipate DS Drops to
                            go live in the near future.
                        </i>
                    </p>
                </div>
            </div>
            <div className="row text-justify">
                <p>
                    We are all very familiar with dust attacks and often see
                    random tokens appear in our wallets. These tokens typically
                    have a url in the name and in order to claim them you must
                    go to the site and connect your wallet. But the second you
                    connect your wallet, your wallet is drained! But what if
                    there was a way to get tokens that have passed screening
                    process?
                </p>
                <p>
                    <h4>Introducing DS Drops!</h4>
                    DeFi Skeptic Drops (DS Drops) is a utility within the DeFi
                    Skeptic ecosystem. DeFi users can subscribe to a 3-tier
                    service which allows them to get exposure to various
                    projects through promotional airdropping. The subscription
                    will run on quarterly intervals allowing you to decide when
                    you want to receive tokens.
                </p>
                <p>The process is simple:</p>
                <ol style={{ marginLeft: 50 }}>
                    <li>Connect your wallet.</li>
                    <li>Select a tier (1-3)</li>
                    <li>Pay in Skeptic Tokens (SKP)</li><br/>
                </ol>
                <p>
                    When a new token is added to the pool, announcements will be
                    made on all of our social platforms and the subscriber can
                    claim their newly screened tokens!
                </p>
                <p>
                    Tiers allow the user to control how much of the pool they
                    want. For example, if the service had the following
                    subscribers;
                </p>
                <ul style={{ marginLeft: 50 }}>
                    <li>3x tier 1 subscribers (3 allocations)</li>
                    <li>4x tier 2 subscribers (8 allocations)</li>
                    <li>2x tier 3 subscribers (6 allocations)</li><br/>
                </ul>
                <p>
                    This would total 17 allocations, so a tier 2 subscriber for
                    example would be allowed to claim 2/17 or 11.7% of that
                    projects airdrop!
                </p>
            </div>
        </div>
    </div>
);

DSDropsArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
DSDropsArea.defaultProps = {
    space: 1,
};

export default DSDropsArea;
