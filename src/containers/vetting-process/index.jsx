import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import { Link } from "react-scroll";

const styles= {color: '#00a3ff'};
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
            {/*<div align="center">
                <iframe className="vet-vid" src="/files/video/vetting-intro.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <br /><br />*/}
            <div className="row text-justify">
                <h4>Common Questions</h4>
                <p>
                    <ol>
                        <li><Link className="" href="" to="benefits" smooth={true} duration={500} offset={-175}>
                        <div style={styles}>What are the benefits of being vetted?</div>
                        </Link></li>
                        <li><Link className="" href="" to="difference" smooth={true} duration={500} offset={-175}>
                        <div style={styles}>How is DeFi Skeptic different?</div>
                        </Link></li>
                        <li><Link className="" href="" to="price" smooth={true} duration={500} offset={-175}>
                        <div style={styles}>Why is the price so cheap?</div>
                        </Link></li>
                        <li><Link className="" href="" to="process" smooth={true} duration={500} offset={-175}>
                        <div style={styles}>What is the vetting process?</div>
                        </Link></li>
                    </ol>
                    <br /><br />
                    <h4 id="benefits">What are the benefits of being vetted?</h4>
                        By having your project vetted by DeFi Skeptic, you are supporting a higher level of transparency, 
                        security, and information. This alone is a benefit to the DeFi Space and the current and future 
                        users of your project.
                        <br /><br />
                        In addition to showing the DeFi space that your project is among a higher caliber, projects also 
                        receive the following benefits:
                        <ul>
                            <li><p>Added to the <Anchor path="/vetted-projects"><u>Vetted Database</u></Anchor> and awarded the "DS Vetted" badge.</p></li>
                            <li><p>Instantly labelled as "Vetted" in the <Anchor path="https://crogram.app"><u>CroGram</u></Anchor> mobile app once joined.</p></li>
                            <li><p>Instantly labelled as "Vetted" in the <Anchor path="https://www.mindtoken.app/"><u>MiND Token</u></Anchor> staking platform once joined.</p></li>
                            <li><p>Cross-Community promotion and networking via the "The Vetted Circle".</p></li>
                            <li><p>Free usage of community engagement bot that generates volume for your token.</p></li>
                            <li><p>Promoted various ways within the DeFi Skeptic ecosystem.</p></li>
                        </ul>
                    <br />
                    <h4 id="difference">How is DeFi Skeptic different?</h4>
                        First lets establish what “vetted” means. The completion of a contract audit or KYC does not constitute 
                        being vetted, these are merely single pieces to a larger puzzle. Any service provider that is vetting your 
                        project should be looking at every aspect of your project a providing a deep dive into the Team, Community, Code, Wallets, etc. If they 
                        are not, than they are not properly vetting the project. Simply asking the developers a few questions is not vetting a project.
                        <br /><br />
                        Where other vetting services view their job as done when you have completed the vetting process, we view our 
                        job as just beginning. Being vetted by DeFi Skeptic is a “first step” in gaining access to a long and fruitful 
                        relationship. We will work with your project in multiple ways to ensure it not only gets exposure but 
                        also that it has the necessary elements it needs to be successful long term. Completing our vetting process is 
                        the beginning of a relationship not the end.
                        <br /><br />
                    <h4 id="price">Why is the price so cheap?</h4>
                        We believe cost should never be a barrier for information and security. DeFi Skeptic vetting is $300 and will always
                        remain low cost for this reason. This service is designed for the DeFi user and the more projects we get vetted, the
                        more information the DeFi user has.
                    <br /><br />
                    <h4 id="process">What is the vetting process?</h4>
                        The DeFi Skeptic vetting process is a 5-step process as outlined below and looks at 30+ sub-elements  that fall under 7 
                        main elements.
                        <br />
                        These main elements are Core Team, Community, Purpose/Overview, Smart Contracts, Project Wallets, Pairs/Liquidity, and Pre/Post 
                        Launch Details.
                        <ol>
                            <li><p>
                                <h6>Application</h6>
                                To apply to have your project vetted, please visit the <Anchor path="/get-vetted"><u>Get Vetted</u> </Anchor> 
                                page. Please review the rest of this process so you know what to expect.
                            </p></li>
                            <li><p>
                                <h6>Initial Review</h6>
                                After a project applies, an initial review will be conducted by the DeFi Skeptic team which will look for some basic 
                                security and informational components. Before being considered for a vetting interview, projects must meet minimum
                                requirements in addition to requirements specific to the projects current phase. These are stated in the application.
                            </p></li>
                            <li><p>
                                <h6>Formal Review</h6>
                                Based on the initial review, a decision whether or not to proceed forward with a formal interview will be made. If the 
                                decision is <u>NOT</u> to proceed forward, reasons will be provided. If the decision <u>Is</u> to proceed forward, 
                                an interview will be scheduled upon completion of the vetting fee payment.
                            </p></li>
                            <li><p>
                                <h6>Vetting Interview</h6>
                                An interview will be scheduled with the team. At a minimum any team member who has access to code or funds must be present. 
                                All other team members are encouraged to attend. This interview will take roughly 30 to 90 minutes to complete depending on 
                                the project and number of members that attend. The goal of this interview is to collect information pertaining to the 30 
                                sub-elements that comprise our grading scale and review processes possible.
                                <ul>
                                    <li><p>If the team is KYC verified, the interview can be audio only.</p></li>
                                    <li><p>If the team is doxed, attendees must use video to verify themselves.</p></li>
                                </ul>    
                            </p></li>
                            <li><p>
                                <h6>Final Decision</h6>
                                After the interview is complete and the independent check is conducted, all information gathered will be validated and checked
                                for accuracy. A draft of our report will be given to the team to review before finalizing.
                                <br /><br />
                                If the project is "Vetted", than the project is granted full benefits and ongoing support as previously mentioned.
                                <br /><br />
                                If the project is “Not Vetted” than the team will be given recommendations on things we would like resolved. Once resolved,
                                the project can return and receive the vetted status at no additional cost.
                            </p></li>
                        </ol>
                </p>
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
