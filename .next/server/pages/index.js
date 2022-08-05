"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FunFact = ({ className , counter , title , suffix  })=>{
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const visibleChangeHandler = (isVisible)=>{
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("single-counter-up text-center h--100", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "number counter-odomitter-active",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_4___default()), {
                    start: focus ? 0 : null,
                    end: counter,
                    duration: 5,
                    children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    ref: countUpRef
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.InView, {
                                    as: "span",
                                    onChange: (inView)=>visibleChangeHandler(inView),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: "+"
                                            }),
                                            suffix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: suffix
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                })
            }),
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "botton-title",
                children: title
            })
        ]
    });
};
FunFact.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    counter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    suffix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunFact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 5790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about)
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
// EXTERNAL MODULE: ./src/components/section-title/index.jsx
var section_title = __webpack_require__(7382);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(1257);
;// CONCATENATED MODULE: ./src/components/about-card/index.jsx




const AboutCard = ({ className , title , desc , path  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-about-card", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "title text-center",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150",
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "about-disc text-justify",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150",
                    children: desc
                })
            ]
        })
    });
AboutCard.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    desc: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string
};
/* harmony default export */ const about_card = (AboutCard);

// EXTERNAL MODULE: ./src/components/ui/sticky/index.jsx
var sticky = __webpack_require__(1483);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(312);
;// CONCATENATED MODULE: ./src/containers/about/index.jsx








const AboutArea = ({ space , className , data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("rn-about-banner-area", space === 1 && "rn-section-gapTop", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mb--50",
                id: "about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: data?.section_title && /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                            className: "about-title-m",
                            ...data.section_title
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-5",
                    children: [
                        data?.items?.[0] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(about_card, {
                                className: "transparent-bg",
                                title: data.items[0].title,
                                desc: data.items[0].description,
                                path: data.items[0].path
                            })
                        }),
                        data?.items?.[1] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(about_card, {
                                className: "transparent-bg",
                                title: data.items[1].title,
                                desc: data.items[1].description,
                                path: data.items[1].path
                            })
                        })
                    ]
                })
            })
        ]
    });
AboutArea.propTypes = {
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
AboutArea.defaultProps = {
    space: 1
};
/* harmony default export */ const about = (AboutArea);


/***/ }),

/***/ 2008:
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
/* harmony import */ var _components_section_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7382);
/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8526);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(312);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1967);








const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }, 
    ]
};
const FeaturedOnArea = ({ data , className , space  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("en-product-area", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gap", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mb--30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ...data.section_title
                            })
                        })
                    }),
                    data?.items && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                options: SliderOptions,
                                className: "banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15",
                                children: data.items.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_4__/* .SliderItem */ .w, {
                                        className: "single-slide-product",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            path: prod.path,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                src: prod.images?.src,
                                                height: "100%",
                                                width: "100%",
                                                quality: 100
                                            })
                                        })
                                    }, prod.id))
                            })
                        })
                    })
                ]
            })
        })
    });
FeaturedOnArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitleType */ .K0
    })
};
FeaturedOnArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedOnArea);


/***/ }),

/***/ 7754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_funfact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3142);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_funfact__WEBPACK_IMPORTED_MODULE_3__]);
_components_funfact__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FunfactArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-statistick-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 text-center",
                        children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: data.section_title.title
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row g-5",
                            children: data?.funfacts?.map((funfact)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_funfact__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        counter: funfact.counter,
                                        title: funfact.title,
                                        suffix: funfact.suffix
                                    })
                                }, funfact.id))
                        })
                    })
                })
            ]
        })
    });
FunfactArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitleType */ .K0,
        funfacts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
            counter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
            title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
            suffix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        }))
    })
};
FunfactArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunfactArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 341:
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
/* harmony import */ var _components_section_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7382);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(312);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1967);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1257);







const QuoteArea = ({ space , className , data , reverse  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("row g-5 d-flex align-items-center", reverse && "flex-row-reverse"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rn-about-title-wrapper text-center",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ...data.section_title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rn-about-wrapper",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            "data-sal-delay": "150",
                            children: [
                                data?.texts?.map((text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-justify",
                                        children: text.content
                                    }, text.id)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "setting-option header-btn ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-box d-flex justify-content-center mt--10 ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            path: data.path,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                color: "primary-alta",
                                                className: "connectBtn",
                                                size: "large",
                                                children: [
                                                    "View ",
                                                    data.buttonText,
                                                    " Services"
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
QuoteArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitleType */ .K0,
        texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_4__/* .TextType */ .yG)
    })
};
QuoteArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteArea);


