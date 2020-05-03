(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f& ***!
  \************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "Layout API" },
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
                      [_vm._v("Layout")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("API")
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
            { attrs: { title: "Sidebar Visibility", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "sidebarToggle", size: "sm" }
                                },
                                [_vm._v("Toggle Sidebar")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Opens or Closes Sidebar based on its current state\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebar', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarToggle">Toggle Sidebar</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "sidebarOpen", size: "sm" }
                                },
                                [_vm._v("Open Sidebar")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Opens Sidebar\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebar', { mode: 'open' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarOpen">Open Sidebar</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "sidebarClose", size: "sm" }
                                },
                                [_vm._v("Close Sidebar")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Closes Sidebar\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebar', { mode: 'close' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarClose">Close Sidebar</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Sidebar Position", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarPositionToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Sidebar Position")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets Sidebar position to the left or to the right based on its current position\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarPosition', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarPositionToggle">Toggle Sidebar Position</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarPositionRight",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Right Sidebar Position")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Moves Sidebar to the right\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarPosition', { mode: 'right' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarPositionRight">Right Sidebar Position</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarPositionLeft",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Left Sidebar Position")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Moves Sidebar to the left\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarPosition', { mode: 'left' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarPositionLeft">Left Sidebar Position</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Sidebar Mini", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarMiniToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Mini Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Toggles Sidebar mini mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarMini', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarMiniToggle">Toggle Mini Mode</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "sidebarMiniOn", size: "sm" }
                                },
                                [_vm._v("Enable Mini Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Enables Sidebar mini mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarMini', { mode: 'on' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarMiniOn">Enable Mini Mode</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarMiniOff",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Disable Mini Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Disables Sidebar mini mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarMini', { mode: 'off' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarMiniOff">Disable Mini Mode</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Sidebar Styles", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarStyleToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Sidebar Style")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Toggles Sidebar style between light and dark variations\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarStyle', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarStyleToggle">Toggle Sidebar Style</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarStyleLight",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Light Themed Sidebar")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets Sidebar to light variation\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarStyle', { mode: 'light' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarStyleLight">Light Themed Sidebar</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sidebarStyleDark",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Dark Themed Sidebar")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets Sidebar to dark variation\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sidebarStyle', { mode: 'dark' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sidebarStyleDark">Dark Themed Sidebar</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Side Overlay Visibility", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Side Overlay")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Opens or Closes Side Overlay based on its current state\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlay', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayToggle">Toggle Side Overlay</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayOpen",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Open Side Overlay")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Opens Side Overlay\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlay', { mode: 'open' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayOpen">Open Side Overlay</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayClose",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Close Side Overlay")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Closes Side Overlay\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlay', { mode: 'close' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayClose">Close Side Overlay</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Side Overlay Hover Mode", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayHoverToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Hover Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Toggles Side Overlay hover mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlayHover', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayHoverToggle">Toggle Hover Mode</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayHoverOn",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Enable Hover Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Enables Side Overlay hover mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlayHover', { mode: 'on' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayHoverOn">Enable Hover Mode</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "sideOverlayHoverOff",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Disable Hover Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Disables Side Overlay hover mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('sideOverlayHover', { mode: 'off' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="sideOverlayHoverOff">Disable Hover Mode</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Header Mode", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "headerToggle", size: "sm" }
                                },
                                [_vm._v("Toggle Header Mode")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Toggles Header mode between static and fixed\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('header', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerToggle">Toggle Header Mode</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "headerStatic", size: "sm" }
                                },
                                [_vm._v("Static Header")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets the Header to static mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('header', { mode: 'static' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerStatic">Static Header</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: { action: "headerFixed", size: "sm" }
                                },
                                [_vm._v("Fixed Header")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets the Header to fixed mode\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('header', { mode: 'fixed' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerFixed">Fixed Header</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Header Styles", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "headerStyleToggle",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Toggle Header Style")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Toggles Header style between light and dark variations\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('headerStyle', { mode: 'toggle' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerStyleToggle">Toggle Header Style</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "headerStyleLight",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Light Themed Header")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets Header to light variation\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('headerStyle', { mode: 'light' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerStyleLight">Light Themed Header</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "headerStyleDark",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Dark Themed Header")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets Header to dark variation\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('headerStyle', { mode: 'dark' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerStyleDark">Dark Themed Header</base-layout-modifier>'
                              )
                            ])
                          ])
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
            { attrs: { title: "Main Content", "content-full": "" } },
            [
              _c(
                "b-table-simple",
                {
                  staticClass: "text-vcenter mb-0",
                  attrs: { striped: "", responsive: "" }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "mainContentBoxed",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Boxed Content Layout")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets the content layout to boxed\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('mainContent', { mode: 'boxed' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="mainContentBoxed">Boxed Content Layout</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "mainContentNarrow",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Narrow Content Layout")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets the content layout to narrow\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('mainContent', { mode: 'narrow' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="mainContentNarrow">Narrow Content Layout</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    action: "mainContentFull",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Full Width Content Layout")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-size-sm mb-0" }, [
                                _vm._v(
                                  "\n                Sets the content layout to full width\n              "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('mainContent', { mode: 'full' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="mainContentFull">Full Width Content Layout</base-layout-modifier>'
                              )
                            ])
                          ])
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/layout/Api.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/layout/Api.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api.vue?vue&type=template&id=0dfe1d9f& */ "./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/layout/Api.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Api.vue?vue&type=template&id=0dfe1d9f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layout/Api.vue?vue&type=template&id=0dfe1d9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_0dfe1d9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);