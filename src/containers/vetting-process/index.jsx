import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";

const VettingProcess = ({ className, id, space, data }) => (
    <div className="rn-section-gapTop">
        <div className="container">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="Vetting Overview" />
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
                    <h4>What are the benefits and why choose DeFi Skeptic?</h4>
                    By having your project vetted by DeFi Skeptic, you are
                    supporting a higher level of transparency, security, and
                    information. Our commitment to bettering DeFi and our drive
                    to bridge the gap between users and legitimate projects is
                    what we believe makes us the number one choice.
                    <br /><br />
                    In addition to showing the DeFi space that your project is
                    among a higher caliber, projects also receive the following
                    benefits:
                    <ul>
                        <li><p>Added to the{" "}<Anchor path="/vetted-projects"><u>Vetted Database</u></Anchor></p></li>
                        <li><p>Awarded the "DS Vetted" badge.</p></li>
                        <li><p>Cross-Community promotion via the "The Vetted Circle".</p></li>
                        <li><p>Awarded the verified badge in the{" "}<Anchor path="https://crogram.app"><u>CroGram</u></Anchor>{" "}mobile app.</p></li>
                        <li><p>Promoted various ways within the DeFi Skeptic ecosystem.</p></li>
                        <li><p>Entry into a network with a common mission designed to support each other.</p></li>
                        <li><p>Free usage of community engagement bot that generates volume for your token.</p></li>
                    </ul>
                </p>
                <br />
            </div>
            <div className="row text-justify">
                <p>
                    <h4>Why so cheap?</h4>
                    We believe money shouldn’t be a barrier for information and
                    security. DeFi Skeptic vetting is $250 and will always
                    remain low cost for this reason. This service is designed
                    for the DeFi user and the more projects we get vetted, the
                    more information the DeFi user has.
                </p>
                <br />
            </div>
            <div className="row text-justify">
                <p>
                    <h4>The Process</h4>
                    The DeFi Skeptic vetting process is designed to look at
                    multiple elements across a DeFi project. These elements are
                    as follows:
                </p>
                <div className="text-center col-12 ptb--50">
                    <Image
                        src="/images/test/vetting-categories.png"
                        alt="Slider BG"
                        height={288}
                        width={280}
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </div>
                <p><ol>
                    <li>
                        <p>
                            <h5>Application</h5>
                            To apply to have your project vetted, please visit
                            the <Anchor path="/get-vetted"><u>Get Vetted</u> </Anchor> 
                            page. Please review the rest of this process so you
                            know what to expect.
                        </p>
                        <br />
                    </li>
                    <li>
                        <p>
                            <h5>Initial Review</h5>
                            After a project applies, an initial review will be
                            conducted by the DeFi Skeptic team which will look
                            for some basic security and informational
                            components. Before being considered for a vetting
                            interview, projects must meet these minimum
                            requirements:
                        </p>
                        <ol>
                            <li><p>Audited smart contract</p></li>
                            <li><p>Doxed or KYC'd team</p></li>
                            <li><p>Locked liquidity if liquidity exists</p></li>
                            <li><p>
                                Project wallets must have more than one member
                                who has access, whether this is direct or
                                through a multi-sig. If not, you must have a
                                contingency in place.
                            </p></li>
                        </ol>
                        <br />
                    </li>
                    <li>
                        <p>
                            <h5>Decision to Interview</h5>
                            Based on the initial review, a decision whether or
                            not to proceed forward with a vetting interview will
                            be sent to the projects team members. If the
                            decision is not to proceed forward, reasons will be
                            provided with recommended changes required to be
                            considered in the future. If the decision is to
                            proceed forward, an interview will be scheduled upon
                            completion of a one time payment.
                        </p>
                        <br />
                    </li>
                    <li>
                        <p>
                            <h5>Vetting Interview</h5>
                            An interview will be scheduled with the team. All
                            team members are encouraged to attend, but at a
                            minimum any team member who has access to code or
                            funds must be present. This interview will take
                            roughly 30 to 90 minutes to complete depending on
                            the project and number of members that attend. If
                            the team does not want to provide specifics to
                            certain questions, no problem, it will be noted in
                            the report. The goal of this interview is to collect
                            as much information as possible. Post interview, the
                            information will be independently checked for
                            accuracy.
                        </p>
                        <p>
                            If the team is KYC verified, the interview can be
                            audio only.
                        </p>
                        <p>
                            If the team is doxed, attendees must use video to
                            verify themselves.
                        </p>
                        <br />
                    </li>
                    <li>
                        <h5>Final Decision</h5>
                        <p>
                            After the interview is complete and the independent
                            check is conducted, the team will be provided the
                            final report.
                        </p>
                        <p>
                            If the project is “Passed” than they will be listed
                            on the DeFi Skeptic website, the information in the
                            report published and this will open further
                            collaborative options for the project and DeFi
                            Skeptic. The project will also receive the DeFi
                            Skeptic Vetted Badge. This badge signifies that the
                            project has met the standards set by DeFi Skeptic
                            pertaining to transparency, information accuracy and
                            security.
                        </p>
                        <p>
                            If the project “Needs Work” than the team will be
                            given recommendations on things to improve and the
                            project will not be listed until these improvements
                            are made.
                        </p>
                    </li>
                </ol></p>
            </div>
            <div className="setting-option header-btn">
                <div className="icon-box d-flex justify-content-center mt--10 pb--50">
                    <Anchor path="/get-vetted">
                        <Button
                            color="primary-alta"
                            className="connectBtn"
                            size="large"
                        >
                            Get Vetted
                        </Button>
                    </Anchor>
                </div>
            </div>
        </div>
    </div>
);

VettingProcess.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
VettingProcess.defaultProps = {
    space: 1,
};

export default VettingProcess;
