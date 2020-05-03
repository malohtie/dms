(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hero-static d-flex align-items-center" }, [
    _c("div", { staticClass: "w-100" }, [
      _c("div", { staticClass: "bg-white" }, [
        _c(
          "div",
          { staticClass: "content content-full" },
          [
            _c(
              "b-row",
              { staticClass: "justify-content-center" },
              [
                _c(
                  "b-col",
                  { staticClass: "py-4", attrs: { md: "8", lg: "6", xl: "4" } },
                  [
                    _c("div", { staticClass: "text-center mb-5" }, [
                      _c("p", { staticClass: "mb-2" }, [
                        _c("i", {
                          staticClass: "fa fa-2x fa-circle-notch text-primary"
                        })
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "h4 mb-1" }, [
                        _vm._v("\n                Status Page\n              ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "h6 font-w400 text-muted mb-3" },
                        [
                          _vm._v(
                            "\n                Check out how we are doing\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: {
                              size: "lg",
                              variant: "alt-secondary",
                              to: "/backend/pages/generic/blank"
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-arrow-left mr-1" }),
                            _vm._v(" Dashboard\n              ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: {
                              size: "lg",
                              variant: "alt-success",
                              href: "javascript:void(0)"
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-rss" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "d-none d-sm-inline-block ml-1" },
                              [_vm._v("Subscribe")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("b-alert", { attrs: { variant: "warning", show: "" } }, [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "Payments are currently under maintenance, please stay tuned."
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-alert", { attrs: { variant: "danger", show: "" } }, [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "Our frontend is experiencing some issues but we are on it!"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-list-group",
                      { staticClass: "push" },
                      [
                        _c(
                          "b-list-group-item",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v(
                              "\n                Backend\n                "
                            ),
                            _c(
                              "span",
                              { staticClass: "badge badge-pill badge-success" },
                              [_vm._v("Operational")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-list-group-item",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v(
                              "\n                Frontend\n                "
                            ),
                            _c(
                              "span",
                              { staticClass: "badge badge-pill badge-danger" },
                              [_vm._v("Down")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-list-group-item",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v("\n                API\n                "),
                            _c(
                              "span",
                              { staticClass: "badge badge-pill badge-success" },
                              [_vm._v("Operational")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-list-group-item",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v(
                              "\n                Payments\n                "
                            ),
                            _c(
                              "span",
                              { staticClass: "badge badge-pill badge-warning" },
                              [_vm._v("Maintenance")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-list-group-item",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v(
                              "\n                Helpdesk\n                "
                            ),
                            _c(
                              "span",
                              { staticClass: "badge badge-pill badge-success" },
                              [_vm._v("Operational")]
                            )
                          ]
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
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font-size-sm text-center text-muted py-3" }, [
        _c("strong", [
          _vm._v(
            _vm._s(
              _vm.$store.getters.appName + " " + _vm.$store.getters.appVersion
            )
          )
        ]),
        _vm._v(" © " + _vm._s(_vm.$store.getters.appCopyright) + "\n    ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/various/Status.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/various/Status.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=1ec8d5eb& */ "./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/various/Status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Status.vue?vue&type=template&id=1ec8d5eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/various/Status.vue?vue&type=template&id=1ec8d5eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_1ec8d5eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);