(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Landing",
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['appName', 'appVersion', 'appCopyright', 'appAuthorLink', 'appAuthor'])),
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      message: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
      }
    }
  },
  methods: {
    send: function send() {
      console.log('OK');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "hero bg-white overflow-hidden" }, [
      _c(
        "div",
        { staticClass: "hero-inner align-self-stretch d-flex flex-column" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "content content-full flex-fill d-flex align-items-center px-0 px-md-4 px-lg-6 px-xl-8 overflow-hidden"
            },
            [
              _c(
                "b-row",
                { staticClass: "w-100" },
                [
                  _c(
                    "b-col",
                    { staticClass: "text-center d-flex", attrs: { lg: "12" } },
                    [
                      _c("div", { staticClass: "w-100" }, [
                        _c("h1", { staticClass: "display-4 font-w700 mb-3" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.appName) +
                              " "
                          ),
                          _c("span", { staticClass: "font-w300" }, [
                            _vm._v("Email Marketing Tool")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "font-size-lg text-muted mb-3" },
                          [
                            _vm._v(
                              "\n                                Become the brand you want to be with smarter marketing built for big things.\n                            "
                            )
                          ]
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
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-body-light" }, [
      _c("div", { staticClass: "content content-full content-boxed" }, [
        _c(
          "div",
          { staticClass: "py-5 text-center" },
          [
            _c("h2", { staticClass: "h1 font-w700 mb-3 text-center" }, [
              _vm._v("\n                    Our Services\n                ")
            ]),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass:
                  "font-size-lg text-muted mb-6 text-center mx-sm-6 mx-lg-10"
              },
              [
                _vm._v(
                  "\n                    Comes packed with great features\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-row",
              { staticClass: "row-deck" },
              [
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c(
                      "base-block",
                      {
                        attrs: { "content-full": "", "fx-pop": "", rounded: "" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "item item-rounded bg-amethyst-lighter mx-auto my-4"
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-2x fa-envelope text-amethyst"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-2" }, [
                          _vm._v("Email Marketing")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c(
                      "base-block",
                      {
                        attrs: { "content-full": "", "fx-pop": "", rounded: "" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "item item-rounded bg-danger-light mx-auto my-4"
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-2x fa-globe text-danger"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-2" }, [
                          _vm._v("Solution Web")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c(
                      "base-block",
                      {
                        attrs: { "content-full": "", "fx-pop": "", rounded: "" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "item item-rounded bg-flat-lighter mx-auto my-4"
                          },
                          [
                            _c("i", {
                              staticClass: "fab fa-2x fa-dev text-flat"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-2" }, [
                          _vm._v("Web Development")
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
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-white" }, [
      _c("div", { staticClass: "content content-full content-boxed" }, [
        _c(
          "div",
          { staticClass: "py-2" },
          [
            _c("h2", { staticClass: "h1 text-center font-w700 mb-3" }, [
              _vm._v("\n                    Contact Us\n                ")
            ]),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { "label-for": "name", label: "Your Name:" } },
              [
                _c("b-form-input", {
                  attrs: {
                    id: "name",
                    name: "name",
                    placeholder: "Write Your Name",
                    state: _vm.$v.form.name.$dirty
                      ? !_vm.$v.form.name.$error
                      : null,
                    "aria-describedby": "name-feedback"
                  },
                  model: {
                    value: _vm.$v.form.name.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.form.name, "$model", $$v)
                    },
                    expression: "$v.form.name.$model"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "name-feedback" } },
                  [
                    _vm._v(
                      "\n                        Please enter your name!\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { "label-for": "email", label: "Your Email:" } },
              [
                _c("b-form-input", {
                  attrs: {
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "Write Your Email",
                    state: _vm.$v.form.email.$dirty
                      ? !_vm.$v.form.email.$error
                      : null,
                    "aria-describedby": "email-feedback"
                  },
                  model: {
                    value: _vm.$v.form.email.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.form.email, "$model", $$v)
                    },
                    expression: "$v.form.email.$model"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "email-feedback" } },
                  [
                    _vm._v(
                      "\n                        Please enter your email!\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { "label-for": "message", label: "Your Message:" } },
              [
                _c("b-form-textarea", {
                  attrs: {
                    id: "message",
                    name: "message",
                    rows: "5",
                    placeholder: "Write Your Message",
                    state: _vm.$v.form.message.$dirty
                      ? !_vm.$v.form.message.$error
                      : null,
                    "aria-describedby": "message-feedback"
                  },
                  model: {
                    value: _vm.$v.form.message.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.form.message, "$model", $$v)
                    },
                    expression: "$v.form.message.$model"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "message-feedback" } },
                  [
                    _vm._v(
                      "\n                        Your message must consist of at least 3 characters\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-center" },
              [
                _c(
                  "b-button",
                  {
                    directives: [
                      { name: "click-ripple", rawName: "v-click-ripple" }
                    ],
                    staticClass: "px-4 py-2 mt-2 w-50",
                    attrs: {
                      disabled: _vm.$v.$invalid,
                      variant: "alt-success"
                    },
                    on: { click: _vm.send }
                  },
                  [
                    _c("i", { staticClass: "far fa-paper-plane mr-1" }),
                    _vm._v(" Send\n                    ")
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("footer", { staticClass: "bg-body-light" }, [
      _c(
        "div",
        { staticClass: "content content-boxed py-2" },
        [
          _c(
            "b-row",
            { staticClass: "font-size-sm" },
            [
              _c(
                "b-col",
                {
                  staticClass: "py-1 text-center text-sm-right",
                  attrs: { "order-sm": "2", sm: "6" }
                },
                [
                  _vm._v("\n                    Crafted with "),
                  _c("i", { staticClass: "fa fa-heart text-danger" }),
                  _vm._v(" by "),
                  _c(
                    "a",
                    {
                      staticClass: "font-w600",
                      attrs: { href: _vm.appAuthorLink, target: "_blank" }
                    },
                    [_vm._v(_vm._s(_vm.appAuthor))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "py-1 text-center text-sm-left",
                  attrs: { "order-sm": "1", sm: "6" }
                },
                [
                  _c("a", { staticClass: "font-w600", attrs: { href: "#" } }, [
                    _vm._v(_vm._s(_vm.appName + " " + _vm.appVersion))
                  ]),
                  _vm._v(
                    " © " + _vm._s(_vm.appCopyright) + "\n                "
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pt-5 pb-3 text-center" }, [
      _c("i", { staticClass: "fa fa-2x fa-circle-notch text-primary" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hero-meta" }, [
      _c("div", { staticClass: "animated slideInDown infinite" }, [
        _c("i", { staticClass: "fa fa-chevron-down text-black-50" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/dms-landing/Landing.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/dms-landing/Landing.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=97811fbc& */ "./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dms-landing/Landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dms-landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=template&id=97811fbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dms-landing/Landing.vue?vue&type=template&id=97811fbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_97811fbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);