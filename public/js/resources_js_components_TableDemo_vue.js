(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_TableDemo_vue"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createForOfIteratorHelper)
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/CustomerService */ "./resources/js/service/CustomerService.js");
/* harmony import */ var _service_ProductService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/ProductService */ "./resources/js/service/ProductService.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      customer1: null,
      customer2: null,
      customer3: null,
      filters1: null,
      filters2: {},
      loading1: true,
      loading2: true,
      idFrozen: false,
      products: null,
      expandedRows: [],
      statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
      representatives: [{
        name: "Amy Elsner",
        image: 'amyelsner.png'
      }, {
        name: "Anna Fali",
        image: 'annafali.png'
      }, {
        name: "Asiya Javayant",
        image: 'asiyajavayant.png'
      }, {
        name: "Bernardo Dominic",
        image: 'bernardodominic.png'
      }, {
        name: "Elwin Sharvill",
        image: 'elwinsharvill.png'
      }, {
        name: "Ioni Bowcher",
        image: 'ionibowcher.png'
      }, {
        name: "Ivan Magalhaes",
        image: 'ivanmagalhaes.png'
      }, {
        name: "Onyama Limba",
        image: 'onyamalimba.png'
      }, {
        name: "Stephen Shaw",
        image: 'stephenshaw.png'
      }, {
        name: "XuXue Feng",
        image: 'xuxuefeng.png'
      }]
    };
  },
  customerService: null,
  productService: null,
  created: function created() {
    this.customerService = new _service_CustomerService__WEBPACK_IMPORTED_MODULE_7__.default();
    this.productService = new _service_ProductService__WEBPACK_IMPORTED_MODULE_8__.default();
    this.initFilters1();
  },
  mounted: function mounted() {
    var _this = this;

    this.productService.getProductsWithOrdersSmall().then(function (data) {
      return _this.products = data;
    });
    this.customerService.getCustomersLarge().then(function (data) {
      _this.customer1 = data;
      _this.loading1 = false;

      _this.customer1.forEach(function (customer) {
        return customer.date = new Date(customer.date);
      });
    });
    this.customerService.getCustomersLarge().then(function (data) {
      return _this.customer2 = data;
    });
    this.customerService.getCustomersMedium().then(function (data) {
      return _this.customer3 = data;
    });
    this.loading2 = false;
  },
  methods: {
    initFilters1: function initFilters1() {
      this.filters1 = {
        'global': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.CONTAINS
        },
        'name': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.STARTS_WITH
          }]
        },
        'country.name': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.STARTS_WITH
          }]
        },
        'representative': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.IN
        },
        'date': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.DATE_IS
          }]
        },
        'balance': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.EQUALS
          }]
        },
        'status': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterOperator.OR,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.EQUALS
          }]
        },
        'activity': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.BETWEEN
        },
        'verified': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.EQUALS
        }
      };
    },
    clearFilter1: function clearFilter1() {
      this.initFilters1();
    },
    onRowExpand: function onRowExpand(event) {
      this.$toast.add({
        severity: 'info',
        summary: 'Product Expanded',
        detail: event.data.name,
        life: 3000
      });
    },
    onRowCollapse: function onRowCollapse(event) {
      this.$toast.add({
        severity: 'success',
        summary: 'Product Collapsed',
        detail: event.data.name,
        life: 3000
      });
    },
    expandAll: function expandAll() {
      this.expandedRows = this.products.filter(function (p) {
        return p.id;
      });
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Expanded',
        life: 3000
      });
    },
    collapseAll: function collapseAll() {
      this.expandedRows = null;
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Collapsed',
        life: 3000
      });
    },
    formatCurrency: function formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    formatDate: function formatDate(value) {
      return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    calculateCustomerTotal: function calculateCustomerTotal(name) {
      var total = 0;

      if (this.customer3) {
        var _iterator = (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(this.customer3),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var customer = _step.value;

            if (customer.representative.name === name) {
              total++;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true ***!
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



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.withScopeId)("data-v-204a1f14");

(0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)("data-v-204a1f14");

var _hoisted_1 = {
  "class": "p-grid"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Filter Menu", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "p-d-flex p-jc-between p-flex-column p-flex-sm-row"
};
var _hoisted_6 = {
  "class": "p-input-icon-left p-mb-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" No customers found. ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" Loading customers data. Please wait. ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Name", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Country", -1
/* HOISTED */
);

var _hoisted_12 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
  "class": "p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold"
}, "Customized Buttons", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Agent", -1
/* HOISTED */
);

var _hoisted_15 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
  "class": "p-mb-3 p-text-bold"
}, "Agent Picker", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "p-multiselect-representative-option"
};
var _hoisted_18 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Date", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Balance", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_22 = {
  key: 1
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Activity", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "p-d-flex p-ai-center p-jc-between p-px-2"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Verified", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "p-col-12"
};
var _hoisted_27 = {
  "class": "card"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Frozen Columns", -1
/* HOISTED */
);

