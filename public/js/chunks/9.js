(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      groupOneValue: [30, 50, 70, 90, 100],
      groupTwoValue: [30, 50, 70, 90, 100],
      groupThreeValue: [30, 50, 70, 90, 100],
      groupFourValue: [30, 50, 70, 90, 100, 80, 60],
      max: 100
    };
  },
  methods: {
    randomValue: function randomValue(group) {
      var _this = this;

      switch (group) {
        case 1:
          this.groupOneValue.forEach(function (val, index) {
            _this.$set(_this.groupOneValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 2:
          this.groupTwoValue.forEach(function (val, index) {
            _this.$set(_this.groupTwoValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 3:
          this.groupThreeValue.forEach(function (val, index) {
            _this.$set(_this.groupThreeValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 4:
          this.groupFourValue.forEach(function (val, index) {
            _this.$set(_this.groupFourValue, index, 10 + Math.random() * _this.max);
          });
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b& ***!
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
          subtitle: "Vital activity components for your project.",
          title: "Progress"
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
                      _vm._v("Progress")
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Loading")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { title: "Bootstrap Spinners" } },
            [
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "primary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "secondary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "success"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "danger"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "warning"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "info"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "light"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          variant: "dark"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "primary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "secondary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "success"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "danger"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "warning"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "info"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "light"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          small: "",
                          type: "grow",
                          variant: "dark"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "primary" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "secondary" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "success" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "danger" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "warning" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "info" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "light" }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { label: "Loading...", variant: "dark" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "primary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "secondary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "success"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "danger"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "warning"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "info"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "light"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          label: "Loading...",
                          type: "grow",
                          variant: "dark"
                        }
                      })
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
            { attrs: { title: "Icons" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted mb-5" }, [
                _vm._v(
                  "\n                You can create a loading indicator by adding the class "
                ),
                _c("code", [_vm._v("fa-spin")]),
                _vm._v(
                  " to any Font Awesome\n                icon. Combining it with size classes and colors, you can get a lot of variations.\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-sun fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-sun fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-sun fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-sun fa-spin text-danger"
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-cog fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-cog fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-cog fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-cog fa-spin text-warning"
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-asterisk fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-asterisk fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-asterisk fa-spin" })
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-asterisk fa-spin text-success"
                    })
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Progress Bars")
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "row-deck" },
            [
              _c(
                "b-col",
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { title: "Normal" },
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
                                      return _vm.randomValue(1)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "primary" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[0].toFixed() +
                                "%</span>",
                              value: _vm.groupOneValue[0]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "warning" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[1].toFixed() +
                                "%</span>",
                              value: _vm.groupOneValue[1]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "danger" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[2].toFixed() +
                                "%</span>",
                              value: _vm.groupOneValue[2]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "info" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[3].toFixed() +
                                "%</span>",
                              value: _vm.groupOneValue[3]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "success" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[4].toFixed() +
                                "%</span>",
                              value: _vm.groupOneValue[4]
                            }
                          })
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
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { title: "Striped" },
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
                                      return _vm.randomValue(2)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            striped: "",
                            variant: "primary"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[0].toFixed() +
                                "%</span>",
                              value: _vm.groupTwoValue[0]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            striped: "",
                            variant: "warning"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[1].toFixed() +
                                "%</span>",
                              value: _vm.groupTwoValue[1]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            striped: "",
                            variant: "danger"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[2].toFixed() +
                                "%</span>",
                              value: _vm.groupTwoValue[2]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, striped: "", variant: "info" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[3].toFixed() +
                                "%</span>",
                              value: _vm.groupTwoValue[3]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            striped: "",
                            variant: "success"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[4].toFixed() +
                                "%</span>",
                              value: _vm.groupTwoValue[4]
                            }
                          })
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
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { title: "Animated" },
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
                                      return _vm.randomValue(3)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            animated: "",
                            variant: "primary"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[0].toFixed() +
                                "%</span>",
                              value: _vm.groupThreeValue[0]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            animated: "",
                            variant: "warning"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[1].toFixed() +
                                "%</span>",
                              value: _vm.groupThreeValue[1]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            animated: "",
                            variant: "danger"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[2].toFixed() +
                                "%</span>",
                              value: _vm.groupThreeValue[2]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, animated: "", variant: "info" }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[3].toFixed() +
                                "%</span>",
                              value: _vm.groupThreeValue[3]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            animated: "",
                            variant: "success"
                          }
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[4].toFixed() +
                                "%</span>",
                              value: _vm.groupThreeValue[4]
                            }
                          })
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
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { title: "Mini" },
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
                                      return _vm.randomValue(4)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[0],
                          height: "10px",
                          variant: "primary"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[1],
                          height: "10px",
                          variant: "warning"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[2],
                          height: "10px",
                          variant: "danger"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[3],
                          height: "10px",
                          striped: "",
                          variant: "info"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[4],
                          height: "10px",
                          striped: "",
                          variant: "success"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[5],
                          animated: "",
                          height: "10px",
                          variant: "muted"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          max: _vm.max,
                          value: _vm.groupFourValue[6],
                          animated: "",
                          height: "10px",
                          variant: "dark"
                        }
                      })
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

/***/ "./resources/js/src/views/elements/Progress.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/elements/Progress.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress.vue?vue&type=template&id=453ee84b& */ "./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b&");
/* harmony import */ var _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progress.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Progress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Progress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Progress.vue?vue&type=template&id=453ee84b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Progress.vue?vue&type=template&id=453ee84b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_453ee84b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);