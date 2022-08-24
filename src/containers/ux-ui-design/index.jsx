import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const UXUIDesignArea = ({ space, className }) => {
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
                                UX & UI Design
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                    Our User Experience (UX) and User Interface
                                    (UI) designers have worked for Fortune 500
                                    companies and will ensure you get the
                                    highest quality design that meets every
                                    requirements and expectation you have.
                                    <br /><br />
                                    Our designers provide professional design
                                    services for any size job. Full web design,
                                    mobile apps, ad development, and game
                                    design. We also provide expert user
                                    interviews, analysis, and human engineering
                                    guidance for both hardware and software.
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

UXUIDesignArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

UXUIDesignArea.defaultProps = {
    space: 1,
};

export default UXUIDesignArea;
