(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          subtitle: "Similar to the ones found in iOS.",
          title: "Popovers"
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
                      _vm._v("Popovers")
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
          _c(
            "base-block",
            { attrs: { title: "Default" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n                Show popovers on hover\n            ")
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                top: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Top Popover",
                            variant: "primary"
                          }
                        },
                        [_vm._v("Top\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                right: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Right Popover",
                            variant: "primary"
                          }
                        },
                        [_vm._v("Right\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                bottom: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Bottom Popover",
                            variant: "primary"
                          }
                        },
                        [_vm._v("Bottom\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                left: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Left Popover",
                            variant: "primary"
                          }
                        },
                        [_vm._v("Left\n                    ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Click Triggered" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n                Show popovers on hover\n            ")
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                top: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Top Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Top\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                right: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Right Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Right\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                bottom: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Bottom Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Bottom\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                left: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Left Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Left\n                    ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Animation" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can enable a fade animation to your popovers\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, top: true }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Top Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Top\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, right: true }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Right Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Right\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, bottom: true }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Bottom Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Bottom\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, left: true }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Left Popover",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Left\n                    ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "HTML" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can add HTML in your popovers as well\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.top",
                              value:
                                "<img class='img-avatar' src='/images/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'/images/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                top: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Popover Title",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Top\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.right",
                              value:
                                "<img class='img-avatar' src='/images/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'/images/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                right: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Popover Title",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Right\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.bottom",
                              value:
                                "<img class='img-avatar' src='/images/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'/images/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                bottom: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Popover Title",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Bottom\n                    ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.left",
                              value:
                                "<img class='img-avatar' src='/images/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'/images/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                left: true
                              }
                            }
                          ],
                          attrs: {
                            block: "",
                            size: "sm",
                            title: "Popover Title",
                            variant: "secondary"
                          }
                        },
                        [_vm._v("Left\n                    ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/elements/Popovers.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/elements/Popovers.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popovers.vue?vue&type=template&id=8a64d7e8& */ "./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Popovers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Popovers.vue?vue&type=template&id=8a64d7e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Popovers.vue?vue&type=template&id=8a64d7e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_8a64d7e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);