import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "@components/forms/service-request";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const AuditTopArea = ({ space, className }) => {
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
                                Smart Contract Audits
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                    Smart Contract Audits will be completed from
                                    a functional perspective. We will evaluate
                                    the code, logic, efficiency and security of
                                    all protocols. This includes manual code
                                    review and penetration testing which looks
                                    for hidden vulnerabilities. A full report
                                    will be provided along with a badge you can
                                    display on your website/socials.
                                </p>
                                <p className="text-justify">
                                    Audits start at $1,000 for a basic contract
                                    audit, but will be priced depending on the
                                    complexity, protocols and how many contracts
                                    are involved.
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

AuditTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

AuditTopArea.defaultProps = {
    space: 1,
};

export default AuditTopArea;
