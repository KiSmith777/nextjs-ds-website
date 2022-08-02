import PropTypes from "prop-types";
import clsx from "clsx";
import ServiceRequestForm from "../../components/forms/service-request";
import TransparentBox from "@components/transparent-box";
import { useState } from "react";
import Button from "@ui/button";

const GraphicDesignArea = ({ space, className }) => {
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
                                Graphic Design
                            </h2>
                            <TransparentBox>
                                <p className="description text-justify">
                                    Our graphic designers will create visual
                                    concepts to communicate information. They
                                    clients of all kinds create everything from
                                    banners, graphical social media posts, video
                                    intros, logo strings, flyers, logo creation
                                    and marketing materials.
                                </p>
                                <p className="description text-justify">
                                    We believe content creators should be honest
                                    and work hard to create something that
                                    communicates visually to the masses in a
                                    positive and spectacular way. Our hope is to
                                    help facilitate a space that no longer
                                    requires the question{" "}
                                    <i>"Wen Marketing?" </i>
                                    or to save you from direct messages that
                                    start with
                                    <i>"Ser, I have a marketing proposal".</i>
                                </p>
                                <p className="description text-justify">
                                    Graphics are universal communication, let
                                    our designers help you speak to everyone.
                                </p>
                                <h6 className="text-center">
                                    <b>
                                        Payment methods accepted are BUSD and
                                        BNB.
                                    </b>
                                </h6>{" "}
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

GraphicDesignArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

GraphicDesignArea.defaultProps = {
    space: 1,
};

export default GraphicDesignArea;
