import PropTypes from "prop-types";
import clsx from "clsx";

const TransparentBox = ({ className, style, children, dataSal, dataSalDuration, dataSalDelay}) => (
    <div style={{margin: 0, display: 'flex', justifyContent: 'center', style}} className={clsx("rn-about-card transparent-bg", className)} >
        <div 
            className="inner" 
            style={{style, height: '100%'}}
            data-sal={dataSal}
            data-sal-duration={dataSalDuration}
            data-sal-delay={dataSalDelay}
        >
            {children}
        </div>

    </div>
);

TransparentBox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default TransparentBox;
