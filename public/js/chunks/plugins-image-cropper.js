(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-image-cropper"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Vue Cropperjs, for more info and examples you can check out https://github.com/Agontuk/vue-cropperjs

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      imgSrc: '/images/photos/photo30@2x.jpg',
      cropData: null
    };
  },
  methods: {
    flipX: function flipX() {
      var dom = this.$refs.flipX;
      var scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute('data-scale', scale);
    },
    flipY: function flipY() {
      var dom = this.$refs.flipY;
      var scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute('data-scale', scale);
    },
    zoom: function zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
    rotate: function rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    reset: function reset() {
      this.$refs.cropper.reset();
      this.cropData = null;
    },
    setDragMode: function setDragMode(mode) {
      this.$refs.cropper.setDragMode(mode);
    },
    setAspectRatio: function setAspectRatio(aspect) {
      this.$refs.cropper.setAspectRatio(aspect);
    },
    getCropBoxData: function getCropBoxData() {
      this.cropData = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!cropperjs/dist/cropper.css */ "./node_modules/css-loader/index.js!./node_modules/cropperjs/dist/cropper.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          subtitle: "Powered by Cropper.js plugin.",
          title: "Image Cropper"
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
                      _vm._v("Image Cropper")
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
            { staticClass: "mb-2", attrs: { "content-class": "text-center" } },
            [
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set drag mode to move",
                          expression: "'Set drag mode to move'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setDragMode("move")
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-arrows-alt" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set drag mode to crop",
                          expression: "'Set drag mode to crop'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setDragMode("crop")
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-crop" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Zoom In",
                          expression: "'Zoom In'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.zoom(0.1)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-search-plus" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Zoom Out",
                          expression: "'Zoom Out'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.zoom(-0.1)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-search-minus" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Rotate Left",
                          expression: "'Rotate Left'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.rotate(-90)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-undo-alt" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Rotate Right",
                          expression: "'Rotate Right'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.rotate(90)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-redo-alt" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Flip Horizontal",
                          expression: "'Flip Horizontal'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      ref: "flipX",
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.flipX($event)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-arrows-alt-h" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Flip Vertical",
                          expression: "'Flip Vertical'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      ref: "flipY",
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.flipY($event)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-arrows-alt-v" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set Aspect Ratio",
                          expression: "'Set Aspect Ratio'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setAspectRatio(16 / 9)
                        }
                      }
                    },
                    [_vm._v("\n                    16:9\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set Aspect Ratio",
                          expression: "'Set Aspect Ratio'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setAspectRatio(4 / 3)
                        }
                      }
                    },
                    [_vm._v("\n                    4:3\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set Aspect Ratio",
                          expression: "'Set Aspect Ratio'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setAspectRatio(1)
                        }
                      }
                    },
                    [_vm._v("\n                    1:1\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Set Aspect Ratio",
                          expression: "'Set Aspect Ratio'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setAspectRatio(2 / 3)
                        }
                      }
                    },
                    [_vm._v("\n                    2:3\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.nofade.top",
                      value: "Set Aspect Ratio",
                      expression: "'Set Aspect Ratio'",
                      modifiers: { hover: true, nofade: true, top: true }
                    }
                  ],
                  staticClass: "push",
                  attrs: { size: "sm", variant: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.setAspectRatio(NaN)
                    }
                  }
                },
                [_vm._v("\n                Free\n            ")]
              ),
              _vm._v(" "),
              _c(
                "b-button-group",
                { staticClass: "push" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Clear",
                          expression: "'Clear'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.reset($event)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-times" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.nofade.top",
                          value: "Crop",
                          expression: "'Crop'",
                          modifiers: { hover: true, nofade: true, top: true }
                        }
                      ],
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.getCropBoxData($event)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-check" })]
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
            { attrs: { "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { xl: "6" } }, [
                    _c("h4", { staticClass: "border-bottom pb-2" }, [
                      _vm._v("Cropper")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("vue-cropper", {
                          ref: "cropper",
                          attrs: {
                            "aspect-ratio": 4 / 3,
                            src: _vm.imgSrc,
                            alt: "Source Image",
                            preview: ".js-img-cropper-preview"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { xl: "6" } }, [
                    _c("h4", { staticClass: "border-bottom pb-2" }, [
                      _vm._v("Preview")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "overflow-hidden mb-2" }, [
                      _c("div", {
                        staticClass:
                          "js-img-cropper-preview mx-auto overflow-hidden",
                        staticStyle: { height: "200px" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "border-bottom pb-2" }, [
                      _vm._v("Crop Data")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mx-md-6" },
                      [
                        _c("b-textarea", {
                          attrs: { rows: "6" },
                          model: {
                            value: _vm.cropData,
                            callback: function($$v) {
                              _vm.cropData = $$v
                            },
                            expression: "cropData"
                          }
                        })
                      ],
                      1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/plugins/ImageCropper.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/plugins/ImageCropper.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=template&id=33dd7c6b& */ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b&");
/* harmony import */ var _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=script&lang=js& */ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/plugins/ImageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=template&id=33dd7c6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/ImageCropper.vue?vue&type=template&id=33dd7c6b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_33dd7c6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);