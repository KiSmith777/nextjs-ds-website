import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "../../components/transparent-box";
import { useState } from "react";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import SolidBox from "../../components/solid-box";

const FIATArea = ({ space, className }) => {
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
                                FIAT Onboarding 
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                <h4>FIAT to Token has never been easier!</h4>
                                Have you ever wanted to easily implement a FIAT buying method for your project
                                so your userbase could seamlessly buy your token? With this plug and play option,
                                its as simple as adding some ebeded source code to your site. With FIAT Onboarding, 
                                you can instantly give your users the ability to buy your Token using various payment 
                                methods such as:
                                <ul>
                                    <li>Apple Pay</li>
                                    <li>Google Pay</li>
                                    <li>Visa or Mastercard</li>
                                    <li>Bank Transfer</li>
                                </ul>
                                The best part is...its FREE! You can utilize FIAT Onboarding for free, however if you 
                                would like to have your project "verified" this would require a KYC that incurs a cost. 
                                For more information or to get started, click the button below. You can also see an 
                                example of this overlay below as well.
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
                                < br/>< br/>< br/>
                                <h5 className="title text-center">Example of FIAT Onboarding Embed</h5>
                                < br/>
                                <p className="title text-center">Preview Coming Soon</p>
                                {/*<div
                                    style={{ 
                                        display: "flex",
                                        alignitems: "center",
                                        justifycontent: "center",
                                        maxWidth: "35%"}}
                                    >
                                    <iframe src="https://flooz.trade/embedded/0x1234AE511876FCAaCe685fcDC292d9589A88dC2b/?refId=QHd5vF&backgroundColor=black&align=center" width="400" height="660" allow="accelerometer; autoplay; camera; gyroscope; payment" />
                                    </div>*/}
                            </TransparentBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

FIATArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

FIATArea.defaultProps = {
    space: 1,
};

export default FIATArea;
