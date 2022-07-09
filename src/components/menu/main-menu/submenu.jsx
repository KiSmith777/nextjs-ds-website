import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import SubSubMenu from "./multi-level-menu";
import clsx from "clsx";

const SubMenu = ({ menu }) => (
    <ul className="submenu">
        {menu.map((nav) => (
             <li
             key={nav.id}
             className={clsx(
                 !!nav.children && "has-submenu has-menu-child-item"
             )}
         >
                <Anchor
                    path={nav.path}
                    target={nav.target}
                    className={nav.isLive ? "live-expo" : ""}
                >
                    {nav.text}
                   
                </Anchor>
                {nav?.children && <SubSubMenu menu={nav.children} />}
            </li>
        ))}
    </ul>
);

SubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubMenu;
