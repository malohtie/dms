(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: 40,
      perPage: 10,
      currentPage: 1,
      users: [{
        id: 1,
        name: 'Ralph Murray',
        avatar: 'avatar11',
        href: 'javascript:void(0)',
        labelVariant: 'success',
        labelText: 'VIP'
      }, {
        id: 2,
        name: 'Justin Hunt',
        avatar: 'avatar13',
        href: 'javascript:void(0)',
        labelVariant: 'info',
        labelText: 'Business'
      }, {
        id: 3,
        name: 'Ralph Murray',
        avatar: 'avatar16',
        href: 'javascript:void(0)',
        labelVariant: 'primary',
        labelText: 'Personal'
      }, {
        id: 4,
        name: 'Danielle Jones',
        avatar: 'avatar5',
        href: 'javascript:void(0)',
        labelVariant: 'warning',
        labelText: 'Trial'
      }, {
        id: 5,
        name: 'Wayne Garcia',
        avatar: 'avatar15',
        href: 'javascript:void(0)',
        labelVariant: 'info',
        labelText: 'Business'
      }, {
        id: 6,
        name: 'Judy Ford',
        avatar: 'avatar8',
        href: 'javascript:void(0)',
        labelVariant: 'danger',
        labelText: 'Disabled'
      }, {
        id: 7,
        name: 'Jose Wagner',
        avatar: 'avatar12',
        href: 'javascript:void(0)',
        labelVariant: 'success',
        labelText: 'VIP'
      }, {
        id: 8,
        name: 'Jack Estrada',
        avatar: 'avatar10',
        href: 'javascript:void(0)',
        labelVariant: 'success',
        labelText: 'VIP'
      }, {
        id: 9,
        name: 'Jesse Fisher',
        avatar: 'avatar13',
        href: 'javascript:void(0)',
        labelVariant: 'danger',
        labelText: 'Disabled'
      }, {
        id: 10,
        name: 'Judy Taylor',
        avatar: 'avatar3',
        href: 'javascript:void(0)',
        labelVariant: 'primary',
        labelText: 'Personal'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "content" },
      [
        _c(
          "b-form",
          {
            on: {
              submit: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
              }
            }
          },
          [
            _c(
              "b-input-group",
              {
                scopedSlots: _vm._u([
                  {
                    key: "append",
                    fn: function() {
                      return [
                        _c("b-input-group-text", [
                          _c("i", { staticClass: "fa fa-fw fa-search" })
                        ])
                      ]
                    },
                    proxy: true
                  }
                ])
              },
              [
                _c("b-form-input", {
                  staticClass: "form-control",
                  attrs: { placeholder: "Search.." }
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
      "div",
      { staticClass: "content" },
      [
        _c(
          "b-tabs",
          {
            staticClass: "block",
            attrs: {
              "content-class": "block-content",
              "nav-class": "nav-tabs-block"
            }
          },
          [
            _c(
              "b-tab",
              { attrs: { active: "", title: "Projects" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light"
                  },
                  [
                    _c("span", { staticClass: "text-primary font-w700" }, [
                      _vm._v("6")
                    ]),
                    _vm._v(" projects found for\n                    "),
                    _c("mark", { staticClass: "text-danger" }, [_vm._v("HTML")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-simple",
                  { attrs: { striped: "", "table-class": "table-vcenter" } },
                  [
                    _c(
                      "b-thead",
                      [
                        _c(
                          "b-tr",
                          [
                            _c("b-th", { staticStyle: { width: "50%" } }, [
                              _vm._v("Project")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center",
                                staticStyle: { width: "15%" }
                              },
                              [_vm._v("Status")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center",
                                staticStyle: { width: "15%" }
                              },
                              [_vm._v("Sales")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "20%" }
                              },
                              [_vm._v("Earnings")]
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
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("Web Application Framework")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "success" } },
                                  [_vm._v("Completed")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("1603")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 35,287")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tr",
                          [
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("Wordpress Theme")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "warning" } },
                                  [_vm._v("In Progress")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("1285")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 16,250")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tr",
                          [
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("Mobile Application")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "success" } },
                                  [_vm._v("Completed")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("4850")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 18,111")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tr",
                          [
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("UI Kit")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "success" } },
                                  [_vm._v("Completed")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("698")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 9,200")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tr",
                          [
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("Admin Template")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "danger" } },
                                  [_vm._v("Cancelled")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("1693")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 10,589")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tr",
                          [
                            _c("b-td", [
                              _c("h4", { staticClass: "h5 mt-3 mb-2" }, [
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [_vm._v("Flat Icon Set")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "d-none d-sm-block text-muted" },
                                [
                                  _vm._v(
                                    "\n                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac\n                                    cursus nibh sapien in\n                                    purus. Mauris tincidunt tincidunt turpis in porta.\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: "success" } },
                                  [_vm._v("Completed")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-lg-table-cell font-size-xl text-center font-w600"
                              },
                              [_vm._v("1500")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "font-size-xl text-center font-w600"
                              },
                              [_vm._v("$ 19,670")]
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
                _c("b-pagination", {
                  attrs: {
                    "per-page": _vm.perPage,
                    "total-rows": _vm.rows,
                    size: "sm"
                  },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-tab",
              { attrs: { title: "Users" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light"
                  },
                  [
                    _c("span", { staticClass: "text-primary font-w700" }, [
                      _vm._v("192")
                    ]),
                    _vm._v(" results found for\n                    "),
                    _c("mark", { staticClass: "text-danger" }, [
                      _vm._v("client")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-simple",
                  { attrs: { striped: "", "table-class": "table-vcenter" } },
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
                                staticClass:
                                  "d-none d-sm-table-cell text-center",
                                staticStyle: { width: "40px" }
                              },
                              [_vm._v("#")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "70px" }
                              },
                              [_c("i", { staticClass: "si si-user" })]
                            ),
                            _vm._v(" "),
                            _c("b-th", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              { staticClass: "d-none d-sm-table-cell" },
                              [_vm._v("Email")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass: "d-none d-lg-table-cell",
                                staticStyle: { width: "15%" }
                              },
                              [_vm._v("Access")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-th",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "110px" }
                              },
                              [_vm._v("Actions")]
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
                      _vm._l(_vm.users, function(user) {
                        return _c(
                          "b-tr",
                          { key: user.id },
                          [
                            _c(
                              "b-td",
                              {
                                staticClass:
                                  "d-none d-sm-table-cell text-center"
                              },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { pill: "", variant: "primary" } },
                                  [_vm._v(_vm._s(user.id))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-td", { staticClass: "text-center" }, [
                              _c("img", {
                                staticClass: "img-avatar img-avatar48",
                                attrs: {
                                  src:
                                    "/images/avatars/" + user.avatar + ".jpg",
                                  alt: "Avatar"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("b-td", { staticClass: "font-w600" }, [
                              _c("a", { attrs: { href: "" + user.href } }, [
                                _vm._v(_vm._s(user.name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              { staticClass: "d-none d-sm-table-cell" },
                              [
                                _vm._v(
                                  "\n                                client" +
                                    _vm._s(user.id)
                                ),
                                _c("em", { staticClass: "text-muted" }, [
                                  _vm._v("@example.com")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              { staticClass: "d-none d-lg-table-cell" },
                              [
                                _c(
                                  "b-badge",
                                  { attrs: { variant: user.labelVariant } },
                                  [_vm._v(_vm._s(user.labelText))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-td",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName:
                                          "v-b-tooltip.hover.nofade.left",
                                        value: "Edit Client",
                                        expression: "'Edit Client'",
                                        modifiers: {
                                          hover: true,
                                          nofade: true,
                                          left: true
                                        }
                                      }
                                    ],
                                    attrs: {
                                      size: "sm",
                                      variant: "alt-primary"
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-pencil-alt" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName:
                                          "v-b-tooltip.hover.nofade.left",
                                        value: "Remove Client",
                                        expression: "'Remove Client'",
                                        modifiers: {
                                          hover: true,
                                          nofade: true,
                                          left: true
                                        }
                                      }
                                    ],
                                    attrs: { size: "sm", variant: "alt-danger" }
                                  },
                                  [_c("i", { staticClass: "fa fa-times" })]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: {
                    "per-page": _vm.perPage,
                    "total-rows": _vm.rows,
                    size: "sm"
                  },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-tab",
              { attrs: { title: "Classic" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light"
                  },
                  [
                    _c("span", { staticClass: "text-primary font-w700" }, [
                      _vm._v("280")
                    ]),
                    _vm._v(" websites found for\n                    "),
                    _c("mark", { staticClass: "text-danger" }, [_vm._v("dms")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-row",
                  { staticClass: "row py-3" },
                  _vm._l(12, function(index) {
                    return _c("b-col", { key: index, attrs: { lg: "6" } }, [
                      _c("h4", { staticClass: "h5 mb-1" }, [
                        _c("a", { attrs: { href: "javascript:void(0)" } }, [
                          _vm._v("dms - Vue Edition")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "font-size-sm text-success mb-1" },
                        [_vm._v("https://pixelcave.com/")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "Donec lacinia venenatis metus at bibendum? In hac\n                            habitasse platea\n                            dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis.\n                            Suspendisse\n                            potenti. Aliquam quis ligula elit."
                        )
                      ])
                    ])
                  }),
                  1
                ),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: {
                    "per-page": _vm.perPage,
                    "total-rows": _vm.rows,
                    size: "sm"
                  },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-tab",
              { attrs: { title: "Photos" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light"
                  },
                  [
                    _c("span", { staticClass: "text-primary font-w700" }, [
                      _vm._v("85")
                    ]),
                    _vm._v(" photos found for\n                    "),
                    _c("mark", { staticClass: "text-danger" }, [
                      _vm._v("wallpaper")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-row",
                  { staticClass: "gutters-tiny items-push push" },
                  [
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo1.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo2.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo6.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo21.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo22.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo9.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo23.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo24.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo25.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo27.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo28.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { lg: "4", md: "6", xl: "3" } }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          alt: "Photo",
                          src: " images/photos/photo30.jpg"
                        }
                      })
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: {
                    "per-page": _vm.perPage,
                    "total-rows": _vm.rows,
                    size: "sm"
                  },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/boxed/Search.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/boxed/Search.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=6e74a8c2& */ "./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/boxed/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/boxed/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=6e74a8c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/boxed/Search.vue?vue&type=template&id=6e74a8c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_6e74a8c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);