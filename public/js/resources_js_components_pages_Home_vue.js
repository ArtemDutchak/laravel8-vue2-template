"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  data: function data() {
    return {
      minutes: 14,
      showStat: false,
      fsWarTime: 0,
      mainStats: [],
      inviderStats: {
        amount: 0,
        change: 0
      }
    };
  },
  methods: {
    fetchStats: function fetchStats() {
      var _mainStats = JSON.parse(mainStats);

      this.fsWarTime = fsWarTime;

      for (var i = 0; i < _mainStats.length; i++) {
        if (_mainStats[i].name === 'inviders') {
          this.inviderStats = _mainStats[i];
        } else {
          _mainStats[i].img = '';
          this.mainStats.push(_mainStats[i]);
        }
      }

      this.showStat = true;
      this.updateAllStats(); // setInterval(this.updateAllStats, 60000);

      return;
    },
    updateAllStats: function updateAllStats() {
      this.recalcStat();
      this.recalcWarTime();
    },
    recalcStat: function recalcStat() {
      for (var i = 0; i < this.mainStats.length; i++) {
        this.mainStats[i].amount = this.mainStats[i].amount + this.mainStats[i].change;
      }
    },
    recalcWarTime: function recalcWarTime() {
      this.fsWarTime += 60;
    },
    secondsToDateTime: function secondsToDateTime(seconds) {
      var days = Math.floor(seconds / 86400) + 1;
      return "".concat(days, " ").concat(this.$tc('count.days', days));
    }
  },
  computed: {
    warDays: function warDays() {
      if (this.fsWarTime) {
        return this.secondsToDateTime(this.fsWarTime);
      }

      return '';
    }
  },
  mounted: function mounted() {
    this.fetchStats();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c("v-col", { staticClass: "text-center" }, [
            _c("span", [
              _vm._v(
                "\n        " + _vm._s(_vm.$t("text.war_time")) + "\n      "
              ),
            ]),
            _vm._v(" "),
            _vm.warDays.length
              ? _c("span", [
                  _vm._v("\n        " + _vm._s(_vm.warDays) + "\n      "),
                ])
              : _vm._e(),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", { staticClass: "text-center mt-n3" }, [
            _c("span", [
              _vm._v(
                "\n        " + _vm._s(_vm.$t("text.annihilated")) + "\n      "
              ),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      parseInt(_vm.inviderStats.change * 24 * 60)
        ? _c(
            "v-row",
            { staticClass: "mb-6" },
            [
              _vm.inviderStats.amount
                ? _c(
                    "v-col",
                    {
                      staticClass: "text-center mt-n2",
                      attrs: { cols: "12", md: "6", sm: "12", xs: "12" },
                    },
                    [
                      _c("div", {
                        staticClass: "text-big text-center",
                        domProps: {
                          textContent: _vm._s(
                            parseInt(_vm.inviderStats.amount)
                          ),
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-n6" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("text.enemies")) +
                            "\n        "
                        ),
                      ]),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "text-center mt-n2",
                  attrs: { cols: "12", md: "6", sm: "12" },
                },
                [
                  _c("div", {
                    staticClass: "text-big text-center",
                    domProps: {
                      textContent: _vm._s(parseInt(_vm.inviderStats.last24h)),
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-n6" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.$t("text.last24h")) +
                        "\n        "
                    ),
                  ]),
                ]
              ),
            ],
            1
          )
        : _c(
            "v-row",
            { staticClass: "mb-6" },
            [
              _vm.inviderStats.amount
                ? _c(
                    "v-col",
                    {
                      staticClass: "text-center mt-n2",
                      attrs: { cols: "12", md: "12", sm: "12", xs: "12" },
                    },
                    [
                      _c("div", {
                        staticClass: "text-big text-center",
                        domProps: {
                          textContent: _vm._s(
                            parseInt(_vm.inviderStats.amount)
                          ),
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-n6" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("text.enemies")) +
                            "\n        "
                        ),
                      ]),
                    ]
                  )
                : _vm._e(),
            ],
            1
          ),
      _vm._v(" "),
      _vm.showStat
        ? _c(
            "v-row",
            { staticClass: "mb-6" },
            _vm._l(_vm.mainStats, function (item) {
              return _c(
                "v-col",
                { key: item.name, attrs: { cols: "12", md: "4", sm: "12" } },
                [
                  _c("StatItem", {
                    attrs: {
                      name: item.name,
                      amount: item.amount,
                      change24h: parseInt(item.change * 24 * 60),
                    },
                  }),
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _c("span", { staticClass: "text-sm" }, [
              _vm._v(
                "\n        " + _vm._s(_vm.$t("info.wait_actual")) + "\n      "
              ),
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "info-link",
                attrs: {
                  href: "https://www.facebook.com/GeneralStaff.ua",
                  target: "_blank",
                },
              },
              [_vm._v(_vm._s(_vm.$t("text.general_staff")))]
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        {},
        [
          _c("v-col", [
            _c("span", { staticClass: "text-sm" }, [
              _vm._v("\n        " + _vm._s(_vm.$t("info.donate")) + "\n      "),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);