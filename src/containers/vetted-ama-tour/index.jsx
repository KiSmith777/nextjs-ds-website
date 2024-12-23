import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import { normalizedData } from "@utils/methods";
import amaPartnerData from "../../data/innerpages/partners.json";
import AmaPartnerLogos from "../../containers/ama-partner-logos";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const VettedAMATourArea = ({ space, className }) => {
    const content = normalizedData(amaPartnerData?.content || []);
    const [showPrev, setShowPrev] = useState(true);
    const [show, setShow] = useState(false);

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
                        <div className="section-title mb--30">
                            <h2 className="title text-center">
                                Vetted AMA Tour
                            </h2>
                            <div className="container">
                                <h4 className="title text-center">
                                    Our Vetted AMA Partners
                                </h4>
                            </div>
                            <AmaPartnerLogos
                                data={content["partner-section"]}
                            />
                            <TransparentBox>
                                <p className="description text-justify">
                                    One major issue in the DeFi space is how
                                    projects are promoted. A very effective way
                                    of reaching an audience is by directly
                                    speaking to them. However, many of these
                                    platforms conduct in unethical practices
                                    using “paid” bots to make their customer
                                    feel like they are getting more than they
                                    really are. Sometimes you may even be
                                    scammed and funds stolen. DeFi Skeptic has
                                    made an effort to source legitimate
                                    promotional platforms who do not conduct in
                                    these practices.
                                </p>
                                <p className="description text-justify">
                                    Get a full AMA tour from our vetted partners
                                    below and pay a single discounted flat rate
                                    of 10 BNB, saving you 2 BNB if you sourced
                                    them separately. If you do not want the full
                                    discounted tour, feel free to contact any of
                                    them individually as well! Avoid the
                                    over-hyped, over-priced AMA providers and
                                    stop paying to speak to bots. Schedule your 
                                    vetted AMA tour today!
                                </p>
                                <h6 className="text-center">
                                    <b>
                                        Payment methods accepted are BNB or the
                                        equivalent value in BUSD.
                                    </b>
                                </h6>
                                <div
                                    className={clsx(
                                        "setting-option header-btn pt--50",
                                        showPrev === false && "noShowForm"
                                    )}
                                >
                                    <div className="icon-box d-flex justify-content-center mt--10">
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="large"
                                            onClick={() => {
                                                setShow(true);

                                                setShowPrev(false);
                                            }}
                                        >
                                            Request Service
                                        </Button>
                                    </div>
                                </div>
                                <ServiceRequestForm
                                    className={clsx(
                                        "noShowForm",
                                        show && "showForm"
                                    )}
                                />
                            </TransparentBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

VettedAMATourArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

VettedAMATourArea.defaultProps = {
    space: 1,
};

export default VettedAMATourArea;