/***/ }),

/***/ 5657:
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
/* harmony import */ var _components_section_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7382);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(312);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1967);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1257);








const StrategyArea = ({ space , className , data , reverse  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("row g-5 d-flex align-items-center", reverse && "flex-row-reverse"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rn-about-title-wrapper text-center",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ...data.section_title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rn-about-wrapper",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            "data-sal-delay": "150",
                            children: [
                                data?.texts?.map((text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-justify",
                                        children: text.content
                                    }, text.id)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container d-flex justify-content-center",
                                    children: data.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: data.image.src,
                                        height: 164,
                                        width: 400,
                                        quality: 100
                                    })
                                }),
                                data.links && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex justify-content-evenly pt--25",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "setting-option header-btn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon-box",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            path: "/additional-pools",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                path: "/token",
                                                                color: "primary-alta",
                                                                className: "connectBtn",
                                                                size: "large",
                                                                children: [
                                                                    "Token",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "Learn More"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "setting-option header-btn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon-box",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            path: "/first-skeptics",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                path: "/first-skeptics",
                                                                color: "primary-alta",
                                                                className: "connectBtn",
                                                                size: "large",
                                                                children: [
                                                                    "NFT",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "Learn More"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
StrategyArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitleType */ .K0,
        texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_4__/* .TextType */ .yG),
        links: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf()
    })
};
StrategyArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrategyArea);


/***/ }),

