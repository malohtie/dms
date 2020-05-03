(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e& ***!
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
          subtitle: "Attach optional info to an element.",
          title: "Tooltips"
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
                      _vm._v("Tooltips")
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
                _vm._v("\n                Show tooltips on hover\n            ")
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                top: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "primary" }
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                right: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Right\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                bottom: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Bottom\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                left: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Left\n                    "
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Click Triggered" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n                Show tooltips on hover\n            ")
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                top: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                right: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Right\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                bottom: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                left: true
                              }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Left\n                    "
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Animation" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can enable a fade animation to your tooltips\n            "
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: { hover: true, top: true }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: { hover: true, right: true }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: { hover: true, bottom: true }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Bottom\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: { hover: true, left: true }
                            }
                          ],
                          attrs: { block: "", size: "sm", variant: "secondary" }
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
                  "\n                You can add HTML in your tooltips as well\n            "
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.top",
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
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Top\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.right",
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
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Right\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.bottom",
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
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Bottom\n                    "
                          )
                        ]
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.left",
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
                          attrs: { block: "", size: "sm", variant: "secondary" }
                        },
                        [
                          _vm._v(
                            "\n                        Left\n                    "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/elements/Tooltips.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/elements/Tooltips.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=template&id=28ea4d6e& */ "./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Tooltips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tooltips.vue?vue&type=template&id=28ea4d6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Tooltips.vue?vue&type=template&id=28ea4d6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_28ea4d6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);