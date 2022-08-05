"use strict";
(() => {
var exports = {};
exports.id = 5056;
exports.ids = [5056];
exports.modules = {

/***/ 2372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ token)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(312);
// EXTERNAL MODULE: ./src/components/share-dropdown/index.jsx + 1 modules
var share_dropdown = __webpack_require__(4831);
// EXTERNAL MODULE: ./src/components/modals/share-modal/index.jsx
var share_modal = __webpack_require__(4689);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(1967);
// EXTERNAL MODULE: ./src/components/heading-label/index.jsx
var heading_label = __webpack_require__(9966);
// EXTERNAL MODULE: ./src/components/transparent-box/index.jsx
var transparent_box = __webpack_require__(3442);
;// CONCATENATED MODULE: ./src/components/solid-box/index.jsx



const SolidBox = ({ className , children , style  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-about-card", className),
        style: style,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "inner",
            style: style,
            children: children
        })
    });
SolidBox.propTypes = {
    className: (external_prop_types_default()).string,
    style: (external_prop_types_default()).object
};
/* harmony default export */ const solid_box = (SolidBox);

;// CONCATENATED MODULE: ./src/containers/token/index.jsx












const TokenArea = ({ className , space , data  })=>{
    const { 0: isShareModalOpen , 1: setIsShareModalOpen  } = (0,external_react_.useState)(false);
    const shareModalHandler = ()=>setIsShareModalOpen((prev)=>!prev);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(share_modal/* default */.Z, {
                show: isShareModalOpen,
                handleModal: shareModalHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rn-author-bg-area position-relative ptb--100 mt--20 mb--20",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/test/GitBook-Token.png",
                    alt: "Slider BG",
                    layout: "fill",
                    objectFit: "contain",
                    quality: 100,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                        className: "mt--20",
                        style: {
                            padding: 4,
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            margin: 0
                        },
                        title: "Skeptic Token (SKP)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transparent_box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-justify",
                                "data-sal": "slide-right",
                                "data-sal-duration": "1200",
                                "data-sal-delay": "150",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Skeptic Token Conctract Address:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        path: "https://bscscan.com/address/0x1234AE511876FCAaCe685fcDC292d9589A88dC2b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                                            children: "0x1234AE511876FCAaCe685fcDC292d9589A88dC2b"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "The primary purpose of SKP will be to serve the DeFi Skeptic ecosystem. Skeptic Token (SKP) will integrate with some of the DeFi Skeptic products and services and act as a utility token for the DeFi Skeptic ecosystem. Depending on the integration, this may result in tokens being burned, used as payment or directed towards other features of the DeFi Skeptic ecosystem, all with the purpose of benefiting the platform."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                "data-sal": "slide-left",
                                "data-sal-duration": "1200",
                                "data-sal-delay": "150",
                                children: [
                                    "Additionally, SKP will be the gateway to merge failing/failed projects through acquisition of funds and users through our",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        path: "https://docs.defiskeptic.com/products-and-services/ds-merge-future",
                                        children: "DS Merge"
                                    }),
                                    " ",
                                    "utility.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Note"
                                    }),
                                    ":",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                        children: [
                                            " ",
                                            "Skeptic Tokens are also interchangeable with First Skeptic NFTs at a 200k to 1 conversion rate. This is done through the",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                path: "https://app.defiskeptic.com/vault",
                                                children: "Skeptic Vault"
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt--5 row g-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                    className: "mt--5",
                                    style: {
                                        padding: 4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        margin: 0
                                    },
                                    title: "Discount Swapper (-2%)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(solid_box, {
                                    className: "rn-about-card trans-bg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            "data-sal": "slide-right",
                                            "data-sal-duration": "1200",
                                            "data-sal-delay": "150",
                                            children: "Skeptic Token will have a swapper contract that will provide you the ability to purchase SKP tokens at a discounted tax/fee rate. Using this allows the BNB to be taxed prior to being swapped to tokens, thus no liquidation of SKP is needed as SKP is not received as tax, which prevents a contract triggered sell event. To incentivize this buying method, a 2% discount is provided."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            "data-sal": "slide-left",
                                            "data-sal-duration": "1200",
                                            "data-sal-delay": "150",
                                            children: [
                                                "Using the discount swapper can be done two ways.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "1. You can send BNB directly to the contract and it will send you the proper amount of tokens.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "2. You can connect to the",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                    path: "https://app.defiskeptic.com/",
                                                    children: "Discount Swapper"
                                                }),
                                                " ",
                                                "if you prefer that method.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Discount Swapper Conctract Address:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                    path: "https://bscscan.com/address/0xE2aC92Bb9f89d125974654a14857264E9d9209f1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                                                        children: "0xE2aC92Bb9f89d125974654a14857264E9d9209f1"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt--5 row g-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                        className: "mt--5",
                                        style: {
                                            padding: 4,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            display: "flex",
                                            margin: 0
                                        },
                                        title: "Tokenomics"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(solid_box, {
                                        className: "rn-about-card trans-bg",
                                        style: {
                                            height: "94%"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rn-author-bg-area position-relative ptb--175 mt--20 mb--20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/test/Allocation.png",
                                                    alt: "Slider BG",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    quality: 100,
                                                    priority: true,
                                                    "data-sal": "slide-left",
                                                    "data-sal-duration": "1200",
                                                    "data-sal-delay": "150"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "48% - Initial NFT Sale"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "Skeptic Token and First Skeptic NFTs are intertwined in terms of being redeemable for each other via the Skeptic Vault. There will be a total max supply of 50,000,000 SKP and 250 NFTs. The conversion rate is 200,000 per NFT. Tokens in circulation will depend on how many NFTs are owned at any given time. We initially sold 120 NFTs, which removed 24,000,000 tokens from supply (48%). The remaining 26,000,000 were used as follows:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "40% - Initial Liquidity"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: [
                                                    "SKP/BNB - 10,000,000 SKP",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                        path: "https://mudra.website/?certificate=yes&type=0&lp=0xc7e7a16f00bf486388d7caf9792f483faa8c019d",
                                                        children: "View Locker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "SKP/XUSD - 10,000,000 SKP",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                        path: "https://mudra.website/?certificate=yes&type=0&lp=0xc7e7a16f00bf486388d7caf9792f483faa8c019d",
                                                        children: "View Locker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Liquidity will be on a repetitive 6 month lock. This lock will continue to get renewed as long as there is no reason to move the Liquidity Pools elsewhere."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                "data-sal": "slide-left",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "10% - Reserve"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-left",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "At 10% of total max supply, this reserve will be used for potential future DEX listings and a potential Liquidity Pool Farm for SKP. This reserve will be on a repetitive 3 month lock for 1 year. Any tokens not used from this reserve after 1 year will be burned."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "2% - Giveaways/Lottery/Promotional"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "These tokens will be used for lottery prizes, community giveaways, promotional events, collaborative events, etc. Any tokens not used after 6 months will be burned."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                        className: "mt--5",
                                        style: {
                                            padding: 4,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            display: "flex",
                                            margin: 0
                                        },
                                        title: "Tax Structure"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(solid_box, {
                                        className: "rn-about-card trans-bg",
                                        style: {
                                            height: "94%"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "To support SKP, a token tax will be imposed. A hardcoded max of 15% will be implemented which the owner can\u2019t bypass acting as a safety measure for users. The token tax is broken down as follows:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rn-author-bg-area position-relative ptb--180 mt--20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/test/SKPTax.png",
                                                    alt: "Slider BG",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    quality: 100,
                                                    priority: true,
                                                    "data-sal": "slide-left",
                                                    "data-sal-duration": "1200",
                                                    "data-sal-delay": "150"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: "Below is a flow chart showing how SKP tax is utilized:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rn-author-bg-area position-relative ptb--200 mt--20 mb--20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/test/Tax-Flow.png",
                                                    alt: "Slider BG",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    quality: 100,
                                                    priority: true,
                                                    "data-sal": "slide-left",
                                                    "data-sal-duration": "1200",
                                                    "data-sal-delay": "150"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt--5 row g-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                        className: "mt--5",
                                        style: {
                                            padding: 4,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            display: "flex",
                                            margin: 0
                                        },
                                        title: `The Skeptic Fund`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(solid_box, {
                                        className: "rn-about-card trans-bg",
                                        style: {
                                            height: "88%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-justify",
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: [
                                                    "Funds collected and allocated to the Skeptic Fund will be placed into various low/medium risk external components that generate variable APRs/APYs.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "The Skeptic Fund receives income from the following:"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "4% of SKP tax."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "50% of AaaS profit."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Compounding Interest."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Revenue from our products & services."
                                                    })
                                                ]
                                            }),
                                            "Once a month this interest will be harvested and used as follows:",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "40% sent to the First Skeptic NFT holders."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "40% is compounded to ensure fund growth."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "20% is directed to marketing."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rn-author-bg-area position-relative ptb--140 mt--20 mb--20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/test/fund.gif",
                                                    alt: "Slider BG",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    quality: 100,
                                                    priority: true,
                                                    "data-sal": "slide-left",
                                                    "data-sal-duration": "1200",
                                                    "data-sal-delay": "150"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(heading_label/* default */.Z, {
                                        className: "mt--5",
                                        style: {
                                            padding: 4,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            display: "flex",
                                            margin: 0
                                        },
                                        title: `Employing Arbitrage as a Service`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(solid_box, {
                                        className: "rn-about-card trans-bg",
                                        style: {
                                            height: "88%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                "data-sal": "slide-right",
                                                "data-sal-duration": "1200",
                                                "data-sal-delay": "150",
                                                children: [
                                                    "Skeptic Token (SKP) will employ Arbitrage as a Service (AaaS) to leverage the price fluctuations amongst our SKP/BNB and SKP/XUSD liquidity pools. This will generate profit for the platform that would otherwise be lost to external arbitrage traders.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "This profit will be used as follows:"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "50% directed to First Skeptic NFT holders."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "50% directed into the Skeptic Fund."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rn-author-bg-area position-relative ptb--200 mt--20 mb--20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/test/AaaS on token.png",
                                                    alt: "Slider BG",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    quality: 100,
                                                    priority: true,
                                                    "data-sal": "slide-left",
                                                    "data-sal-duration": "1200",
                                                    "data-sal-delay": "150"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
TokenArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1
    ]),
    data: external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        twitter: (external_prop_types_default()).string,
        followers: (external_prop_types_default()).string,
        following: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    })
};
TokenArea.defaultProps = {
    space: 1
};
/* harmony default export */ const token = (TokenArea);


/***/ }),

/***/ 7:
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
/* harmony import */ var _containers_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2372);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5369);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_homepages_home_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__]);
_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






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
const Token = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_6__.normalizedData)(_data_homepages_home_json__WEBPACK_IMPORTED_MODULE_7__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Skeptic Token (SKP)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                id: "main-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_token__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Token);

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

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4859,8267,9812,312,4831,4968], () => (__webpack_exec__(7)));
module.exports = __webpack_exports__;

})();