/***/ 4325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7569);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3387);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9088);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8523);
/* harmony import */ var _containers_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5506);
/* harmony import */ var _containers_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5874);
/* harmony import */ var _containers_funfact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7754);
/* harmony import */ var _containers_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5790);
/* harmony import */ var _containers_quote_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(341);
/* harmony import */ var _containers_featured_on__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2008);
/* harmony import */ var _containers_strategic_partnerships__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5657);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5369);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_homepages_home_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9812);
/* harmony import */ var _data_innerpages_about_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1913);
/* harmony import */ var _data_innerpages_featured_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7668);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__, _containers_funfact__WEBPACK_IMPORTED_MODULE_7__]);
([_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__, _containers_funfact__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */ 
// Demo Data



async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_12__.normalizedData)(_data_homepages_home_json__WEBPACK_IMPORTED_MODULE_13__?.content || []);
    const aboutContent = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_12__.normalizedData)(_data_innerpages_about_json__WEBPACK_IMPORTED_MODULE_14__?.content || []);
    const featureContent = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_12__.normalizedData)(_data_innerpages_featured_json__WEBPACK_IMPORTED_MODULE_15__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_featured_on__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        space: 1,
                        data: featureContent["featured-on-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: content["service-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_strategic_partnerships__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: aboutContent["strategy-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_strategic_partnerships__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: aboutContent["token-nft-pair-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_about__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: aboutContent["about-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_quote_area__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: aboutContent["for-developers-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_quote_area__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        reverse: "true",
                        data: aboutContent["for-users-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_funfact__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: aboutContent["funfact-section"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"about","content":[{"section":"about-section","section_title":{"title":"Better Information, <br> For The DeFi Investor."},"image":{"src":"/images/bg/bg-image-22.jpg"},"items":[{"id":1,"title":"Why We Do This","description":"DeFi Skeptic was founded when a gap was identified between legitimate projects and DeFi users. In 2021 alone, malicious actors stole over $10 billion from DeFi users through various scams, vulnerabilities, and exploits. This necessity is why we created DeFi Skeptic.","path":""},{"id":2,"title":"What is DeFi Skeptic?","description":"DeFi Skeptic is a platform that seeks to reduce fraud while increasing transparency and accuracy of information in the DeFi space. It will do this by providing a platform to highlight vetted projects in addition to various products and services for both DeFi developers and users as well as acquiring strategic partnerships and affiliations with those who support the same vision/mission."}]},{"section":"strategy-section","section_title":{"title":"Strategic Partnerships"},"texts":[{"id":1,"content":"DeFi Skeptic understands that fixing the issues within the DeFi space is not a job anyone can do alone. So we have made a great effort to source strategic partnerships who share our mission. Together we have a far greater impact as a common collective working towards the same goal. Visit our Partners & Affiliates section to learn more!"}],"image":{"src":"/images/partners_affiliates/PartnersCombined.png"}},{"section":"for-developers-section","section_title":{"title":"For DeFi Developers"},"buttonText":"Developer","path":"/developer-services","texts":[{"id":1,"content":"If you are looking to start a DeFi project or just take your current project to the next level, you have come to the right place! We provide a full range of services for developers to assist your project at any stage, even from the very start. Our goal is to be your sole source for anything needed."}]},{"section":"for-users-section","section_title":{"title":"For DeFi Users"},"buttonText":"User","path":"/user-services","texts":[{"id":1,"content":"Are you a DeFi user? We also provide a full range of products and services catered to the average user to make your journey in the DeFi space easier, safer and seamless. Whether you’re looking for information on the latest projects, a way to generate passive income or just a way to get automated exposure to the latest trusted projects, we have everything you need."}]},{"section":"token-nft-pair-section","section_title":{"title":"Paired Utility Token & Rewards NFT"},"buttonText":[{"id":1,"text":"Token"},{"id":2,"text":"NFT"}],"links":[{"id":1,"path":"/token"},{"id":2,"path":"/first-skeptics"}],"texts":[{"id":1,"content":"Welcome to the future of utility and rewards…welcome to Tokenized NFTs. We allow the user to swap between Token and NFT anytime they want, tax free. Own both by owning one! Gone are the days of having to purchase multiple pieces of a project. At DeFi Skeptic we believe simplicity is efficiency."}],"image":{"src":"/images/icons/TokenNftPair.png"}},{"section":"funfact-section","section_title":{"title":"DeFi Statistics"},"funfacts":[{"id":1,"title":"Different Cryptocurrencies","counter":10000,"suffix":"+"},{"id":2,"title":"Increase in Total Transaction Volume vs 2020","counter":567,"suffix":"%"},{"id":4,"title":"Percentage of Scam Revenue Due to Rug Pulls","counter":37,"suffix":"%"},{"id":3,"title":"Money Stolen by Malicious Actors","counter":10,"suffix":"B+"}]},{"section":"cta-section","headings":[{"id":1,"content":"Discover Discover Discover rare digital art <br/> and collect NFTs"}],"texts":[{"id":1,"content":"The NFTs is a one-trick pony that climbed the recent years. The growth of NFTs is tremendous, and according to Pymnts.com, the total sales volume"}],"buttons":[{"id":1,"path":"/create","content":"Create"},{"id":2,"path":"/contact","content":"Contact Us","color":"primary-alta"}],"image":{"src":"/images/bg/bg-image-6.jpg"}},{"section":"blog-section","section_title":{"title":"Our Recent Blog"}}]}');

/***/ }),

/***/ 7668:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"features","content":[{"id":1,"section":"featured-on-section","section_title":{"title":"Featured On"},"items":[{"id":11,"title":"Benzinga","path":"https://www.benzinga.com/pressreleases/22/06/g27879320/defi-skeptic-aspires-to-make-the-decentralized-world-better-through-increased-transparency-and-inf","images":{"src":"/images/featured-on/Benzinga.png"}},{"id":12,"title":"Yahoo Finance","path":"https://finance.yahoo.com/news/defi-skeptic-aspires-decentralized-world-120400559.html?.tsrc=fin-srch&guccounter=1","images":{"src":"/images/featured-on/Yahoo.png"}},{"id":13,"title":"NFT Cable","path":"https://nftcable.io/news/defi-skeptic-aspires-to-make-the-decentralized-world-better-through-increased-transparency-and-information/","images":{"src":"/images/featured-on/NFTCable.png"}},{"id":14,"title":"Coinpress","path":"https://coinpress.media/defi-skeptic-aspires-to-make-the-decentralized-world-better-through-increased-transparency-and-information/","images":{"src":"/images/featured-on/Coinpress.png"}},{"id":15,"title":"Crypto Ish","path":"https://www.youtube.com/watch?v=UfbiOT3U_qU","images":{"src":"/images/featured-on/CryptoIsh.png"}},{"id":16,"title":"NDC","path":"https://www.youtube.com/watch?v=kvhSRkufk-c","images":{"src":"/images/featured-on/NDC.png"}},{"id":17,"title":"MarketWatch","path":"https://www.marketwatch.com/press-release/defi-skeptic-aspires-to-make-the-decentralized-world-better-through-increased-transparency-and-information-2022-06-28?mod=search_headline","images":{"src":"/images/featured-on/Marketwatch.png"}},{"id":18,"title":"GemCave","path":"https://gemcave.org/gem/SKP","images":{"src":"/images/featured-on/GemCave.png"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4859,8267,9812,312,4693,5874,8526], () => (__webpack_exec__(4325)));
module.exports = __webpack_exports__;

})();