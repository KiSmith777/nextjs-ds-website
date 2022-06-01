import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const MultiMenu = ({ menu }) => (
    <div className="rn-megamenu">
        <div className="wrapper">
            <div className="row row--0">
                {menu.map((nav) => (
                    <div key={nav.id}>
                        {nav?.multilevelmenu && (
                            <ul>
                                {nav.multilevelmenu.map((subnav) => (
                                    <li key={subnav.id}>
                                        <Anchor path={subnav.path}>
                                            {subnav.text}
                                            {subnav?.icon && (
                                                <i
                                                    className={`feather ${subnav.icon}`}
                                                />
                                            )}
                                        </Anchor>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

MultiMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MultiMenu;
