import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const ContractCreationArea = ({ space, className }) => {
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
                                Custom Smart Contract Creation
                            </h2>
                            <TransparentBox>
                                <p className="description">
                                    This team of experienced coders will work
                                    with you to deliver an entirely customized
                                    contract. Customized smart contract creation
                                    allows catering to the project's specific
                                    needs, tailoring every aspect. This
                                    customization provides greater control over
                                    your project and ensures better security by
                                    not having unneeded functions and
                                    parameters.
                                </p>
                                <p>
                                    Typical smart contracts made include but are
                                    not limited to:
                                    <ul>
                                        <li>Tokens</li>
                                        <li>NFT's</li>
                                        <li>dApp's</li>
                                        <li>Bots</li>
                                    </ul>
                                </p>
                                <p>
                                    Gone are the days of getting cookie-cutter
                                    contracts that lack the specific functions
                                    your team wants. Avoid forking/copying an
                                    existing source code and prevent unexpected
                                    errors. Jumpstart your project today and
                                    apply for a quote below.
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

ContractCreationArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContractCreationArea.defaultProps = {
    space: 1,
};

export default ContractCreationArea;
