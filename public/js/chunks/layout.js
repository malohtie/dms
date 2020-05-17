(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseLayout */ "./resources/js/src/layouts/BaseLayout.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LayoutBackend',
  components: {
    BaseLayout: _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: '',
        sidebar: '',
        header: '',
        footer: ''
      }
    };
  },
  created: function created() {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    }); // Set various template options

    this.$store.commit('headerStyle', {
      mode: 'light'
    });
    this.$store.commit('mainContent', {
      mode: 'full'
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("base-layout", {
    attrs: { "layout-classes": _vm.layoutClasses },
    scopedSlots: _vm._u([
      {
        key: "side-overlay",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "content-header border-bottom" },
              [
                _c(
                  "a",
                  {
                    staticClass: "img-link mr-1",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c("img", {
                      staticClass: "img-avatar img-avatar32",
                      attrs: {
                        alt: "Avatar",
                        src: "/images/avatars/avatar10.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "ml-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "link-fx text-dark font-w600",
                      attrs: { href: "javascript:void(0)" }
                    },
                    [_vm._v("Adam McCoy")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "base-layout-modifier",
                  {
                    staticClass: "ml-auto",
                    attrs: {
                      action: "sideOverlayClose",
                      size: "sm",
                      variant: "alt-danger"
                    }
                  },
                  [_c("i", { staticClass: "fa fa-fw fa-times text-danger" })]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "content-side" }, [
              _c("p", [
                _vm._v("\n                Side Overlay content..\n            ")
              ])
            ])
          ]
        },
        proxy: true
      },
      {
        key: "sidebar",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "content-header bg-white-5" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "font-w600 text-dual",
                    attrs: { to: "/landing" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-circle-notch text-primary" }),
                    _c(
                      "span",
                      { staticClass: "font-w700 font-size-h5 ml-1 smini-hide" },
                      [_vm._v("ne")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "base-layout-modifier",
                      {
                        staticClass: "d-lg-none ml-2",
                        attrs: {
                          action: "sidebarClose",
                          size: "sm",
                          variant: "dual"
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-side content-side-full" },
              [
                _c("base-navigation", {
                  attrs: {
                    nodes: [
                      {
                        name: "Dashboard",
                        to: "/backend/dashboard",
                        icon: "si si-speedometer"
                      },
                      {
                        name: "More",
                        heading: true
                      },
                      {
                        name: "Landing",
                        to: "/landing",
                        icon: "si si-rocket"
                      }
                    ]
                  }
                })
              ],
              1
            )
          ]
        },
        proxy: true
      },
      {
        key: "header",
        fn: function() {
          return [
            _c("div", { staticClass: "content-header" }, [
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "base-layout-modifier",
                    {
                      staticClass: "mr-2 d-lg-none",
                      attrs: {
                        action: "sidebarToggle",
                        size: "sm",
                        variant: "dual"
                      }
                    },
                    [_c("i", { staticClass: "fa fa-fw fa-bars" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "base-layout-modifier",
                    {
                      staticClass: "mr-2 d-none d-lg-inline-block",
                      attrs: {
                        action: "sidebarMiniToggle",
                        size: "sm",
                        variant: "dual"
                      }
                    },
                    [_c("i", { staticClass: "fa fa-fw fa-ellipsis-v" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "base-layout-modifier",
                    {
                      staticClass: "ml-2",
                      attrs: {
                        action: "sideOverlayToggle",
                        size: "sm",
                        variant: "dual"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-fw fa-list-ul fa-flip-horizontal"
                      })
                    ]
                  )
                ],
                1
              )
            ])
          ]
        },
        proxy: true
      },
      {
        key: "footer",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "content py-3" },
              [
                _c(
                  "b-row",
                  { staticClass: "font-size-sm" },
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "py-1 text-center text-sm-right",
                        attrs: { "order-sm": "2", sm: "6" }
                      },
                      [
                        _vm._v("\n                    Crafted with "),
                        _c("i", { staticClass: "fa fa-heart text-danger" }),
                        _vm._v(" by "),
                        _c(
                          "a",
                          {
                            staticClass: "font-w600",
                            attrs: {
                              href: "https://1.envato.market/5Noyb",
                              target: "_blank"
                            }
                          },
                          [_vm._v("pixelcave")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "py-1 text-center text-sm-left",
                        attrs: { "order-sm": "1", sm: "6" }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "font-w600",
                            attrs: {
                              href: "https://1.envato.market/5Noyb",
                              target: "_blank"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$store.getters.appName +
                                  " " +
                                  _vm.$store.getters.appVersion
                              )
                            )
                          ]
                        ),
                        _vm._v(
                          " © " +
                            _vm._s(_vm.$store.getters.appCopyright) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/layouts/variations/BackendStarter.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/layouts/variations/BackendStarter.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackendStarter.vue?vue&type=template&id=7dbd7b2b& */ "./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b&");
/* harmony import */ var _BackendStarter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackendStarter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackendStarter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/variations/BackendStarter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendStarter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackendStarter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendStarter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackendStarter.vue?vue&type=template&id=7dbd7b2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/BackendStarter.vue?vue&type=template&id=7dbd7b2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendStarter_vue_vue_type_template_id_7dbd7b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);