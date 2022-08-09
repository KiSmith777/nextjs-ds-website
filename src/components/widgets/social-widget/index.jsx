import PropTypes from "prop-types";

const SocialWidget = ({ socials }) => (
    <ul className="social-copyright">
        {socials?.map((social) => (
            <li key={social.id}>
                <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                >
                    <i className={social.icon} />
                    {social.isImage && (
                        <img key={social.id} style={{paddingBottom: 5}} src="/images/socials/crogram-new.svg" /> 
                    )}
                </a>
            </li>
        ))}
    </ul>
);

SocialWidget.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default SocialWidget;