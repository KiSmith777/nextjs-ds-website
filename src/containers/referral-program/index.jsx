import PropTypes from "prop-types";
import clsx from "clsx";
import ArbitrageForm from "@components/forms/arbitrage-form";
import Image from "next/image";
import TransparentBox from "@components/transparent-box";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { useState } from "react";

const ReferralProgramArea = ({ space, className }) => {
    const [show, setShow] = useState(false);
    const [showPrev, setShowPrev] = useState(true);

    return (
        <div
            className={clsx(
                "rn-contact-top-area bg_color--5",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="section-title mb--30 text-center">
                            <h2 className="title">
                                Referral Program
                            </h2>
                        </div>
                    </div>
                </div>
                <TransparentBox>
                    <p className="text-justify">
                        We offer a super easy way to make some side money! It's
                        simple, bring DeFi Skeptic business and get a bonus!
                        <br /><br />
                        Please see the referral bonus values below:
                    </p>
                    <ul>
                        <li>$15 -<Anchor path="/contract-audits"> Contract Audits</Anchor>
                        <br /><i>+$100 bonus at 5 referred</i></li>
                        <li>$20 -<Anchor path="/web-development"> Web Development</Anchor>
                        <br /><i>+$100 bonus at 3 referred</i></li>
                        <li>$20 -<Anchor path="/ux-ui-design"> UX & UI Design</Anchor>
                        <br /><i>+$100 bonus at 3 referred</i></li>
                        <li>$20 -<Anchor path="/contract-creation"> Token, NFT & dApp Creation</Anchor>
                        <br /><i>+$100 bonus at 3 referred</i></li>
                        <li>$100 -<Anchor path="/contract-creation"> Launchpad & Marketplace Creation</Anchor>
                        <br /><i>+$300 bonus at 3 referred</i></li>
                        <li>$25 -<Anchor path="/vetting-process"> Project Vetting ( whether pass or fail )</Anchor>
                        <br /><i>+$100 bonus at 4 referred</i></li>
                        <li>$50 -<Anchor path="/vetted-ama-tour"> Vetted AMA Tour</Anchor>
                        <br /><i>+$100 bonus at 4 referred</i></li>
                    </ul>
                    <br />
                    <p className="text-justify">
                        Feel free to share our service pitch deck
                        <i className="feather-chevron-right" />
                        <Anchor path="/files/DS-Services.pdf">HERE</Anchor>
                        <br /><br />
                        Just have the project add you in the referral box when they
                        inquire about these services!
                    </p>   
                </TransparentBox>
                <br />
            </div>
        </div>
    );
};

ReferralProgramArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ReferralProgramArea.defaultProps = {
    space: 1,
};

export default ReferralProgramArea;