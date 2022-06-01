import PropTypes from "prop-types";
import clsx from "clsx";

const BoxContainer = ({ className, style, title, desc, children  }) => (
    <div className={clsx("rn-about-card", className)} style={style}>
        <div style={style} className="inner">
            
                <h2 
                    className="title"
                    data-sal="slide-left"
                    data-sal-duration="1200"
                    data-sal-delay="1500"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            
            <p
                style={style}
                className="about-disc"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="150"
            >
                {desc}
            </p>
            <p
                style={style}
                className="about-disc"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
            >
                
            </p>
            {children}
        </div>
    </div>
);

BoxContainer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    style: PropTypes.object,
};

export default BoxContainer;
