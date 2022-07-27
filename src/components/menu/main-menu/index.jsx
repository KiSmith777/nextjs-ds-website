import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const MainMenu = ({ menu }) => {
    const [homePath, setHomePath] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/") {
            setHomePath(true);
            return homePath;
        } else {
            setHomePath(false);
            return homePath;
        }
    }, [homePath]);
    console.log(homePath);
    return (
        <ul className="mainmenu">
            {menu.map((nav) => (
                <div key={nav.id}>
                    {homePath && !nav.scroll && (
                        <li
                            key={nav.id}
                            className={clsx(
                                !!nav.children &&
                                    "has-droupdown has-menu-child-item"
                            )}
                        >
                            <Anchor
                                className="its_new"
                                path={nav.path}
                                target={nav.target}
                            >
                                {nav.text}
                            </Anchor>
                            {nav?.children && <SubMenu menu={nav.children} />}
                        </li>
                    )}
                    {homePath && nav.scroll && (
                        <li
                            key={nav.id}
                            className={clsx(
                                !!nav.children &&
                                    "has-droupdown has-menu-child-item"
                            )}
                        >
                            <Link
                                className="its_new"
                                href={nav.path}
                                to={nav.to}
                                target={nav.target}
                                spy
                                smooth
                                offset={-200}
                                duration={1000}
                            >
                                {nav.text}
                            </Link>
                            {nav?.children && <SubMenu menu={nav.children} />}
                        </li>
                    )}
                    {!homePath && (
                        <li
                            key={nav.id}
                            className={clsx(
                                !!nav.children &&
                                    "has-droupdown has-menu-child-item"
                            )}
                        >
                            <Anchor
                                className="its_new"
                                path={nav.path}
                                target={nav.target}
                            >
                                {nav.text}
                            </Anchor>
                            {nav?.children && <SubMenu menu={nav.children} />}
                        </li>
                    )}
                </div>
            ))}
        </ul>
    );
};

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;

