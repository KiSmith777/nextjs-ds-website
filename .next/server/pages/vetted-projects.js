"use strict";
(() => {
var exports = {};
exports.id = 8540;
exports.ids = [8540];
exports.modules = {

/***/ 9683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ vetted_projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/section-title/index.jsx
var section_title = __webpack_require__(7382);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(1967);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(312);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(1257);
// EXTERNAL MODULE: ./src/components/wallet/index.jsx
var wallet = __webpack_require__(3426);
// EXTERNAL MODULE: ./src/components/service/index.jsx
var service = __webpack_require__(9682);
;// CONCATENATED MODULE: ./src/components/vetted-project-card/index.jsx




const VettedCard = ({ className , title , description , path , image  })=>/*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
        path: path,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_clsx_default()("wallet-wrapper", className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "icon d-flex justify-content-center",
                            children: image?.src && // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image.src,
                                alt: image?.alt || title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "title text-center",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "description",
                                    children: description
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    className: "over-link-servicePage visually-hidden",
                    path: path,
                    children: title
                })
            ]
        })
    });
VettedCard.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string,
    path: (external_prop_types_default()).string.isRequired,
    icon: (external_prop_types_default()).string.isRequired,
    color: (external_prop_types_default()).string
};
/* harmony default export */ const vetted_project_card = (VettedCard);

;// CONCATENATED MODULE: ./src/containers/vetted-projects/index.jsx











const VettedProjectsArea = ({ className , id , space , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-section-gapTop",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container text",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 mb--50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "DeFi Skeptic Vetted Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/icons/VETTEDv1.svg",
                                alt: "Slider BG",
                                height: 280,
                                width: 280,
                                objectFit: "contain",
                                quality: 100,
                                priority: true
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "DeFi Skeptic is developing a more informational and intuitive listing database that will have vetted project profiles and allow users to navigate key details seamlessly. This will feature the data DeFi Skeptic collects and validates as well as information and data from our partners",
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: "/partners",
                                    children: " StaySAFU "
                                }),
                                " and",
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: "/partners",
                                    children: " Mobula"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "For now, you can click on the vetted projects below to view their \u201Clegacy\u201D reports."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5 mt--20 justify-content-center text-center",
                    children: data.items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-4 col-lg-6 col-md-12 col-sm-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(vetted_project_card, {
                                title: item.title,
                                subtitle: item.subtitle,
                                path: item.path,
                                description: item.description,
                                image: item.images
                            })
                        }, item.id))
                })
            ]
        })
    });
VettedProjectsArea.propTypes = {
    className: (external_prop_types_default()).string,
    id: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        items: external_prop_types_default().arrayOf(types/* ItemType */.qG)
    })
};
VettedProjectsArea.defaultProps = {
    space: 1
};
/* harmony default export */ const vetted_projects = (VettedProjectsArea);


/***/ }),

/***/ 6004:
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
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5369);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _containers_vetted_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9683);
/* harmony import */ var _data_vetted_projects_vetted_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__]);
_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */ 


async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const VettedProjects = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_7__.normalizedData)(_data_vetted_projects_vetted_json__WEBPACK_IMPORTED_MODULE_9__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Vetted Projects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                id: "main-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_vetted_projects__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    data: content["vetted-projects"]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VettedProjects);

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

/***/ }),

/***/ 9616:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"vetted-projects","content":[{"id":1,"section":"vetted-projects","section_title":{"title":"DeFi Skeptic Vetted Projects"},"items":[{"id":1,"title":"AutoCrypto","path":"/files/vetting-reports/AutoCrypto.pdf","images":{"src":"/images/vetted-projects/AutoCrypto.png"}},{"id":2,"title":"Useless","path":"/files/vetting-reports/Useless.pdf","images":{"src":"/images/vetted-projects/Useless.png"}},{"id":3,"title":"Affinity","path":"/files/vetting-reports/Affinity.pdf","images":{"src":"/images/vetted-projects/Affinity.png"}},{"id":4,"title":"MasterMind Games","path":"/files/vetting-reports/MGA.pdf","images":{"src":"/images/vetted-projects/MGA.png"}},{"id":5,"title":"RocketFi","path":"/files/vetting-reports/RocketFi.pdf","images":{"src":"/images/vetted-projects/RocketFi.png"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4859,8267,312,4693,5874,3426], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();