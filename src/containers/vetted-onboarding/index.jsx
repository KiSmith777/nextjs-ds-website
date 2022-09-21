import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import HeadingLabel from "@components/heading-label";
import TransparentBox from "@components/transparent-box";
import SolidBox from "../../components/solid-box";
import Button from "@ui/button";

const OnboardingArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal show={isShareModalOpen} handleModal={shareModalHandler}/>
            <div className="container">
                <HeadingLabel className="mt--40" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0}}
                    title="Vetted Onboarding"
                />
                <TransparentBox>
                    <p className="text-justify">
                        Where other vetting services view their job as done when you have completed 
                        the vetting process, we view our job as just beginning. Completing our vetting 
                        process is the opening of a door not the closing of a door.
                    </p>  
                </TransparentBox>
                <div className="mt--5 row g-5">
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Vetted Database"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                Your project has been added to our vetted database. This will provide 
                                users your projects score in addition to the complete report and profile 
                                built on your project. We are currently building a more comprehensive 
                                database that will also pull in various data sets from various API's. 
                                Please feel free to share this with your communities.
                                <br /><br />
                            </p>
                            <div className="row g-5 justify-content-around plr--120">
                                <Button path="/vetted-projects" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    View Database
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Vetted Badge"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                Feel free to use our vetted badge anywhere you would like. We would greatly 
                                appreciate it if you added this to your homepage/website and hyperlinked it 
                                to our site. This helps spread the awareness about DeFi Skeptics vetting process.
                                <br /><br /><br />
                            </p>
                            <div className="row g-5 justify-content-around plr--120">
                                <Button path="/images/vetted-projects/VettedBadge.svg" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    SVG
                                </Button>
                                <Button path="/images/vetted-projects/VettedBadge.png" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    PNG
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Private Group"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                Please join the "Vetted Circle" private group which is a group 
                                specifically for vetted projects to get information from DeFi 
                                Skeptic, details on collaborations and network with each other. 
                                There are various use cases in this group and numerous experienced 
                                developers. This is a great way to work with others who are of the 
                                same caliber as you.
                            </p>
                            <div className="row g-5 justify-content-around plr--120">
                                <Button path="https://t.me/+ffpkOmGFdqUzM2Nh" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Join Group
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Vetted Circle Bot"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                We have a bot that is specifically for vetted projects to use. You can 
                                submit us an update anytime. We will screen it and then load it into 
                                the bot which will forward it to all channels that have it added. If 
                                you would like to participate in this free cross-community exposure 
                                service, simply add the bot. Please add as admin, you can remove all 
                                permissions, but just so rose or other bots do not delete it.
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button path="https://t.me/DSVettedBot" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Add Bot
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="MiND Token"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                            We are an exclusive partner with MiND Token. Being vetted by us automatically 
                            grants you vetted status with MiND Tokens staking pool platform. If you join 
                            as a staking partner, members on your team can receive real life benefits such 
                            as mental healthcare, financial planning, legal services, etc. Users who also 
                            stake your token will be able to receive these same benefits from LifeWorks.
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button path="https://www.mindtoken.app" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Learn More
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="CroGram"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                We are an exclusive partner with CroGram which is a mobile app specifically 
                                designed for Crypto. As a vetted project, you automatically receive the "Vetted" 
                                badge in CroGram. All you need to do is create an account and then a group for 
                                your project. Once done, let us know and we will get the Vetted Badge added to your group!
                                <br /><br />
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button path="https://crogram.app" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Learn More
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Slot Bot"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                                We have a slot machine bot which adds a fun factor to your community. Members can 
                                roll by spending 0.02 BNB. They can win various prizes up to the jackpot. Winnings 
                                are paid out in your native token via a buy and send. You will also receive a 10% 
                                bonus in BNB of whatever people win as a thank you for hosting this tool. This bonus 
                                can be directed to any wallet you want and used for anything your project chooses.
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button path="https://t.me/DS_Founder" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Add Slots
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                    <div className="col-lg-6">
                        <HeadingLabel className="mt--5" style={{padding: 4, justifyContent: "center", alignItems: "center", display: "flex", margin: 0,}}
                            title="Discounted AMA Tour"
                        />
                        <SolidBox className="rn-about-card trans-bg">
                            <p className="text-justify" style={{padding: '0px 20px'}}>
                            Through our lounge partners, we are able to provide a discounted AMA Tour saving you 2 BNB. 
                            These lounges consist of Ninja Lounge, Coin Launch Lounge, Legit Crypto Lounge and Anti Ruggers 
                            United. These lounges have a solid reputation of providing value and show strong ethics. Avoid paying 
                            for overpriced AMAs with botted loaded VC's.<br /><br /><br />
                            </p>
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button path="/vetted-ama-tour" target="_blank" color="primary-alta" className="connectBtn" size="large">
                                    Reserve Tour
                                </Button>
                            </div>
                        </SolidBox>
                    </div>
                </div>
            </div>
        </>
    );
};

OnboardingArea.propTypes = {
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
OnboardingArea.defaultProps = {
    space: 1,
};

export default OnboardingArea;