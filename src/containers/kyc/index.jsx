import PropTypes from "prop-types";
import clsx from "clsx";
import KYCForm from "@components/forms/kyc-form";
import TransparentBox from "@components/transparent-box";
import Button from "@ui/button";
import { useState } from "react";
import HeadingLabel from "@components/heading-label";
import SolidBox from "../../components/solid-box";
import { ImageType } from "@utils/types";


const KYCArea = ({ space, className }) => {
    const [show, setShow] = useState(false);
    const [kycChoice, setKycChoice] = useState("");

    return (
        <div className={clsx(
            "rn-contact-top-area bg_color--5",
            space === 1 && "rn-section-gapTop",
            className
        )}>

    <div className="section-title mb--30">
        <h2 className="title text-center">KYC Services</h2>
            <p className="description text-center">
                We provide two KYC options with different requirements so 
                you can select the level of detail you want to provide your 
                project users.
            </p>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="mt--5 row g-5">
                            <div className="col-lg-6">
                                <HeadingLabel className="mt--5" style={{ padding: 4, justifyContent: "center", 
                                    alignItems: "center", display: "flex", margin: 0}} title="Option 1 (Advanced)"/>
                                <SolidBox className="rn-about-card trans-bg">
                                    <p className="description text-justify">
                                    The ValidEntry Identification Protocol consists of cutting edge biometrics, AI, 
                                    and OCR data that verifies individuals accurately and efficiently.  All individuals 
                                    who have wallet access within a project are required to go through the process which 
                                    includes a still frame photo, ID verification, video process with live facial mapping, 
                                    and a background check.  In addition, all information is run against government databases 
                                    for AML compliance.
                                    </p>
                                    <p className="description text-center">Price - $300</p>
                                    <div className="row g-5 justify-content-around plr--120">
                                        <Button color="primary-alta" className="connectBtn" size="large"
                                            onClick={() => {
                                                setShow(true);
                                                setKycChoice("Option 1");
                                                scrollTo({top: 1000, behavior: 'smooth'});
                                            }}>
                                                Get KYC
                                        </Button>
                                    </div>
                                </SolidBox>
                            </div>
                            <div className="col-lg-6">
                                <HeadingLabel className="mt--5" style={{ padding: 4, justifyContent: "center", 
                                    alignItems: "center", display: "flex", margin: 0}} title="Option 2" />
                                <SolidBox className="rn-about-card trans-bg">
                                    <p className="description text-justify">
                                        This option is a 10-step process and is an industry leading KYC 
                                        service backed by a dual layered security protocol. This option 
                                        will provide a thorough and detailed KYC seamlessly, providing 
                                        project members with a layer of anonymity while still ensuring accountability 
                                        remains a priority.<br /><br /><br />
                                    </p>
                                    <p className="description text-center">Price - $300</p>
                                    <div className="icon-box d-flex justify-content-center mt--10">
                                        <Button color="primary-alta" className="connectBtn" size="large"
                                            onClick={() => {
                                                setShow(true);
                                                setKycChoice("Option 2");
                                                scrollTo({top: 1000, behavior: 'smooth'});
                                            }}>
                                             Get KYC
                                        </Button>
                                    </div>
                                </SolidBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <KYCForm className={clsx("noShowForm", show && "showForm")} kycChoice={kycChoice}/>
        </div>
    </div>
);};

KYCArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

KYCArea.defaultProps = {
    space: 1,
};

export default KYCArea;