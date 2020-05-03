(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loadData: function loadData(ref) {
      var _this = this;

      // Set the block to loading state
      this.$refs[ref].stateLoading(); // .. here you could load your data
      // Set a timeout for demo purposes

      setTimeout(function () {
        // Set the block back to normal state
        _this.$refs[ref].stateNormal();
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff& ***!
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
          subtitle: "Adding controls in your blocks.",
          title: "Block Options"
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
                      _vm._v("Options")
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
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("\n            Interactive Options\n            "),
            _c(
              "small",
              [
                _c("router-link", { attrs: { to: "/backend/blocks/api" } }, [
                  _vm._v("Check out Blocks API")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      ref: "exampleBlock1",
                      attrs: {
                        "btn-option-close": "",
                        "btn-option-content": "",
                        "btn-option-fullscreen": "",
                        "btn-option-pinned": "",
                        subtitle: "Subtitle",
                        title: "Title"
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
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loadData("exampleBlock1")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "si si-refresh" })]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      ref: "exampleBlock2",
                      attrs: {
                        "btn-option-close": "",
                        "btn-option-content": "",
                        "btn-option-fullscreen": "",
                        "btn-option-pinned": "",
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
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
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loadData("exampleBlock2")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "si si-refresh" })]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Alternative Options Examples")
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [_c("i", { staticClass: "far fa-fw fa-bell" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "far fa-fw fa-arrow-alt-circle-left"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "far fa-fw fa-arrow-alt-circle-right"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-fw fa-trash-alt"
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
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
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
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-fw fa-trash-alt"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "far fa-fw fa-arrow-alt-circle-left"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "far fa-fw fa-arrow-alt-circle-right"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" }
                                },
                                [_c("i", { staticClass: "far fa-fw fa-bell" })]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    right: "",
                                    size: "sm",
                                    text: "Settings",
                                    variant: "light"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-fw fa-bell mr-1"
                                      }),
                                      _vm._v(
                                        " News\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "far fa-fw fa-envelope mr-1"
                                      }),
                                      _vm._v(
                                        " Messages\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-fw fa-pencil-alt mr-1"
                                      }),
                                      _vm._v(
                                        " Edit Profile\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    size: "sm",
                                    text: "Settings",
                                    variant: "light"
                                  }
                                },
                                [
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-fw fa-bell mr-1"
                                      }),
                                      _vm._v(
                                        " News\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "far fa-fw fa-envelope mr-1"
                                      }),
                                      _vm._v(
                                        " Messages\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    { staticClass: "font-size-sm" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-fw fa-pencil-alt mr-1"
                                      }),
                                      _vm._v(
                                        " Edit Profile\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "b-button",
                                { attrs: { size: "sm", variant: "primary" } },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { size: "sm", variant: "danger" } },
                                [_vm._v("Delete")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "b-button",
                                { attrs: { size: "sm", variant: "danger" } },
                                [_vm._v("Delete")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { size: "sm", variant: "primary" } },
                                [_vm._v("Edit")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
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
                                    variant: "outline-secondary"
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    size: "sm",
                                    variant: "outline-primary"
                                  }
                                },
                                [_vm._v("Ok")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
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
                                    variant: "outline-primary"
                                  }
                                },
                                [_vm._v("Ok")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    size: "sm",
                                    variant: "outline-secondary"
                                  }
                                },
                                [_vm._v("Cancel")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 1")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 2")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 3")
                              ])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 1")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 2")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options-item" }, [
                                _vm._v("Text 3")
                              ])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                {
                                  staticClass: "block-options-item text-danger"
                                },
                                [_vm._v("Special!")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                {
                                  staticClass: "block-options-item text-success"
                                },
                                [_vm._v("Looking Good!")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "warning" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-exclamation-triangle mr-1"
                                      }),
                                      _vm._v(
                                        " This is an alert!\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c("div", { staticClass: "block-options-item" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "alert alert-warning py-2 mb-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                This is an alert! "
                                    ),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-exclamation-triangle ml-1"
                                    })
                                  ]
                                )
                              ])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "info" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-info-circle mr-1"
                                      }),
                                      _vm._v(
                                        " Info\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "info" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Info! "
                                      ),
                                      _c("i", {
                                        staticClass: "fa fa-info-circle ml-1"
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "success" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-check-circle mr-1"
                                      }),
                                      _vm._v(
                                        " Success\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "success" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Success "
                                      ),
                                      _c("i", {
                                        staticClass: "fa fa-check-circle ml-1"
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "danger" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-times-circle mr-1"
                                      }),
                                      _vm._v(
                                        " Failure!\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-alert",
                                    {
                                      staticClass: "py-2 mb-0",
                                      attrs: { show: "", variant: "danger" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Failure! "
                                      ),
                                      _c("i", {
                                        staticClass: "fa fa-times-circle ml-1"
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { subtitle: "Subtitle", title: "Title" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "success" } },
                                    [_vm._v("Yes")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "primary" } },
                                    [_vm._v("15")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "warning" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-exclamation-triangle"
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { pill: "", variant: "danger" } },
                                    [_vm._v("Pill Badge")]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
                        )
                      ])
                    ]
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
                    {
                      attrs: {
                        "header-rtl": "",
                        subtitle: "Subtitle",
                        title: "Title"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { pill: "", variant: "danger" } },
                                    [_vm._v("Pill Badge")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "warning" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-exclamation-triangle"
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "success" } },
                                    [_vm._v("Yes")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-options-item" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "primary" } },
                                    [_vm._v("15")]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris\n                        adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt\n                        himenaeos\n                        habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit\n                        varius lorem sit\n                        metus mi.\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/blocks/Options.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/blocks/Options.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.vue?vue&type=template&id=79cfb1ff& */ "./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff&");
/* harmony import */ var _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.vue?vue&type=script&lang=js& */ "./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/blocks/Options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=template&id=79cfb1ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Options.vue?vue&type=template&id=79cfb1ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_79cfb1ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);