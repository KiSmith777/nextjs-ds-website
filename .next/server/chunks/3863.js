"use strict";
exports.id = 3863;
exports.ids = [3863];
exports.modules = {

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_page)
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
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(1257);
;// CONCATENATED MODULE: ./src/components/service-page/index.jsx





const Service = ({ title , subtitle , path , description , image , children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        "data-sal": "slide-up",
        "data-sal-delay": "150",
        "data-sal-duration": "800",
        className: "rn-service-page color-shape-7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner-servicePage flex-row justify-content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content-servicePage flex-row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "title-servicePage align-items-center text-center pb--20",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                        path: path,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon-servicePage pb--20",
                                children: image?.src && // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: image.src,
                                    alt: image?.alt || title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option header-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box d-flex justify-content-center mt--10 pb--50",
                                    children: subtitle && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                        color: "primary-alta",
                                        className: "connectBtn",
                                        size: "large",
                                        children: subtitle
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
Service.propTypes = {
    title: (external_prop_types_default()).string.isRequired,
    subtitle: (external_prop_types_default()).string,
    path: (external_prop_types_default()).string,
    description: (external_prop_types_default()).string,
    image: types/* ImageType */.__
};
/* harmony default export */ const service_page = (Service);

// EXTERNAL MODULE: ./src/components/wallet/index.jsx
var wallet = __webpack_require__(3426);
;// CONCATENATED MODULE: ./src/containers/services-page/index.jsx








const ServiceArea = ({ className , id , space , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-service-area", space === 1 && "rn-section-smallGapTop", className),
        id: id,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 mb--20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                ...data.section_title
                            })
                        }),
                        data?.description && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row text-justify mb--40",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: data.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Below are the services we currently have live to meet your needs. To view services we intend to roll out in the near future, please visit our ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                            path: "https://docs.defiskeptic.com",
                                            children: " documentation"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                data?.items && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5 justify-content-center",
                    children: data.items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(service_page, {
                                title: item.title,
                                subtitle: item.subtitle,
                                path: item.path,
                                description: item.description,
                                image: item.images,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row plr--20 g-5 justify-content-center pb--20",
                                    children: item.services?.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(wallet/* default */.Z, {
                                                title: service.title,
                                                path: service.path,
                                                icon: service.icon
                                            })
                                        }, item.id))
                                })
                            })
                        }, item.id))
                })
            ]
        })
    });
ServiceArea.propTypes = {
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
ServiceArea.defaultProps = {
    space: 1
};
/* harmony default export */ const services_page = (ServiceArea);


/***/ }),

/***/ 1865:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"services","content":[{"id":1,"section":"type-of-user-section","section_title":{"title":"DeFi Skeptic Services"},"items":[{"id":11,"title":"DeFi Developer","subtitle":"View Developer Services","path":"/developer-services","images":{"src":"/images/icons/coding.png"}},{"id":12,"title":"DeFi User","subtitle":"View User Services","path":"/user-services","images":{"src":"/images/icons/users.png"}}]},{"id":2,"section":"developer-services-section","section_title":{"title":"Services for DeFi Developers"},"description":"DeFi Skeptic provides a wide range of services tailored to developers to satisfy any developer need. We realize starting a project can be time consuming, expensive, and often times stressful. Our intent is to provide key services to take the workload off of your team while remaining competitively priced to ensure you maximize the usage of your funds. We strive to go above and beyond to meet the needs of the client as our goal is to better DeFi and this starts at the beginning, where projects are created.","items":[{"id":21,"title":"Supportive Services","services":[{"id":211,"title":"Project Vetting","path":"/vetting-process","icon":"solid fa-shield","image":""},{"id":212,"title":"Arbitrage as a Service","path":"/arbitrage-service","icon":"solid fa-robot","image":""},{"id":213,"title":"KYC Verification","path":"/kyc-service","icon":"solid fa-id-card","image":""},{"id":214,"title":"Contract Audits","path":"/contract-audits","icon":"solid fa-code","image":""}]},{"id":22,"title":"Development Services","services":[{"id":221,"title":"Web Development","path":"/web-development","icon":"solid fa-globe","image":""},{"id":222,"title":"Token & NFT Creation","path":"/contract-creation","icon":"solid fa-coins","image":""},{"id":223,"title":"dApp & Bot Creation","path":"/contract-creation","icon":"solid fa-robot","image":""}]},{"id":23,"title":"Design Services","services":[{"id":231,"title":"UX & UI Design","path":"/ux-ui-design","icon":"solid fa-object-group","image":""},{"id":232,"title":"Graphic Design","path":"/graphic-design","icon":"solid fa-icons","image":""}]},{"id":24,"title":"Marketing & Promotional Services","services":[{"id":241,"title":"Vetted AMA Tour","path":"/vetted-ama-tour","icon":"solid fa-people-group","image":""},{"id":242,"title":"Marketing Strategists","path":"/marketing-strategist","icon":"solid fa-rectangle-ad","image":""}]}]},{"id":3,"section":"user-services-section","section_title":{"title":"Services for DeFi Users"},"description":"As a DeFi user, you have many hurdles. Our goal at DeFi Skeptic is to remove those hurdles and make your experience better and your navigation of the DeFi space easier.","items":[{"id":31,"title":"User Services","services":[{"id":311,"title":"Vetted Database","path":"/vetted-projects","icon":"solid fa-database","image":""},{"id":312,"title":"DS Drops","path":"/ds-drops","icon":"solid fa-droplet","image":""},{"id":313,"title":"Coming Soon","path":"https://docs.defiskeptic.com/products-and-services","icon":"solid fa-circle-question","image":""}]}]}]}');

/***/ })

};
;