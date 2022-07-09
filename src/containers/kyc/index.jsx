import PropTypes from "prop-types";
import clsx from "clsx";
import KYCForm from "@components/forms/kyc-form"

const KYCArea = ({ space, className }) => (
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
                        <h2 className="title text-center">KYC Services</h2>
                        <p className="description">
                            In collaboration with our partners at SEEK, we offer an industry leading KYC service which takes the applicant through a 10 step verification 
                            process backed by a dual layered security protocol. With this process, we are able to perform a thorough and detailed KYC seamlessly, 
                            providing project members with a layer of anonymity while still ensuring accountability remains a priority.
                        </p>
                        <p>
                            If a project who has been KYC certified is confirmed after review to have conducted in malicious acts resulting in funds stolen from investors, 
                            the information gathered during the KYC process will be made publicly available, reported to the FBI via a direct connection portal and given to 
                            an organization that focuses on tracking these individuals down and holding them accountable.
                        </p>
                        <p>
                            If you are interested in obtaining one of the leading KYC verifications the space has to offer, please fill out the form below.
                        </p>
                        <h6 className="text-center">
                            <b>Payment methods accepted are BUSD and BNB in the amount of $750.</b>
                        </h6>
                    </div>
                </div>
            </div>
            <KYCForm/>
            
        </div>
    </div>
);

KYCArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

KYCArea.defaultProps = {
    space: 1,
};

export default KYCArea;

