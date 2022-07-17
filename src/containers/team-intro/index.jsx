import { useState } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import SocialWidget from "@components/widgets/social-widget";

import teamContacts from "../../data/general/contact.json";

const TeamIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <div className="contentWrapper">
                <div className="teamHeading">The DeFi Skeptic Team</div>
                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="chris"></div>
                    </div>
                    <p className="infoBox">Chris</p>
                    <p className="infoBox-jobTitle">Founder of DeFi Skeptic</p>
                    <div className="container">
                        <div
                            className="copy-right-one ptb--20"
                            style={{ border: "none" }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div
                                        className="copyright-right"
                                        style={{
                                            justifyContent: "center",
                                            margin: 0,
                                        }}
                                    >
                                        <SocialWidget
                                            socials={teamContacts.chrisSocials}
                                        ></SocialWidget>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="infoBox-description">
                        After witnessing numerous scams, exploits and bad
                        behavior within the DeFi space, Chris decided to take
                        action into his own hands. DeFi Skeptic was launched to
                        create a platform that could independently audit a
                        project in its entirety. This idea has grown into a much
                        larger vision where DeFi Skeptic intends to provide
                        multiple products and services with the goal of
                        bettering DeFi as a whole. Chris has over 10 years of
                        professional experience within the fields of quality
                        assurance, risk management and project management.
                    </p>
                    <p className="infoBox-description-quote">
                        “I want to make DeFi as easy and safe as buying a cup of
                        coffee.”
                    </p>
                </div>

                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="kieran"></div>
                    </div>
                    <p className="infoBox">Kieran</p>
                    <p className="infoBox-jobTitle">Web & Cyber Security</p>
                    <div className="container">
                        <div
                            className="copy-right-one ptb--20"
                            style={{ border: "none" }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div
                                        className="copyright-right"
                                        style={{
                                            justifyContent: "center",
                                            margin: 0,
                                        }}
                                    >
                                        <SocialWidget
                                            socials={teamContacts.kierSocials}
                                        ></SocialWidget>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="infoBox-description">
                        Kieran is in the Cyber Security industry and truly
                        believes that blockchain is the future of technology. He
                        will be assisting with security protocols, dApp
                        creation, and other cyber-related aspects within the
                        DeFi Skeptic ecosystem. He will also help with community
                        education by offering the best practices to remain safe
                        in the crypto space. Kieran was a bit late to the crypto
                        game, getting involed on and off in 2016 and only
                        becoming very heavily involved three years later in
                        2019. Having a love for blockchain technology and
                        helping others, working with DeFi Skeptic allows him to
                        fulfill both of those passions.
                    </p>
                    <p className="infoBox-description-quote">
                        “Blockchain technology has an insane amount of potential
                        to change the world for the better; the vast majority of
                        people just don’t realize it yet.”
                    </p>
                </div>

                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="jake"></div>
                    </div>
                    <p className="infoBox">Jake</p>
                    <p className="infoBox-jobTitle">Community Management</p>
                    <div className="container">
                        <div
                            className="copy-right-one ptb--20"
                            style={{ border: "none" }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div
                                        className="copyright-right"
                                        style={{
                                            justifyContent: "center",
                                            margin: 0,
                                        }}
                                    >
                                        <SocialWidget
                                            socials={teamContacts.jakeSocials}
                                        ></SocialWidget>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="infoBox-description">
                        Jake is currently in the community service industry.
                        While doing so he has learned what best works to help
                        the community thrive as a team and grow towards the long
                        term goals needed for success. He has learned that
                        communication is one of the most important skills for
                        success and will be helping to lead for healthy
                        community relations.
                    </p>
                    <p className="infoBox-description-quote">
                        “Communication is the key to community success.”
                    </p>
                </div>

                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="joe"></div>
                    </div>
                    <p className="infoBox">Joe</p>
                    <p className="infoBox-jobTitle">UI & UX Design</p>
                    <div className="container">
                        <div
                            className="copy-right-one ptb--20"
                            style={{ border: "none" }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div
                                        className="copyright-right"
                                        style={{
                                            justifyContent: "center",
                                            margin: 0,
                                        }}
                                    >
                                        <SocialWidget
                                            socials={teamContacts.joeSocials}
                                        ></SocialWidget>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="infoBox-description">
                        Joe is an experience human factors engineer and UX
                        designer. He has spent the vast majority of his career
                        in the defense industry but recently transitioned to
                        design for private equity firms. His passion for the
                        financial markets found its way into the crypto realm in
                        2013. Working for DeFi Skeptic allows him to continue
                        his passion for users by optimizing their experience,
                        while furtherin ghte development of valid crypto
                        projects.
                    </p>
                    <p className="infoBox-description-quote">
                        “A company and product is only as good as its users.”
                    </p>
                </div>
            </div>
        </>
    );
};

TeamIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
TeamIntroArea.defaultProps = {
    space: 1,
};

export default TeamIntroArea;