var _hoisted_29 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};
var _hoisted_30 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};
var _hoisted_31 = {
  "class": "p-text-bold"
};
var _hoisted_32 = {
  "class": "p-col-12"
};
var _hoisted_33 = {
  "class": "card"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Row Expand", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "table-header-container"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Name", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Image", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Price", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Category", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Reviews", -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "orders-subtable"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Id", -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Customer", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Date", -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Amount", -1
/* HOISTED */
);

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "p-col-12"
};
var _hoisted_49 = {
  "class": "card"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Subheader Grouping", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "image-text p-ml-2"
};
var _hoisted_52 = {
  "class": "image-text"
};
var _hoisted_53 = {
  style: {
    "text-align": "right"
  },
  "class": "p-text-bold p-pr-6"
};

(0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Button");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Column");

  var _component_MultiSelect = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("MultiSelect");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Calendar");

  var _component_InputNumber = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("InputNumber");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Dropdown");

  var _component_ProgressBar = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("ProgressBar");

  var _component_Slider = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Slider");

  var _component_TriStateCheckbox = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("TriStateCheckbox");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("DataTable");

  var _component_ToggleButton = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("ToggleButton");

  var _component_Toast = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Toast");

  var _component_Rating = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("Rating");

  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_DataTable, {
    value: $data.customer1,
    paginator: true,
    "class": "p-datatable-gridlines",
    rows: 10,
    dataKey: "id",
    rowHover: true,
    filters: $data.filters1,
    "onUpdate:filters": _cache[3] || (_cache[3] = function ($event) {
      return $data.filters1 = $event;
    }),
    filterDisplay: "menu",
    loading: $data.loading1,
    responsiveLayout: "scroll",
    globalFilterFields: ['name', 'country.name', 'representative.name', 'balance', 'status']
  }, {
    header: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        type: "button",
        icon: "pi pi-filter-slash",
        label: "Clear",
        "class": "p-button-outlined p-mb-2",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.clearFilter1();
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_InputText, {
        modelValue: $data.filters1['global'].value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.filters1['global'].value = $event;
        }),
        placeholder: "Keyword Search",
        style: {
          "width": "100%"
        }
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])];
    }),
    empty: _withId(function () {
      return [_hoisted_8];
    }),
    loading: _withId(function () {
      return [_hoisted_9];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref) {
          var data = _ref.data;
          return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref2) {
          var filterModel = _ref2.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_InputText, {
            type: "text",
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            "class": "p-column-filter",
            placeholder: "Search by name"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        header: "Country",
        filterField: "country.name",
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref3) {
          var data = _ref3.data;
          return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            src: "assets/demo/flags/flag_placeholder.png",
            alt: data.country.name,
            "class": 'flag flag-' + data.country.code,
            width: "30"
          }, null, 10
          /* CLASS, PROPS */
          , ["alt"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.country.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref4) {
          var filterModel = _ref4.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_InputText, {
            type: "text",
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            "class": "p-column-filter",
            placeholder: "Search by country"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        filterclear: _withId(function (_ref5) {
          var filterCallback = _ref5.filterCallback;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
            type: "button",
            icon: "pi pi-times",
            onClick: function onClick($event) {
              return filterCallback();
            },
            "class": "p-button-secondary"
          }, null, 8
          /* PROPS */
          , ["onClick"])];
        }),
        filterapply: _withId(function (_ref6) {
          var filterCallback = _ref6.filterCallback;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
            type: "button",
            icon: "pi pi-check",
            onClick: function onClick($event) {
              return filterCallback();
            },
            "class": "p-button-success"
          }, null, 8
          /* PROPS */
          , ["onClick"])];
        }),
        filterfooter: _withId(function () {
          return [_hoisted_13];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        header: "Agent",
        filterField: "representative",
        showFilterMatchModes: false,
        filterMenuStyle: {
          'width': '14rem'
        },
        style: {
          "min-width": "14rem"
        }
      }, {
        body: _withId(function (_ref7) {
          var data = _ref7.data;
          return [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            alt: data.representative.name,
            src: 'assets/demo/images/avatar/' + data.representative.image,
            width: "32",
            style: {
              "vertical-align": "middle"
            }
          }, null, 8
          /* PROPS */
          , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.representative.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref8) {
          var filterModel = _ref8.filterModel;
          return [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_MultiSelect, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            options: $data.representatives,
            optionLabel: "name",
            placeholder: "Any",
            "class": "p-column-filter"
          }, {
            option: _withId(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
                alt: slotProps.option.name,
                src: 'assets/demo/images/avatar/' + slotProps.option.image,
                width: "32",
                style: {
                  "vertical-align": "middle"
                }
              }, null, 8
              /* PROPS */
              , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.option.name), 1
              /* TEXT */
              )])];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["modelValue", "onUpdate:modelValue", "options"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        header: "Date",
        filterField: "date",
        dataType: "date",
        style: {
          "min-width": "10rem"
        }
      }, {
        body: _withId(function (_ref9) {
          var data = _ref9.data;
          return [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatDate(data.date)), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref10) {
          var filterModel = _ref10.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Calendar, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            dateFormat: "mm/dd/yy",
            placeholder: "mm/dd/yyyy"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        header: "Balance",
        filterField: "balance",
        dataType: "numeric",
        style: {
          "min-width": "10rem"
        }
      }, {
        body: _withId(function (_ref11) {
          var data = _ref11.data;
          return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatCurrency(data.balance)), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref12) {
          var filterModel = _ref12.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_InputNumber, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            mode: "currency",
            currency: "USD",
            locale: "en-US"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        filterMenuStyle: {
          'width': '14rem'
        },
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref13) {
          var data = _ref13.data;
          return [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
            "class": 'customer-badge status-' + data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        filter: _withId(function (_ref14) {
          var filterModel = _ref14.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Dropdown, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            options: $data.statuses,
            placeholder: "Any",
            "class": "p-column-filter",
            showClear: true
          }, {
            value: _withId(function (slotProps) {
              return [slotProps.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("span", {
                key: 0,
                "class": 'customer-badge status-' + slotProps.value
              }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.value), 3
              /* TEXT, CLASS */
              )) : ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.placeholder), 1
              /* TEXT */
              ))];
            }),
            option: _withId(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
                "class": 'customer-badge status-' + slotProps.option
              }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.option), 3
              /* TEXT, CLASS */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["modelValue", "onUpdate:modelValue", "options"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "activity",
        header: "Activity",
        showFilterMatchModes: false,
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref15) {
          var data = _ref15.data;
          return [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_ProgressBar, {
            value: data.activity,
            showValue: false
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        filter: _withId(function (_ref16) {
          var filterModel = _ref16.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Slider, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            range: "",
            "class": "p-m-3"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(filterModel.value ? filterModel.value[0] : 0), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(filterModel.value ? filterModel.value[1] : 100), 1
          /* TEXT */
          )])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "verified",
        header: "Verified",
        dataType: "boolean",
        bodyClass: "p-text-center",
        style: {
          "min-width": "8rem"
        }
      }, {
        body: _withId(function (_ref17) {
          var data = _ref17.data;
          return [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("i", {
            "class": ["pi", {
              'true-icon pi-check-circle': data.verified,
              'false-icon pi-times-circle': !data.verified
            }]
          }, null, 2
          /* CLASS */
          )];
        }),
        filter: _withId(function (_ref18) {
          var filterModel = _ref18.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_TriStateCheckbox, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            }
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "filters", "loading", "globalFilterFields"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_ToggleButton, {
    modelValue: $data.idFrozen,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.idFrozen = $event;
    }),
    onIcon: "pi pi-lock",
    offIcon: "pi pi-lock-open",
    onLabel: "Unfreeze Id",
    offLabel: "Freeze Id",
    style: {
      "width": "10rem"
    }
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_DataTable, {
    value: $data.customer2,
    scrollable: true,
    scrollHeight: "400px",
    loading: $data.loading2,
    scrollDirection: "both",
    "class": "p-mt-3"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          width: '150px'
        },
        frozen: ""
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "id",
        header: "Id",
        style: {
          width: '100px'
        },
        frozen: $data.idFrozen
      }, null, 8
      /* PROPS */
      , ["frozen"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "country.name",
        header: "Country",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref19) {
          var data = _ref19.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            src: "assets/demo/flags/flag_placeholder.png",
            "class": 'flag flag-' + data.country.code,
            width: "30"
          }, null, 2
          /* CLASS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.country.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "date",
        header: "Date",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "company",
        header: "Company",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref20) {
          var data = _ref20.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
            "class": 'customer-badge status-' + data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "activity",
        header: "Activity",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "representative.name",
        header: "Representative",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref21) {
          var data = _ref21.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            alt: data.representative.name,
            src: 'assets/demo/images/avatar/' + data.representative.image,
            width: "32",
            style: {
              "vertical-align": "middle"
            }
          }, null, 8
          /* PROPS */
          , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(data.representative.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "balance",
        header: "Balance",
        style: {
          width: '150px'
        },
        frozen: "",
        alignFrozen: "right"
      }, {
        body: _withId(function (_ref22) {
          var data = _ref22.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatCurrency(data.balance)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "loading"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Toast), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_DataTable, {
    value: $data.products,
    expandedRows: $data.expandedRows,
    "onUpdate:expandedRows": _cache[5] || (_cache[5] = function ($event) {
      return $data.expandedRows = $event;
    }),
    dataKey: "id",
    responsiveLayout: "scroll",
    onRowExpand: $options.onRowExpand,
    onRowCollapse: $options.onRowCollapse
  }, {
    header: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        icon: "pi pi-plus",
        label: "Expand All",
        onClick: $options.expandAll,
        "class": "p-mr-2 p-mb-2"
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
        icon: "pi pi-minus",
        label: "Collapse All",
        onClick: $options.collapseAll,
        "class": "p-mb-2"
      }, null, 8
      /* PROPS */
      , ["onClick"])])];
    }),
    expansion: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("h5", null, "Orders for " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_DataTable, {
        value: slotProps.data.orders,
        responsiveLayout: "scroll"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            field: "id",
            header: "Id",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.id), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            field: "customer",
            header: "Customer",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.customer), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            field: "date",
            header: "Date",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.date), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            field: "amount",
            header: "Amount",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatCurrency(slotProps.data.amount)), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            field: "status",
            header: "Status",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
                "class": 'order-badge order-' + (slotProps.data.status ? slotProps.data.status.toLowerCase() : '')
              }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.status), 3
              /* TEXT, CLASS */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
            headerStyle: "width:4rem"
          }, {
            body: _withId(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {
                icon: "pi pi-search"
              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["value"])])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        expander: true,
        headerStyle: "width: 3rem"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        header: "Image"
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            src: 'assets/demo/images/product/' + slotProps.data.image,
            alt: slotProps.data.image,
            "class": "product-image"
          }, null, 8
          /* PROPS */
          , ["src", "alt"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "price",
        header: "Price",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatCurrency(slotProps.data.price)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "category",
        header: "Category",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.formatCurrency(slotProps.data.category)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "rating",
        header: "Reviews",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Rating, {
            modelValue: slotProps.data.rating,
            readonly: true,
            cancel: false
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "inventoryStatus",
        header: "Status",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
            "class": 'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.inventoryStatus), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "expandedRows", "onRowExpand", "onRowCollapse"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_DataTable, {
    value: $data.customer3,
    rowGroupMode: "subheader",
    groupRowsBy: "representative.name",
    sortMode: "single",
    sortField: "representative.name",
    sortOrder: 1,
    scrollable: "",
    scrollHeight: "400px"
  }, {
    groupheader: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
        alt: slotProps.data.representative.name,
        src: 'assets/demo/images/avatar/' + slotProps.data.representative.image,
        width: "32",
        style: {
          "vertical-align": "middle"
        }
      }, null, 8
      /* PROPS */
      , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.representative.name), 1
      /* TEXT */
      )];
    }),
    groupfooter: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("td", _hoisted_53, "Total Customers: " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($options.calculateCustomerTotal(slotProps.data.representative.name)), 1
      /* TEXT */
      )];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "representative.name",
        header: "Representative"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          "min-width": "200px"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "country",
        header: "Country",
        style: {
          "min-width": "200px"
        }
      }, {
        body: _withId(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("img", {
            src: "assets/demo/flags/flag_placeholder.png",
            "class": 'flag flag-' + slotProps.data.country.code,
            width: "30"
          }, null, 2
          /* CLASS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.country.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "company",
        header: "Company",
        style: {
          "min-width": "200px"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        style: {
          "min-width": "200px"
        }
      }, {
        body: _withId(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
            "class": 'customer-badge status-' + slotProps.data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(slotProps.data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {
        field: "date",
        header: "Date",
        style: {
          "min-width": "200px"
        }
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])])]);
});

/***/ }),

/***/ "./resources/js/service/CustomerService.js":
/*!*************************************************!*\
  !*** ./resources/js/service/CustomerService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var CustomerService = /*#__PURE__*/function () {
  function CustomerService() {
    (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CustomerService);
  }

  (0,E_laragon_www_back_office_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CustomerService, [{
    key: "getCustomersSmall",
    value: function getCustomersSmall() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/customers-small.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersMedium",
    value: function getCustomersMedium() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/customers-medium.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersLarge",
    value: function getCustomersLarge() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/customers-large.json').then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersXLarge",
    value: function getCustomersXLarge() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('assets/demo/data/customers-xlarge.json').then(function (res) {
        return res.data.data;
      });
    }
  }]);

  return CustomerService;
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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-204a1f14] .p-datatable-frozen-tbody {\n  font-weight: bold;\n}\n[data-v-204a1f14] .p-datatable-scrollable .p-frozen-column {\n  font-weight: bold;\n}\n[data-v-204a1f14] .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[data-v-204a1f14] .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n.p-datatable .p-column-filter[data-v-204a1f14] {\n  display: none;\n}\n.table-header[data-v-204a1f14] {\n  display: flex;\n  justify-content: space-between;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n/* Responsive */\n.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title[data-v-204a1f14] {\n  display: none;\n}\n.customer-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new[data-v-204a1f14] {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal[data-v-204a1f14] {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal[data-v-204a1f14] {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.p-progressbar-value.ui-widget-header[data-v-204a1f14] {\n  background: #607d8b;\n}\n@media (max-width: 640px) {\n.p-progressbar[data-v-204a1f14] {\n    margin-top: 0.5rem;\n}\n}\n.product-image[data-v-204a1f14] {\n  width: 100px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.orders-subtable[data-v-204a1f14] {\n  padding: 1rem;\n}\n.product-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned[data-v-204a1f14] {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left !important;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n    display: inline-block;\n    width: 60%;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-rating {\n    display: inline-block;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr.p-rowgroup-footer {\n    display: flex;\n}\n}\n.true-icon[data-v-204a1f14] {\n  color: #256029;\n}\n.false-icon[data-v-204a1f14] {\n  color: #C63737;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/primevue/api/api.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/primevue/api/api.esm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMatchMode": () => (/* binding */ FilterMatchMode),
/* harmony export */   "FilterOperator": () => (/* binding */ FilterOperator),
/* harmony export */   "FilterService": () => (/* binding */ FilterService),
/* harmony export */   "PrimeIcons": () => (/* binding */ PrimeIcons)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/primevue/utils/utils.esm.js");


const FilterMatchMode = {
    STARTS_WITH : 'startsWith',
    CONTAINS : 'contains',
    NOT_CONTAINS : 'notContains',
    ENDS_WITH : 'endsWith',
    EQUALS : 'equals',
    NOT_EQUALS : 'notEquals',
    IN : 'in',
    LESS_THAN : 'lt',
    LESS_THAN_OR_EQUAL_TO : 'lte',
    GREATER_THAN : 'gt',
    GREATER_THAN_OR_EQUAL_TO : 'gte',
    BETWEEN : 'between',
    DATE_IS : 'dateIs',
    DATE_IS_NOT : 'dateIsNot',
    DATE_BEFORE : 'dateBefore',
    DATE_AFTER : 'dateAfter'
};

const FilterOperator = {
    AND: 'and',
    OR: 'or'
};

const FilterService = {
    filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.resolveFieldData(item, field);

                    if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },
    filters: {
        startsWith(value, filter, filterLocale)  {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.slice(0, filterValue.length) === filterValue;
        },
        contains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) !== -1;
        },
        notContains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) === -1;
        },
        endsWith(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        },
        equals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() === filter.getTime();
            else
                return primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return false;
            }
    
            if (value === undefined || value === null) {
                return true;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() !== filter.getTime();
            else
                return primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in(value, filter) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }
    
            for (let i = 0; i < filter.length; i++) {
                if (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.equals(value, filter[i])) {
                    return true;
                }
            }
    
            return false;
        },
        between(value, filter) {
            if (filter == null || filter[0] == null || filter[1] == null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime)
            return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
            else
                return filter[0] <= value && value <= filter[1];
        },
        lt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() < filter.getTime();
            else
                return value < filter;
        },
        lte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() <= filter.getTime();
            else
                return value <= filter;
        },
        gt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() > filter.getTime();
            else
                return value > filter;
        },
        gte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() >= filter.getTime();
            else
                return value >= filter;
        },
        dateIs(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() === filter.toDateString();
        },
        dateIsNot(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() !== filter.toDateString();
        },
        dateBefore(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() < filter.getTime();
        },
        dateAfter(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() > filter.getTime();
        }
    },
    register(rule, fn) {
        this.filters[rule] = fn;
    }
};

