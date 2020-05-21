(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["User"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseLayout */ "./resources/js/src/layouts/BaseLayout.vue");
/* harmony import */ var _data_menuUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/menuUser */ "./resources/js/src/data/menuUser.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'User',
  components: {
    BaseLayout: _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sidebar: '',
        header: '',
        footer: ''
      },
      menu: _data_menuUser__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  created: function created() {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      footer: true
    }); // Set various template options

    this.$store.commit('headerStyle', {
      mode: 'light'
    });
    this.$store.commit('mainContent', {
      mode: 'full'
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b& ***!
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
  return _c("base-layout", {
    attrs: { "layout-classes": _vm.layoutClasses, menu: _vm.menu }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/data/menuUser.js":
/*!*******************************************!*\
  !*** ./resources/js/src/data/menuUser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'User',
  to: '/backend/dashboard',
  icon: 'si si-speedometer'
}]);

/***/ }),

/***/ "./resources/js/src/layouts/variations/User.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/variations/User.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=2a05319b& */ "./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/variations/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=2a05319b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/variations/User.vue?vue&type=template&id=2a05319b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_2a05319b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);