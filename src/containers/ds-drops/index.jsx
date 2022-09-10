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
                            This service is currently being beta tested!
                        </i>
                    </p>
                </div>
            </div>
            <div className="row text-justify">
                <p>
                    <h6>The Problem:</h6>
                    There are various platforms that will do airdrops for other projects to grow their holder base 
                    and increase their exposure. However, these providers typically charge $1,000+ in addition to 
                    the project tokens being airdropped. Additionally, these services often involve a token where 
                    the more you hold, the more of the airdrop you get. Naturally this creates a small group of 
                    holders that will receive most of the airdrop since they own most of the token. These airdrop 
                    recipients have also only paid one time (the initial token purchase) thus any future airdrops 
                    they get are instant profit and thus usually get sold off immediately. 
                    <br /><br />
                    <h6>The Solution:</h6>
                    DS Drops aims to solve the problems above. We charge no fee, we have no “whales” since user’s 
                    purchase 1 of 3 tiers, and since it’s a recurring subscription, the user is incentivized to hold 
                    to receive ROI for the subscription.
                    <br /><br />
                    <h4>Introducing DS Drops!</h4>
                    DeFi Skeptic Drops (DS Drops) is a utility within the DeFi
                    Skeptic ecosystem. DeFi users can subscribe to a 3-tier
                    service which allows them to get exposure to various
                    projects through promotional airdropping. The subscription
                    will run on quarterly intervals allowing you to decide when
                    you want to receive tokens.
                    <br /><br />
                    The process is simple:
                    <ol>
                        <li>Connect your wallet.</li>
                        <li>Select a tier (1-3).</li>
                        <li>Pay in Skeptic Tokens (SKP).</li>
                    </ol>
                    When a project does a promotional airdrop, announcements will be
                    made on all of our social platforms and the subscriber can claim 
                    their tokens!
                    <br /><br />
                    Tiers will be priced as such:
                    <ol>
                        <li>Tier 1 = Base Price</li>
                        <li>Tier 2 = Base x2 - 10%</li>
                        <li>Tier 3 = Base x3 - 20%</li>
                    </ol>
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
