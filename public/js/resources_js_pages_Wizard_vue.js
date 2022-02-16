(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Wizard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activeTab: "register",
      activeCard: "",
      selectDropdownOptions1: null,
      selectDropdownOptions2: null,
      birthDate: null,
      checked: false,
      radioButton1: '',
      dropdownOptions1: [{
        label: 'UTC-12.00',
        value: {
          id: 1,
          name: 'UTC-12.00',
          code: '-12'
        }
      }, {
        label: 'UTC-11.00',
        value: {
          id: 2,
          name: 'UTC-11.00',
          code: '-11'
        }
      }, {
        label: 'UTC-10.00',
        value: {
          id: 3,
          name: 'UTC-10.00',
          code: '-10'
        }
      }, {
        label: 'UTC-09.30',
        value: {
          id: 4,
          name: 'UTC-09.30',
          code: '-93'
        }
      }, {
        label: 'UTC-09.00',
        value: {
          id: 5,
          name: 'UTC-09.00',
          code: '-09'
        }
      }, {
        label: 'UTC-08.00',
        value: {
          id: 6,
          name: 'UTC-08.00',
          code: '-08'
        }
      }, {
        label: 'UTC-07.00',
        value: {
          id: 7,
          name: 'UTC-07.00',
          code: '-07'
        }
      }, {
        label: 'UTC-06.00',
        value: {
          id: 8,
          name: 'UTC-06.00',
          code: '-06'
        }
      }, {
        label: 'UTC-05.00',
        value: {
          id: 9,
          name: 'UTC-05.00',
          code: '-05'
        }
      }, {
        label: 'UTC-04.00',
        value: {
          id: 10,
          name: 'UTC-04.00',
          code: '-04'
        }
      }, {
        label: 'UTC-03.30',
        value: {
          id: 11,
          name: 'UTC-03.30',
          code: '-33'
        }
      }, {
        label: 'UTC-03.00',
        value: {
          id: 12,
          name: 'UTC-03.00',
          code: '-03'
        }
      }, {
        label: 'UTC-02.00',
        value: {
          id: 13,
          name: 'UTC-02.00',
          code: '-02'
        }
      }, {
        label: 'UTC-01.00',
        value: {
          id: 14,
          name: 'UTC-01.00',
          code: '-01'
        }
      }, {
        label: 'UTC-+00.00',
        value: {
          id: 15,
          name: 'UTC-+00.00',
          code: '-00'
        }
      }, {
        label: 'UTC+01.00',
        value: {
          id: 16,
          name: 'UTC+01.00',
          code: '+01'
        }
      }, {
        label: 'UTC+02.00',
        value: {
          id: 17,
          name: 'UTC+02.00',
          code: '+02'
        }
      }, {
        label: 'UTC+03.00',
        value: {
          id: 18,
          name: 'UTC+03.00',
          code: '+03'
        }
      }, {
        label: 'UTC+03.30',
        value: {
          id: 19,
          name: 'UTC+03.30',
          code: '+33'
        }
      }, {
        label: 'UTC+04.00',
        value: {
          id: 20,
          name: 'UTC+04.00',
          code: '+04'
        }
      }, {
        label: 'UTC+04.30',
        value: {
          id: 21,
          name: 'UTC+04.30',
          code: '+43'
        }
      }, {
        label: 'UTC+05.00',
        value: {
          id: 22,
          name: 'UTC+05.00',
          code: '+05'
        }
      }, {
        label: 'UTC+05.30',
        value: {
          id: 23,
          name: 'UTC+05.30',
          code: '+53'
        }
      }, {
        label: 'UTC+05.45',
        value: {
          id: 24,
          name: 'UTC+05.45',
          code: '+54'
        }
      }, {
        label: 'UTC+06.00',
        value: {
          id: 25,
          name: 'UTC+06.00',
          code: '+06'
        }
      }, {
        label: 'UTC+06.30',
        value: {
          id: 26,
          name: 'UTC+06.30',
          code: '+63'
        }
      }, {
        label: 'UTC+07.00',
        value: {
          id: 27,
          name: 'UTC+07.00',
          code: '+07'
        }
      }, {
        label: 'UTC+08.00',
        value: {
          id: 28,
          name: 'UTC+08.00',
          code: '+08'
        }
      }, {
        label: 'UTC+08.45',
        value: {
          id: 29,
          name: 'UTC+08.45',
          code: '+84'
        }
      }, {
        label: 'UTC+09.00',
        value: {
          id: 30,
          name: 'UTC+09.00',
          code: '+09'
        }
      }, {
        label: 'UTC+09.30',
        value: {
          id: 31,
          name: 'UTC+09.30',
          code: '+93'
        }
      }, {
        label: 'UTC+10.00',
        value: {
          id: 32,
          name: 'UTC+10.00',
          code: '+10'
        }
      }, {
        label: 'UTC+10.30',
        value: {
          id: 33,
          name: 'UTC+10.30',
          code: '+13'
        }
      }, {
        label: 'UTC+11.00',
        value: {
          id: 34,
          name: 'UTC+01.00',
          code: '+11'
        }
      }, {
        label: 'UTC+12.00',
        value: {
          id: 35,
          name: 'UTC+01.00',
          code: '+12'
        }
      }, {
        label: 'UTC+12.45',
        value: {
          id: 36,
          name: 'UTC+01.00',
          code: '+24'
        }
      }, {
        label: 'UTC+13.00',
        value: {
          id: 37,
          name: 'UTC+01.00',
          code: '+13'
        }
      }, {
        label: 'UTC+14.00',
        value: {
          id: 38,
          name: 'UTC+01.00',
          code: '+14'
        }
      }],
      dropdownOptions2: [{
        label: 'Where did you hear Babylon',
        value: null
      }, {
        label: 'Blogs',
        value: 'Blogs'
      }, {
        label: 'Google Ads',
        value: 'google'
      }, {
        label: 'Your Forum',
        value: 'prime-forum'
      }, {
        label: 'Youtube',
        value: 'Youtube'
      }, {
        label: 'Reddit',
        value: 'Reddit'
      }, {
        label: 'Events',
        value: 'Events'
      }, {
        label: 'Other',
        value: 'Other'
      }]
    };
  },
  methods: {
    clickNext: function clickNext(step) {
      this.activeTab = step;
    },
    selectTier: function selectTier(card) {
      this.activeCard = card;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "wizard-body"
};
var _hoisted_2 = {
  "class": "wizard-wrapper"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "wizard-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "wizard-logo"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "/"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/logo-black.png",
  alt: "babylon-layout"
})])])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "wizard-content"
};
var _hoisted_5 = {
  "class": "wizard-card"
};
var _hoisted_6 = {
  "class": "wizard-card-header"
};
var _hoisted_7 = {
  "class": "wizard-card-header-banner"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "banner-logo"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/extensions/babylon-icon.png",
  alt: "babylon-layout"
})], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Create a Babylon Account", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/extensions/bg-header.png",
  alt: "babylon-layout"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Choose Your Account Type", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/extensions/bg-header-2.png",
  alt: "babylon-layout"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Complete Your Registration with Payment", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/extensions/bg-header-3.png",
  alt: "babylon-layout"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "wizard-card-tabs"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-exclamation-circle"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "You must have an account to complete your order and manage your downloads.")], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "wizard-forms-wrapper p-grid p-nogutter"
};
var _hoisted_18 = {
  "class": "p-col-12 p-md-6 wizard-forms"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "username",
  "class": "form-label"
}, "Enter Username", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "email",
  "class": "form-label"
}, "Enter Email", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "password",
  "class": "form-label"
}, "Enter Password", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "p-col-12 p-md-6 wizard-forms"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "timezone",
  "class": "form-label"
}, "Select Timezone", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "calendar"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "birthdate",
  "class": "form-label"
}, "Birthdate", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "babylon",
  "class": "form-label"
}, "Where did you hear Babylon?", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "wizard-button"
};
var _hoisted_28 = {
  "class": "wizard-tier-cards p-grid "
};
var _hoisted_29 = {
  "class": "p-col-12 p-md-4 "
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"wizard-tier-card-header\"><img src=\"assets/layout/images/extensions/asset-beginner.png\" alt=\"babylon-layout\"></div><div class=\"wizard-tier-card-content\"><div class=\"title\"><h1>Beginner</h1><span>Starting from $5 per month</span></div><ul><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Responsive</p></li><li><i class=\"pi pi-check-circle\"></i><p>Push Notifications</p></li><li><i class=\"pi pi-check-circle\"></i><p>7/24 Support</p></li><li><i class=\"pi pi-check-circle\"></i><p>Unlimited Space</p></li></ul></div>", 2);

