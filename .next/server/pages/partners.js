"use strict";
(() => {
var exports = {};
exports.id = 3195;
exports.ids = [3195];
exports.modules = {

/***/ 1483:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const Sticky = ({ children , className , top  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("widge-wrapper", className),
        style: {
            top
        },
        children: children
    });
Sticky.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Sticky.defaultProps = {
    top: "100px"
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Sticky)));


/***/ }),

/***/ 4159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_partners)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/section-title/index.jsx
var section_title = __webpack_require__(7382);
;// CONCATENATED MODULE: ./src/components/box-container/index.jsx



const BoxContainer = ({ className , style , title , desc , children  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-about-card", className),
        style: style,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: style,
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "title",
                    "data-sal": "slide-left",
                    "data-sal-duration": "1200",
                    "data-sal-delay": "1500",
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: style,
                    className: "about-disc",
                    "data-sal": "slide-up",
                    "data-sal-duration": "1200",
                    "data-sal-delay": "150",
                    children: desc
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: style,
                    className: "about-disc",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150"
                }),
                children
            ]
        })
    });
BoxContainer.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    desc: (external_prop_types_default()).string,
    style: (external_prop_types_default()).object
};
/* harmony default export */ const box_container = (BoxContainer);

// EXTERNAL MODULE: ./src/components/ui/sticky/index.jsx
var sticky = __webpack_require__(1483);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(312);
// EXTERNAL MODULE: ./src/components/heading-label/index.jsx
var heading_label = __webpack_require__(9966);
// EXTERNAL MODULE: ./src/components/transparent-box/index.jsx
var transparent_box = __webpack_require__(3442);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(1967);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(1257);
;// CONCATENATED MODULE: ./src/components/modals/partner-modal/index.jsx






