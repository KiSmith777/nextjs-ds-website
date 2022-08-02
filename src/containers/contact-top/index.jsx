import PropTypes from "prop-types";
import clsx from "clsx";
import AddressBox from "@components/address-box";

const ContactTopArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-top-area bg_color--5",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="section-title mb--30 text-center">
                        <h2 className="title">Quick Ways to Contact Us</h2>
                        <p className="description">
                            Feel free to submit the contact form if you need to
                            get in touch. <br /> However, these forms of contact
                            will result in a much quicker response.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="fa-brands fa-telegram"
                        title="Telegram"
                        telegrams={[
                            {
                                name: "Chris: @",
                                telegram: "DS_Founder",
                            },
                            {
                                name: "Kieran: @",
                                telegram: "DS_WebDev",
                            },
                            {
                                name: "Jake: @",
                                telegram: "GorillatheGreat",
                            },
                        ]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="fa-brands fa-twitter"
                        title="Twitter"
                        twitters={[
                            {
                                name: "DeFi Skeptic: ",
                                twitter: "@DS_Founder",
                            },
                            {
                                name: "Kieran: ",
                                twitter: "@BlckchainFuture",
                            },
                            {
                                name: "Jake: ",
                                twitter: "@jake_will1",
                            },
                        ]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="250"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="fa-brands fa-discord"
                        title="Discord"
                        discords={[
                            {
                                name: "Chris: @",
                                discordId: "194257972526972928",
                                discordName: "Chris™#1234",
                            },
                            {
                                name: "Kieran: @",
                                discordId: "289049921410301953",
                                discordName: "GiverTheWall#7949",
                            },
                            {
                                name: "Jake: @",
                                discordId: "601253904457531392",
                                discordName: "Jake CM CST#8485",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>
);

ContactTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactTopArea.defaultProps = {
    space: 1,
};

export default ContactTopArea;

