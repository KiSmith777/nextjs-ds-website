import PropTypes from "prop-types";
import clsx from "clsx";

const HeadingLabel = ({ className, title, subtitle, section, style}) => (
    <div className={clsx("rn-about-card", className)} style={style}>
        <div className="inner" style={style}>
            <section id={section}>
            <h2 
                style={style}
                className="title"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            </section>
            <p
                className="about-disc"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
            >
                {subtitle}
            </p>
        </div>
    </div>
);

HeadingLabel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    section: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default HeadingLabel;
