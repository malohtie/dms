(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f& ***!
  \***************************************************************************************************************************************************************************************************************/
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
          title: "Form Layouts",
          subtitle: "Multiple layouts to match any design requirement."
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
                      _vm._v("Layouts")
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
            { attrs: { title: "Inline" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            Using an inline layout can come really handy for small forms\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-form",
                        {
                          staticClass: "mb-4",
                          attrs: { inline: "" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "sr-only",
                              attrs: { for: "example-if-email" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            staticClass: "mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "email",
                              id: "example-if-email",
                              name: "example-if-email",
                              placeholder: "Email"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "sr-only",
                              attrs: { for: "example-if-password" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            staticClass: "mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "password",
                              id: "example-if-password",
                              name: "example-if-password",
                              placeholder: "Password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "primary" } },
                            [_vm._v("Login")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        {
                          staticClass: "mb-4",
                          attrs: { inline: "" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "sr-only",
                              attrs: { for: "example-if-email2" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            staticClass:
                              "form-control-alt mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "email",
                              id: "example-if-email2",
                              name: "example-if-email2",
                              placeholder: "Email"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "sr-only",
                              attrs: { for: "example-if-password2" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            staticClass:
                              "form-control-alt mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "password",
                              id: "example-if-password2",
                              name: "example-if-password2",
                              placeholder: "Password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "dark" } },
                            [_vm._v("Login")]
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
            { attrs: { title: "Labels on top" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            An often used layout which is very easy to create with minimal markup\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-form",
                        {
                          staticClass: "mb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Email",
                                "label-for": "example-ltf-email"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "example-ltf-email",
                                  type: "email",
                                  placeholder: "Your Email.."
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
                                "label-for": "example-ltf-password"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "example-ltf-password",
                                  type: "password",
                                  placeholder: "Your Password.."
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "submit", variant: "primary" }
                                },
                                [_vm._v("Login")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        {
                          staticClass: "mb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Email",
                                "label-for": "example-ltf-email2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  id: "example-ltf-email2",
                                  type: "email",
                                  placeholder: "Your Email.."
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
                                "label-for": "example-ltf-password2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  id: "example-ltf-password2",
                                  type: "password",
                                  placeholder: "Your Password.."
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-button",
                                { attrs: { type: "submit", variant: "dark" } },
                                [_vm._v("Login")]
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
            { attrs: { title: "Horizontal" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            A horizontal layout is perfect for bigger forms\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-form",
                        {
                          staticClass: "mb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                "label-cols-sm": "4",
                                label: "Email",
                                "label-for": "example-hf-email"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "example-hf-email",
                                  type: "email",
                                  placeholder: "Your Email.."
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
                                "label-cols-sm": "4",
                                label: "Password",
                                "label-for": "example-hf-password"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "example-hf-password",
                                  type: "password",
                                  placeholder: "Your Password.."
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-row" },
                            [
                              _c(
                                "b-col",
                                { staticClass: "ml-auto", attrs: { sm: "8" } },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v("Login")]
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
                        "b-form",
                        {
                          staticClass: "mb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                "label-cols-sm": "4",
                                label: "Email",
                                "label-for": "example-hf-email2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  id: "example-hf-email2",
                                  type: "email",
                                  placeholder: "Your Email.."
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
                                "label-cols-sm": "4",
                                label: "Password",
                                "label-for": "example-hf-password2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  id: "example-hf-password2",
                                  type: "password",
                                  placeholder: "Your Password.."
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-row" },
                            [
                              _c(
                                "b-col",
                                { staticClass: "ml-auto", attrs: { sm: "8" } },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: { type: "submit", variant: "dark" }
                                    },
                                    [_vm._v("Login")]
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
            { attrs: { title: "Grid Based" } },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            Using the form grid you can create any input layout you could possibly imagine\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c("b-form", [
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-8" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-8" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-5" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-5" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-8" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-8" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-4" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-row" }, [
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-6" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-3" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: { placeholder: "col-3" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            You could also include labels\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
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
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-8" },
                              [
                                _c("label", [_vm._v(".col-8")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-5" },
                              [
                                _c("label", [_vm._v(".col-5")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control"
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-8" },
                              [
                                _c("label", [_vm._v(".col-8")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-4" },
                              [
                                _c("label", [_vm._v(".col-4")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("label", [_vm._v(".col-6")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-3" },
                              [
                                _c("label", [_vm._v(".col-3")]),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control-alt"
                                })
                              ],
                              1
                            )
                          ])
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

/***/ "./resources/js/src/views/forms/Layouts.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/forms/Layouts.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layouts.vue?vue&type=template&id=55178d6f& */ "./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/Layouts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layouts.vue?vue&type=template&id=55178d6f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/Layouts.vue?vue&type=template&id=55178d6f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layouts_vue_vue_type_template_id_55178d6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);