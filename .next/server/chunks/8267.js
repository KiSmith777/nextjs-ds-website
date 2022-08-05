"use strict";
exports.id = 8267;
exports.ids = [8267];
exports.modules = {

/***/ 1257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1967);

/* eslint-disable react/button-has-type */ 


const Button = ({ children , id , type , label , onClick , className , path , size , color , fullwidth , ...rest })=>{
    if (path) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            label: label,
            onClick: onClick,
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "btn", `btn-${size}`, `btn-${color}`, fullwidth && "w-100 d-block"),
            path: path,
            ...rest,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": label,
        onClick: onClick,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "btn", `btn-${size}`, `btn-${color}`, fullwidth && "w-100 d-block"),
        type: type,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: children
        })
    });
};
Button.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "button",
        "submit",
        "reset"
    ]),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "large",
        "small",
        "medium"
    ]),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "primary-alta"
    ]),
    fullwidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Button.defaultProps = {
    type: "button",
    size: "large",
    color: "primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 5649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const SocialWidget = ({ socials  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "social-copyright",
        children: socials?.map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: social.link,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": social.title,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: social.icon
                    })
                })
            }, social.id))
    });
SocialWidget.propTypes = {
    socials: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        id: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        ]).isRequired,
        icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialWidget);


/***/ }),

/***/ 8523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3451);
;// CONCATENATED MODULE: ./src/components/widgets/logo-widget/index.jsx



const LogoWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                logo: data.logo
            }),
            data?.text && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "rn-footer-describe",
                children: data.text
            })
        ]
    });
LogoWidget.propTypes = {
    data: external_prop_types_default().shape({
        logo: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            src: (external_prop_types_default()).string.isRequired,
            alt: (external_prop_types_default()).string
        })),
        text: (external_prop_types_default()).string
    })
};
/* harmony default export */ const logo_widget = (LogoWidget);

;// CONCATENATED MODULE: ./src/components/widgets/newsletter-widget/index.jsx


const NewsletterWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "widget-bottom mt--40 pt--40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "title",
                children: data.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "input-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "form-control bg-color--2",
                        placeholder: "Your username",
                        "aria-label": "Recipient's username"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "input-group-append",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-primary-alta btn-outline-secondary",
                            type: "button",
                            children: "Subscribe"
                        })
                    })
                ]
            }),
            data?.note && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "newsletter-dsc",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: data.note
                })
            })
        ]
    });
NewsletterWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        note: (external_prop_types_default()).string
    })
};
/* harmony default export */ const newsletter_widget = ((/* unused pure expression or super */ null && (NewsletterWidget)));

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(1967);
;// CONCATENATED MODULE: ./src/components/widgets/quicklink-widget/index.jsx



const QuicklinkWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-widget widget-quicklink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "widget-title",
                children: data.title
            }),
            data?.menu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-list-one",
                children: data.menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "single-list",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: nav.path,
                            target: nav.target,
                            children: nav.text
                        })
                    }, nav.id))
            })
        ]
    });
QuicklinkWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const quicklink_widget = (QuicklinkWidget);

;// CONCATENATED MODULE: ./src/components/widgets/information-widget/index.jsx



const InformationWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-widget widget-information",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "widget-title",
                children: data.title
            }),
            data?.menu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-list-one",
                children: data.menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "single-list",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: nav.path,
                            target: nav.target,
                            children: nav.text
                        })
                    }, nav.id))
            })
        ]
    });
InformationWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired,
            target: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const information_widget = (InformationWidget);

;// CONCATENATED MODULE: ./src/components/widgets/footer-link-widget/index.jsx



const FooterLinkWidget = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "privacy",
        children: data?.menu?.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    path: nav.path,
                    children: nav.text
                })
            }, nav.id))
    });
