import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";

const VaaSArea = ({ className, id, space, data }) => (

    <div className="rn-section-gapTop">
        <div className="container">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="Vetting as a Service (VaaS)" />
                    <Image
                        src="/images/icons/NewVettedBadge.svg"
                        alt="Slider BG"
                        height={280}
                        width={280}
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className="row text-justify">
                <p>
                    <h4>Designed to integrate into your use case!</h4>
                    Vetting as a service (VaaS) allows the project owner to add a 
                    security layer to their use case without adding additional work 
                    for their team. Does your project/platform interact with other 
                    projects on a regular basis? Would having a thorough screening 
                    process provide additional value? The entire DeFi 
                    Skeptic <Anchor path="/vetting-process"><u>vetting process</u>
                    </Anchor> can seamlessly be integrated into your use case at no 
                    upfront cost to your project. Projects or platforms that could 
                    benefits from this include, but are not limited to:
                </p>
                <br />
                <br />
                <ul style={{ marginLeft: 50 }}>
                    <li>Launchpads</li>
                    <li>Decentralized Exchanges</li>
                    <li>Multi-Token Reflection Tokens</li>
                    <li>Staking and Liquidity Farms</li>
                    <li>Etc. . .</li>
                </ul>
                <br />
                <p>
                Ensuring your user base is interacting with DeFi projects that meet 
                a high standard pertaining to transparency, security and information 
                is paramount to the longevity of your brand and reputation. Add VaaS 
                today and help better DeFi!
                </p>
            </div>
            <br />
            <br />
            <div className="text-center">
                <Button
                    path="files/audit.pdf" 
                    target="_blank"
                    color="primary-alta"
                    className="connectBtn"
                    size="large"
                >
                    Get VaaS!
                </Button>
            </div>
        </div>
    </div>
);

VaaSArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
VaaSArea.defaultProps = {
    space: 1,
};

export default VaaSArea;
