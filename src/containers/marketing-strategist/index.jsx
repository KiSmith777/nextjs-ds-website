import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const MarketingStrategistArea = ({ space, className }) => {
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
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="150"
                        data-sal-duration="800"
                    >
                        <div className="section-title mb--30">
                            <h2 className="title text-center">
                                Marketing Strategist
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                    Our group of experienced and vetted
                                    marketing professionals have over 30 years
                                    of collective experience in the marketing,
                                    finance and sales industries along with over
                                    15 years of collective crypto experience.
                                    They are not your standard cookie cutter
                                    “crypto marketing” group.
                                </p>
                                <p className="description text-justify">
                                    Our team will individually analyze each
                                    prospective project thoroughly starting with
                                    their development stage, marketing stage,
                                    community development, social media
                                    presence, brand awareness and the overall
                                    goal of the team/project and setup a
                                    personalized marketing strategy for each
                                    project that fits their available budget.
                                </p>
                                <h6 className="text-center">
                                    <b>
                                        Payment methods accepted are BUSD and
                                        BNB.
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

MarketingStrategistArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

MarketingStrategistArea.defaultProps = {
    space: 1,
};

export default MarketingStrategistArea;
