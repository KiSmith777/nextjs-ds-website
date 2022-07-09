import PropTypes from "prop-types";
import clsx from "clsx";


const DisclaimerArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h2 style={{textAlign: 'center'}}>DISCLAIMER</h2>
                        <h4 style={{textAlign: 'center'}}>Last updated January 21, 2022</h4>
                            The information provided by DeFi Skeptic (“we,” “us”, or “our”) on <a href='https://defiskeptic.com/'>https://defiskeptic.com/</a> (the “Site”) is for general informational purposes only. 
                            All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding 
                            the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE 
                            ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON 
                            THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.<br/><br/>
                        <b><h6>EXTERNAL LINKS DISCLAIMER</h6></b>
                            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties 
                            or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for 
                            accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME 
                            RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY 
                            WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING 
                            ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                    </div>
                </div>
            </div>
            
        </div>
    </div>
);

DisclaimerArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
DisclaimerArea.defaultProps = {
    space: 1,
};

export default DisclaimerArea;