const PrimeIcons = {
    ALIGN_CENTER:'pi pi-align-center',
    ALIGN_JUSTIFY:'pi pi-align-justify',
    ALIGN_LEFT:'pi pi-align-left',
    ALIGN_RIGHT:'pi pi-align-right',
    AMAZON:'pi pi-amazon',
    ANDROID:'pi pi-android',
    ANGLE_DOUBLE_DOWN:'pi pi-angle-double-down',
    ANGLE_DOUBLE_LEFT:'pi pi-angle-double-left',
    ANGLE_DOUBLE_RIGHT:'pi pi-angle-double-right',
    ANGLE_DOUBLE_UP:'pi pi-angle-double-up',
    ANGLE_DOWN:'pi pi-angle-down',
    ANGLE_LEFT:'pi pi-angle-left',
    ANGLE_RIGHT:'pi pi-angle-right',
    ANGLE_UP:'pi pi-angle-up',
    APPLE:'pi pi-apple',
    ARROW_CIRCLE_DOWN:'pi pi-arrow-circle-down',
    ARROW_CIRCLE_LEFT:'pi pi-arrow-circle-left',
    ARROW_CIRCLE_RIGHT:'pi pi-arrow-circle-right',
    ARROW_CIRCLE_UP:'pi pi-arrow-circle-up',
    ARROW_DOWN:'pi pi-arrow-down',
    ARROW_LEFT:'pi pi-arrow-left',
    ARROW_RIGHT:'pi pi-arrow-right',
    ARROW_UP:'pi pi-arrow-up',
    BACKWARD:'pi pi-backward',
    BAN:'pi pi-ban',
    BARS:'pi pi-bars',
    BELL:'pi pi-bell',
    BOOK:'pi pi-book',
    BOOKMARK:'pi pi-bookmark',
    BRIEFCASE:'pi pi-briefcase',
    CALENDAR_MINUS:'pi pi-calendar-minus',
    CALENDAR_PLUS:'pi pi-calendar-plus',
    CALENDAR_TIMES:'pi pi-calendar-times',
    CALENDAR:'pi pi-calendar',
    CAMERA:'pi pi-camera',
    CARET_DOWN:'pi pi-caret-down',
    CARET_LEFT:'pi pi-caret-left',
    CARET_RIGHT:'pi pi-caret-right',
    CARET_UP:'pi pi-caret-up',
    CHART_BAR:'pi pi-chart-bar',
    CHART_LINE:'pi pi-chart-line',
    CHECK_CIRCLE:'pi pi-check-circle',
    CHECK_SQUARE:'pi pi-check-square',
    CHECK:'pi pi-check',
    CHEVRON_CIRCLE_DOWN:'pi pi-chevron-circle-down',
    CHEVRON_CIRCLE_LEFT:'pi pi-chevron-circle-left',
    CHEVRON_CIRCLE_RIGHT:'pi pi-chevron-circle-right',
    CHEVRON_CIRCLE_UP:'pi pi-chevron-circle-up',
    CHEVRON_DOWN:'pi pi-chevron-down',
    CHEVRON_LEFT:'pi pi-chevron-left',
    CHEVRON_RIGHT:'pi pi-chevron-right',
    CHEVRON_UP:'pi pi-chevron-up',
    CLOCK:'pi pi-clock',
    CLONE:'pi pi-clone',
    CLOUD_DOWNLOAD:'pi pi-cloud-download',
    CLOUD_UPLOAD:'pi pi-cloud-upload',
    CLOUD:'pi pi-cloud',
    COG:'pi pi-cog',
    COMMENT:'pi pi-comment',
    COMMENTS:'pi pi-comments',
    COMPASS:'pi pi-compass',
    COPY:'pi pi-copy',
    CREDIT_CARD:'pi pi-credit-card',
    DESKTOP:'pi pi-desktop',
    DISCORD:'pi pi-discord',
    DIRECTIONS_ALT:'pi pi-directions-alt',
    DIRECTIONS:'pi pi-directions',
    DOLLAR:'pi pi-dollar',
    DOWNLOAD:'pi pi-download',
    EJECT:'pi pi-eject',
    ELLIPSIS_H:'pi pi-ellipsis-h',
    ELLIPSIS_V:'pi pi-ellipsis-v',
    ENVELOPE:'pi pi-envelope',
    EXCLAMATION_CIRCLE:'pi pi-exclamation-circle',
    EXCLAMATION_TRIANGLE :'pi pi-exclamation-triangle ',
    EXTERNAL_LINK:'pi pi-external-link',
    EYE_SLASH:'pi pi-eye-slash',
    EYE:'pi pi-eye',
    FACEBOOK:'pi pi-facebook',
    FAST_BACKWARD:'pi pi-fast-backward',
    FAST_FORWARD:'pi pi-fast-forward',
    FILE_EXCEL:'pi pi-file-excel',
    FILE_O:'pi pi-file-o',
    FILE_PDF:'pi pi-file-pdf',
    FILE:'pi pi-file',
    FILTER:'pi pi-filter',
    FILTER_SLASH:'pi pi-filter-slash',
    FLAG:'pi pi-flag',
    FOLDER_OPEN:'pi pi-folder-open',
    FOLDER:'pi pi-folder',
    FORWARD:'pi pi-forward',
    GITHUB:'pi pi-github',
    GLOBE:'pi pi-globe',
    GOOGLE:'pi pi-google',
    HEART:'pi pi-heart',
    HOME:'pi pi-home',
    ID_CARD:'pi pi-id-card',
    IMAGE:'pi pi-image',
    IMAGES:'pi pi-images',
    INBOX:'pi pi-inbox',
    INFO_CIRCLE:'pi pi-info-circle',
    INFO:'pi pi-info',
    KEY:'pi pi-key',
    LINK:'pi pi-link',
    LIST:'pi pi-list',
    LOCK_OPEN:'pi pi-lock-open',
    LOCK:'pi pi-lock',
    MAP:'pi pi-map',
    MAP_MARKER:'pi pi-map-marker',
    MICROSOFT:'pi pi-microsoft',
    MINUS_CIRCLE:'pi pi-minus-circle',
    MINUS:'pi pi-minus',
    MOBILE:'pi pi-mobile',
    MONEY_BILL:'pi pi-money-bill',
    MOON:'pi pi-moon',
    PALETTE:'pi pi-palette',
    PAPERCLIP:'pi pi-paperclip',
    PAUSE:'pi pi-pause',
    PAYPAL:'pi pi-paypal',
    PENCIL:'pi pi-pencil',
    PERCENTAGE:'pi pi-percentage',
    PHONE:'pi pi-phone',
    PLAY:'pi pi-play',
    PLUS_CIRCLE:'pi pi-plus-circle',
    PLUS:'pi pi-plus',
    POWER_OFF:'pi pi-power-off',
    PRINT:'pi pi-print',
    QUESTION_CIRCLE:'pi pi-question-circle',
    QUESTION:'pi pi-question',
    RADIO_OFF:'pi pi-radio-off',
    RADIO_ON:'pi pi-radio-on',
    REFRESH:'pi pi-refresh',
    REPLAY:'pi pi-replay',
    REPLY:'pi pi-reply',
    SAVE:'pi pi-save',
    SEARCH_MINUS:'pi pi-search-minus',
    SEARCH_PLUS:'pi pi-search-plus',
    SEARCH:'pi pi-search',
    SEND:'pi pi-send',
    SHARE_ALT:'pi pi-share-alt',
    SHIELD:'pi pi-shield',
    SHOPPING_CART:'pi pi-shopping-cart',
    SIGN_IN:'pi pi-sign-in',
    SIGN_OUT:'pi pi-sign-out',
    SITEMAP:'pi pi-sitemap',
    SLACK:'pi pi-slack',
    SLIDERS_H:'pi pi-sliders-h',
    SLIDERS_V:'pi pi-sliders-v',
    SORT_ALPHA_ALT_DOWN:'pi pi-sort-alpha-alt-down',
    SORT_ALPHA_ALT_UP:'pi pi-sort-alpha-alt-up',
    SORT_ALPHA_DOWN:'pi pi-sort-alpha-down',
    SORT_ALPHA_UP:'pi pi-sort-alpha-up',
    SORT_ALT:'pi pi-sort-alt',
    SORT_AMOUNT_DOWN_ALT:'pi pi-sort-amount-down-alt',
    SORT_AMOUNT_DOWN:'pi pi-sort-amount-down',
    SORT_AMOUNT_UP_ALT:'pi pi-sort-amount-up-alt',
    SORT_AMOUNT_UP:'pi pi-sort-amount-up',
    SORT_DOWN:'pi pi-sort-down',
    SORT_NUMERIC_ALT_DOWN:'pi pi-sort-numeric-alt-down',
    SORT_NUMERIC_ALT_UP:'pi pi-sort-numeric-alt-up',
    SORT_NUMERIC_DOWN:'pi pi-sort-numeric-down',
    SORT_NUMERIC_UP:'pi pi-sort-numeric-up',
    SORT_UP:'pi pi-sort-up',
    SORT:'pi pi-sort',
    SPINNER:'pi pi-spinner',
    STAR_O:'pi pi-star-o',
    STAR:'pi pi-star',
    STEP_BACKWARD_ALT:'pi pi-step-backward-alt',
    STEP_BACKWARD:'pi pi-step-backward',
    STEP_FORWARD_ALT:'pi pi-step-forward-alt',
    STEP_FORWARD:'pi pi-step-forward',
    SUN:'pi pi-sun',
    TABLE:'pi pi-table',
    TABLET:'pi pi-tablet',
    TAG:'pi pi-tag',
    TAGS:'pi pi-tags',
    TH_LARGE:'pi pi-th-large',
    THUMBS_DOWN:'pi pi-thumbs-down',
    THUMBS_UP:'pi pi-thumbs-up',
    TICKET:'pi pi-ticket',
    TIMES_CIRCLE:'pi pi-times-circle',
    TIMES:'pi pi-times',
    TRASH:'pi pi-trash',
    TWITTER:'pi pi-twitter',
    UNDO:'pi pi-undo',
    UNLOCK:'pi pi-unlock',
    UPLOAD:'pi pi-upload',
    USER_EDIT:'pi pi-user-edit',
    USER_MINUS:'pi pi-user-minus',
    USER_PLUS:'pi pi-user-plus',
    USER:'pi pi-user',
    USERS:'pi pi-users',
    VIDEO:'pi pi-video',
    VIMEO:'pi pi-vimeo',
    VOLUME_DOWN:'pi pi-volume-down',
    VOLUME_OFF:'pi pi-volume-off',
    VOLUME_UP:'pi pi-volume-up',
    YOUTUBE:'pi pi-youtube',
    WALLET:'pi pi-wallet',
    WIFI:'pi pi-wifi',
    WINDOW_MAXIMIZE:'pi pi-window-maximize',
    WINDOW_MINIMIZE:'pi pi-window-minimize'
};




/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/TableDemo.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TableDemo.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=template&id=204a1f14&scoped=true */ "./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true");
/* harmony import */ var _TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=script&lang=js */ "./resources/js/components/TableDemo.vue?vue&type=script&lang=js");
/* harmony import */ var _TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");




;
_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-204a1f14"
/* hot reload */
if (false) {}

_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/TableDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=template&id=204a1f14&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true");


/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");


/***/ })

}]);