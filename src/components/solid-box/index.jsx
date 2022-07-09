import PropTypes from "prop-types";
import clsx from "clsx";

const SolidBox = ({ className, children, style}) => (
    <div className={clsx("rn-about-card", className)} style={style}>
        <div className="inner" style={style}>
           {children}
        </div>
    </div>
);

SolidBox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default SolidBox;
