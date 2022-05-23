import PropTypes from "prop-types";
import clsx from "clsx";

const AddressBox = ({
    className,
    icon,
    title,
    telegrams,
    teamMember,
    twitters,
    discords,
}) => (
    <div className={clsx("rn-address", className)}>
        <div className="icon">
            <i className={icon} />
        </div>
        <div className="inner">
            <h4 className="title">{title}</h4>
            {telegrams?.map((telegram) => (
                <p key={telegram.name}>
                    <a href={`https://t.me/${telegram.telegram}`}>
                        {telegram.name}
                        {telegram.telegram}
                    </a>
                </p>
            ))}
            {twitters?.map((twitter) => (
                <p key={twitter.name}>
                    <a href={`https://twitter.com/${twitter.twitter}`}>
                        {twitter.name}
                        {twitter.twitter}
                    </a>
                </p>
            ))}
            {discords?.map((discord) => (
                <p key={discord.name}>
                    <a
                        href={`https://discordapp.com/users/${discord.discordId}`}
                    >
                        {discord.name}
                        {discord.discordName}
                    </a>
                </p>
            ))}
        </div>
    </div>
);

AddressBox.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phoneNumbers: PropTypes.arrayOf(PropTypes.string),
    emails: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
};
export default AddressBox;

