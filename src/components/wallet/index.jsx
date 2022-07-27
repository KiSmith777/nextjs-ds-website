import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const Wallet = ({ className, title, description, path, icon, color }) => (
    <Anchor path={path}>
        <div className={clsx("wallet-wrapper", className)}>
            <div className="inner">
                <div className="icon d-flex justify-content-center">
                    <i className={clsx("fa", icon, `color-${color}`)} />
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

Wallet.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
};
export default Wallet;

