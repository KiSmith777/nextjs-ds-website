import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "../../components/transparent-box";
import { useState } from "react";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const VaaSArea = ({ space, className }) => {
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
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="150"
                        data-sal-duration="800"
                    >
                        <div className="section-title mb--30">
                            <h2 className="title text-center">
                                Vetting as a Service 
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                <h4>Designed to integrate into your use case!</h4>
                                Vetting as a service (VaaS) allows the project/platform owner to add a 
                                security layer to their use case without adding additional work 
                                for their team or cost to their ecosystem. Does your project/platform 
                                interact with other projects on a regular basis? Would having a thorough 
                                screening process provide additional value? The entire DeFi Skeptic vetting 
                                process can seamlessly be integrated into your use case at no upfront cost 
                                to your project. Projects or platforms that could benefits from this include, 
                                but are not limited to:
                                </p>
                                <p>
                                View our <Anchor path="/vetting-process"><u>Vetting Process</u></Anchor> to 
                                get more information on how projects become vetted! 
                                </p>
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

VaaSArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

VaaSArea.defaultProps = {
    space: 1,
};

export default VaaSArea;
