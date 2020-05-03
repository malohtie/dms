(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/icons */ "./resources/js/src/data/icons.js");
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
// Get Icons data

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      iconsFaRegular: Object.keys(_data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].regular),
      iconsFaSolid: Object.keys(_data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].solid),
      iconsFaBrands: Object.keys(_data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].brands),
      iconsSimpleLine: Object.keys(_data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].simpleline)
    };
  },
  computed: {
    filteredIconsFaRegular: function filteredIconsFaRegular() {
      var _this = this;

      if (this.search) {
        return this.iconsFaRegular.filter(function (icon) {
          return icon.includes(_this.search);
        });
      } else {
        return this.iconsFaRegular;
      }
    },
    filteredIconsFaSolid: function filteredIconsFaSolid() {
      var _this2 = this;

      if (this.search) {
        return this.iconsFaSolid.filter(function (icon) {
          return icon.includes(_this2.search);
        });
      } else {
        return this.iconsFaSolid;
      }
    },
    filteredIconsFaBrands: function filteredIconsFaBrands() {
      var _this3 = this;

      if (this.search) {
        return this.iconsFaBrands.filter(function (icon) {
          return icon.includes(_this3.search);
        });
      } else {
        return this.iconsFaBrands;
      }
    },
    filteredIconsSimpleLine: function filteredIconsSimpleLine() {
      var _this4 = this;

      if (this.search) {
        return this.iconsSimpleLine.filter(function (icon) {
          return icon.includes(_this4.search);
        });
      } else {
        return this.iconsSimpleLine;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-page-heading", {
        attrs: {
          subtitle:
            "A huge collection of multi-purpose, uniquely designed, font icons.",
          title: "Icons"
        },
        scopedSlots: _vm._u([
          {
            key: "extra",
            fn: function() {
              return [
                _c(
                  "b-breadcrumb",
                  { staticClass: "breadcrumb-alt" },
                  [
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Elements")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Icons")
                    ])
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("div", { staticClass: "input-group input-group-lg push" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass: "js-icon-search form-control font-size-base",
              attrs: { placeholder: "Try home or user..", type: "text" },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                title:
                  "(" +
                  _vm.filteredIconsFaRegular.length +
                  ") Font Awesome Regular",
                "btn-option-content": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function() {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("far fa-*")])
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaRegular, function(icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "far-icon-" + index,
                      attrs: { lg: "4", sm: "6", xl: "3" }
                    },
                    [
                      _c("p", [_c("i", { class: "far fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))])
                    ]
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                title:
                  "(" +
                  _vm.filteredIconsFaSolid.length +
                  ") Font Awesome Solid",
                "btn-option-content": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function() {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("fa fa-*")])
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaSolid, function(icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "fa-icon-" + index,
                      attrs: { lg: "4", sm: "6", xl: "3" }
                    },
                    [
                      _c("p", [_c("i", { class: "fa fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))])
                    ]
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                title:
                  "(" +
                  _vm.filteredIconsFaBrands.length +
                  ") Font Awesome Brands",
                "btn-option-content": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function() {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("fab fa-*")])
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaBrands, function(icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "fab-icon-" + index,
                      attrs: { lg: "4", sm: "6", xl: "3" }
                    },
                    [
                      _c("p", [_c("i", { class: "fab fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))])
                    ]
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                title:
                  "(" +
                  _vm.filteredIconsSimpleLine.length +
                  ") Simple Line Icons",
                "btn-option-content": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function() {
                    return [_c("small", [_c("code", [_vm._v("si si-*")])])]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsSimpleLine, function(icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "si-icon-" + index,
                      attrs: { lg: "4", sm: "6", xl: "3" }
                    },
                    [
                      _c("p", [_c("i", { class: "si fa-2x si-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))])
                    ]
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-search" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/data/icons.js":
/*!****************************************!*\
  !*** ./resources/js/src/data/icons.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Icon arrays

/***/ }),

/***/ "./resources/js/src/views/elements/Icons.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/elements/Icons.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=2c42446c& */ "./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=2c42446c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Icons.vue?vue&type=template&id=2c42446c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_2c42446c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);