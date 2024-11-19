import { useState } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import { ImageType } from "@utils/types";
import SocialWidget from "@components/widgets/social-widget";
import teamContacts from "../../data/general/contact.json";
import SectionTitle from "@components/section-title";
import clsx from "clsx";

const TeamIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
    <div className="contentWrapper">
        <div className={clsx(
                "rn-contact-top-area bg_color--5",
                space === 1 && "rn-section-gapTop",
                className)}>
            <div className="container">
                <div className="section-title mb--30 text-center">
                    <h2 className="title">
                        The DeFi Skeptic Team
                    </h2>
                    <p className="infoBox-description">
                        DeFi Skeptic consists of various developers, designers, 
                        marketers and other individuals with capabilities to satisfy the 
                        needs of any client. Below you can find our core team and their 
                        respective roles of responsibility.
                    </p>
                </div>
            </div>
        </div>
                {/*<div className="teamHeading">The DeFi Skeptic Team</div>*/}
                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="chris"></div>
                    </div>
                    <p className="infoBox">Chris</p>
                    <p className="infoBox-jobTitle">Project Lead</p>
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
                    <p className="infoBox-jobTitle">Web & Cyber Lead</p>
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
                        game, getting involved on and off in 2016 and only
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
                    <p className="infoBox-jobTitle">Business Development Lead</p>
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
                    Jake has spent time in various roles in the career world ranging from cook to laborer, 
                    and from manager to independent business owner. Gathering knowledge from different 
                    areas in business, he has been able to understand the workings of a successful business 
                    and what it needs to reach the goals and heights it was designed to achieve. These skills 
                    will allow Jake to source reputable projects, platforms and developers who can utilize 
                    DeFi Skeptic’s services in addition to finding potential partner candidates.
                    </p>
                    <p className="infoBox-description-quote">
                        “Without networking its harder to grow your business to the heights you want to achieve.”
                    </p>
                </div>

                <div className="contentWrapper">
                    <div className="teamCard">
                        <div className="teamPic" id="melissa"></div>
                    </div>
                    <p className="infoBox">Melissa</p>
                    <p className="infoBox-jobTitle">Community Lead</p>
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
                                            socials={teamContacts.melissaSocials}
                                        ></SocialWidget>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="infoBox-description">
                    Melissa initially chose the healthcare field as it combines her passion 
                    for science and problem-solving with her love of helping and caring for 
                    others.  As a life-long scholar,  she entered into the crypto space out 
                    of curiosity and stayed for the community. She quickly became disheartened 
                    by the overwhelming amount of scams and bad actors and wants to be a part 
                    of the solution in improving the DeFi space. Recognizing that collaboration 
                    and community is pivotal to achieving this goal, Melissa aims to develop a 
                    strong and engaged community base for DeFi Skeptic as well as to form 
                    partnerships with other like-minded projects all while having a bit of fun 
                    along the way. 
                    </p>
                    <p className="infoBox-description-quote">
                        “DeFi can be scary,  but it doesn’t have to be. United together we can make this a safer place for everyone”
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
                        while furthering the development of valid crypto
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
