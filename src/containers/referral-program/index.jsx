import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import TransparentBox from "../../components/transparent-box";

const ReferralProgramArea = ({ className, id, space, data }) => (
    <div className="rn-section-gapTop">
        <div className="container text">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="DeFi Skeptic Referral Program" />
                </div>
            </div>
            <TransparentBox>
            <div className="row">
                <p className="text-justify">
                    We offer a super easy way to make some side money! It's
                    simple, bring DeFi Skeptic business and get a bonus! Please
                    see the bonus values below:
                </p>
                <ul style={{ textAlign: 'left', marginLeft: 50 }}>
                    <li>$15 -<Anchor path="/contract-audits"> Contract Audits</Anchor></li>
                    <li>$20 -<Anchor path="/web-development"> Web Development</Anchor></li>
                    <li>$20 -<Anchor path="/ux-ui-design"> UX & UI Design</Anchor></li>
                    <li>$20 -<Anchor path="/contract-creation"> Token & NFT Creation</Anchor></li>
                    <li>$25 -<Anchor path="/contract-creation"> dApp, Launchpad, Marketplace Creation</Anchor></li>
                    <li>$25 -<Anchor path="/vetting-process"> Project Vetting ( whether pass or fail )</Anchor></li>







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
            </TransparentBox>
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
