import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "../../components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const WebDevelopmentArea = ({ space, className }) => {
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
                                Web Development
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                    Need front or back end web development? You
                                    have come to the right place. This skilled
                                    team of full stack engineers have built
                                    hundreds of websites between them and can
                                    support your project's needs. They will work
                                    with you to understand your exact needs and
                                    cater your functionality to your exact
                                    specifications.
                                </p>
                                <p>
                                    Don't forget, we also offer UX/UI design
                                    which complements this service well!
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

WebDevelopmentArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

WebDevelopmentArea.defaultProps = {
    space: 1,
};

export default WebDevelopmentArea;
