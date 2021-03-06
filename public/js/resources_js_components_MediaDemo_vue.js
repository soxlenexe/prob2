(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MediaDemo_vue"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_ProductService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/ProductService */ "./resources/js/service/ProductService.js");
/* harmony import */ var _service_PhotoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/PhotoService */ "./resources/js/service/PhotoService.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: [],
      images: [],
      galleriaResponsiveOptions: [{
        breakpoint: "1024px",
        numVisible: 5
      }, {
        breakpoint: "960px",
        numVisible: 4
      }, {
        breakpoint: "768px",
        numVisible: 3
      }, {
        breakpoint: "560px",
        numVisible: 1
      }],
      carouselResponsiveOptions: [{
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3
      }, {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2
      }, {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1
      }]
    };
  },
  created: function created() {
    this.productService = new _service_ProductService__WEBPACK_IMPORTED_MODULE_0__.default();
    this.photoService = new _service_PhotoService__WEBPACK_IMPORTED_MODULE_1__.default();
  },
  mounted: function mounted() {
    var _this = this;

    this.productService.getProductsSmall().then(function (products) {
      _this.products = products;
    });
    this.photoService.getImages().then(function (images) {
      _this.images = images;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.withScopeId)("data-v-f630a2e8");

(0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)("data-v-f630a2e8");

var _hoisted_1 = {
  "class": "p-grid p-fluid"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Carousel", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "product-item"
};
var _hoisted_6 = {
  "class": "product-item-content"
};
var _hoisted_7 = {
  "class": "p-mb-3"
};
var _hoisted_8 = {
  "class": "p-mb-1"
};
var _hoisted_9 = {
  "class": "p-mt-0 p-mb-3"
};
var _hoisted_10 = {
  "class": "car-buttons p-mt-5"
};
var _hoisted_11 = {
  "class": "p-col-12"
};
var _hoisted_12 = {
  "class": "card"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Galleria", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Button");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Carousel");

  var _component_Galleria = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Galleria");

  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Carousel, {
    value: $data.products,
    numVisible: 3,
    numScroll: 3,
    circular: false,
    responsiveOptions: $data.carouselResponsiveOptions
  }, {
    item: _withId(function (product) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
        src: 'assets/demo/images/product/' + product.data.image,
        alt: product.data.name,
        "class": "product-image"
      }, null, 8
      /* PROPS */
      , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h4", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(product.data.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h6", _hoisted_9, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(product.data.price), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
        "class": 'product-badge status-' + product.data.inventoryStatus.toLowerCase()
      }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(product.data.inventoryStatus), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        type: "button",
        "class": "p-button p-button-rounded p-mr-2",
        icon: "pi pi-search"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        type: "button",
        "class": "p-button-success p-button-rounded p-mr-2",
        icon: "pi pi-star"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        type: "button",
        "class": "p-button-help p-button-rounded",
        icon: "pi pi-cog"
      })])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "responsiveOptions"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Galleria, {
    value: $data.images,
    responsiveOptions: $data.galleriaResponsiveOptions,
    numVisible: 7,
    circular: true,
    containerStyle: "max-width: 800px; margin: auto"
  }, {
    item: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
        src: 'assets/' + slotProps.item.itemImageSrc,
        alt: slotProps.item.alt,
        style: {
          "width": "100%",
          "display": "block"
        }
      }, null, 8
      /* PROPS */
      , ["src", "alt"])];
    }),
    thumbnail: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
        src: 'assets/' + slotProps.item.thumbnailImageSrc,
        alt: slotProps.item.alt,
        tyle: "width: 100%; display: block;"
      }, null, 8
      /* PROPS */
      , ["src", "alt"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "responsiveOptions"])])])]);
});

/***/ }),

/***/ "./resources/js/service/PhotoService.js":
/*!**********************************************!*\
  !*** ./resources/js/service/PhotoService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var PhotoService = /*#__PURE__*/function () {
  function PhotoService() {
    (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PhotoService);
  }

  (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PhotoService, [{
    key: "getImages",
    value: function getImages() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/photos.json').then(function (res) {
        return res.data.data;
      });
    }
  }]);

  return PhotoService;
}();



/***/ }),

/***/ "./resources/js/service/ProductService.js":
/*!************************************************!*\
  !*** ./resources/js/service/ProductService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var ProductService = /*#__PURE__*/function () {
  function ProductService() {
    (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ProductService);
  }

  (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ProductService, [{
    key: "getProductsSmall",
    value: function getProductsSmall() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/products-small.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/products.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getProductsWithOrdersSmall",
    value: function getProductsWithOrdersSmall() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/products-orders-small.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getSucursalList",
    value: function getSucursalList() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://back-office.local/api/sucursales').then(function (res) {
        return res.data;
      });
    }
  }, {
    key: "getClientsList",
    value: function getClientsList() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://back-office.local/api/clientes').then(function (res) {
        return res.data;
      });
    }
  }]);

  return ProductService;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".product-item .product-item-content[data-v-f630a2e8] {\n  border: 1px solid var(--surface-d);\n  border-radius: 3px;\n  margin: 0.3rem;\n  text-align: center;\n  padding: 2rem 0;\n}\n.product-item .product-image[data-v-f630a2e8] {\n  width: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.product-badge[data-v-f630a2e8] {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock[data-v-f630a2e8] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock[data-v-f630a2e8] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock[data-v-f630a2e8] {\n  background: #FEEDAF;\n  color: #8A5340;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_style_index_0_id_f630a2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_style_index_0_id_f630a2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_style_index_0_id_f630a2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/MediaDemo.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MediaDemo.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MediaDemo_vue_vue_type_template_id_f630a2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true */ "./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true");
/* harmony import */ var _MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaDemo.vue?vue&type=script&lang=js */ "./resources/js/components/MediaDemo.vue?vue&type=script&lang=js");
/* harmony import */ var _MediaDemo_vue_vue_type_style_index_0_id_f630a2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true */ "./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true");




;
_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MediaDemo_vue_vue_type_template_id_f630a2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-f630a2e8"
/* hot reload */
if (false) {}

_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/MediaDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/MediaDemo.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MediaDemo.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MediaDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_template_id_f630a2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_template_id_f630a2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=template&id=f630a2e8&scoped=true");


/***/ }),

/***/ "./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MediaDemo_vue_vue_type_style_index_0_id_f630a2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MediaDemo.vue?vue&type=style&index=0&id=f630a2e8&lang=scss&scoped=true");


/***/ })

}]);