var _hoisted_32 = {
  "class": "p-col-12 p-md-4 "
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"wizard-tier-card-header\"><img src=\"assets/layout/images/extensions/asset-pro.png\" alt=\"babylon-layout\"></div><div class=\"wizard-tier-card-content\"><div class=\"title\"><h1>Professional</h1><span>Starting from $10 per month</span></div><ul><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Responsive</p></li><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Push Notifications</p></li><li><i class=\"pi pi-check-circle\"></i><p>7/24 Support</p></li><li><i class=\"pi pi-check-circle\"></i><p>Unlimited Space</p></li></ul></div>", 2);

var _hoisted_35 = {
  "class": "p-col-12 p-md-4 "
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"wizard-tier-card-header\"><img src=\"assets/layout/images/extensions/asset-enterprise.png\" alt=\"babylon-layout\"></div><div class=\"wizard-tier-card-content\"><div class=\"title\"><h1>Enterprise</h1><span>Starting from $20 per month</span></div><ul><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Responsive</p></li><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Push Notifications</p></li><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>7/24 Support</p></li><li class=\"active-list-item\"><i class=\"pi pi-check-circle\"></i><p>Unlimited Space</p></li></ul></div>", 2);

var _hoisted_38 = {
  "class": "wizard-button"
};
var _hoisted_39 = {
  "class": "wizard-forms-wrapper"
};
var _hoisted_40 = {
  "class": "wizard-forms "
};
var _hoisted_41 = {
  "class": "customPanel p-grid"
};
var _hoisted_42 = {
  "class": "p-col-1 p-lg-1 p-md-1",
  style: {
    "line-height": "2em"
  }
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"p-col-11 p-lg-5 p-md-5\"><div class=\"credits\"><img src=\"assets/layout/images/extensions/asset-mastercard.png\" alt=\"babylon-layout\"><img src=\"assets/layout/images/extensions/asset-visa.png\" alt=\"babylon-layout\"><img src=\"assets/layout/images/extensions/asset-amex.png\" alt=\"babylon-layout\"></div></div>", 1);

