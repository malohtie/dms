(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb& ***!
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
        attrs: {
          subtitle: "Powerful way to manipulate any block you want.",
          title: "Block API"
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
            { attrs: { title: "Usage with JS code" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted mb-0" }, [
                _vm._v(
                  "\n                Using block API is easy. You will just have to use the ref property of your block to call the\n                related function. For example, to set the state of a block with ref set to\n                "
                ),
                _c("strong", [_vm._v("testBlock")]),
                _vm._v(" to loading, you will have to call:\n            ")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("code", [_vm._v("this.$refs.testBlock.stateLoading()")])
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-table-simple",
                        {
                          attrs: {
                            bordered: "",
                            responsive: "",
                            striped: "",
                            "table-class": "table-vcenter mb-0"
                          }
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
                                    { staticStyle: { width: "25%" } },
                                    [_vm._v("Live Test")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-th",
                                    { staticStyle: { "min-width": "160px" } },
                                    [_vm._v("Method")]
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.contentToggle()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Toggle Content\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.contentToggle()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.contentHide()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Hide Content\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.contentHide()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.contentShow()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Show Content\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.contentShow()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-warning"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.stateToggle()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Toggle State\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.stateToggle()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-warning"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.stateLoading()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "State Loading\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.stateLoading()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-warning"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.stateNormal()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "State Normal\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.stateNormal()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-danger"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.fullscreenToggle()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Toggle Fullscreen\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v(
                                        "$refs.testBlock.fullscreenToggle()"
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-danger"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.fullscreenOn()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Fullscreen On\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.fullscreenOn()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-danger"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.fullscreenOff()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Fullscreen Off\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.fullscreenOff()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-info"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.pinnedToggle()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Toggle Pinned\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.pinnedToggle()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-info"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.pinnedOn()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Pinned On\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.pinnedOn()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-info"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.pinnedOff()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Pinned Off\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.pinnedOff()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-dark"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.close()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Close\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.close()")
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
                                        "b-button",
                                        {
                                          attrs: {
                                            block: "",
                                            size: "sm",
                                            variant: "alt-dark"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.testBlock.open()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Open\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("code", [
                                      _vm._v("$refs.testBlock.open()")
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
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "base-block",
                        {
                          ref: "testBlock",
                          attrs: {
                            bordered: "",
                            "btn-option-content": "",
                            "btn-option-fullscreen": "",
                            "header-bg": "",
                            title: "Test Block"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                            Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad\n                            feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis\n                            ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing\n                            risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet\n                            consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis\n                            quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor\n                            enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id\n                            leo dictum lorem, inceptos nibh orci.\n                        "
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
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Interactive Options")
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
                      attrs: {
                        "btn-option-content": "",
                        title: "Toggle Content"
                      }
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                    { attrs: { "btn-option-close": "", title: "Close" } },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      attrs: { "btn-option-fullscreen": "", title: "Maximize" }
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "textBlock2",
                      attrs: { title: "Refresh" },
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
                                      return _vm.loadData("textBlock2")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                    { attrs: { "btn-option-pinned": "", title: "Pinned" } },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                        "btn-option-content": "",
                        "mode-content-hide": "",
                        subtitle: "Hidden by default",
                        title: "Content"
                      }
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "base-block",
                    {
                      ref: "testBlock2",
                      attrs: {
                        "btn-option-close": "",
                        "btn-option-content": "",
                        "btn-option-fullscreen": "",
                        "btn-option-pinned": "",
                        title: "All Options"
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
                                      return _vm.loadData("testBlock2")
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
                          "\n                        Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat\n                        magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna\n                        molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero\n                        condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat\n                        nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas\n                        vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi\n                        suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh\n                        orci.\n                    "
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
            _vm._v("Loading Indicators")
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
                      ref: "blockLoadingGog",
                      attrs: { title: "Gog" },
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
                                      return _vm.loadData("blockLoadingGog")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingLocation",
                      staticClass: "block-mode-loading-location",
                      attrs: { title: "Location" },
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
                                      return _vm.loadData(
                                        "blockLoadingLocation"
                                      )
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingEnergy",
                      staticClass: "block-mode-loading-energy",
                      attrs: { title: "Energy" },
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
                                      return _vm.loadData("blockLoadingEnergy")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingRefresh",
                      staticClass: "block-mode-loading-refresh",
                      attrs: { title: "Refresh" },
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
                                      return _vm.loadData("blockLoadingRefresh")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingSun",
                      staticClass: "block-mode-loading-sun",
                      attrs: { title: "Sun" },
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
                                      return _vm.loadData("blockLoadingSun")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingRepeat",
                      staticClass: "block-mode-loading-repeat",
                      attrs: { title: "Repeat" },
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
                                      return _vm.loadData("blockLoadingRepeat")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingdms",
                      staticClass: "block-mode-loading-dms",
                      attrs: { title: "dms" },
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
                                      return _vm.loadData("blockLoadingdms")
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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
                      ref: "blockLoadingHourglass",
                      staticClass: "block-mode-loading-hourglass",
                      attrs: { title: "Hourglass" },
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
                                      return _vm.loadData(
                                        "blockLoadingHourglass"
                                      )
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
                          "\n                        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing\n                        luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis\n                        tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti\n                        vestibulum quis in sit varius lorem sit metus mi.\n                    "
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

/***/ "./resources/js/src/views/blocks/Api.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/blocks/Api.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api.vue?vue&type=template&id=1429d3fb& */ "./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb&");
/* harmony import */ var _Api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api.vue?vue&type=script&lang=js& */ "./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/blocks/Api.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Api.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Api.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Api.vue?vue&type=template&id=1429d3fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/blocks/Api.vue?vue&type=template&id=1429d3fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Api_vue_vue_type_template_id_1429d3fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);