import PropTypes from "prop-types";
import clsx from "clsx";
import KYCForm from "@components/forms/kyc-form";
import TransparentBox from "@components/transparent-box";
import Button from "@ui/button";
import Image from "next/image";
import { useState } from "react";
import VettingApplication from "../../components/forms/vetting-application";

const GetVettedArea = ({ space, className }) => {
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
                                DeFi Skeptic Vetting Application
                            </h2>

                            <div className="row d-flex justify-content-center">
                                {/*<TransparentBox className="mb--50 d-flex flex-column">*/}
                                    <div className="row justify-content-center">
                                        <Image
                                            alt="DS Badge"
                                            src="/images/icons/NewVettedBadge.svg"
                                            width={280}
                                            height={280}
                                        />
                                    </div>
                                    <div className={clsx("row justify-content-center mb--50", showPrev === false && "noShowForm")}>
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="large"
                                            onClick={() => {
                                                setShow(true);
                                
                                                setShowPrev(false);
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                    <VettingApplication
                                        className={clsx(
                                            "noShowForm",
                                            show && "showForm"
                                        )}
                                    />
                                {/*</TransparentBox>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

GetVettedArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

GetVettedArea.defaultProps = {
    space: 1,
};

export default GetVettedArea;
