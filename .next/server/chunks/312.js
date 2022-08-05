"use strict";
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K0": () => (/* binding */ SectionTitleType),
/* harmony export */   "Ky": () => (/* binding */ PartnerType),
/* harmony export */   "L$": () => (/* binding */ ButtonType),
/* harmony export */   "__": () => (/* binding */ ImageType),
/* harmony export */   "nQ": () => (/* binding */ HeadingType),
/* harmony export */   "qG": () => (/* binding */ ItemType),
/* harmony export */   "yG": () => (/* binding */ TextType)
/* harmony export */ });
/* unused harmony exports IDType, ButtonComponentType, SellerType, CollectionType, FeatureProductsType, NotifactionType */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const IDType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
    (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
]);
const HeadingType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
});
const TextType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
});
const ImageType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({})
    ]).isRequired,
    alt: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
});
const ButtonComponentType = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node.isRequired),
    type: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "button",
        "submit",
        "reset"
    ]),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "large",
        "small",
        "medium"
    ]),
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "primary",
        "primary-alta"
    ]),
    fullwidth: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
// eslint-disable-next-line no-unused-vars
const { children , ...restButtonTypes } = ButtonComponentType;
const ButtonType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    ...restButtonTypes
});
const SectionTitleType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
});
const ItemType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    images: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(ImageType)
});
const PartnerType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    telegram: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    website: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    desc1: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    desc2: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    desc3: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    image: ImageType
});
const SellerType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    total_sale: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
    image: ImageType.isRequired,
    top_since: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    isVarified: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
});
const CollectionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    total_item: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
    image: ImageType.isRequired,
    thumbnails: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(ImageType).isRequired,
    profile_image: ImageType.isRequired
});
const FeatureProductsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    author: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
        slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
    }),
    image: ImageType.isRequired
});
const NotifactionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    date: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    time: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    image: ImageType
});


/***/ })

};
;