FooterLinkWidget.propTypes = {
    data: external_prop_types_default().shape({
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const footer_link_widget = (FooterLinkWidget);

// EXTERNAL MODULE: ./src/components/widgets/social-widget/index.jsx
var social_widget = __webpack_require__(5649);
;// CONCATENATED MODULE: ./src/data/general/footer.json
const footer_namespaceObject = JSON.parse('{"e7":{"logo":[{"src":"/images/logo/logo-transparent.png","alt":"logo"}],"text":"Dedicated to the betterment of Decentralized Finance."},"zT":{"title":"DeFi Skeptic","menu":[{"id":1,"text":"Skeptic Token","path":"/token"},{"id":2,"text":"First Skeptics NFT","path":"/first-skeptics"},{"id":3,"text":"Contracts","path":"https://docs.defiskeptic.com/defi-skeptic-contracts","target":"_self"}]},"zn":{"title":"Information","menu":[{"id":1,"text":"Whitepaper","path":"https://docs.defiskeptic.com","target":"_self"},{"id":2,"text":"SKP Audit","path":"/files/audit.pdf"},{"id":3,"text":"KYC","path":"/files/kyc.pdf"}]},"oS":{"title":"Services","menu":[{"id":1,"text":"Developer Services","path":"/developer-services"},{"id":2,"text":"User Services","path":"/user-services"}]},"zk":{"menu":[{"id":1,"text":"Terms","path":"/terms-of-use"},{"id":2,"text":"Privacy","path":"/privacy-policy"},{"id":3,"text":"Cookies","path":"/cookie-policy"},{"id":4,"text":"Disclaimer","path":"/disclaimer"}]},"M6":"©2022 DeFi Skeptic. All rights reserved"}');
// EXTERNAL MODULE: ./src/data/general/contact.json
var contact = __webpack_require__(6777);
;// CONCATENATED MODULE: ./src/layouts/footer.jsx









// Demo data


const Footer = ({ space , className  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("rn-footer-one bg-color--1", space === 1 && "rn-section-gap mt--100 mt_md--80 mt_sm--80", space === 2 && "rn-section-gap", className),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row gx-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "widget-content-wrapper",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo_widget, {
                                        data: footer_namespaceObject.e7
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(quicklink_widget, {
                                    data: footer_namespaceObject.zT
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(information_widget, {
                                    data: footer_namespaceObject.zn
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(information_widget, {
                                    data: footer_namespaceObject.oS
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copy-right-one ptb--20 bg-color--1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "copyright-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: footer_namespaceObject.M6
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(footer_link_widget, {
                                            data: footer_namespaceObject.zk
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(social_widget/* default */.Z, {
                                        socials: contact/* socials */.UY
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
Footer.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string
};
Footer.defaultProps = {
    space: 1
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 9088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var components_logo = __webpack_require__(3451);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(1967);
;// CONCATENATED MODULE: ./src/components/menu/main-menu/multi-level-menu.jsx



const SubSubMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "subsubmenu",
        children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                    path: nav.path,
                    target: nav.target,
                    className: nav.isLive ? "live-expo" : "",
                    children: [
                        nav.text,
                        nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `feather ${nav.icon}`
                        })
                    ]
                })
            }, nav.id))
    });
SubSubMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const multi_level_menu = (SubSubMenu);

;// CONCATENATED MODULE: ./src/components/menu/main-menu/submenu.jsx





const SubMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "submenu",
        children: menu.map((nav)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: external_clsx_default()(!!nav.children && "has-submenu has-menu-child-item"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: nav.path,
                        target: nav.target,
                        className: nav.isLive ? "live-expo" : "",
                        children: nav.text
                    }),
                    nav?.children && /*#__PURE__*/ jsx_runtime_.jsx(multi_level_menu, {
                        menu: nav.children
                    })
                ]
            }, nav.id))
    });
SubMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const submenu = (SubMenu);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/components/menu/main-menu/index.jsx







const MainMenu = ({ menu  })=>{
    const { 0: homePath , 1: setHomePath  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (window.location.pathname === "/") {
            setHomePath(true);
            return homePath;
        } else {
            setHomePath(false);
            return homePath;
        }
    }, [
        homePath
    ]);
    console.log(homePath);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "mainmenu",
        children: menu.map((nav)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    homePath && !nav.scroll && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: external_clsx_default()(!!nav.children && "has-droupdown has-menu-child-item"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                className: "its_new",
                                path: nav.path,
                                target: nav.target,
                                children: nav.text
                            }),
                            nav?.children && /*#__PURE__*/ jsx_runtime_.jsx(submenu, {
                                menu: nav.children
                            })
                        ]
                    }, nav.id),
                    homePath && nav.scroll && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: external_clsx_default()(!!nav.children && "has-droupdown has-menu-child-item"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                className: "its_new",
                                href: nav.path,
                                to: nav.to,
                                target: nav.target,
                                spy: true,
                                smooth: true,
                                offset: -200,
                                duration: 1000,
                                children: nav.text
                            }),
                            nav?.children && /*#__PURE__*/ jsx_runtime_.jsx(submenu, {
                                menu: nav.children
                            })
                        ]
                    }, nav.id),
                    !homePath && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: external_clsx_default()(!!nav.children && "has-droupdown has-menu-child-item"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                className: "its_new",
                                path: nav.path,
                                target: nav.target,
                                children: nav.text
                            }),
                            nav?.children && /*#__PURE__*/ jsx_runtime_.jsx(submenu, {
                                menu: nav.children
                            })
                        ]
                    }, nav.id)
                ]
            }, nav.id))
    });
};
MainMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const main_menu = (MainMenu);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/offcanvas.jsx




