import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import MegaMenu from "./megamenu";
import MultiMenu from "./multi-level-menu";
import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const MainMenu = ({ menu }) => (
    <ul className="mainmenu">
        {menu.map((nav) => (
            <li
                key={nav.id}
                className={clsx(
                    !!nav.children && "has-droupdown has-menu-child-item"
                )}
            >
                <Anchor className="its_new" path={nav.path} target={nav.target}>
                    {nav.text}
                </Anchor>
                {nav?.children && <SubMenu menu={nav.children} />}
            </li>
        ))}
    </ul>
);

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;

