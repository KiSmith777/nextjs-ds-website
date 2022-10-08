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
                    There are various platforms that will do airdrops for other projects to 
                    grow their holder base and increase their exposure. However, these providers 
                    typically charge a $1,000+ fee in addition to the project tokens being airdropped. 
                    <br /><br />
                    Additionally, these services often involve a token where the more you hold, 
                    the more of the airdrop you get. Naturally this creates a small group of holders 
                    that will receive most of the airdrop since they own most of the token. These airdrop 
                    recipients have also only paid one time (the initial token purchase) thus any future 
                    airdrops they get are “profit” on top of their token holdings.
                    <br /><br />
                    <h6>The Solution:</h6>
                    DS Drops aims to solve the problems above. We charge no fee to the project, we have no “whales” since 
                    user’s purchase 1 of 3 tiers, and since it’s a recurring subscription, the user is incentivized 
                    to hold, not instantly sell.
                    <br /><br />
                    <h6>How It Works:</h6>
                    The user will subscribe to a Tier using Skeptic Tokens. This subscription will be valid for the duration 
                    listed in the dApp. You cannot change your subscription, you must wait for it to expire or use another wallet. 
                    When an airdrop is being scheduled, we will announce it before hand on our social platforms. 
                    <br /><br />
                    When an airdrop is made from a participating project, it will be sent to all current subscribers, relative to the 
                    tier they have. Take for instance the following example:
                    <br /><br />
                    Tier 1 Subscribers = 45 users (1x Base Point, 45 Total)<br />
                    Tier 2 Subscribers = 30 users (2x Base Point, 60 Total )<br />
                    Tier 3 Subscribers = 25 users (3x Base Point, 75 Total)
                    <br /><br />
                    There is a total of 100 users and 180 base points. A Tier 2 user for example has 2 base points, thus will get 2/180 or 1.11% of the airdrop. 
                    <br /><br />
                    Your eligibility starts when your subscription starts. You will not receive any airdrops that were created prior to your subscription starting. When a 
                    project does a promotional airdrop, you will be able to claim the drop within the dApp.
                    <br /><br />
                    <h6>Tier Pricing - 2 Month Subscription:</h6>
                    <ul>
                        <li>Tier 1 = $10 in SKP</li>
                        <li>Tier 2 = $18 in SKP (10% Discount)</li>
                        <li>Tier 3 = $24 in SKP (20% Discount)</li>
                    </ul>
                    Subscribers can also receive discounts for holding any one of our vetted projects, which will be shown in the dApp!
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
