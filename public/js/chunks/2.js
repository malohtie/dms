(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault(); // Alert with form input values

      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(evt) {
      evt.preventDefault(); // Reset our form values

      this.form.username = '';
      this.form.password = '';
      this.form.rememberMe = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          subtitle: "Easily integrated in your blocks.",
          title: "Block Forms"
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
                      [_vm._v("Blocks")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Forms")
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
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: { "header-bg": "", title: "Block Form" },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "secondary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form1-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form1-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form1-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form1-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form1-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: {
                            "header-bg": "",
                            "header-rtl": "",
                            title: "Block Form"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "secondary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form2-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form2-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form2-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form2-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form2-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: { "header-bg": "", title: "Block Form" },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "outline-danger"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form3-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form3-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form3-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form3-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form3-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: {
                            "header-bg": "",
                            "header-rtl": "",
                            title: "Block Form"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "outline-danger"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form4-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form4-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form4-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form4-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form4-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: { "header-bg": "", title: "Block Form" },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn-block-option",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn-block-option",
                                      attrs: { type: "reset" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form5-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form5-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form5-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form5-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form5-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: {
                            "header-bg": "",
                            "header-rtl": "",
                            title: "Block Form"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn-block-option",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn-block-option",
                                      attrs: { type: "reset" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form6-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form6-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form6-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form6-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form6-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: { "header-bg": "", title: "Block Form" },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "alt-primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "alt-danger"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form7-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form7-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form7-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form7-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form7-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form",
                    { on: { reset: _vm.onReset, submit: _vm.onSubmit } },
                    [
                      _c(
                        "base-block",
                        {
                          attrs: {
                            "header-bg": "",
                            "header-rtl": "",
                            title: "Block Form"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "options",
                              fn: function() {
                                return [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "submit",
                                        variant: "alt-primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Submit\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        type: "reset",
                                        variant: "alt-danger"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Reset\n                            "
                                      )
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
                          _c(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center py-sm-3 py-md-5"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "8", sm: "10" } },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Username",
                                        "label-for": "block-form8-username"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form8-username",
                                          placeholder: "Enter your username.."
                                        },
                                        model: {
                                          value: _vm.form.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "username", $$v)
                                          },
                                          expression: "form.username"
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
                                        "label-for": "block-form8-password"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control-alt",
                                        attrs: {
                                          id: "block-form8-password",
                                          placeholder: "Enter your password..",
                                          type: "password"
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password"
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
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            id: "block-form8-remember-me"
                                          },
                                          model: {
                                            value: _vm.form.rememberMe,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "rememberMe",
                                                $$v
                                              )
                                            },
                                            expression: "form.rememberMe"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Remember Me?\n                                    "
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

/***/ "./resources/js/src/views/blocks/Forms.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/blocks/Forms.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=75c8e550& */ "./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550&");
/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ "./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/blocks/Forms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=template&id=75c8e550& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Forms.vue?vue&type=template&id=75c8e550&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_75c8e550___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);