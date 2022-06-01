import PropTypes from "prop-types";
import clsx from "clsx";
import Partner from "@components/partner";
import { PartnerType } from "@utils/types";
import { useSetState } from 'react-use';

const ExplorePartnerArea = ({ title, items, id, className, space }) => {
   

    return (  
        <div key={id} className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div
                        
                        className="row"
                        style={{ gap: 32, justifyContent: "space-evenly" }}
                    >
                        {title === "Partners" &&
                            items[1].partners.map((partner) => (
                                    <Partner
                                        key={partner.id}
                                        style={{ width: 10, height: 100 }}
                                        overlay
                                        id={partner.id}
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
                        {title === "Affiliates" &&
                            items[2].affiliates.map((affiliate) => (
                                <Partner
                                    id={affiliate.id}
                                    key={affiliate.id}
                                    group={items[2].title}
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
                            items[3].promoters.map((promoter) => (
                        
                                <Partner
                                    style={{ width: 10, height: 100 }}
                                    overlay
                                    key={promoter.id}
                                    group={items[3].title}
                                    items={items}
                                    id={promoter.id}
                                    title={promoter.title}
                                    telegram={promoter.telegram}
                                    website={promoter.website}
                                    desc1={promoter.desc1}
                                    desc2={promoter.desc2}
                                    desc3={promoter.desc3}
                                    image={promoter.image?.[0]}
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

