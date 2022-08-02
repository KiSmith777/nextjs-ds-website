import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";

const ReferralProgramArea = ({ className, id, space, data }) => (
    <div className="rn-section-gapTop">
        <div className="container text">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="DeFi Skeptic Referral Program" />
                </div>
            </div>
            <div className="row">
                <p className="text-center">
                    We offer a super easy way to make some side money! It's
                    simple, bring DeFi Skeptic business and get a bonus! Please
                    see the bonus values below:
                </p>
                <ul style={{ marginLeft: 175 }}>
                    <li>
                        $20 -{" "}
                        <Anchor path="/vetting-process">Project Vetting</Anchor>
                    </li>
                    <li>
                        $20 -{" "}
                        <Anchor path="/contract-creation">
                            Contract Creations
                        </Anchor>
                    </li>
                    <li>
                        $20 -{" "}
                        <Anchor path="/ux-ui-design">UX & UI Design</Anchor>
                    </li>
                    <li>
                        $10 -{" "}
                        <Anchor path="/contract-audits">Contract Audits</Anchor>
                    </li>
                    <li>
                        $10 - <Anchor path="/kyc-service">KYC</Anchor>
                    </li>
                </ul>
                <p className="text-center">
                    Feel free to share our service pitch deck
                    <i className="feather-chevron-right" />
                    <Anchor path="/files/DS-Services.pdf">HERE</Anchor>
                </p>
                <p className="text-center">
                    Just have the project add you in the referral box when they
                    inquire about these services!
                </p>
            </div>
        </div>
    </div>
);

ReferralProgramArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
ReferralProgramArea.defaultProps = {
    space: 1,
};

export default ReferralProgramArea;
