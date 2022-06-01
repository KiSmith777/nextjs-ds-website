import PropTypes from "prop-types";
import clsx from "clsx";
import AuditForm from "@components/forms/audit-form"

const AuditTopArea = ({ space, className }) => (
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
                    <div className="section-title mb--30 text-center">
                        <h2 className="title">Smart Contract Audits</h2>
                        <p className="description">
                        Smart Contract Audits will be completed from a functional perspective. We will evaluate the code, logic, efficiency and security of all protocols. 
                        This includes manual code review and penetration testing which looks for hidden vulnerabilities. A full report will be provided along with a 
                        badge you can display on your website/socials.
                        </p>
                        <p>
                        Audits start at $1,000 for a basic contract audit, but will be priced depending on the complexity, protocols and how many contracts are involved. Please apply for a quote below to get an exact price.
                        </p>
                        <p>
                            <b>Payment methods accepted are BUSD and SKP. Pay in SKP and receive a 10% discount!</b>
                        </p>
                    </div>
                </div>
            </div>
            <AuditForm/>
            
        </div>
    </div>
);

AuditTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

AuditTopArea.defaultProps = {
    space: 1,
};

export default AuditTopArea;

