import Anchor from "@ui/anchor";
import PropTypes from "prop-types";
import { ImageType } from "@utils/types";
import Button from "@ui/button";

const Service = ({ title, subtitle, path, description, image, children }) => (
    <div
        /*data-sal="slide-up"
        data-sal-delay="150"
        data-sal-duration="800"*/
        className="rn-service-page color-shape-7"
    >
        <div className="inner-servicePage flex-row justify-content-center">
            <div className="content-servicePage flex-row justify-content-center">
                <h4 className="title-servicePage align-items-center text-center pb--20">
                    {title}
                </h4>
            </div>
            <Anchor path={path}>
                <div className="icon-servicePage pb--20">
                    {image?.src && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={image.src} alt={image?.alt || title} />
                    )}
                </div>
                <div className="setting-option header-btn">
                    <div className="icon-box d-flex justify-content-center mt--10 pb--50">
                        {subtitle && (
                            <Button
                                color="primary-alta"
                                className="connectBtn"
                                size="large"
                            >
                                {subtitle}
                            </Button>
                        )}
                    </div>
                </div>
            </Anchor>
        </div>
        {children}
    </div>
);

Service.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    path: PropTypes.string,
    description: PropTypes.string,
    image: ImageType,
};

export default Service;