const Offcanvas = /*#__PURE__*/ (0,external_react_.memo)(({ children , className , isOpen , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("popup-mobile-menu", isOpen ? "active" : "", className),
        onClick: onClick,
        onKeyPress: onClick,
        role: "button",
        tabIndex: 0,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "inner",
            onClick: (e)=>e.stopPropagation(),
            onKeyPress: onClick,
            role: "button",
            tabIndex: 0,
            children: children
        })
    }));
Offcanvas.displayName = "Offcanvas";
Offcanvas.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).node,
    isOpen: (external_prop_types_default()).bool.isRequired,
    onClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const offcanvas = (Offcanvas);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/header.jsx



const OffcanvasHeader = ({ className , onClick , children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("header-top", className),
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "close-menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "close-button",
                    type: "button",
                    onClick: onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "feather-x"
                    })
                })
            })
        ]
    });
OffcanvasHeader.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).string,
    onClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const header = (OffcanvasHeader);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/body.jsx



const OffcanvasBody = ({ children , className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(className, "content"),
        children: children
    });
OffcanvasBody.propTypes = {
    className: (external_prop_types_default()).node,
    children: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const body = (OffcanvasBody);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/index.js




// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(5369);
;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/submenu.jsx



const submenu_SubMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "submenu mobile-menu-children",
        children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                    path: nav.path,
                    children: [
                        nav.text,
                        nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `feather ${nav.icon}`
                        })
                    ]
                })
            }, nav.id))
    });
submenu_SubMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const mobile_menu_submenu = (submenu_SubMenu);

;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/megamenu.jsx



const MegaMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-megamenu mobile-menu-children",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row row--0",
                children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 single-mega-item",
                        children: nav?.submenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "mega-menu-item",
                            children: nav.submenu.map((subnav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                        path: subnav.path,
                                        children: [
                                            subnav.text,
                                            subnav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `feather ${subnav.icon}`
                                            })
                                        ]
                                    })
                                }, subnav.id))
                        })
                    }, nav.id))
            })
        })
    });
MegaMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const megamenu = (MegaMenu);

;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/index.jsx









const MobileMenu = ({ isOpen , onClick , menu , logo  })=>{
    const onClickHandler = (e)=>{
        e.preventDefault();
        const { target  } = e;
        const { parentElement: { parentElement: { childNodes  } ,  } , nextElementSibling ,  } = target;
        (0,methods.slideToggle)(nextElementSibling);
        childNodes.forEach((child)=>{
            if (child.id === target.parentElement.id) return;
            if (child.classList.contains("has-children")) {
                (0,methods.slideUp)(child.lastElementChild);
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(offcanvas, {
        isOpen: isOpen,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                onClick: onClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_logo/* default */.Z, {
                    logo: logo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(body, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mainmenu",
                        children: menu?.map((nav)=>{
                            const hasChildren = !!nav.children || !!nav.megamenu;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: external_clsx_default()(!!nav.children && "has-droupdown", !!nav.megamenu && "with-megamenu", hasChildren && "has-children"),
                                id: nav.id,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        className: "nav-link its_new",
                                        path: hasChildren ? "#!" : nav.path,
                                        onClick: hasChildren ? onClickHandler : (e)=>e,
                                        children: nav.text
                                    }),
                                    nav?.children && /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu_submenu, {
                                        menu: nav.children
                                    }),
                                    nav?.megamenu && /*#__PURE__*/ jsx_runtime_.jsx(megamenu, {
                                        menu: nav.megamenu
                                    })
                                ]
                            }, nav.id);
                        })
                    })
                })
            })
        ]
    });
};
MobileMenu.propTypes = {
    isOpen: (external_prop_types_default()).bool.isRequired,
    onClick: (external_prop_types_default()).func.isRequired,
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    logo: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        src: (external_prop_types_default()).string.isRequired,
        alt: (external_prop_types_default()).string
    }))
};
/* harmony default export */ const mobile_menu = (MobileMenu);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/components/color-switcher/index.jsx




