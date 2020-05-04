(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8& ***!
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
          subtitle:
            "Enrich your form inputs with buttons and extra text content.",
          title: "Input Groups"
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
                      [_vm._v("Forms")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Input Groups")
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
            { attrs: { title: "With Text" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n                        Prepend or Append Text next to your inputs, useful if you would like to add extra info\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8", xl: "5" } },
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                { attrs: { prepend: "Name" } },
                                [_c("b-form-input")],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                { attrs: { append: "Email" } },
                                [
                                  _c("b-form-input", {
                                    attrs: { type: "email" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                { attrs: { append: ",00", prepend: "$" } },
                                [
                                  _c("b-form-input", {
                                    attrs: { placeholder: "00" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [_vm._v("Name")]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt"
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [_vm._v("Email")]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { type: "email" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [_vm._v("$")]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    },
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [_vm._v(",00")]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "00" }
                                  })
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "With Icons" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n                        Prepend or Append Icons next to your inputs to visualize the context\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8", xl: "5" } },
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-user"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [_vm._v(" "), _c("b-form-input")],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-envelope"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: { type: "email" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  attrs: { append: ".00" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-euro-sign"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "00" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-user"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt"
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-envelope"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { type: "email" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "prepend",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-euro-sign"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    },
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "b-input-group-text",
                                            {
                                              staticClass:
                                                "input-group-text-alt"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "si si-wallet"
                                              })
                                            ]
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "00" }
                                  })
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "With Buttons" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n                        Prepend or Append Buttons next to your inputs to add related actions\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8", xl: "5" } },
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-search mr-1"
                                          }),
                                          _vm._v(
                                            " Search\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "dark" } },
                                        [_vm._v("Submit")]
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-facebook-f"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "Search" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "info" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-twitter"
                                          })
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-search mr-1"
                                          }),
                                          _vm._v(
                                            " Search\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "dark" } },
                                        [_vm._v("Submit")]
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-facebook-f"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "Search" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "info" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-twitter"
                                          })
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "alt-primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-search mr-1"
                                          }),
                                          _vm._v(
                                            " Search\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "alt-dark" } },
                                        [_vm._v("Submit")]
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "alt-primary" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-facebook-f"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    staticClass: "form-control-alt",
                                    attrs: { placeholder: "Search" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        { attrs: { variant: "alt-info" } },
                                        [
                                          _c("i", {
                                            staticClass: "fab fa-twitter"
                                          })
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
            { attrs: { title: "With Dropdowns" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n                        Prepend or Append dropdowns next to your inputs\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8", xl: "5" } },
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            split: "",
                                            text: "Options",
                                            variant: "primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            right: "",
                                            variant: "primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            dropup: "",
                                            variant: "primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: ".." }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            dropup: "",
                                            right: "",
                                            variant: "primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            split: "",
                                            text: "Options",
                                            variant: "dark"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: { right: "", variant: "dark" }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: { dropup: "", variant: "dark" }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: ".." }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            dropup: "",
                                            right: "",
                                            variant: "dark"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            split: "",
                                            text: "Options",
                                            variant: "alt-primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: "Name" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      placeholder: "Email",
                                      type: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            right: "",
                                            variant: "alt-primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            dropup: "",
                                            variant: "alt-primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: { placeholder: ".." }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            dropup: "",
                                            right: "",
                                            variant: "alt-primary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-bell mr-1"
                                            }),
                                            _vm._v(
                                              " News\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-fw fa-envelope mr-1"
                                            }),
                                            _vm._v(
                                              " Messages\n                                        "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-fw fa-pencil-alt mr-1"
                                            }),
                                            _vm._v(
                                              " Edit Profile\n                                        "
                                            )
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

/***/ "./resources/js/src/views/forms/InputGroups.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/forms/InputGroups.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputGroups.vue?vue&type=template&id=0b2670b8& */ "./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/InputGroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputGroups.vue?vue&type=template&id=0b2670b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/InputGroups.vue?vue&type=template&id=0b2670b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_0b2670b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);