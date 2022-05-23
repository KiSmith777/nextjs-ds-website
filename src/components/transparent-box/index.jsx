import PropTypes from "prop-types";
import clsx from "clsx";

const TransparentBox = ({ className, title, subtitle, style, children}) => (
    <div style={{margin: 0, display: 'flex', justifyContent: 'center'}} className={clsx("rn-about-card transparent-bg", className)}>
        <div 
            className="inner" 
            style={{style, width: '100%'}}
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="150"
        >
            {children}
        </div>

    </div>
);

TransparentBox.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    style: PropTypes.object
};

export default TransparentBox;
