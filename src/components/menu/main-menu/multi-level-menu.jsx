import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const SubSubMenu = ({ menu }) => (
    <ul className="subsubmenu">
        {menu.map((nav) => (
            <li key={nav.id}>
                <Anchor
                    path={nav.path}
                    target={nav.target}
                    className={nav.isLive ? "live-expo" : ""}
                >
                    {nav.text}
                    {nav?.icon && <i className={`feather ${nav.icon}`} />}
                </Anchor>
            </li>
        ))}
    </ul>
);

SubSubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubSubMenu;
