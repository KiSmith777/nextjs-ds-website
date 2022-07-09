import PropTypes from "prop-types";
import clsx from "clsx";
import AuditForm from "@components/forms/audit-form"

const ContractCreationArea = ({ space, className }) => (
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
                        <h2 className="title text-center">Custom Smart Contract Creation</h2>
                        <p className="description">
                            DeFi Skeptic provides full-service smart contract creation in collaboration with our partners at Dappd. Our experienced coders will work with you to deliver an entirely customized contract. 
                            Customized smart contract creation allows catering to the project’s specific needs, tailoring every aspect. 
                            This customization provides greater control over your project and ensures better security by not having unneeded functions and parameters. 
                        </p>
                        <p>
                            Typical smart contracts made include but are not limited to:
                        <ul>
                            <li>Tokens</li>
                            <li>NFT's</li>
                            <li>dApp's</li>
                        </ul></p>
                        <p>
                            Gone are the days of getting cookie-cutter contracts that lack the specific functions your team wants. 
                            Avoid forking/copying an existing source code and prevent unexpected errors. Jumpstart your project today and apply for a quote below.
                        </p>
                        <h6 className="text-center"><b>Payment methods accepted are BUSD and SKP. Pay in SKP and receive a 10% discount!</b></h6>

                    </div>
                </div>
            </div>
            <AuditForm/>
            
        </div>
    </div>
);

ContractCreationArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContractCreationArea.defaultProps = {
    space: 1,
};

export default ContractCreationArea;

