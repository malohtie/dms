(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          title: "Carousel",
          subtitle: "Flexible and mobile friendly content sliders."
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
                      [_vm._v("Plugins")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Carousel")
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
                    "base-block",
                    {
                      attrs: {
                        title: "Default with Indicators",
                        "content-full": ""
                      }
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            controls: "",
                            indicators: "",
                            interval: 4000
                          }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        title: "Fade with Indicators",
                        "content-full": ""
                      }
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            fade: "",
                            controls: "",
                            indicators: "",
                            interval: 4000
                          }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        title: "No animation with Indicators",
                        "content-full": ""
                      }
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            "no-animation": "",
                            controls: "",
                            indicators: "",
                            interval: 4000
                          }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { title: "Only Arrows", "content-full": "" } },
                    [
                      _c(
                        "b-carousel",
                        { attrs: { controls: "", interval: 4000 } },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        title: "Simple with No Pause on Hover",
                        "content-full": ""
                      }
                    },
                    [
                      _c(
                        "b-carousel",
                        { attrs: { "no-hover-pause": "", interval: 4000 } },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { title: "No autoplay", "content-full": "" } },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: { controls: "", indicators: "", interval: 0 }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo31.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo29.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo30.jpg" }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "images/photos/photo32.jpg" }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/plugins/Carousel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/plugins/Carousel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=4929bece& */ "./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/plugins/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=4929bece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Carousel.vue?vue&type=template&id=4929bece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_4929bece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);