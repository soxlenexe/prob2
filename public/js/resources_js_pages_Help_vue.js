(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Help_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      text: null,
      filteredText: [],
      activeTab: 'basic'
    };
  },
  methods: {
    filterText: function filterText(event) {
      var query = event.query;
      var filteredText = [];

      for (var i = 0; i < 10; i++) {
        filteredText.push(query + i);
      }

      this.filteredText = filteredText;
    },
    selectTab: function selectTab(tab) {
      this.activeTab = tab;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-d7f61c6c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d7f61c6c");

var _hoisted_1 = {
  "class": "help-wrapper"
};
var _hoisted_2 = {
  "class": "help-header"
};
var _hoisted_3 = {
  "class": "header-content"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Babylon Help Center", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "search-form"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "help-container"
};
var _hoisted_8 = {
  "class": "help-content-header"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-compass"
})], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "The Basics"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "4 articles in this collection")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-bookmark"
})], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "Questions About Licenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "3 articles in this collection")], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-folder"
})], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "tab-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "Questions About Frameworks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "72 articles in this collection")], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "help-contents-wrapper"
};
var _hoisted_16 = {
  "class": "card help-content"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"questions-header\" data-v-d7f61c6c><h1 data-v-d7f61c6c>The Basics</h1><span data-v-d7f61c6c>4 articles in this collection</span><div class=\"profile-images\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-1.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-2.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-3.png\" alt=\"babylon-layout\" data-v-d7f61c6c></div></div>", 1);

var _hoisted_18 = {
  "class": "questions-content"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Which do I need to develop a SaaS application? ", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis. Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus tempor lorem, eu ultricies tellus odio a nunc. ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " I’m a freelancer/agency. Can I use the item for an end product I’m doing for a client? ", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna convallis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat ac. ");

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " We’re a reseller, are we able to purchase a license on behalf of our client? ", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris, vel egestas nisi quam id turpis. Duis consequat elementum consequat. Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor, a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper posuere arcu. ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Is there a recurring fee or is it perpetual? ", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi augue dictum lacus, non aliquam turpis libero eget mauris. Praesent venenatis leo vitae sem vulputate, at elementum felis tempus. Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus varius efficitur. ");

var _hoisted_31 = {
  "class": "card help-content"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"questions-header\" data-v-d7f61c6c><h1 data-v-d7f61c6c>Questions About Licenses</h1><span data-v-d7f61c6c>4 articles in this collection</span><div class=\"profile-images\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-1.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-2.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-3.png\" alt=\"babylon-layout\" data-v-d7f61c6c></div></div>", 1);

var _hoisted_33 = {
  "class": "questions-content"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Which do I need to develop a SaaS application? ", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis. Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus tempor lorem, eu ultricies tellus odio a nunc. ");

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " I’m a freelancer/agency. Can I use the item for an end product I’m doing or a client? ", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna convallis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat ac. ");

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " We’re a reseller, are we able to purchase a license on behalf of our client? ", -1
/* HOISTED */
);

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris, vel egestas nisi quam id turpis. Duis consequat elementum consequat. Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor, a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper posuere arcu. ");

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Is there a recurring fee or is it perpetual? ", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi augue dictum lacus, non aliquam turpis libero eget mauris. Praesent venenatis leo vitae sem vulputate, at elementum felis tempus. Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus varius efficitur. ");

var _hoisted_46 = {
  "class": "card help-content"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"questions-header\" data-v-d7f61c6c><h1 data-v-d7f61c6c>Questions About Frameworks</h1><span data-v-d7f61c6c>4 articles in this collection</span><div class=\"profile-images\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-1.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-2.png\" alt=\"babylon-layout\" data-v-d7f61c6c><img src=\"assets/layout/images/extensions/avatar-3.png\" alt=\"babylon-layout\" data-v-d7f61c6c></div></div>", 1);

