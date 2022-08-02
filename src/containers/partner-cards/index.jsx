import PropTypes from "prop-types";
import clsx from "clsx";
import Partner from "@components/partner";
import { PartnerType } from "@utils/types";
import { useState, useEffect } from "react";

const ExplorePartnerArea = ({ title, items, id, className, space }) => {
    const [partnerUnderCount, setPartnerUnderCount] = useState(false);
    const [affiliateUnderCount, setAffiliateUnderCount] = useState(false);
    const [promoterUnderCount, setPromoterUnderCount] = useState(false);
    useEffect(() => {
        if (items[1].launchpadsApps.length < 2) {
            setPartnerUnderCount(true);
        }
        if (items[3].affiliates.length < 2) {
            setAffiliateUnderCount(true);
        }
        if (items[4].promoters.length < 2) {
            setPromoterUnderCount(true);
        }
    },[])

    return (
        <div key={id} className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div
                        className="row"
                        style={{ gap: 32, justifyContent: "space-evenly" }}
                    >
                        {title === "Launchpad & App Partners" &&
                            items[1].launchpadsApps.map((partner) => (
                                <Partner
                                    key={partner.id}
                                    style={{ width: 10, height: 100 }}
                                    overlay
                                    id={
                                        !partnerUnderCount
                                            ? partner.id
                                            : "underCount"
                                    }
                                    group={items[1].title}
                                    items={items}
                                    title={partner.title}
                                    telegram={partner.telegram}
                                    website={partner.website}
                                    desc1={partner.desc1}
                                    desc2={partner.desc2}
                                    desc3={partner.desc3}
                                    image={partner.image?.[0]}
                                />
                            ))}

                        {title === "Service Provider Partners" &&
                            items[2].serviceProviders.map((partner) => (
                                <>
                                {() => {if (partner.id === 120) {
                                    console.log("test")
                                }}}
                                    <Partner
                                        key={partner.id}
                                        style={{ width: 10, height: 100 }}
                                        overlay
                                        id={
                                            !partnerUnderCount
                                                ? partner.id
                                                : "underCount"
                                        }
                                        group={items[2].title}
                                        items={items}
                                        title={partner.title}
                                        telegram={partner.telegram}
                                        website={partner.website}
                                        desc1={partner.desc1}
                                        desc2={partner.desc2}
                                        desc3={partner.desc3}
                                        image={partner.image?.[0]}
                                    />
                                </>
                            ))}
                        {title === "Affiliates" &&
                            items[3].affiliates.map((affiliate) => (
                                <Partner
                                    id={
                                        !affiliateUnderCount
                                            ? affiliate.id
                                            : "underCount"
                                    }
                                    key={affiliate.id}
                                    group={items[3].title}
                                    style={{ width: 10, height: 100 }}
                                    overlay
                                    items={items}
                                    title={affiliate.title}
                                    telegram={affiliate.telegram}
                                    website={affiliate.website}
                                    desc1={affiliate.desc1}
                                    desc2={affiliate.desc2}
                                    desc3={affiliate.desc3}
                                    image={affiliate.image?.[0]}
                                />
                            ))}
                        {title === "AMA & Promotional Groups" &&
                            items[4].promoters.map((promoter) => (
                                <Partner
                                    style={{ width: 10, height: 100 }}
                                    overlay
                                    key={promoter.id}
                                    group={items[4].title}
                                    items={items}
                                    id={
                                        !promoterUnderCount
                                            ? promoter.id
                                            : "underCount"
                                    }
                                    title={promoter.title}
                                    telegram={promoter.telegram}
                                    website={promoter.website}
                                    desc1={promoter.desc1}
                                    desc2={promoter.desc2}
                                    desc3={promoter.desc3}
                                    image={promoter.images?.[0]}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ExplorePartnerArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2, 3, 4]),
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PartnerType).isRequired,
};

ExplorePartnerArea.defaultProps = {
    space: 1,
};

export default ExplorePartnerArea;

