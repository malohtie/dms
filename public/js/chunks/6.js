(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    clickDropdownFormExample: function clickDropdownFormExample() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            "Toggle contextual overlays for displaying lists of links and more.",
          title: "Dropdowns"
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
                      _vm._v("Dropdowns")
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
            { attrs: { title: "Normal" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can easily attach a dropdown to a default button and add various actions\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-primary",
                            text: "Dropdown",
                            variant: "primary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-secondary",
                            text: "Dropdown",
                            variant: "secondary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-success",
                            text: "Dropdown",
                            variant: "success"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-info",
                            text: "Dropdown",
                            variant: "info"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-warning",
                            text: "Dropdown",
                            variant: "warning"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-danger",
                            text: "Dropdown",
                            variant: "danger"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-dark",
                            text: "Dropdown",
                            variant: "dark"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-light",
                            text: "Dropdown",
                            variant: "light"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
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
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can also add dropdowns to alternate styled buttons\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-primary",
                            text: "Dropdown",
                            variant: "alt-primary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-secondary",
                            text: "Dropdown",
                            variant: "alt-secondary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-success",
                            text: "Dropdown",
                            variant: "alt-success"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-info",
                            text: "Dropdown",
                            variant: "alt-info"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-warning",
                            text: "Dropdown",
                            variant: "alt-warning"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-danger",
                            text: "Dropdown",
                            variant: "alt-danger"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-dark",
                            text: "Dropdown",
                            variant: "alt-dark"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-alt-light",
                            text: "Dropdown",
                            variant: "alt-light"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
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
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can also add dropdowns to outline styled buttons\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-primary",
                            text: "Dropdown",
                            variant: "outline-primary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-secondary",
                            text: "Dropdown",
                            variant: "outline-secondary"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-success",
                            text: "Dropdown",
                            variant: "outline-success"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-info",
                            text: "Dropdown",
                            variant: "outline-info"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-warning",
                            text: "Dropdown",
                            variant: "outline-warning"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-danger",
                            text: "Dropdown",
                            variant: "outline-danger"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-dark",
                            text: "Dropdown",
                            variant: "outline-dark"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            id: "dropdown-default-outline-light",
                            text: "Dropdown",
                            variant: "outline-light"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Action")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Another action")]
                          ),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            { staticClass: "font-size-sm" },
                            [_vm._v("Something else here")]
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
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "row-deck" },
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { title: "Split Button Dropdowns" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Grouping your dropdowns with separate buttons is really easy\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "items-push mb-4" },
                        [
                          _c(
                            "b-col",
                            { attrs: { xl: "4" } },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    id: "dropdown-split-primary",
                                    split: "",
                                    text: "Action",
                                    variant: "primary"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Another action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here...")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { xl: "4" } },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    id: "dropdown-split-danger",
                                    split: "",
                                    text: "Action",
                                    variant: "alt-danger"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Another action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here...")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { xl: "4" } },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    id: "dropdown-split-warning",
                                    split: "",
                                    text: "Action",
                                    variant: "warning"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Another action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here...")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here")]
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
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { title: "Alignment" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        You can align your dropmenus to the right of buttons\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "items-push mb-4" },
                        [
                          _c(
                            "b-col",
                            { staticClass: "text-right", attrs: { sm: "6" } },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    id: "dropdown-align-primary",
                                    right: "",
                                    text: "From Right",
                                    variant: "primary"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Another action")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "text-right", attrs: { sm: "6" } },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    id: "dropdown-align-alt-primary",
                                    right: "",
                                    text: "From Right",
                                    variant: "alt-primary"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Action")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Another action")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [_vm._v("Something else here")]
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Rich Content" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can also use forms inside your dropdowns\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  ref: "dropdown",
                  staticClass: "push",
                  attrs: {
                    id: "dropdown-content-rich-primary",
                    text: "Example form in dropdown",
                    variant: "primary"
                  }
                },
                [
                  _c(
                    "b-dropdown-form",
                    { staticClass: "font-size-sm p-2" },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Email",
                            "label-for": "dropdown-content-form-email"
                          },
                          on: {
                            submit: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "dropdown-content-form-email",
                              placeholder: "email@example.com"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Password",
                            "label-for": "dropdown-content-form-password"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "dropdown-content-form-password",
                              placeholder: "Password",
                              type: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: { click: _vm.clickDropdownFormExample }
                        },
                        [_vm._v("Sign In")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-dropdown-divider"),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item-button",
                    { staticClass: "font-size-sm" },
                    [_vm._v("Sign up")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item-button",
                    { staticClass: "font-size-sm" },
                    [_vm._v("Forgot Password?")]
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
            { attrs: { title: "Position" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n                You can position your dropdown relative to your button\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push mb-4" },
                [
                  _c("b-col", { attrs: { md: "4" } }, [
                    _c("h3", { staticClass: "h4" }, [_vm._v("Dropup")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropup: "",
                              id: "dropdown-dropup-secondary",
                              text: "Up",
                              variant: "secondary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
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
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropup: "",
                              id: "dropdown-dropup-alt-secondary",
                              text: "Up",
                              variant: "alt-secondary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
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
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropup: "",
                              id: "dropdown-dropup-outline-secondary",
                              text: "Up",
                              variant: "outline-secondary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { md: "4" } }, [
                    _c("h3", { staticClass: "h4" }, [_vm._v("Dropright")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropright: "",
                              id: "dropdown-dropright-primary",
                              text: "Right",
                              variant: "primary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
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
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropright: "",
                              id: "dropdown-dropright-alt-primary",
                              text: "Right",
                              variant: "alt-primary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
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
                      { staticClass: "push" },
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              dropright: "",
                              id: "dropdown-dropright-outline-primary",
                              text: "Right",
                              variant: "outline-primary"
                            }
                          },
                          [
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              { staticClass: "font-size-sm" },
                              [_vm._v("Something else here")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-right", attrs: { md: "4" } },
                    [
                      _c("h3", { staticClass: "h4" }, [_vm._v("Dropleft")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "push" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                dropleft: "",
                                id: "dropdown-dropleft-dark",
                                text: "Left",
                                variant: "dark"
                              }
                            },
                            [
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Action")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Another action")]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Something else here")]
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
                        { staticClass: "push" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                dropleft: "",
                                id: "dropdown-dropleft-alt-dark",
                                text: "Left",
                                variant: "alt-dark"
                              }
                            },
                            [
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Action")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Another action")]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Something else here")]
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
                        { staticClass: "push" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                dropleft: "",
                                id: "dropdown-dropleft-outline-dark",
                                text: "Left",
                                variant: "outline-dark"
                              }
                            },
                            [
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Action")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Another action")]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { staticClass: "font-size-sm" },
                                [_vm._v("Something else here")]
                              )
                            ],
                            1
                          )
                        ],
                        1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/elements/Dropdowns.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/elements/Dropdowns.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdowns.vue?vue&type=template&id=e64e6258& */ "./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258&");
/* harmony import */ var _Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdowns.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Dropdowns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdowns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdowns.vue?vue&type=template&id=e64e6258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Dropdowns.vue?vue&type=template&id=e64e6258&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_e64e6258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);