const ColorSwitcher = ()=>{
    const { setTheme  } = (0,external_next_themes_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "setColor",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: external_clsx_default()("light switch-btn"),
                onClick: ()=>setTheme("light"),
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/icons/sun-01.svg",
                    alt: "Sun images",
                    layout: "fixed",
                    width: 16,
                    height: 16
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: external_clsx_default()("dark switch-btn"),
                onClick: ()=>setTheme("dark"),
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/icons/vector.svg",
                    alt: "Vector Images",
                    layout: "fixed",
                    width: 16,
                    height: 16
                })
            })
        ]
    });
};
/* harmony default export */ const color_switcher = (ColorSwitcher);

;// CONCATENATED MODULE: ./src/components/ui/burger-button/index.jsx



const BurgerButton = ({ className , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: external_clsx_default()(className, "hamberger-button"),
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "feather-menu"
        })
    });
BurgerButton.propTypes = {
    className: (external_prop_types_default()).string,
    onClick: (external_prop_types_default()).func
};
/* harmony default export */ const burger_button = (BurgerButton);

// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(1257);
// EXTERNAL MODULE: ./src/hooks/index.js + 4 modules
var hooks = __webpack_require__(1029);
;// CONCATENATED MODULE: ./src/data/general/header.json
const general_header_namespaceObject = JSON.parse('{"j":[{"src":"/images/logo/logo-transparent.png"},{"src":"/images/logo/logo-transparent.png"}]}');
;// CONCATENATED MODULE: ./src/data/general/newmenu.json
const newmenu_namespaceObject = JSON.parse('[{"id":1,"text":"Home","path":"/","scroll":true,"to":"home"},{"id":2,"text":"Token & NFT","path":"/#token","scroll":true,"to":"token","icon":"feather-chevron-down","children":[{"id":21,"text":"Skeptic Token (SKP)","path":"/token"},{"id":22,"text":"First Skeptics NFT","path":"/first-skeptics"},{"id":23,"text":"Audit","path":"/files/audit.pdf"}]},{"id":3,"text":"Project Vetting","path":"/vetting-process","icon":"feather-chevron-right","children":[{"id":311,"text":"Vetted Projects","path":"/vetted-projects"},{"id":312,"text":"Get Vetted","path":"/get-vetted"},{"id":313,"text":"Vetting Process","path":"/vetting-process"}]},{"id":4,"text":"Products & Services","path":"/services","icon":"feather-chevron-right","children":[{"id":41,"text":"For DeFi Developers","path":"/developer-services"},{"id":42,"text":"For DeFi Users","path":"/user-services"},{"id":43,"text":"Referral Program","path":"/referral-program"}]},{"id":5,"text":"About","path":"/#about","to":"about","scroll":true,"icon":"feather-chevron-down","children":[{"id":51,"text":"DS Team","path":"/team"},{"id":52,"text":"Whitepaper","path":"https://docs.defiskeptic.com","target":"_self"},{"id":53,"text":"KYC - InterFi","path":"/files/kyc.pdf"},{"id":54,"text":"Partners & Affiliates","path":"/partners"},{"id":55,"text":"Contact","path":"/contact"}]}]');
;// CONCATENATED MODULE: ./src/layouts/header.jsx













const Header = ({ className , menu  })=>{
    const sticky = (0,hooks/* useSticky */.Ax)();
    const { offcanvas , offcanvasHandler  } = (0,hooks/* useOffcanvas */.vI)();
    function getItem() {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: external_clsx_default()("rn-header haeder-default black-logo-version header--fixed header--sticky", sticky && "sticky", className),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_logo/* default */.Z, {
                                        logo: general_header_namespaceObject.j
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mainmenu-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            id: "sideNav",
                                            className: "mainmenu-nav d-none d-xl-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(main_menu, {
                                                menu: newmenu_namespaceObject
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option header-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                path: "https://app.defiskeptic.com",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                    color: "primary-alta",
                                                    className: "connectBtn",
                                                    size: "small",
                                                    children: "Launch App"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option mobile-menu-bar d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hamberger",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(burger_button, {
                                                onClick: offcanvasHandler
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "my_switcher",
                                        className: "setting-option my_switcher",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(color_switcher, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu, {
                isOpen: offcanvas,
                onClick: offcanvasHandler,
                menu: newmenu_namespaceObject,
                logo: general_header_namespaceObject.j
            })
        ]
    });
};
Header.propTypes = {
    className: (external_prop_types_default()).string
};
/* harmony default export */ const layouts_header = (Header);


/***/ }),