var _hoisted_44 = {
  "class": "p-col-1 p-lg-1 p-md-1",
  style: {
    "line-height": "2em"
  }
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-col-11 p-lg-5 p-md-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "paypal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "assets/layout/images/extensions/asset-paypal.png",
  alt: "babylon-layout"
})])], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "numbers p-grid"
};
var _hoisted_47 = {
  "class": "p-col-12"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "form-label"
}, "Cardholder Name", -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "numbers p-grid"
};
var _hoisted_50 = {
  "class": "p-col-12 p-md-6"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "number",
  "class": "form-label"
}, "Cardholder Number", -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "p-col-6 p-md-3"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "date",
  "class": "form-label"
}, "Date", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "p-col-6 p-md-3"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "ccv",
  "class": "form-label"
}, "CCV", -1
/* HOISTED */
);

var _hoisted_56 = {
  style: {
    "margin-top": "24px",
    "padding-left": "1.5rem"
  }
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "form-inline-label p-ml-2"
}, "Save credit card information for future usage", -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "wizard-button"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "ORDER SUMMARY", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "$00.00", -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "Please select one tier.", -1
/* HOISTED */
);

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "ORDER SUMMARY", -1
/* HOISTED */
);

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "$5.00", -1
/* HOISTED */
);

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "Babylon Beginner Membership.", -1
/* HOISTED */
);

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "ORDER SUMMARY", -1
/* HOISTED */
);

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "$10.00", -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "Babylon Professional Membership.", -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "ORDER SUMMARY", -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "$20.00", -1
/* HOISTED */
);

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "Babylon Enterprise Membership.", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_RadioButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioButton");

  var _component_InputMask = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputMask");

  var _component_Checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Checkbox");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["banner-image banner-1", {
      ' active-banner': $data.activeTab === 'register'
    }]
  }, [_hoisted_9, _hoisted_10], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["banner-image banner-2", {
      ' active-banner': $data.activeTab === 'tier'
    }]
  }, [_hoisted_11, _hoisted_12], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["banner-image banner-3", {
      ' active-banner': $data.activeTab === 'payment'
    }]
  }, [_hoisted_13, _hoisted_14], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-tab register-tab", {
      'selected-tab': $data.activeTab === 'register'
    }],
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.clickNext('register');
    })
  }, " REGISTER ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-tab tier-tab", {
      'selected-tab': $data.activeTab === 'tier'
    }],
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.clickNext('tier');
    })
  }, " CHOOSE TIER ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-tab payment-tab", {
      'selected-tab': $data.activeTab === 'payment'
    }],
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.clickNext('payment');
    })
  }, " PAYMENT ", 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-content register", {
      'active-content': $data.activeTab === 'register'
    }]
  }, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    id: "username",
    type: "text"
  }), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    id: "email",
    type: "text"
  }), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    id: "password",
    type: "password"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
    id: "timezone",
    style: {
      "{'margin-bottom'": "'10px'}"
    },
    options: $data.dropdownOptions1,
    optionLabel: "label",
    modelValue: $data.selectDropdownOptions1,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.selectDropdownOptions1 = $event;
    }),
    placeholder: "Select Time Zone"
  }, null, 8
  /* PROPS */
  , ["options", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
    id: "birthdate",
    modelValue: $data.birthDate,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.birthDate = $event;
    }),
    appendTo: "body"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
    id: "babylon",
    options: $data.dropdownOptions2,
    optionLabel: "label",
    modelValue: $data.selectDropdownOptions2,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.selectDropdownOptions2 = $event;
    }),
    appendTo: "body",
    style: {
      "{'margin-bottom'": "'10px'}"
    },
    placeholder: "Where did you hear Babylon?"
  }, null, 8
  /* PROPS */
  , ["options", "modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "continue-button",
    label: "CONTINUE",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.clickNext('tier');
    })
  })])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-content tier", {
      'active-content': $data.activeTab === 'tier'
    }]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-tier-card beginner", {
      'active-tier-card': $data.activeCard === 'basic'
    }],
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.selectTier('basic');
    })
  }, [_hoisted_30], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-tier-card professional", {
      'active-tier-card': $data.activeCard === 'professional'
    }],
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.selectTier('professional');
    })
  }, [_hoisted_33], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-tier-card enterprise", {
      'active-tier-card': $data.activeCard === 'enterprise'
    }],
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.selectTier('enterprise');
    })
  }, [_hoisted_36], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "continue-button",
    label: "CONTINUE",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.clickNext('payment');
    })
  })])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["wizard-card-content payment", {
      'active-content': $data.activeTab === 'payment'
    }]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
    name: "group1",
    value: "Credit",
    modelValue: $data.radioButton1,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.radioButton1 = $event;
    }),
    id: "credit"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
    name: "group1",
    value: "Paypal",
    modelValue: $data.radioButton1,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.radioButton1 = $event;
    }),
    id: "paypal"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), _hoisted_45]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    id: "name",
    type: "text"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputMask, {
    mask: "9999-9999-9999-9999"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputMask, {
    mask: "99/99"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputMask, {
    mask: "999"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Checkbox, {
    modelValue: $data.checked,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.checked = $event;
    }),
    binary: true
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_57])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["order-summary order-default", {
      'selected-order': $data.activeCard === ''
    }]
  }, [_hoisted_59, _hoisted_60, _hoisted_61], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["order-summary order-beginner", {
      'selected-order': $data.activeCard === 'basic'
    }]
  }, [_hoisted_62, _hoisted_63, _hoisted_64], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["order-summary order-professional", {
      'selected-order': $data.activeCard === 'professional'
    }]
  }, [_hoisted_65, _hoisted_66, _hoisted_67], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["order-summary order-enterprise", {
      'selected-order': $data.activeCard === 'enterprise'
    }]
  }, [_hoisted_68, _hoisted_69, _hoisted_70], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "COMPLETE ORDER"
  })])], 2
  /* CLASS */
  )])])])]);
}

/***/ }),

/***/ "./resources/js/pages/Wizard.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Wizard.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_4fadeab4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=4fadeab4 */ "./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js */ "./resources/js/pages/Wizard.vue?vue&type=script&lang=js");



_Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Wizard_vue_vue_type_template_id_4fadeab4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/Wizard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/Wizard.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Wizard.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Wizard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wizard_vue_vue_type_template_id_4fadeab4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wizard_vue_vue_type_template_id_4fadeab4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Wizard.vue?vue&type=template&id=4fadeab4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Wizard.vue?vue&type=template&id=4fadeab4");


/***/ })

}]);