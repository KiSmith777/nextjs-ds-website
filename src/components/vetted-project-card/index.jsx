import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const VettedCard = ({ className, title, description, path, image }) => (
    <Anchor path={path}>
        <div className={clsx("wallet-wrapper", className)}>
            <div className="inner">
                <div className="icon d-flex justify-content-center">
                    {image?.src && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={image.src} alt={image?.alt || title} />
                    )}
                </div>
                <div className="content">
                    <h4 className="title text-center">{title}</h4>
                    <p className="description">{description}</p>
                </div>
            </div>

            <Anchor
                className="over-link-servicePage visually-hidden"
                path={path}
            >
                {title}
            </Anchor>
        </div>
    </Anchor>
);

VettedCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
};
export default VettedCard;