/***/ 5369:
/***/ ((module) => {


/* eslint-disable indent */ /* eslint-disable no-confusing-arrow */ /* eslint-disable no-unused-expressions */ /* eslint-disable no-param-reassign */ function slideUp(element, duration = 500) {
    return new Promise((resolve, _reject)=>{
        element.style.height = `${element.offsetHeight}px`;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = `${duration}ms`;
        element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(()=>{
            element.style.display = "none";
            element.style.removeProperty("height");
            element.style.removeProperty("padding-top");
            element.style.removeProperty("padding-bottom");
            element.style.removeProperty("margin-top");
            element.style.removeProperty("margin-bottom");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
            resolve(false);
        }, duration);
    });
}
function slideDown(element, duration = 500) {
    return new Promise((_resolve, _reject)=>{
        element.style.removeProperty("display");
        let { display  } = window.getComputedStyle(element);
        if (display === "none") display = "block";
        element.style.display = display;
        const height = element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = `${duration}ms`;
        element.style.height = `${height}px`;
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        window.setTimeout(()=>{
            element.style.removeProperty("height");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
        }, duration);
    });
}
function slideToggle(element, duration = 500) {
    if (window.getComputedStyle(element).display === "none") {
        return slideDown(element, duration);
    }
    return slideUp(element, duration);
}
const flatDeep = (arr, d = 1)=>d > 0 ? arr.reduce((acc, val)=>acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice();
function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
function normalizedData(data, key = "section") {
    let allContent;
    data.forEach((item)=>{
        const newObj = Object.entries(item).reduce((acc, cur)=>{
            const [k, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [k]: property
            };
        }, {});
        allContent = {
            ...allContent,
            [newObj[key]]: {
                ...newObj
            }
        };
    });
    return allContent;
}
const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec", 
];
const getMonth = (date)=>months[date.getMonth()];
const containsObject = (obj, list)=>{
    let i;
    for(i = 0; i < list.length; i++){
        if (list[i].slug === obj.slug) {
            return i;
        }
    }
    return -1;
};
const shuffleArray = (array)=>{
    const newArr = array.slice();
    for(let i = newArr.length - 1; i > 0; i--){
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [
            newArr[rand],
            newArr[i]
        ];
    }
    return newArr;
};
const hasKey = (obj, key)=>!!Object.prototype.hasOwnProperty.call(obj, key);
const isEmpty = (obj)=>{
    // eslint-disable-next-line no-restricted-syntax
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
};
module.exports = {
    slideUp,
    slideDown,
    slideToggle,
    flatDeep,
    normalizedData,
    slugify,
    getMonth,
    containsObject,
    shuffleArray,
    hasKey,
    isEmpty
};


/***/ }),

/***/ 6777:
/***/ ((module) => {

module.exports = JSON.parse('{"UY":[{"id":1,"icon":"fa-brands fa-telegram","link":"https://t.me/DeFi_Skeptic","title":"DeFi Skeptic Announcements"},{"id":2,"icon":"fa-brands fa-telegram","link":"https://t.me/SkepticToken","title":"Skeptic Token"},{"id":3,"icon":"fa-brands fa-twitter","link":"https://twitter.com/DefiSkeptic","title":"Twitter"},{"id":4,"icon":"fa-brands fa-medium","link":"https://medium.com/@DeFi-Skeptic","title":"Medium"},{"id":5,"icon":"fa-solid fa-envelope","link":"mailto:contact@defiskeptic.com","title":"mail"}],"om":[{"id":1,"icon":"fa-brands fa-telegram","link":"https://t.me/DS_Founder","title":"Chris Telegram"},{"id":2,"icon":"fa-solid fa-envelope","link":"mailto:chris@defiskeptic.com","title":"Chris Email"},{"id":3,"icon":"fa-brands fa-twitter","link":"https://twitter.com/DS_Founder","title":"Chris Twitter"}],"$M":[{"id":1,"icon":"fa-brands fa-telegram","link":"https://t.me/DS_WebDev","title":"Kieran Telegram"},{"id":2,"icon":"fa-solid fa-envelope","link":"mailto:kieran@defiskeptic.com","title":"Kieran Email"},{"id":3,"icon":"fa-brands fa-twitter","link":"https://twitter.com/BlckchainFuture","title":"Kieran Twitter"}],"Q6":[{"id":1,"icon":"fa-brands fa-telegram","link":"https://t.me/jake_will1","title":"Jake Telegram"},{"id":2,"icon":"fa-solid fa-envelope","link":"mailto:jake@defiskeptic.com","title":"Jake Email"},{"id":3,"icon":"fa-brands fa-twitter","link":"https://twitter.com/skepticcmo","title":"Jake Twitter"}]}');

/***/ })

};
;