const PartnerModal = ({ show , handleModal , key , group , title , telegram , website , desc1 , desc2 , desc3 , items  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
        className: "rn-popup-modal report-modal-wrapper",
        show: show,
        onHide: handleModal,
        centered: true,
        children: [
            show && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "btn-close",
                "aria-label": "Close",
                onClick: handleModal,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "feather-x"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                style: {
                    display: "flex",
                    justifyContent: "center"
                },
                className: "report-modal-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    style: {
                        textAlign: "center"
                    },
                    className: "modal-title",
                    children: title
                })
            }),
            group === "Launchpad & App Partners" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            desc1,
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "For more information, please visit ",
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: website,
                                children: title
                            }),
                            ".",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: desc2
                            }),
                            " ",
                            desc3
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-form-box",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            className: "report-button",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                    size: "medium",
                                    className: "mr--10 w-auto",
                                    path: website,
                                    children: [
                                        "Visit ",
                                        title
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    size: "medium",
                                    color: "primary-alta",
                                    className: "w-auto",
                                    onClick: handleModal,
                                    children: "Close"
                                })
                            ]
                        })
                    })
                ]
            }),
            group === "Service Provider Partners" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            desc1,
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "For more information, please visit ",
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: website,
                                children: title
                            }),
                            ".",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: desc2
                            }),
                            " ",
                            desc3
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-form-box",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            className: "report-button",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                    size: "medium",
                                    className: "mr--10 w-auto",
                                    path: website,
                                    children: [
                                        "Visit ",
                                        title
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    size: "medium",
                                    color: "primary-alta",
                                    className: "w-auto",
                                    onClick: handleModal,
                                    children: "Close"
                                })
                            ]
                        })
                    })
                ]
            }),
            group === "Affiliates" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            desc1,
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "For more information, please visit ",
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: website,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                children: [
                                    desc2,
                                    "."
                                ]
                            }),
                            " ",
                            desc3
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-form-box",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            className: "report-button",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                    size: "medium",
                                    className: "mr--10 w-auto",
                                    path: website,
                                    children: [
                                        "Visit ",
                                        title
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    size: "medium",
                                    color: "primary-alta",
                                    className: "w-auto",
                                    onClick: handleModal,
                                    children: "Close"
                                })
                            ]
                        })
                    })
                ]
            }),
            group === "AMA & Promotional Groups" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            desc1,
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "For more information, please visit ",
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: website,
                                children: title
                            }),
                            ".",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                children: [
                                    desc2,
                                    title,
                                    "."
                                ]
                            }),
                            " ",
                            desc3
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-form-box",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            className: "report-button",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                    size: "medium",
                                    className: "mr--10 w-auto",
                                    path: website,
                                    children: [
                                        "Visit ",
                                        title
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    size: "medium",
                                    color: "primary-alta",
                                    className: "w-auto",
                                    onClick: handleModal,
                                    children: "Close"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
PartnerModal.propTypes = {
    show: (external_prop_types_default()).bool.isRequired,
    handleModal: (external_prop_types_default()).func.isRequired,
    items: external_prop_types_default().arrayOf(types/* PartnerType */.Ky)
};
/* harmony default export */ const partner_modal = (PartnerModal);

;// CONCATENATED MODULE: ./src/components/partner/index.jsx








const Partner = ({ style , underCount , overlay , title , telegram , website , desc1 , desc2 , desc3 , image , id , items , group  })=>{
    const { 0: showPartnerModal , 1: setShowPartnerModal  } = (0,external_react_.useState)(false);
    const handlePartnerModal = ()=>{
        setShowPartnerModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: id,
                className: external_clsx_default()("product-style-two", !overlay && "no-overlay"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-thumbnail",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: handlePartnerModal,
                        children: image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.src,
                            alt: image?.alt || "NFT_portfolio",
                            width: 550,
                            height: 533
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            justifyContent: "center"
                        },
                        className: "product-share-wrapper",
                        type: "Partners",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: title
                        })
                    }),
                    telegram && /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: `https://t.me/${telegram}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                textAlign: "center"
                            },
                            className: "product-name",
                            children: "Telegram"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: website,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                textAlign: "center"
                            },
                            className: "product-name",
                            children: "Website"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(partner_modal, {
                show: showPartnerModal,
                handleModal: handlePartnerModal,
                title: title,
                telegram: telegram,
                website: website,
                desc1: desc1,
                desc2: desc2,
                desc3: desc3,
                items: items,
                group: group
            })
        ]
    });
};
Partner.propTypes = {
    overlay: (external_prop_types_default()).bool,
    id: (external_prop_types_default()).number.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    telegram: (external_prop_types_default()).string.isRequired,
    website: (external_prop_types_default()).string.isRequired,
    desc1: (external_prop_types_default()).string,
    desc2: (external_prop_types_default()).string,
    desc3: (external_prop_types_default()).string,
    style: (external_prop_types_default()).object,
    image: types/* ImageType */.__
};
Partner.defaultProps = {
    overlay: false
};
/* harmony default export */ const components_partner = (Partner);

;// CONCATENATED MODULE: ./src/containers/partner-cards/index.jsx






const ExplorePartnerArea = ({ title , items , id , className , space  })=>{
    const { 0: partnerUnderCount , 1: setPartnerUnderCount  } = (0,external_react_.useState)(false);
    const { 0: affiliateUnderCount , 1: setAffiliateUnderCount  } = (0,external_react_.useState)(false);
    const { 0: promoterUnderCount , 1: setPromoterUnderCount  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (items[1].launchpadsApps.length < 2) {
            setPartnerUnderCount(true);
        }
        if (items[3].affiliates.length < 2) {
            setAffiliateUnderCount(true);
        }
        if (items[4].promoters.length < 2) {
            setPromoterUnderCount(true);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    style: {
                        gap: 32,
                        justifyContent: "space-evenly"
                    },
                    children: [
                        title === "Launchpad & App Partners" && items[1].launchpadsApps.map((partner)=>/*#__PURE__*/ jsx_runtime_.jsx(components_partner, {
                                style: {
                                    width: 10,
                                    height: 100
                                },
                                overlay: true,
                                id: !partnerUnderCount ? partner.id : "underCount",
                                group: items[1].title,
                                items: items,
                                title: partner.title,
                                telegram: partner.telegram,
                                website: partner.website,
                                desc1: partner.desc1,
                                desc2: partner.desc2,
                                desc3: partner.desc3,
                                image: partner.image?.[0]
                            }, partner.id)),
                        title === "Service Provider Partners" && items[2].serviceProviders.map((partner)=>/*#__PURE__*/ jsx_runtime_.jsx(components_partner, {
                                style: {
                                    width: 10,
                                    height: 100
                                },
                                overlay: true,
                                id: !partnerUnderCount ? partner.id : "underCount",
                                group: items[2].title,
                                items: items,
                                title: partner.title,
                                telegram: partner.telegram,
                                website: partner.website,
                                desc1: partner.desc1,
                                desc2: partner.desc2,
                                desc3: partner.desc3,
                                image: partner.image?.[0]
                            }, partner.id)),
                        title === "Affiliates" && items[3].affiliates.map((affiliate)=>/*#__PURE__*/ jsx_runtime_.jsx(components_partner, {
                                style: {
                                    width: 10,
                                    height: 100
                                },
                                overlay: true,
                                id: !affiliateUnderCount ? affiliate.id : "underCount",
                                group: items[3].title,
                                items: items,
                                title: affiliate.title,
                                telegram: affiliate.telegram,
                                website: affiliate.website,
                                desc1: affiliate.desc1,
                                desc2: affiliate.desc2,
                                desc3: affiliate.desc3,
                                image: affiliate.image?.[0]
                            }, affiliate.id)),
                        title === "AMA & Promotional Groups" && items[4].promoters.map((promoter)=>/*#__PURE__*/ jsx_runtime_.jsx(components_partner, {
                                style: {
                                    width: 10,
                                    height: 100
                                },
                                overlay: true,
                                group: items[4].title,
                                items: items,
                                id: !promoterUnderCount ? promoter.id : "underCount",
                                title: promoter.title,
                                telegram: promoter.telegram,
                                website: promoter.website,
                                desc1: promoter.desc1,
                                desc2: promoter.desc2,
                                desc3: promoter.desc3,
                                image: promoter.images?.[0]
                            }, promoter.id))
                    ]
                })
            })
        })
    }, id);
};
ExplorePartnerArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2,
        3,
        4
    ]),
    title: (external_prop_types_default()).string.isRequired,
    items: external_prop_types_default().arrayOf(types/* PartnerType */.Ky).isRequired
};
ExplorePartnerArea.defaultProps = {
    space: 1
};
/* harmony default export */ const partner_cards = (ExplorePartnerArea);

// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(5369);
// EXTERNAL MODULE: ./src/data/innerpages/partners.json
var partners = __webpack_require__(5859);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/containers/partners/index.jsx














const PartnersArea = ({ space , className , data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-about-banner-area", className),
        style: {
            scrollSnapType: "y mandatory"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            style: {
                maxWidth: 1100,
                marginTop: 32
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5",
                children: [
                    data?.items?.[0] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h--100",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box_container, {
                                className: "rbt-fixed-top-adjust",
                                title: data.items[0].title,
                                desc: data.items[0].desc,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        "data-sal": "slide-right",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "1200",
                                        children: [
                                            "You can find all of our partners and affiliates below as well as any pertinent information.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "1200",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Quick Links:"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        style: {
                                                            fontSize: 18,
                                                            fontWeight: "bold"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                            href: "/partners#launchpad-app-partners",
                                                            to: "launchpad-app-partners",
                                                            spy: true,
                                                            smooth: true,
                                                            offset: -200,
                                                            duration: 1000,
                                                            children: data.items[1].title
                                                        }, data.items[1].id)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        style: {
                                                            fontSize: 18,
                                                            fontWeight: "bold"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                            href: "/partners#service-provider-partners",
                                                            to: "service-provider-partners",
                                                            spy: true,
                                                            smooth: true,
                                                            offset: -200,
                                                            duration: 1000,
                                                            children: data.items[2].title
                                                        }, data.items[2].id)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        style: {
                                                            fontSize: 18,
                                                            fontWeight: "bold"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                            href: "/partners#affiliates",
                                                            to: "affiliates",
                                                            spy: true,
                                                            smooth: true,
                                                            offset: -200,
                                                            duration: 1000,
                                                            children: data.items[3].title
                                                        }, data.items[3].id)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        style: {
                                                            fontSize: 18,
                                                            fontWeight: "bold"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                            href: "/partners#ama-and-promotional-groups",
                                                            to: "ama-and-promotional-groups",
                                                            spy: true,
                                                            smooth: true,
                                                            offset: -200,
                                                            duration: 1000,
                                                            children: data.items[4].title
                                                        }, data.items[4].id)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, data.items[0].id)
                        })
                    }),
                    data?.items?.[1] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                section: "launchpad-app-partners",
                                title: data.items[1].title,
                                style: {
                                    padding: 4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    margin: 0
                                }
                            })
                        })
                    }),
                    data?.items?.[1] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        style: {
                            marginTop: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transparent_box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb--50 text-justify",
                                    children: "DeFi Skeptic works with the following platforms who strive to make DeFi better through various security and transparency focused components. DeFi Skeptic provides things such as vetting, audits, KYC and various other services to these platforms to support their mission. These partnerships are crucial in the combined effort to better the DeFi space as a whole while protecting users and ensuring projects meet a high standard."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(partner_cards, {
                                    id: data.items[1].id,
                                    space: 1,
                                    title: data.items[1].title,
                                    items: data.items
                                })
                            ]
                        })
                    }),
                    data?.items?.[2] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                section: "service-provider-partners",
                                title: data.items[2].title,
                                style: {
                                    padding: 4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    margin: 0
                                }
                            })
                        })
                    }),
                    data?.items?.[2] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        style: {
                            marginTop: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transparent_box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb--50 text-justify",
                                    children: "DeFi Skeptic works with the following DeFi service providers in various ways. This may include one and/or two way service usage and collaboration. It may also include sub-contracting work to some of these providers. We realize the DeFi space is filled with platforms, businesses and individuals who do amazing work and we want to highlight that by working with those individuals in order to grow and better the DeFi space."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(partner_cards, {
                                    id: data.items[2].id,
                                    space: 1,
                                    title: data.items[2].title,
                                    items: data.items
                                })
                            ]
                        })
                    }),
                    data?.items?.[3] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                section: "affiliates",
                                title: data.items[3].title,
                                style: {
                                    padding: 4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    margin: 0
                                }
                            })
                        })
                    }),
                    data?.items?.[3] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        style: {
                            marginTop: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transparent_box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb--50 text-justify",
                                    children: "DeFi Skeptic also works closely with other projects to provide information or assist them in specific goals. Below you can find projects we consider \u201Cfriends\u201D and thus list as affiliates."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(partner_cards, {
                                    id: data.items[3].id,
                                    space: 1,
                                    title: data.items[3].title,
                                    items: data.items
                                })
                            ]
                        })
                    }),
                    data?.items?.[4] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                section: "ama-and-promotional-groups",
                                title: data.items[4].title,
                                style: {
                                    padding: 4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    margin: 0
                                }
                            })
                        })
                    }),
                    data?.items?.[4] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        style: {
                            marginTop: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transparent_box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb--50 text-justify",
                                    children: "One major issue in the DeFi space is how projects are promoted. A very effective way of reaching an audience is by directly speaking to them. However, many of these platforms conduct in unethical practices using \u201Cpaid\u201D bots to make their customer feel like they are getting more than they really are. DeFi Skeptic has made an effort to source legitimate promotional platforms who do not conduct in these practices. You can find them below."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(partner_cards, {
                                    id: data.items[4].id,
                                    space: 1,
                                    title: data.items[4].title,
                                    items: data.items
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
PartnersArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        image: types/* ImageType */.__,
        items: external_prop_types_default().arrayOf(types/* ItemType */.qG)
    })
};
PartnersArea.defaultProps = {
    space: 1
};
/* harmony default export */ const containers_partners = (PartnersArea);


/***/ }),

/***/ 8949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7569);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3387);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9088);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8523);
/* harmony import */ var _containers_partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4159);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5369);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_innerpages_partners_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5859);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_3__]);
_layout_wrapper__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Demo data

async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Partners = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_7__.normalizedData)(_data_innerpages_partners_json__WEBPACK_IMPORTED_MODULE_8__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "Partners & Affiliates"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                id: "main-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_partners__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    data: content["partner-section"]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
Partners.propTypes = {
    posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4859,8267,312,4968,88], () => (__webpack_exec__(8949)));
module.exports = __webpack_exports__;

})();