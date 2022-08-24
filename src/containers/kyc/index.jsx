import PropTypes from "prop-types";
import clsx from "clsx";
import KYCForm from "@components/forms/kyc-form";
import TransparentBox from "@components/transparent-box";
import Button from "@ui/button";
import { useState } from "react";


const KYCArea = ({ space, className }) => {
    const [show, setShow] = useState(false);
    const [kycChoice, setKycChoice] = useState("");

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
                      
                    >
                        <div className="section-title mb--30">
                            <h2 className="title text-center">KYC Services</h2>
                            <p className="description text-center">
                                In collaboration with our partners at StaySAFU
                                and SEEK, we offer two KYC options.
                            </p>
                            <div className="row d-flex justify-content-center">
                                <TransparentBox className="mb--50 d-flex flex-column">
                                    <h3 className="text-center">
                                        Option 1 (StaySAFU) - $250
                                    </h3>
                                    <p className="description text-justify">
                                        The StaySAFU KYC process is a 3-step
                                        process consisting of onboarding,
                                        verification and follow-up. During the
                                        verification step you will need to
                                        verify documents such as passport or
                                        government ID in addition to proof of
                                        address. Additionally, a video
                                        submission is required also. StaySAFU
                                        also monitors the individual after the
                                        KYC process and will alert on any
                                        findings. Details are shared with
                                        Interpol if fraud occurs or is found.
                                    </p>
                                    <div className="row justify-content-center">
                                       
                                            <Button
                                                color="primary-alta"
                                                className="connectBtn"
                                                size="large"
                                                onClick={() => {
                                                    setShow(true);
                                                    setKycChoice("StaySAFU");
                                                    scrollTo({
                                                        top: 1000,
                                                        behavior: 'smooth',
                                                    });
                                                }}
                                            >
                                                Verify with StaySAFU
                                            </Button>
                                      
                                    </div>
                                </TransparentBox>
                            </div>
                            <div className="row">
                                <TransparentBox className="mb--50">
                                    <h3 className="text-center">
                                        Option 2 (SEEK) - $500
                                    </h3>
                                    <p className="description text-justify">
                                        The SEEK KYC process is an industry
                                        leading KYC service which takes the
                                        applicant through a 10 step verification
                                        process backed by a dual layered
                                        security protocol. With this process, we
                                        are able to perform a thorough and
                                        detailed KYC seamlessly, providing
                                        project members with a layer of
                                        anonymity while still ensuring
                                        accountability remains a priority.
                                    </p>
                                    <p className="description text-justify">
                                        If a project who has been KYC certified
                                        is confirmed after review to have
                                        conducted in malicious acts resulting in
                                        funds stolen from investors, the
                                        information gathered during the KYC
                                        process will be made publicly available,
                                        reported to the FBI via a direct
                                        connection portal and given to an
                                        organization that focuses on tracking
                                        these individuals down and holding them
                                        accountable.
                                    </p>
                                    <div className="row justify-content-center">
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="large"
                                            onClick={() => {
                                                setShow(true);
                                                setKycChoice("SEEK");
                                                scrollTo({
                                                    top: 1000,
                                                    behavior: 'smooth',
                                                });
                                            }}
                                        >
                                            Verify with SEEK
                                        </Button>
                                    </div>
                                </TransparentBox>
                            </div>
                            <h6 className="text-center">
                                <b>
                                    Payment methods accepted are BUSD and BNB in
                                    the amount of $750.
                                </b>
                            </h6>
                        </div>
                    </div>
                </div>
                <KYCForm
                    className={clsx("noShowForm", show && "showForm")}
                    kycChoice={kycChoice}
                />
            </div>
        </div>
    );
};

KYCArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

KYCArea.defaultProps = {
    space: 1,
};

export default KYCArea;
