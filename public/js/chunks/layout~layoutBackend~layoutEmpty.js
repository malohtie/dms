(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/partials/Header */ "./resources/js/src/layouts/partials/Header.vue");
/* harmony import */ var _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/partials/Sidebar */ "./resources/js/src/layouts/partials/Sidebar.vue");
/* harmony import */ var _layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/partials/Footer */ "./resources/js/src/layouts/partials/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Import main layout components



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseLayout',
  components: {
    BaseHeader: _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    BaseSidebar: _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    BaseFooter: _layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    layoutClasses: Object
  },
  data: function data() {
    return {};
  },
  computed: {
    loader: function loader() {
      return this.$store.state.settings.pageLoader;
    },
    pageOverlay: function pageOverlay() {
      return this.$store.state.settings.pageOverlay;
    },
    sidebar: function sidebar() {
      return this.$store.state.layout.sidebar;
    },
    header: function header() {
      return this.$store.state.layout.header;
    },
    footer: function footer() {
      return this.$store.state.layout.footer;
    },
    classContainer: function classContainer() {
      return {
        'sidebar-r': this.$store.state.layout.sidebar && !this.$store.state.settings.sidebarLeft,
        'sidebar-mini': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarMini,
        'sidebar-o': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarVisibleDesktop,
        'sidebar-o-xs': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarVisibleMobile,
        'sidebar-dark': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarDark,
        //'side-overlay-o': this.$store.state.layout.sideOverlay && this.$store.state.settings.sideOverlayVisible,
        //'side-overlay-hover': this.$store.state.layout.sideOverlay && this.$store.state.settings.sideOverlayHoverable,
        //'enable-page-overlay': this.$store.state.layout.sideOverlay && this.$store.state.settings.pageOverlay,
        'page-header-fixed': this.$store.state.layout.header && this.$store.state.settings.headerFixed,
        'page-header-dark': this.$store.state.layout.header && this.$store.state.settings.headerDark,
        'main-content-boxed': this.$store.state.settings.mainContent === 'boxed',
        'main-content-narrow': this.$store.state.settings.mainContent === 'narrow',
        'rtl-support': this.$store.state.settings.rtlSupport,
        'side-trans-enabled': this.$store.state.settings.sideTransitions,
        'side-scroll': true
      };
    }
  },
  created: function created() {
    // Set default color theme
    this.$store.commit('setColorTheme', {
      theme: this.$store.getters.appColorTheme
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseFooter',
  props: {
    classes: String
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['appName', 'appVersion', 'appCopyright', 'appAuthorLink', 'appAuthor']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseHeader',
  props: {
    classes: String
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['settings'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    user: 'auth/user'
  })), {}, {
    fullName: function fullName() {
      var _this$user;

      return (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.full_name;
    }
  }),
  methods: {
    go: function go(url) {
      this.$router.push(url);
    },
    logout: function logout() {
      var _this = this;

      this.$store.dispatch('auth/logout').then(function () {
        _this.$router.push('/login');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var _data_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/menu */ "./resources/js/src/data/menu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
 // Get navigation data


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseSidebar',
  props: {
    classes: String
  },
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Get main navigation
      navigation: _data_menu__WEBPACK_IMPORTED_MODULE_1__["default"].main
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c& ***!
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
    { class: _vm.classContainer, attrs: { id: "page-container" } },
    [
      _c("vue-progress-bar"),
      _vm._v(" "),
      _c("div", { class: { show: _vm.loader }, attrs: { id: "page-loader" } }),
      _vm._v(" "),
      _vm.sidebar
        ? _c(
            "base-sidebar",
            { class: _vm.layoutClasses.sidebar },
            [_vm._t("sidebar")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.header
        ? _c(
            "base-header",
            { class: _vm.layoutClasses.header },
            [_vm._t("header")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "main-container" } },
        [
          _vm._t("content"),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { mode: "out-in", name: "fade" } },
            [_c("router-view")],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _vm.footer
        ? _c(
            "base-footer",
            { class: _vm.layoutClasses.footer || "bg-body-light" },
            [_vm._t("footer")],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19& ***!
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
    "footer",
    { attrs: { id: "page-footer" } },
    [
      _vm._t("default", [
        _c(
          "div",
          { staticClass: "content py-2" },
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
                    _c(
                      "a",
                      {
                        staticClass: "font-w600",
                        attrs: {
                          href: "https://1.envato.market/5Noyb",
                          target: "_blank"
                        }
                      },
                      [_vm._v(_vm._s(_vm.appName + " " + _vm.appVersion))]
                    ),
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
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b& ***!
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
    "header",
    { attrs: { id: "page-header" } },
    [
      _vm._t("default", [
        _c("div", { staticClass: "content-header" }, [
          _c(
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c(
                "base-layout-modifier",
                {
                  staticClass: "mr-2 d-lg-none",
                  attrs: {
                    action: "sidebarToggle",
                    size: "sm",
                    variant: "dual"
                  }
                },
                [_c("i", { staticClass: "fa fa-fw fa-bars" })]
              ),
              _vm._v(" "),
              _c(
                "base-layout-modifier",
                {
                  staticClass: "mr-2 d-none d-lg-inline-block",
                  attrs: {
                    action: "sidebarMiniToggle",
                    size: "sm",
                    variant: "dual"
                  }
                },
                [_c("i", { staticClass: "fa fa-fw fa-ellipsis-v" })]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.one-modal-apps",
                      modifiers: { "one-modal-apps": true }
                    }
                  ],
                  staticClass: "mr-2",
                  attrs: { size: "sm", variant: "dual", title: "SHORTCUTS" }
                },
                [_c("i", { staticClass: "si si-grid" })]
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  attrs: {
                    "body-class": "p-0",
                    "hide-footer": "",
                    "hide-header": "",
                    id: "one-modal-apps",
                    size: "sm"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "block block-themed block-transparent mb-0"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "block-header bg-primary-dark" },
                        [
                          _c("h3", { staticClass: "block-title" }, [
                            _vm._v("SHORTCUTS")
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
                                    return _vm.$bvModal.hide("one-modal-apps")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-fw fa-times" })]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "block-content block-content-full" },
                        [
                          _c("div", { staticClass: "row gutters-tiny" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c(
                                  "base-block",
                                  {
                                    staticClass: "bg-default pointer",
                                    attrs: {
                                      "content-class": "text-center",
                                      hideHeader: "",
                                      rounded: "",
                                      themed: ""
                                    },
                                    on: {
                                      visit: function($event) {
                                        return _vm.go("/campaigns")
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "si si-envelope fa-2x text-white-75"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-w600 font-size-sm text-white mt-2 mb-3"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            CAMPAIGNS\n                                        "
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
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c(
                                  "base-block",
                                  {
                                    staticClass: "bg-danger pointer",
                                    attrs: {
                                      "content-class": "text-center",
                                      hideHeader: "",
                                      rounded: "",
                                      themed: ""
                                    },
                                    on: {
                                      visit: function($event) {
                                        return _vm.go("/stats")
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "si si-feed fa-2x text-white-75"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-w600 font-size-sm text-white mt-2 mb-3"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            STATS\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]
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
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "d-inline-block ml-2",
                  attrs: {
                    "menu-class": "p-0 border-0 font-size-sm",
                    "no-caret": "",
                    right: "",
                    size: "sm",
                    variant: "dual"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "button-content",
                      fn: function() {
                        return [
                          _c(
                            "span",
                            { staticClass: "d-none d-sm-inline-block ml-1" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("truncate")(
                                    _vm._f("cap")(_vm.fullName),
                                    13
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fa fa-fw fa-angle-down d-none d-sm-inline-block"
                          })
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c("div", { staticClass: "p-3 text-center bg-primary" }, [
                    _c("img", {
                      staticClass: "img-avatar img-avatar48 img-avatar-thumb",
                      attrs: {
                        alt: "Avatar",
                        src: "/images/avatars/avatar10.jpg"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "p-2" },
                    [
                      _c(
                        "h5",
                        { staticClass: "dropdown-header text-uppercase" },
                        [_vm._v("User Options")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            "link-class":
                              "d-flex align-items-center justify-content-between",
                            to: "/profile"
                          }
                        },
                        [
                          _c("span", [_vm._v("Settings")]),
                          _vm._v(" "),
                          _c("i", { staticClass: "si si-settings" })
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-dropdown-divider"),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-header",
                        { staticClass: "text-uppercase", attrs: { tag: "h5" } },
                        [_vm._v("Actions")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            "link-class":
                              "d-flex align-items-center justify-content-between"
                          },
                          on: { click: _vm.logout }
                        },
                        [
                          _c("span", [_vm._v("Logout")]),
                          _vm._v(" "),
                          _c("i", { staticClass: "si si-logout ml-1" })
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "overlay-header bg-white",
            class: { show: _vm.settings.headerLoader },
            attrs: { id: "page-header-loader" }
          },
          [_vm._m(0)]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "w-100 text-center" }, [
        _c("i", { staticClass: "fa fa-fw fa-circle-notch fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e& ***!
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
  return _c(
    "simplebar",
    { attrs: { "aria-label": "Main Navigation", id: "sidebar" } },
    [
      _vm._t("default", [
        _c(
          "div",
          { staticClass: "content-header bg-white-5" },
          [
            _c(
              "router-link",
              { staticClass: "font-w600 text-dual", attrs: { to: "/" } },
              [
                _c("i", { staticClass: "fa fa-circle-notch text-primary" }),
                _c(
                  "span",
                  { staticClass: "font-w700 font-size-h5 ml-1 smini-hide" },
                  [_vm._v("ne")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-dropdown",
                  {
                    staticClass: "d-inline-block ml-2",
                    attrs: {
                      "menu-class": "font-size-sm smini-hide border-0",
                      "no-caret": "",
                      right: "",
                      size: "sm",
                      variant: "dual"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "button-content",
                        fn: function() {
                          return [_c("i", { staticClass: "si si-drop" })]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: ""
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Default")]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-circle text-default"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: "amethyst"
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Amethyst")]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-circle text-amethyst"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: "city"
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("City")]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-circle text-city" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: "flat"
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Flat")]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-circle text-flat" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: "modern"
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Modern")]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-circle text-modern" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center justify-content-between",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$store.commit("setColorTheme", {
                                  theme: "smooth"
                                })
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Smooth")]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-circle text-smooth" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _c(
                          "base-layout-modifier",
                          {
                            staticClass: "dropdown-item",
                            attrs: { action: "sidebarStyleLight", tag: "a" }
                          },
                          [
                            _vm._v(
                              "\n                            Sidebar Light\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-layout-modifier",
                          {
                            staticClass: "dropdown-item",
                            attrs: { action: "sidebarStyleDark", tag: "a" }
                          },
                          [
                            _vm._v(
                              "\n                            Sidebar Dark\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _c(
                          "base-layout-modifier",
                          {
                            staticClass: "dropdown-item",
                            attrs: { action: "headerStyleLight", tag: "a" }
                          },
                          [
                            _vm._v(
                              "\n                            Header Light\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-layout-modifier",
                          {
                            staticClass: "dropdown-item",
                            attrs: { action: "headerStyleDark", tag: "a" }
                          },
                          [
                            _vm._v(
                              "\n                            Header Dark\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "base-layout-modifier",
                  {
                    staticClass: "d-lg-none ml-2",
                    attrs: {
                      action: "sidebarClose",
                      size: "sm",
                      variant: "dual"
                    }
                  },
                  [_c("i", { staticClass: "fa fa-times" })]
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
          { staticClass: "content-side content-side-full" },
          [_c("base-navigation", { attrs: { nodes: _vm.navigation } })],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/data/menu.js":
/*!***************************************!*\
  !*** ./resources/js/src/data/menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Main and demo navigation arrays
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  'main': [{
    name: 'Dashboard',
    to: '/backend/dashboard',
    icon: 'si si-speedometer'
  }, {
    name: 'Page Packs',
    icon: 'si si-layers',
    subActivePaths: '/backend/pages-packs',
    sub: [{
      name: 'Boxed Backend',
      icon: 'si si-magnet',
      subActivePaths: '/backend-boxed',
      sub: [{
        name: 'Dashboard',
        to: '/backend-boxed/dashboard'
      }, {
        name: 'Search',
        to: '/backend-boxed/search'
      }, {
        name: 'Simple 1',
        to: '/backend-boxed/simple1'
      }, {
        name: 'Simple 2',
        to: '/backend-boxed/simple2'
      }, {
        name: 'Image 1',
        to: '/backend-boxed/image1'
      }, {
        name: 'Image 2',
        to: '/backend-boxed/image2'
      }]
    }]
  }, {
    name: 'User Interface',
    heading: true
  }, {
    name: 'Blocks',
    icon: 'si si-energy',
    subActivePaths: '/backend/blocks',
    sub: [{
      name: 'Styles',
      to: '/backend/blocks/styles'
    }, {
      name: 'Options',
      to: '/backend/blocks/options'
    }, {
      name: 'Forms',
      to: '/backend/blocks/forms'
    }, {
      name: 'Themed',
      to: '/backend/blocks/themed'
    }, {
      name: 'API',
      to: '/backend/blocks/api'
    }]
  }, {
    name: 'Elements',
    icon: 'si si-badge',
    subActivePaths: '/backend/elements',
    sub: [{
      name: 'Grid',
      to: '/backend/elements/grid'
    }, {
      name: 'Typography',
      to: '/backend/elements/typography'
    }, {
      name: 'Icons',
      to: '/backend/elements/icons'
    }, {
      name: 'Buttons',
      to: '/backend/elements/buttons'
    }, {
      name: 'Button Groups',
      to: '/backend/elements/button-groups'
    }, {
      name: 'Dropdowns',
      to: '/backend/elements/dropdowns'
    }, {
      name: 'Tabs',
      to: '/backend/elements/tabs'
    }, {
      name: 'Navigation',
      to: '/backend/elements/navigation'
    }, {
      name: 'Horizontal Navigation',
      to: '/backend/elements/navigation-horizontal'
    }, {
      name: 'Progress',
      to: '/backend/elements/progress'
    }, {
      name: 'Alerts',
      to: '/backend/elements/alerts'
    }, {
      name: 'Tooltips',
      to: '/backend/elements/tooltips'
    }, {
      name: 'Popovers',
      to: '/backend/elements/popovers'
    }, {
      name: 'Modals',
      to: '/backend/elements/modals'
    }, {
      name: 'Images',
      to: '/backend/elements/images'
    }, {
      name: 'Timeline',
      to: '/backend/elements/timeline'
    }, {
      name: 'Ribbons',
      to: '/backend/elements/ribbons'
    }, {
      name: 'Animations',
      to: '/backend/elements/animations'
    }, {
      name: 'Color Themes',
      to: '/backend/elements/color-themes'
    }]
  }, {
    name: 'Tables',
    icon: 'si si-grid',
    subActivePaths: '/backend/tables',
    sub: [{
      name: 'Styles',
      to: '/backend/tables/styles'
    }, {
      name: 'Responsive',
      to: '/backend/tables/responsive'
    }, {
      name: 'Helpers',
      to: '/backend/tables/helpers'
    }, {
      name: 'Pricing',
      to: '/backend/tables/pricing'
    }]
  }, {
    name: 'Forms',
    icon: 'si si-note',
    subActivePaths: '/backend/forms',
    sub: [{
      name: 'Elements',
      to: '/backend/forms/elements'
    }, {
      name: 'Custom Controls',
      to: '/backend/forms/custom-controls'
    }, {
      name: 'Layouts',
      to: '/backend/forms/layouts'
    }, {
      name: 'Input Groups',
      to: '/backend/forms/input-groups'
    }, {
      name: 'Plugins',
      to: '/backend/forms/plugins'
    }, {
      name: 'Editors',
      to: '/backend/forms/editors'
    }, {
      name: 'Validation',
      to: '/backend/forms/validation'
    }]
  }, {
    name: 'Develop',
    heading: true
  }, {
    name: 'Plugins',
    icon: 'si si-wrench',
    subActivePaths: '/backend/plugins',
    sub: [{
      name: 'Image Cropper',
      to: '/backend/plugins/image-cropper'
    }, {
      name: 'Charts',
      to: '/backend/plugins/charts'
    }, {
      name: 'Calendar',
      to: '/backend/plugins/calendar'
    }, {
      name: 'Carousel',
      to: '/backend/plugins/carousel'
    }, {
      name: 'Syntax Highlighting',
      to: '/backend/plugins/syntax-highlighting'
    }, {
      name: 'Rating',
      to: '/backend/plugins/rating'
    }, {
      name: 'Dialogs',
      to: '/backend/plugins/dialogs'
    }, {
      name: 'Notifications',
      to: '/backend/plugins/notifications'
    }, {
      name: 'Gallery',
      to: '/backend/plugins/gallery'
    }]
  }, {
    name: 'Layout',
    icon: 'si si-magic-wand',
    subActivePaths: '/backend/layout',
    sub: [{
      name: 'Page',
      subActivePaths: '/backend/layout/page',
      sub: [{
        name: 'Default',
        to: '/backend/layout/page/default'
      }, {
        name: 'Flipped',
        to: '/backend/layout/page/flipped'
      }]
    }, {
      name: 'Main Content',
      subActivePaths: '/backend/layout/main-content',
      sub: [{
        name: 'Full Width',
        to: '/backend/layout/main-content/full-width'
      }, {
        name: 'Narrow',
        to: '/backend/layout/main-content/narrow'
      }, {
        name: 'Boxed',
        to: '/backend/layout/main-content/boxed'
      }]
    }, {
      name: 'Header',
      subActivePaths: '/backend/layout/header',
      sub: [{
        name: 'Fixed',
        heading: true
      }, {
        name: 'Light',
        to: '/backend/layout/header/fixed-light'
      }, {
        name: 'Dark',
        to: '/backend/layout/header/fixed-dark'
      }, {
        name: 'Static',
        heading: true
      }, {
        name: 'Light',
        to: '/backend/layout/header/static-light'
      }, {
        name: 'Dark',
        to: '/backend/layout/header/static-dark'
      }]
    }, {
      name: 'Sidebar',
      subActivePaths: '/backend/layout/sidebar',
      sub: [{
        name: 'Mini',
        to: '/backend/layout/sidebar/mini'
      }, {
        name: 'Light',
        to: '/backend/layout/sidebar/light'
      }, {
        name: 'Dark',
        to: '/backend/layout/sidebar/dark'
      }, {
        name: 'Hidden',
        to: '/backend/layout/sidebar/hidden'
      }]
    }, {
      name: 'Side Overlay',
      subActivePaths: '/backend/layout/side-overlay',
      sub: [{
        name: 'Visible',
        to: '/backend/layout/side-overlay/visible'
      }, {
        name: 'Hover Mode',
        to: '/backend/layout/side-overlay/hover-mode'
      }, {
        name: 'No Page Overlay',
        to: '/backend/layout/side-overlay/no-page-overlay'
      }]
    }, {
      name: 'Loaders',
      to: '/backend/layout/loaders'
    }, {
      name: 'API',
      to: '/backend/layout/api'
    }]
  }, {
    name: 'Multi Level Menu',
    icon: 'si si-puzzle',
    sub: [{
      name: 'Link 1-1',
      to: '#'
    }, {
      name: 'Link 1-2',
      to: '#'
    }, {
      name: 'Sub Level 2',
      sub: [{
        name: 'Link 2-1',
        to: '#'
      }, {
        name: 'Link 2-2',
        to: '#'
      }, {
        name: 'Sub Level 3',
        sub: [{
          name: 'Link 4-1',
          to: '#'
        }, {
          name: 'Link 4-2',
          to: '#'
        }, {
          name: 'Sub Level 5',
          sub: [{
            name: 'Link 5-1',
            to: '#'
          }, {
            name: 'Link 5-2',
            to: '#'
          }, {
            name: 'Sub Level 6',
            sub: [{
              name: 'Link 6-1',
              to: '#'
            }, {
              name: 'Link 6-2',
              to: '#'
            }]
          }]
        }]
      }]
    }]
  }, {
    name: 'Pages',
    heading: true
  }, {
    name: 'Generic',
    icon: 'si si-layers',
    subActivePaths: '/backend/pages/generic',
    sub: [{
      name: 'Blank',
      to: '/backend/pages/generic/blank'
    }, {
      name: 'Blank (Block)',
      to: '/backend/pages/generic/blank-block'
    }, {
      name: 'Search',
      to: '/backend/pages/generic/search'
    }, {
      name: 'Profile',
      to: '/backend/pages/generic/profile'
    }, {
      name: 'Invoice',
      to: '/backend/pages/generic/invoice'
    }, {
      name: 'FAQ',
      to: '/backend/pages/generic/faq'
    }, {
      name: 'Maintenance',
      to: '/maintenance'
    }, {
      name: 'Status',
      to: '/status'
    }, {
      name: 'Coming Soon',
      to: '/coming-soon'
    }]
  }, {
    name: 'Authentication',
    icon: 'si si-lock',
    subActivePaths: '/backend/pages/auth',
    sub: [{
      name: 'All',
      to: '/backend/pages/auth/all'
    }, {
      name: 'Sign In',
      to: '/auth/signin'
    }, {
      name: 'Sign In 2',
      to: '/auth/signin2'
    }, {
      name: 'Sign Up',
      to: '/auth/signup'
    }, {
      name: 'Sign Up 2',
      to: '/auth/signup2'
    }, {
      name: 'Lock Screen',
      to: '/auth/lock'
    }, {
      name: 'Lock Screen 2',
      to: '/auth/lock2'
    }, {
      name: 'Pass Reminder',
      to: '/auth/reminder'
    }, {
      name: 'Pass Reminder 2',
      to: '/auth/reminder2'
    }]
  }, {
    name: 'Error Pages',
    icon: 'si si-fire',
    subActivePaths: '/backend/pages/errors',
    sub: [{
      name: 'All',
      to: '/backend/pages/errors/all'
    }, {
      name: '400',
      to: '/errors/400'
    }, {
      name: '401',
      to: '/errors/401'
    }, {
      name: '403',
      to: '/errors/403'
    }, {
      name: '404',
      to: '/errors/404'
    }, {
      name: '500',
      to: '/errors/500'
    }, {
      name: '503',
      to: '/errors/503'
    }]
  }],
  'demo': [{
    name: 'Home',
    to: '#',
    icon: 'fa fa-home',
    badge: 5
  }, {
    name: 'Manage',
    heading: true
  }, {
    name: 'Products',
    icon: 'fa fa-briefcase',
    sub: [{
      name: 'HTML Templates',
      icon: 'fab fa-html5',
      sub: [{
        name: 'Description',
        to: '#',
        icon: 'fa fa-pencil-alt'
      }, {
        name: 'Statistics',
        to: '#',
        icon: 'fa fa-chart-line'
      }, {
        name: 'Sales',
        to: '#',
        icon: 'fa fa-chart-area',
        badge: 320
      }, {
        name: 'Media',
        to: '#',
        icon: 'far fa-images',
        badge: 18
      }, {
        name: 'Files',
        to: '#',
        icon: 'far fa-file-alt',
        badge: 32
      }]
    }, {
      name: 'WordPress Themes',
      icon: 'fab fa-wordpress',
      sub: [{
        name: 'Description',
        to: '#',
        icon: 'fa fa-pencil-alt'
      }, {
        name: 'Statistics',
        to: '#',
        icon: 'fa fa-chart-line'
      }, {
        name: 'Sales',
        to: '#',
        icon: 'fa fa-chart-area',
        badge: 680
      }, {
        name: 'Media',
        to: '#',
        icon: 'far fa-images',
        badge: 15
      }, {
        name: 'Files',
        to: '#',
        icon: 'far fa-file-alt',
        badge: 20
      }]
    }, {
      name: 'Web Applications',
      icon: 'fab fa-medapps',
      sub: [{
        name: 'Description',
        to: '#',
        icon: 'fa fa-pencil-alt'
      }, {
        name: 'Statistics',
        to: '#',
        icon: 'fa fa-chart-line'
      }, {
        name: 'Sales',
        to: '#',
        icon: 'fa fa-chart-area',
        badge: 158
      }, {
        name: 'Media',
        to: '#',
        icon: 'far fa-images',
        badge: 65
      }, {
        name: 'Files',
        to: '#',
        icon: 'far fa-file-alt',
        badge: 78
      }]
    }, {
      name: 'Video Templates',
      icon: 'fab fa-youtube',
      sub: [{
        name: 'Description',
        to: '#',
        icon: 'fa fa-pencil-alt'
      }, {
        name: 'Statistics',
        to: '#',
        icon: 'fa fa-chart-line'
      }, {
        name: 'Sales',
        to: '#',
        icon: 'fa fa-chart-area',
        badge: 920
      }, {
        name: 'Media',
        to: '#',
        icon: 'far fa-images',
        badge: 7
      }, {
        name: 'Files',
        to: '#',
        icon: 'far fa-file-alt',
        badge: 19
      }]
    }, {
      name: 'Add Product',
      to: '#',
      icon: 'fa fa-plus'
    }]
  }, {
    name: 'Payments',
    icon: 'fa fa-money-bill-wave',
    sub: [{
      name: 'Scheduled',
      to: '#',
      badge: 3,
      'badge-variant': 'success'
    }, {
      name: 'Recurring',
      to: '#'
    }, {
      name: 'Manage',
      to: '#'
    }, {
      name: 'New Payment',
      to: '#',
      icon: 'fa fa-plus'
    }]
  }, {
    name: 'Services',
    icon: 'fa fa-globe-americas',
    sub: [{
      name: 'Hosting',
      to: '#'
    }, {
      name: 'Web Design',
      to: '#'
    }, {
      name: 'Web Development',
      to: '#'
    }, {
      name: 'Graphic Design',
      to: '#'
    }, {
      name: 'Legal',
      to: '#'
    }, {
      name: 'Consulting',
      to: '#'
    }]
  }, {
    name: 'Personal',
    heading: true
  }, {
    name: 'Profile',
    icon: 'far fa-user',
    sub: [{
      name: 'Edit',
      to: '#'
    }, {
      name: 'Settings',
      to: '#'
    }, {
      name: 'Log out',
      to: '#'
    }]
  }]
});

/***/ }),

/***/ "./resources/js/src/layouts/BaseLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/layouts/BaseLayout.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayout.vue?vue&type=template&id=ae64066c& */ "./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c&");
/* harmony import */ var _BaseLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLayout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/BaseLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseLayout.vue?vue&type=template&id=ae64066c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/BaseLayout.vue?vue&type=template&id=ae64066c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLayout_vue_vue_type_template_id_ae64066c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/partials/Footer.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/partials/Footer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=3cb01e19& */ "./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/partials/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=3cb01e19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Footer.vue?vue&type=template&id=3cb01e19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3cb01e19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/partials/Header.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/partials/Header.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=5de2820b& */ "./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/partials/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=5de2820b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Header.vue?vue&type=template&id=5de2820b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5de2820b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/partials/Sidebar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/layouts/partials/Sidebar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=01fe214e& */ "./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/partials/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=01fe214e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/partials/Sidebar.vue?vue&type=template&id=01fe214e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_01fe214e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);