var _hoisted_48 = {
  "class": "questions-content"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Which do I need to develop a SaaS application? ", -1
/* HOISTED */
);

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis. Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus tempor lorem, eu ultricies tellus odio a nunc. ");

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " I’m a freelancer/agency. Can I use the item for an end product I’m doing for a client? ", -1
/* HOISTED */
);

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna convallis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat ac. ");

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " We’re a reseller, are we able to purchase a license on behalf of our client? ", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris, vel egestas nisi quam id turpis. Duis consequat elementum consequat. Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor, a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper posuere arcu. ");

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-circle-on"
}, null, -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "accordion-title"
}, " Is there a recurring fee or is it perpetual? ", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi augue dictum lacus, non aliquam turpis libero eget mauris. Praesent venenatis leo vitae sem vulputate, at elementum felis tempus. Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus varius efficitur. ");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AutoComplete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AutoComplete");

  var _component_AccordionTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AccordionTab");

  var _component_Accordion = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Accordion");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AutoComplete, {
    id: "acSimple",
    modelValue: $data.text,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.text = $event;
    }),
    suggestions: $data.filteredText,
    onComplete: _cache[2] || (_cache[2] = function ($event) {
      return $options.filterText($event);
    }),
    placeholder: "Search from 29,994,421 help documents"
  }, null, 8
  /* PROPS */
  , ["modelValue", "suggestions"]), _hoisted_6])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["card help-content-header-tab tab-1", {
      'selected-tab': $data.activeTab == 'basic'
    }],
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.selectTab('basic');
    })
  }, [_hoisted_9, _hoisted_10], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["card help-content-header-tab tab-2", {
      'selected-tab': $data.activeTab == 'license'
    }],
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.selectTab('license');
    })
  }, [_hoisted_11, _hoisted_12], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["card help-content-header-tab tab-3", {
      'selected-tab': $data.activeTab == 'framework'
    }],
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.selectTab('framework');
    })
  }, [_hoisted_13, _hoisted_14], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "help-contents-row",
    style: {
      transform: $data.activeTab === 'basic' ? 'translate3d(0, 0, 0)' : $data.activeTab === 'license' ? 'translate3d(-100%, 0, 0)' : 'translate3d(-200%, 0, 0)'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Accordion, null, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_19, _hoisted_20];
        }),
        "default": _withId(function () {
          return [_hoisted_21];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_22, _hoisted_23];
        }),
        "default": _withId(function () {
          return [_hoisted_24];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_25, _hoisted_26];
        }),
        "default": _withId(function () {
          return [_hoisted_27];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_28, _hoisted_29];
        }),
        "default": _withId(function () {
          return [_hoisted_30];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Accordion, null, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_34, _hoisted_35];
        }),
        "default": _withId(function () {
          return [_hoisted_36];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_37, _hoisted_38];
        }),
        "default": _withId(function () {
          return [_hoisted_39];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_40, _hoisted_41];
        }),
        "default": _withId(function () {
          return [_hoisted_42];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_43, _hoisted_44];
        }),
        "default": _withId(function () {
          return [_hoisted_45];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Accordion, null, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_49, _hoisted_50];
        }),
        "default": _withId(function () {
          return [_hoisted_51];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_52, _hoisted_53];
        }),
        "default": _withId(function () {
          return [_hoisted_54];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_55, _hoisted_56];
        }),
        "default": _withId(function () {
          return [_hoisted_57];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AccordionTab, null, {
        header: _withId(function () {
          return [_hoisted_58, _hoisted_59];
        }),
        "default": _withId(function () {
          return [_hoisted_60];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])])], 4
  /* STYLE */
  )])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-d7f61c6c] .p-accordion .p-accordion-header a {\n  background-color: transparent;\n  padding: 24px 0px;\n  margin: 0 40px;\n  border: none;\n  color: #292b2c;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid rgba(41, 43, 44, 0.1);\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n[data-v-d7f61c6c] .p-accordion .p-accordion-header a .accordion-title {\n  display: inline-block;\n  margin-left: 10px;\n  padding: 0 15px;\n}\n[data-v-d7f61c6c] .p-accordion .p-accordion-header a .p-accordion-toggle-icon {\n  position: absolute;\n  right: 0;\n  left: auto;\n  color: #292b2c;\n  font-weight: 600;\n}\n[data-v-d7f61c6c] .p-accordion .p-accordion-header a.p-state-active {\n  background-color: transparent;\n}\n[data-v-d7f61c6c] .p-accordion .p-accordion-content {\n  border: none;\n  padding: 22px 28px;\n  margin: 0 40px;\n  line-height: 1.5;\n}\n@media (max-width: 992px) {\n[data-v-d7f61c6c] .p-accordion .p-accordion-header {\n    padding: 24px 0px;\n    margin: 0 10px;\n}\n[data-v-d7f61c6c] .p-accordion .p-accordion-content {\n    padding: 22px 28px;\n    margin: 0 10px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_style_index_0_id_d7f61c6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_style_index_0_id_d7f61c6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_style_index_0_id_d7f61c6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/pages/Help.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Help.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Help_vue_vue_type_template_id_d7f61c6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Help.vue?vue&type=template&id=d7f61c6c&scoped=true */ "./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true");
/* harmony import */ var _Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Help.vue?vue&type=script&lang=js */ "./resources/js/pages/Help.vue?vue&type=script&lang=js");
/* harmony import */ var _Help_vue_vue_type_style_index_0_id_d7f61c6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true */ "./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true");




;
_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Help_vue_vue_type_template_id_d7f61c6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-d7f61c6c"
/* hot reload */
if (false) {}

_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/Help.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/Help.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Help.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Help.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_template_id_d7f61c6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_template_id_d7f61c6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Help.vue?vue&type=template&id=d7f61c6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=template&id=d7f61c6c&scoped=true");


/***/ }),

/***/ "./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Help_vue_vue_type_style_index_0_id_d7f61c6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Help.vue?vue&type=style&index=0&id=d7f61c6c&lang=scss&scoped=true");


/***/ })

}]);