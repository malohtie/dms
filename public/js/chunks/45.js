(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
            "Add dialogs to your site for lightboxes, user notifications, or completely custom content.",
          title: "Modals"
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
                      _vm._v("Modals")
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
            _vm._v("Bootstrap Modals")
          ]),
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
                    {
                      attrs: { "content-full": "", title: "Default Variation" }
                    },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Modals are completely customizable and here we present the default one\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-normal",
                              modifiers: { "modal-block-normal": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-normal"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-normal"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-normal"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-normal"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Size: Small" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        If you don’t have much content, you can use the small size variation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-small",
                              modifiers: { "modal-block-small": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-small",
                        size: "sm"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-small"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-small"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-small"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Size: Large" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        If you need more space you can use the large size variation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-large",
                              modifiers: { "modal-block-large": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-large",
                        size: "lg"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-large"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-large"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-large"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                      attrs: { "content-full": "", title: "Size: Extra Large" }
                    },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Do you need even more space? Go for the extra large modal\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-extra-large",
                              modifiers: { "modal-block-extra-large": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-extra-large",
                        size: "xl"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-extra-large"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad\n                                feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante\n                                convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan\n                                adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames\n                                aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo\n                                turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis\n                                congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi\n                                viverra luctus id leo dictum lorem, inceptos nibh orci.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad\n                                feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante\n                                convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan\n                                adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames\n                                aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo\n                                turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis\n                                congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi\n                                viverra luctus id leo dictum lorem, inceptos nibh orci.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad\n                                feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante\n                                convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan\n                                adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames\n                                aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo\n                                turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis\n                                congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi\n                                viverra luctus id leo dictum lorem, inceptos nibh orci.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-extra-large"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-extra-large"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Position: Top" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        You can position your modals at the top of the screen\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-top",
                              modifiers: { "modal-block-top": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-top",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-top"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-top"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-top"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-top"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                        "content-full": "",
                        title: "Position: Vertically Centered"
                      }
                    },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        You can center your modals in the middle of the screen\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-vcenter",
                              modifiers: { "modal-block-vcenter": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        centered: "",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-vcenter"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-vcenter"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-vcenter"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-vcenter"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
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
                    { attrs: { "content-full": "", title: "Fade In" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        The default modal animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fadein",
                              modifiers: { "modal-block-fadein": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-fadein"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fadein"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fadein"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fadein"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Pop In" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Poping in animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-popin",
                              modifiers: { "modal-block-popin": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-popin",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-popin"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-popin"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popin"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popin"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Pop Out" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Poping out animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-popout",
                              modifiers: { "modal-block-popout": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-popout",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-popout"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-popout"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popout"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Close\n                            ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popout"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Slide Up" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Sliding from up animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideup",
                              modifiers: { "modal-block-slideup": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-slideup",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-slideup"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideup"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideup"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideup"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Slide Right" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Sliding from right animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideright",
                              modifiers: { "modal-block-slideright": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-slideright",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-slideright"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideright"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideright"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideright"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "Slide Left" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Sliding from left animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideleft",
                              modifiers: { "modal-block-slideleft": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-slideleft",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-slideleft"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideleft"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideleft"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideleft"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "From Right" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Coming from right with rotation animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fromright",
                              modifiers: { "modal-block-fromright": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-fromright",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-fromright"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fromright"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromright"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromright"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
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
                    { attrs: { "content-full": "", title: "From Left" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n                        Coming from left with rotation animation\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fromleft",
                              modifiers: { "modal-block-fromleft": true }
                            }
                          ],
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [
                          _vm._v(
                            "\n                        Launch Modal\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "body-class": "p-0",
                        "dialog-class": "modal-dialog-fromleft",
                        "hide-footer": "",
                        "hide-header": "",
                        id: "modal-block-fromleft"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-themed block-transparent mb-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fromleft"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet\n                                adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est\n                                ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit\n                                metus mi.\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromleft"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { size: "sm", variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromleft"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-check mr-1" }),
                                  _vm._v(" Ok\n                            ")
                                ]
                              )
                            ],
                            1
                          )
                        ]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "content-heading" }, [
      _vm._v("\n            Bootstrap Modals "),
      _c("small", [_vm._v("Animations")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/elements/Modals.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/elements/Modals.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.vue?vue&type=template&id=1c85f2f8& */ "./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/Modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modals.vue?vue&type=template&id=1c85f2f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/elements/Modals.vue?vue&type=template&id=1c85f2f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_1c85f2f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);