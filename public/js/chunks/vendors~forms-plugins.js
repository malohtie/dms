(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~forms-plugins"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/flatpickr/dist/flatpickr.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/flatpickr/dist/flatpickr.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n          box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n          box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57,57,57,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n          box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-slider-component/theme/default.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-slider-component/theme/default.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* component style */\n.vue-slider-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* rail style */\n.vue-slider-rail {\n  background-color: #ccc;\n  border-radius: 15px;\n}\n\n/* process style */\n.vue-slider-process {\n  background-color: #3498db;\n  border-radius: 15px;\n}\n\n/* mark style */\n.vue-slider-mark {\n  z-index: 4;\n}\n.vue-slider-mark:first-child .vue-slider-mark-step, .vue-slider-mark:last-child .vue-slider-mark-step {\n  display: none;\n}\n.vue-slider-mark-step {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.16);\n}\n.vue-slider-mark-label {\n  font-size: 14px;\n  white-space: nowrap;\n}\n/* dot style */\n.vue-slider-dot-handle {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #fff;\n  box-sizing: border-box;\n  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n}\n.vue-slider-dot-handle-focus {\n  box-shadow: 0px 0px 1px 2px rgba(52, 152, 219, 0.36);\n}\n\n.vue-slider-dot-handle-disabled {\n  cursor: not-allowed;\n  background-color: #ccc;\n}\n\n.vue-slider-dot-tooltip-inner {\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 2px 5px;\n  min-width: 20px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  border-color: #3498db;\n  background-color: #3498db;\n  box-sizing: content-box;\n}\n.vue-slider-dot-tooltip-inner::after {\n  content: \"\";\n  position: absolute;\n}\n.vue-slider-dot-tooltip-inner-top::after {\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  height: 0;\n  width: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-top-color: inherit;\n}\n.vue-slider-dot-tooltip-inner-bottom::after {\n  bottom: 100%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  height: 0;\n  width: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-bottom-color: inherit;\n}\n.vue-slider-dot-tooltip-inner-left::after {\n  left: 100%;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 0;\n  width: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-left-color: inherit;\n}\n.vue-slider-dot-tooltip-inner-right::after {\n  right: 100%;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 0;\n  width: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-right-color: inherit;\n}\n\n.vue-slider-dot-tooltip-wrapper {\n  opacity: 0;\n  transition: all 0.3s;\n}\n.vue-slider-dot-tooltip-wrapper-show {\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    -moz-transform: translateY(-40px);\n    -ms-transform: translateY(-40px);\n    -o-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n@-moz-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    -moz-transform: translateY(-40px);\n    -ms-transform: translateY(-40px);\n    -o-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    -moz-transform: translateY(-40px);\n    -ms-transform: translateY(-40px);\n    -o-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); } }\n@-moz-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); } }\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    -moz-transform: translateY(40px);\n    -ms-transform: translateY(40px);\n    -o-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px); } }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); } }\n@-moz-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); } }\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1); } }\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n  .dropzone.dz-clickable {\n    cursor: pointer; }\n    .dropzone.dz-clickable * {\n      cursor: default; }\n    .dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n      cursor: pointer; }\n  .dropzone.dz-started .dz-message {\n    display: none; }\n  .dropzone.dz-drag-hover {\n    border-style: solid; }\n    .dropzone.dz-drag-hover .dz-message {\n      opacity: 0.5; }\n  .dropzone .dz-message {\n    text-align: center;\n    margin: 2em 0; }\n  .dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    margin: 16px;\n    min-height: 100px; }\n    .dropzone .dz-preview:hover {\n      z-index: 1000; }\n      .dropzone .dz-preview:hover .dz-details {\n        opacity: 1; }\n    .dropzone .dz-preview.dz-file-preview .dz-image {\n      border-radius: 20px;\n      background: #999;\n      background: linear-gradient(to bottom, #eee, #ddd); }\n    .dropzone .dz-preview.dz-file-preview .dz-details {\n      opacity: 1; }\n    .dropzone .dz-preview.dz-image-preview {\n      background: white; }\n      .dropzone .dz-preview.dz-image-preview .dz-details {\n        -webkit-transition: opacity 0.2s linear;\n        -moz-transition: opacity 0.2s linear;\n        -ms-transition: opacity 0.2s linear;\n        -o-transition: opacity 0.2s linear;\n        transition: opacity 0.2s linear; }\n    .dropzone .dz-preview .dz-remove {\n      font-size: 14px;\n      text-align: center;\n      display: block;\n      cursor: pointer;\n      border: none; }\n      .dropzone .dz-preview .dz-remove:hover {\n        text-decoration: underline; }\n    .dropzone .dz-preview:hover .dz-details {\n      opacity: 1; }\n    .dropzone .dz-preview .dz-details {\n      z-index: 20;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      font-size: 13px;\n      min-width: 100%;\n      max-width: 100%;\n      padding: 2em 1em;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.9);\n      line-height: 150%; }\n      .dropzone .dz-preview .dz-details .dz-size {\n        margin-bottom: 1em;\n        font-size: 16px; }\n      .dropzone .dz-preview .dz-details .dz-filename {\n        white-space: nowrap; }\n        .dropzone .dz-preview .dz-details .dz-filename:hover span {\n          border: 1px solid rgba(200, 200, 200, 0.8);\n          background-color: rgba(255, 255, 255, 0.8); }\n        .dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n            border: 1px solid transparent; }\n      .dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n        background-color: rgba(255, 255, 255, 0.4);\n        padding: 0 0.4em;\n        border-radius: 3px; }\n    .dropzone .dz-preview:hover .dz-image img {\n      -webkit-transform: scale(1.05, 1.05);\n      -moz-transform: scale(1.05, 1.05);\n      -ms-transform: scale(1.05, 1.05);\n      -o-transform: scale(1.05, 1.05);\n      transform: scale(1.05, 1.05);\n      -webkit-filter: blur(8px);\n      filter: blur(8px); }\n    .dropzone .dz-preview .dz-image {\n      border-radius: 20px;\n      overflow: hidden;\n      width: 120px;\n      height: 120px;\n      position: relative;\n      display: block;\n      z-index: 10; }\n      .dropzone .dz-preview .dz-image img {\n        display: block; }\n    .dropzone .dz-preview.dz-success .dz-success-mark {\n      -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -moz-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -ms-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -o-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n    .dropzone .dz-preview.dz-error .dz-error-mark {\n      opacity: 1;\n      -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -moz-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -ms-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      -o-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n    .dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n      pointer-events: none;\n      opacity: 0;\n      z-index: 500;\n      position: absolute;\n      display: block;\n      top: 50%;\n      left: 50%;\n      margin-left: -27px;\n      margin-top: -27px; }\n      .dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n        display: block;\n        width: 54px;\n        height: 54px; }\n    .dropzone .dz-preview.dz-processing .dz-progress {\n      opacity: 1;\n      -webkit-transition: all 0.2s linear;\n      -moz-transition: all 0.2s linear;\n      -ms-transition: all 0.2s linear;\n      -o-transition: all 0.2s linear;\n      transition: all 0.2s linear; }\n    .dropzone .dz-preview.dz-complete .dz-progress {\n      opacity: 0;\n      -webkit-transition: opacity 0.4s ease-in;\n      -moz-transition: opacity 0.4s ease-in;\n      -ms-transition: opacity 0.4s ease-in;\n      -o-transition: opacity 0.4s ease-in;\n      transition: opacity 0.4s ease-in; }\n    .dropzone .dz-preview:not(.dz-processing) .dz-progress {\n      -webkit-animation: pulse 6s ease infinite;\n      -moz-animation: pulse 6s ease infinite;\n      -ms-animation: pulse 6s ease infinite;\n      -o-animation: pulse 6s ease infinite;\n      animation: pulse 6s ease infinite; }\n    .dropzone .dz-preview .dz-progress {\n      opacity: 1;\n      z-index: 1000;\n      pointer-events: none;\n      position: absolute;\n      height: 16px;\n      left: 50%;\n      top: 50%;\n      margin-top: -8px;\n      width: 80px;\n      margin-left: -40px;\n      background: rgba(255, 255, 255, 0.9);\n      -webkit-transform: scale(1);\n      border-radius: 8px;\n      overflow: hidden; }\n      .dropzone .dz-preview .dz-progress .dz-upload {\n        background: #333;\n        background: linear-gradient(to bottom, #666, #444);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 0;\n        -webkit-transition: width 300ms ease-in-out;\n        -moz-transition: width 300ms ease-in-out;\n        -ms-transition: width 300ms ease-in-out;\n        -o-transition: width 300ms ease-in-out;\n        transition: width 300ms ease-in-out; }\n    .dropzone .dz-preview.dz-error .dz-error-message {\n      display: block; }\n    .dropzone .dz-preview.dz-error:hover .dz-error-message {\n      opacity: 1;\n      pointer-events: auto; }\n    .dropzone .dz-preview .dz-error-message {\n      pointer-events: none;\n      z-index: 1000;\n      position: absolute;\n      display: block;\n      display: none;\n      opacity: 0;\n      -webkit-transition: opacity 0.3s ease;\n      -moz-transition: opacity 0.3s ease;\n      -ms-transition: opacity 0.3s ease;\n      -o-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease;\n      border-radius: 8px;\n      font-size: 13px;\n      top: 130px;\n      left: -10px;\n      width: 140px;\n      background: #be2626;\n      background: linear-gradient(to bottom, #be2626, #a92222);\n      padding: 0.5em 1.2em;\n      color: white; }\n      .dropzone .dz-preview .dz-error-message:after {\n        content: '';\n        position: absolute;\n        top: -6px;\n        left: 64px;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid #be2626; }\n.vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:.2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone>i{color:#ccc}.vue-dropzone>.dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone>.dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone>.dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone>.dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone>.dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone>.dz-preview .dz-details .dz-filename span,.vue-dropzone>.dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone>.dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone>.dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone>.dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone>.dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px #fff solid;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone>.dz-preview:hover .dz-remove{opacity:1}.vue-dropzone>.dz-preview .dz-error-mark,.vue-dropzone>.dz-preview .dz-success-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone>.dz-preview .dz-error-mark svg,.vue-dropzone>.dz-preview .dz-success-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone>.dz-preview .dz-error-message{margin-left:auto;margin-right:auto;left:0;width:100%;text-align:center}.vue-dropzone>.dz-preview .dz-error-message:after{display:none}", ""]);

// exports


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ }),

/***/ "./node_modules/inputmask-core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask-core/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function extend(dest, src) {
  if (src) {
    var props = Object.keys(src)
    for (var i = 0, l = props.length; i < l ; i++) {
      dest[props[i]] = src[props[i]]
    }
  }
  return dest
}

function copy(obj) {
  return extend({}, obj)
}

/**
 * Merge an object defining format characters into the defaults.
 * Passing null/undefined for en existing format character removes it.
 * Passing a definition for an existing format character overrides it.
 * @param {?Object} formatCharacters.
 */
function mergeFormatCharacters(formatCharacters) {
  var merged = copy(DEFAULT_FORMAT_CHARACTERS)
  if (formatCharacters) {
    var chars = Object.keys(formatCharacters)
    for (var i = 0, l = chars.length; i < l ; i++) {
      var char = chars[i]
      if (formatCharacters[char] == null) {
        delete merged[char]
      }
      else {
        merged[char] = formatCharacters[char]
      }
    }
  }
  return merged
}

var ESCAPE_CHAR = '\\'

var DIGIT_RE = /^\d$/
var LETTER_RE = /^[A-Za-z]$/
var ALPHANNUMERIC_RE = /^[\dA-Za-z]$/

var DEFAULT_PLACEHOLDER_CHAR = '_'
var DEFAULT_FORMAT_CHARACTERS = {
  '*': {
    validate: function(char) { return ALPHANNUMERIC_RE.test(char) }
  },
  '1': {
    validate: function(char) { return DIGIT_RE.test(char) }
  },
  'a': {
    validate: function(char) { return LETTER_RE.test(char) }
  },
  'A': {
    validate: function(char) { return LETTER_RE.test(char) },
    transform: function(char) { return char.toUpperCase() }
  },
  '#': {
    validate: function(char) { return ALPHANNUMERIC_RE.test(char) },
    transform: function(char) { return char.toUpperCase() }
  }
}

/**
 * @param {string} source
 * @patam {?Object} formatCharacters
 */
function Pattern(source, formatCharacters, placeholderChar, isRevealingMask) {
  if (!(this instanceof Pattern)) {
    return new Pattern(source, formatCharacters, placeholderChar)
  }

  /** Placeholder character */
  this.placeholderChar = placeholderChar || DEFAULT_PLACEHOLDER_CHAR
  /** Format character definitions. */
  this.formatCharacters = formatCharacters || DEFAULT_FORMAT_CHARACTERS
  /** Pattern definition string with escape characters. */
  this.source = source
  /** Pattern characters after escape characters have been processed. */
  this.pattern = []
  /** Length of the pattern after escape characters have been processed. */
  this.length = 0
  /** Index of the first editable character. */
  this.firstEditableIndex = null
  /** Index of the last editable character. */
  this.lastEditableIndex = null
  /** Lookup for indices of editable characters in the pattern. */
  this._editableIndices = {}
  /** If true, only the pattern before the last valid value character shows. */
  this.isRevealingMask = isRevealingMask || false

  this._parse()
}

Pattern.prototype._parse = function parse() {
  var sourceChars = this.source.split('')
  var patternIndex = 0
  var pattern = []

  for (var i = 0, l = sourceChars.length; i < l; i++) {
    var char = sourceChars[i]
    if (char === ESCAPE_CHAR) {
      if (i === l - 1) {
        throw new Error('InputMask: pattern ends with a raw ' + ESCAPE_CHAR)
      }
      char = sourceChars[++i]
    }
    else if (char in this.formatCharacters) {
      if (this.firstEditableIndex === null) {
        this.firstEditableIndex = patternIndex
      }
      this.lastEditableIndex = patternIndex
      this._editableIndices[patternIndex] = true
    }

    pattern.push(char)
    patternIndex++
  }

  if (this.firstEditableIndex === null) {
    throw new Error(
      'InputMask: pattern "' + this.source + '" does not contain any editable characters.'
    )
  }

  this.pattern = pattern
  this.length = pattern.length
}

/**
 * @param {Array<string>} value
 * @return {Array<string>}
 */
Pattern.prototype.formatValue = function format(value) {
  var valueBuffer = new Array(this.length)
  var valueIndex = 0

  for (var i = 0, l = this.length; i < l ; i++) {
    if (this.isEditableIndex(i)) {
      if (this.isRevealingMask &&
          value.length <= valueIndex &&
          !this.isValidAtIndex(value[valueIndex], i)) {
        break
      }
      valueBuffer[i] = (value.length > valueIndex && this.isValidAtIndex(value[valueIndex], i)
                        ? this.transform(value[valueIndex], i)
                        : this.placeholderChar)
      valueIndex++
    }
    else {
      valueBuffer[i] = this.pattern[i]
      // Also allow the value to contain static values from the pattern by
      // advancing its index.
      if (value.length > valueIndex && value[valueIndex] === this.pattern[i]) {
        valueIndex++
      }
    }
  }

  return valueBuffer
}

/**
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isEditableIndex = function isEditableIndex(index) {
  return !!this._editableIndices[index]
}

/**
 * @param {string} char
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isValidAtIndex = function isValidAtIndex(char, index) {
  return this.formatCharacters[this.pattern[index]].validate(char)
}

Pattern.prototype.transform = function transform(char, index) {
  var format = this.formatCharacters[this.pattern[index]]
  return typeof format.transform == 'function' ? format.transform(char) : char
}

function InputMask(options) {
  if (!(this instanceof InputMask)) { return new InputMask(options) }
  options = extend({
    formatCharacters: null,
    pattern: null,
    isRevealingMask: false,
    placeholderChar: DEFAULT_PLACEHOLDER_CHAR,
    selection: {start: 0, end: 0},
    value: ''
  }, options)

  if (options.pattern == null) {
    throw new Error('InputMask: you must provide a pattern.')
  }

  if (typeof options.placeholderChar !== 'string' || options.placeholderChar.length > 1) {
    throw new Error('InputMask: placeholderChar should be a single character or an empty string.')
  }

  this.placeholderChar = options.placeholderChar
  this.formatCharacters = mergeFormatCharacters(options.formatCharacters)
  this.setPattern(options.pattern, {
    value: options.value,
    selection: options.selection,
    isRevealingMask: options.isRevealingMask
  })
}

// Editing

/**
 * Applies a single character of input based on the current selection.
 * @param {string} char
 * @return {boolean} true if a change has been made to value or selection as a
 *   result of the input, false otherwise.
 */
InputMask.prototype.input = function input(char) {
  // Ignore additional input if the cursor's at the end of the pattern
  if (this.selection.start === this.selection.end &&
      this.selection.start === this.pattern.length) {
    return false
  }

  var selectionBefore = copy(this.selection)
  var valueBefore = this.getValue()

  var inputIndex = this.selection.start

  // If the cursor or selection is prior to the first editable character, make
  // sure any input given is applied to it.
  if (inputIndex < this.pattern.firstEditableIndex) {
    inputIndex = this.pattern.firstEditableIndex
  }

  // Bail out or add the character to input
  if (this.pattern.isEditableIndex(inputIndex)) {
    if (!this.pattern.isValidAtIndex(char, inputIndex)) {
      return false
    }
    this.value[inputIndex] = this.pattern.transform(char, inputIndex)
  }

  // If multiple characters were selected, blank the remainder out based on the
  // pattern.
  var end = this.selection.end - 1
  while (end > inputIndex) {
    if (this.pattern.isEditableIndex(end)) {
      this.value[end] = this.placeholderChar
    }
    end--
  }

  // Advance the cursor to the next character
  this.selection.start = this.selection.end = inputIndex + 1

  // Skip over any subsequent static characters
  while (this.pattern.length > this.selection.start &&
         !this.pattern.isEditableIndex(this.selection.start)) {
    this.selection.start++
    this.selection.end++
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex)
    this._historyIndex = null
  }
  if (this._lastOp !== 'input' ||
      selectionBefore.start !== selectionBefore.end ||
      this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({value: valueBefore, selection: selectionBefore, lastOp: this._lastOp})
  }
  this._lastOp = 'input'
  this._lastSelection = copy(this.selection)

  return true
}

/**
 * Attempts to delete from the value based on the current cursor position or
 * selection.
 * @return {boolean} true if the value or selection changed as the result of
 *   backspacing, false otherwise.
 */
InputMask.prototype.backspace = function backspace() {
  // If the cursor is at the start there's nothing to do
  if (this.selection.start === 0 && this.selection.end === 0) {
    return false
  }

  var selectionBefore = copy(this.selection)
  var valueBefore = this.getValue()

  // No range selected - work on the character preceding the cursor
  if (this.selection.start === this.selection.end) {
    if (this.pattern.isEditableIndex(this.selection.start - 1)) {
      this.value[this.selection.start - 1] = this.placeholderChar
    }
    this.selection.start--
    this.selection.end--
  }
  // Range selected - delete characters and leave the cursor at the start of the selection
  else {
    var end = this.selection.end - 1
    while (end >= this.selection.start) {
      if (this.pattern.isEditableIndex(end)) {
        this.value[end] = this.placeholderChar
      }
      end--
    }
    this.selection.end = this.selection.start
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex)
  }
  if (this._lastOp !== 'backspace' ||
      selectionBefore.start !== selectionBefore.end ||
      this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({value: valueBefore, selection: selectionBefore, lastOp: this._lastOp})
  }
  this._lastOp = 'backspace'
  this._lastSelection = copy(this.selection)

  return true
}

/**
 * Attempts to paste a string of input at the current cursor position or over
 * the top of the current selection.
 * Invalid content at any position will cause the paste to be rejected, and it
 * may contain static parts of the mask's pattern.
 * @param {string} input
 * @return {boolean} true if the paste was successful, false otherwise.
 */
InputMask.prototype.paste = function paste(input) {
  // This is necessary because we're just calling input() with each character
  // and rolling back if any were invalid, rather than checking up-front.
  var initialState = {
    value: this.value.slice(),
    selection: copy(this.selection),
    _lastOp: this._lastOp,
    _history: this._history.slice(),
    _historyIndex: this._historyIndex,
    _lastSelection: copy(this._lastSelection)
  }

  // If there are static characters at the start of the pattern and the cursor
  // or selection is within them, the static characters must match for a valid
  // paste.
  if (this.selection.start < this.pattern.firstEditableIndex) {
    for (var i = 0, l = this.pattern.firstEditableIndex - this.selection.start; i < l; i++) {
      if (input.charAt(i) !== this.pattern.pattern[i]) {
        return false
      }
    }

    // Continue as if the selection and input started from the editable part of
    // the pattern.
    input = input.substring(this.pattern.firstEditableIndex - this.selection.start)
    this.selection.start = this.pattern.firstEditableIndex
  }

  for (i = 0, l = input.length;
       i < l && this.selection.start <= this.pattern.lastEditableIndex;
       i++) {
    var valid = this.input(input.charAt(i))
    // Allow static parts of the pattern to appear in pasted input - they will
    // already have been stepped over by input(), so verify that the value
    // deemed invalid by input() was the expected static character.
    if (!valid) {
      if (this.selection.start > 0) {
        // XXX This only allows for one static character to be skipped
        var patternIndex = this.selection.start - 1
        if (!this.pattern.isEditableIndex(patternIndex) &&
            input.charAt(i) === this.pattern.pattern[patternIndex]) {
          continue
        }
      }
      extend(this, initialState)
      return false
    }
  }

  return true
}

// History

InputMask.prototype.undo = function undo() {
  // If there is no history, or nothing more on the history stack, we can't undo
  if (this._history.length === 0 || this._historyIndex === 0) {
    return false
  }

  var historyItem
  if (this._historyIndex == null) {
    // Not currently undoing, set up the initial history index
    this._historyIndex = this._history.length - 1
    historyItem = this._history[this._historyIndex]
    // Add a new history entry if anything has changed since the last one, so we
    // can redo back to the initial state we started undoing from.
    var value = this.getValue()
    if (historyItem.value !== value ||
        historyItem.selection.start !== this.selection.start ||
        historyItem.selection.end !== this.selection.end) {
      this._history.push({value: value, selection: copy(this.selection), lastOp: this._lastOp, startUndo: true})
    }
  }
  else {
    historyItem = this._history[--this._historyIndex]
  }

  this.value = historyItem.value.split('')
  this.selection = historyItem.selection
  this._lastOp = historyItem.lastOp
  return true
}

InputMask.prototype.redo = function redo() {
  if (this._history.length === 0 || this._historyIndex == null) {
    return false
  }
  var historyItem = this._history[++this._historyIndex]
  // If this is the last history item, we're done redoing
  if (this._historyIndex === this._history.length - 1) {
    this._historyIndex = null
    // If the last history item was only added to start undoing, remove it
    if (historyItem.startUndo) {
      this._history.pop()
    }
  }
  this.value = historyItem.value.split('')
  this.selection = historyItem.selection
  this._lastOp = historyItem.lastOp
  return true
}

// Getters & setters

InputMask.prototype.setPattern = function setPattern(pattern, options) {
  options = extend({
    selection: {start: 0, end: 0},
    value: ''
  }, options)
  this.pattern = new Pattern(pattern, this.formatCharacters, this.placeholderChar, options.isRevealingMask)
  this.setValue(options.value)
  this.emptyValue = this.pattern.formatValue([]).join('')
  this.selection = options.selection
  this._resetHistory()
}

InputMask.prototype.setSelection = function setSelection(selection) {
  this.selection = copy(selection)
  if (this.selection.start === this.selection.end) {
    if (this.selection.start < this.pattern.firstEditableIndex) {
      this.selection.start = this.selection.end = this.pattern.firstEditableIndex
      return true
    }
    // Set selection to the first editable, non-placeholder character before the selection
    // OR to the beginning of the pattern
    var index = this.selection.start
    while (index >= this.pattern.firstEditableIndex) {
      if (this.pattern.isEditableIndex(index - 1) &&
          this.value[index - 1] !== this.placeholderChar ||
          index === this.pattern.firstEditableIndex) {
        this.selection.start = this.selection.end = index
        break
      }
      index--
    }
    return true
  }
  return false
}

InputMask.prototype.setValue = function setValue(value) {
  if (value == null) {
    value = ''
  }
  this.value = this.pattern.formatValue(value.split(''))
}

InputMask.prototype.getValue = function getValue() {
  return this.value.join('')
}

InputMask.prototype.getRawValue = function getRawValue() {
  var rawValue = []
  for (var i = 0; i < this.value.length; i++) {
    if (this.pattern._editableIndices[i] === true) {
      rawValue.push(this.value[i])
    }
  }
  return rawValue.join('')
}

InputMask.prototype._resetHistory = function _resetHistory() {
  this._history = []
  this._historyIndex = null
  this._lastOp = null
  this._lastSelection = copy(this.selection)
}

InputMask.Pattern = Pattern

module.exports = InputMask


/***/ }),

/***/ "./node_modules/vue-color/dist/vue-color.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-color/dist/vue-color.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(x){var i=f++;r=h||(h=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(b,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(26),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},g=null,b="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){p=n,g=a||{};var i=l(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=u[o.id];s.refs--,n.push(s)}t?(i=l(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,a,i){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var d=l.functional,h=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),h(e,t)}):l.beforeCreate=h?[].concat(h,u):[u]}return{esModule:o,exports:s,options:l}}},function(e,t,n){"use strict";function r(e,t){var n,r=e&&e.a;!(n=e&&e.hsl?(0,i.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,i.default)(e.hex):e&&e.hsv?(0,i.default)(e.hsv):e&&e.rgba?(0,i.default)(e.rgba):e&&e.rgb?(0,i.default)(e.rgb):(0,i.default)(e))||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);var a=n.toHsl(),o=n.toHsv();return 0===a.s&&(o.h=a.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:a,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:o,oldHue:e.h||t||a.h,source:e.source,a:e.a||n.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(27),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={props:["value"],data:function(){return{val:r(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=r(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=r(e,t||this.oldHue)},isValidHex:function(e){return(0,i.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],n=0,r=0,a=0;a<t.length;a++){var i=t[a];e[i]&&(n++,isNaN(e[i])||r++)}if(n===r)return e},paletteUpperCase:function(e){return e.map(function(e){return e.toUpperCase()})},isTransparent:function(e){return 0===(0,i.default)(e).getAlpha()}}}},function(e,t,n){"use strict";function r(e){c||n(28)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(30),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/EditableInput.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(43)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(45),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Hue.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(55)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(59),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Saturation.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(60)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(65),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Alpha.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(62)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(19),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(64),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Checkboard.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[i.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":s.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown:function(e){var t=this.val,n=Number(t);if(n){var r=this.arrowOffset||1;38===e.keyCode&&(t=n+r,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-r,this.handleChange(t),e.preventDefault())}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[a.default],props:{palette:{type:Array,default:function(){return i}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),i=r(a),o=n(3),s=r(o);t.default={name:"Material",mixins:[s.default],components:{"ed-in":i.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(5),s=r(o);t.default={name:"Slider",mixins:[i.default],props:{swatches:{type:Array,default:function(){return[".80",".65",".50",".35",".20"]}}},components:{hue:s.default},computed:{activeOffset:function(){var e=this.swatches.includes("0"),t=this.swatches.includes("1"),n=this.colors.hsl;return Math.round(100*n.s)/100==.5?Math.round(100*n.l)/100:e&&0===n.l?0:t&&1===n.l?1:-1}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:.5,l:t,source:"hsl"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n,r,a=this.$refs.container,i=a.clientWidth,o=a.clientHeight,s=a.getBoundingClientRect().left+window.pageXOffset,c=a.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),d=l-s,h=u-c;"vertical"===this.direction?(h<0?n=360:h>o?n=0:(r=-100*h/o+100,n=360*r/100),this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(d<0?n=0:d>i?n=360:(r=100*d/i,n=360*r/100),this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(50),i=r(a),o=n(3),s=r(o),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],l=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var n=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?n=n.concat(["#000000","#FFFFFF"]):l.forEach(function(e){var r=i.default[t][e];n.push(r.toUpperCase())}),e.push(n)}),e}();t.default={name:"Swatches",mixins:[s.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h);t.default={name:"Photoshop",mixins:[i.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(57),i=r(a),o=n(58),s=r(o);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,s.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container,r=n.clientWidth,a=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),u=(0,i.default)(c-o,0,r),d=(0,i.default)(l-s,0,a),h=u/r,f=(0,i.default)(-d/a+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:h,v:f,a:this.colors.hsv.a,source:"hsva"})},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:a.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n,r=this.$refs.container,a=r.clientWidth,i=r.getBoundingClientRect().left+window.pageXOffset,o=e.pageX||(e.touches?e.touches[0].pageX:0),s=o-i;n=s<0?0:s>a?1:Math.round(100*s/a)/100,this.colors.a!==n&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:n,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e,t,n){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*n;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=t,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),r.toDataURL()):null}function a(e,t,n){var a=e+","+t+","+n;if(i[a])return i[a];var o=r(e,t,n);return i[a]=o,o}Object.defineProperty(t,"__esModule",{value:!0});var i={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+a(this.white,this.grey,this.size)+")"}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h),p=n(8),v=r(p),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];t.default={name:"Sketch",mixins:[i.default],components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default,checkboard:v.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var e=void 0;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h),p=n(8),v=r(p);t.default={name:"Chrome",mixins:[i.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default,checkboard:v.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,n=e.s,r=e.l;return{h:t.toFixed(),s:(100*n).toFixed()+"%",l:(100*r).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,n=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:n,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(23),i=r(a),o=n(32),s=r(o),c=n(36),l=r(c),u=n(40),d=r(u),h=n(47),f=r(h),p=n(52),v=r(p),g=n(67),b=r(g),x=n(71),m=r(x),_=n(7),w=r(_),C=n(8),y=r(C),k=n(4),F=r(k),A=n(5),S=r(A),M=n(6),E=r(M),L=n(3),R=r(L),O={version:"2.7.1",Compact:i.default,Grayscale:s.default,Material:l.default,Slider:d.default,Swatches:f.default,Photoshop:v.default,Sketch:b.default,Chrome:m.default,Alpha:w.default,Checkboard:y.default,EditableInput:F.default,Hue:S.default,Saturation:E.default,ColorMixin:R.default};e.exports=O},function(e,t,n){"use strict";function r(e){c||n(24)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(31),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Compact.vue",t.default=d.exports},function(e,t,n){var r=n(25);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6ce8a5a8",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+a,css:s,media:c,sourceMap:l};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}},function(e,t,n){var r;!function(a){function i(e,t){if(e=e||"",t=t||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,t);var n=o(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=q(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=q(this._r)),this._g<1&&(this._g=q(this._g)),this._b<1&&(this._b=q(this._b)),this._ok=n.ok,this._tc_id=U++}function o(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,o=!1,c=!1;return"string"==typeof e&&(e=$(e)),"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(t=s(e.r,e.g,e.b),o=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(r=D(e.s),a=D(e.v),t=d(e.h,r,a),o=!0,c="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(r=D(e.s),i=D(e.l),t=l(e.h,r,i),o=!0,c="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=M(n),{ok:o,format:e.format||c,r:V(255,X(t.r,0)),g:V(255,X(t.g,0)),b:V(255,X(t.b,0)),a:n}}function s(e,t,n){return{r:255*E(e,255),g:255*E(t,255),b:255*E(n,255)}}function c(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,a,i=X(e,t,n),o=V(e,t,n),s=(i+o)/2;if(i==o)r=a=0;else{var c=i-o;switch(a=s>.5?c/(2-i-o):c/(i+o),i){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,l:s}}function l(e,t,n){function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var a,i,o;if(e=E(e,360),t=E(t,100),n=E(n,100),0===t)a=i=o=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;a=r(c,s,e+1/3),i=r(c,s,e),o=r(c,s,e-1/3)}return{r:255*a,g:255*i,b:255*o}}function u(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,a,i=X(e,t,n),o=V(e,t,n),s=i,c=i-o;if(a=0===i?0:c/i,i==o)r=0;else{switch(i){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,v:s}}function d(e,t,n){e=6*E(e,360),t=E(t,100),n=E(n,100);var r=a.floor(e),i=e-r,o=n*(1-t),s=n*(1-i*t),c=n*(1-(1-i)*t),l=r%6;return{r:255*[n,s,o,o,c,n][l],g:255*[c,n,n,s,o,o][l],b:255*[o,o,c,n,n,s][l]}}function h(e,t,n,r){var a=[B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,t,n,r,a){var i=[B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16)),B(H(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function p(e,t,n,r){return[B(H(r)),B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s-=t/100,n.s=L(n.s),i(n)}function g(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s+=t/100,n.s=L(n.s),i(n)}function b(e){return i(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l+=t/100,n.l=L(n.l),i(n)}function m(e,t){t=0===t?0:t||10;var n=i(e).toRgb();return n.r=X(0,V(255,n.r-q(-t/100*255))),n.g=X(0,V(255,n.g-q(-t/100*255))),n.b=X(0,V(255,n.b-q(-t/100*255))),i(n)}function _(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l-=t/100,n.l=L(n.l),i(n)}function w(e,t){var n=i(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,i(n)}function C(e){var t=i(e).toHsl();return t.h=(t.h+180)%360,i(t)}function y(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+120)%360,s:t.s,l:t.l}),i({h:(n+240)%360,s:t.s,l:t.l})]}function k(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+90)%360,s:t.s,l:t.l}),i({h:(n+180)%360,s:t.s,l:t.l}),i({h:(n+270)%360,s:t.s,l:t.l})]}function F(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+72)%360,s:t.s,l:t.l}),i({h:(n+216)%360,s:t.s,l:t.l})]}function A(e,t,n){t=t||6,n=n||30;var r=i(e).toHsl(),a=360/n,o=[i(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,o.push(i(r));return o}function S(e,t){t=t||6;for(var n=i(e).toHsv(),r=n.h,a=n.s,o=n.v,s=[],c=1/t;t--;)s.push(i({h:r,s:a,v:o})),o=(o+c)%1;return s}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){O(e)&&(e="100%");var n=j(e);return e=V(t,X(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),a.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function L(e){return V(1,X(0,e))}function R(e){return parseInt(e,16)}function O(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function j(e){return"string"==typeof e&&-1!=e.indexOf("%")}function B(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function H(e){return a.round(255*parseFloat(e)).toString(16)}function P(e){return R(e)/255}function z(e){return!!K.CSS_UNIT.exec(e)}function $(e){e=e.replace(T,"").replace(I,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=K.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=K.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=K.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=K.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=K.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=K.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=K.hex8.exec(e))?{r:R(n[1]),g:R(n[2]),b:R(n[3]),a:P(n[4]),format:t?"name":"hex8"}:(n=K.hex6.exec(e))?{r:R(n[1]),g:R(n[2]),b:R(n[3]),format:t?"name":"hex"}:(n=K.hex4.exec(e))?{r:R(n[1]+""+n[1]),g:R(n[2]+""+n[2]),b:R(n[3]+""+n[3]),a:P(n[4]+""+n[4]),format:t?"name":"hex8"}:!!(n=K.hex3.exec(e))&&{r:R(n[1]+""+n[1]),g:R(n[2]+""+n[2]),b:R(n[3]+""+n[3]),format:t?"name":"hex"}}function N(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:t,size:n}}var T=/^\s+/,I=/\s+$/,U=0,q=a.round,V=a.min,X=a.max,G=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r,i,o,s=this.toRgb();return e=s.r/255,t=s.g/255,n=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),o=n<=.03928?n/12.92:a.pow((n+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o},setAlpha:function(e){return this._a=M(e),this._roundA=q(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=q(360*e.h),n=q(100*e.s),r=q(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=q(360*e.h),n=q(100*e.s),r=q(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:q(this._r),g:q(this._g),b:q(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+q(this._r)+", "+q(this._g)+", "+q(this._b)+")":"rgba("+q(this._r)+", "+q(this._g)+", "+q(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:q(100*E(this._r,255))+"%",g:q(100*E(this._g,255))+"%",b:q(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+q(100*E(this._r,255))+"%, "+q(100*E(this._g,255))+"%, "+q(100*E(this._b,255))+"%)":"rgba("+q(100*E(this._r,255))+"%, "+q(100*E(this._g,255))+"%, "+q(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Y[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);n="#"+p(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return i(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return i(e,t)},i.equals=function(e,t){return!(!e||!t)&&i(e).toRgbString()==i(t).toRgbString()},i.random=function(){return i.fromRatio({r:G(),g:G(),b:G()})},i.mix=function(e,t,n){n=0===n?0:n||50;var r=i(e).toRgb(),a=i(t).toRgb(),o=n/100;return i({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},i.readability=function(e,t){var n=i(e),r=i(t);return(a.max(n.getLuminance(),r.getLuminance())+.05)/(a.min(n.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,t,n){var r,a,o=i.readability(e,t);switch(a=!1,r=N(n),r.level+r.size){case"AAsmall":case"AAAlarge":a=o>=4.5;break;case"AAlarge":a=o>=3;break;case"AAAsmall":a=o>=7}return a},i.mostReadable=function(e,t,n){var r,a,o,s,c=null,l=0;n=n||{},a=n.includeFallbackColors,o=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=i.readability(e,t[u]))>l&&(l=r,c=i(t[u]));return i.isReadable(e,c,{level:o,size:s})||!a?c:(n.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],n))};var W=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=i.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(W),K=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();void 0!==e&&e.exports?e.exports=i:void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r)}(Math)},function(e,t,n){var r=n(29);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("0f73e73c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":e.labelId},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),n("span",{staticClass:"vc-input__label",attrs:{for:e.label,id:e.labelId}},[e._v(e._s(e.labelSpanText))]),e._v(" "),n("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[n("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},attrs:{role:"option","aria-label":"color:"+t,"aria-selected":t===e.pick},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(33)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(35),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Grayscale.vue",t.default=d.exports},function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("21ddbb74",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[n("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":t===e.pick},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(37)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(39),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Material.vue",t.default=d.exports},function(e,t,n){var r=n(38);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1ff3af73",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n',""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[n("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),n("div",{staticClass:"vc-material-split"},[n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(41)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(46),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Slider.vue",t.default=d.exports},function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7982aa43",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n",""])},function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7c5f1a1c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-hue",e.directionClass]},[n("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":e.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"presentation"}},[n("div",{staticClass:"vc-hue-picker"})])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},e._l(e.swatches,function(t,r){return n("div",{key:r,staticClass:"vc-slider-swatch",attrs:{"data-index":r,"aria-label":"color:"+e.colors.hex,role:"button"},on:{click:function(n){e.handleSwClick(r,t)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":t==e.activeOffset,"vc-slider-swatch-picker--white":"1"===t},style:{background:"hsl("+e.colors.hsl.h+", 50%, "+100*t+"%)"}})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(48)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(51),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Swatches.vue",t.default=d.exports},function(e,t,n){var r=n(49);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("10f839a2",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"red",function(){return r}),n.d(t,"pink",function(){return a}),n.d(t,"purple",function(){return i}),n.d(t,"deepPurple",function(){return o}),n.d(t,"indigo",function(){return s}),n.d(t,"blue",function(){return c}),n.d(t,"lightBlue",function(){return l}),n.d(t,"cyan",function(){return u}),n.d(t,"teal",function(){return d}),n.d(t,"green",function(){return h}),n.d(t,"lightGreen",function(){return f}),n.d(t,"lime",function(){return p}),n.d(t,"yellow",function(){return v}),n.d(t,"amber",function(){return g}),n.d(t,"orange",function(){return b}),n.d(t,"deepOrange",function(){return x}),n.d(t,"brown",function(){return m}),n.d(t,"grey",function(){return _}),n.d(t,"blueGrey",function(){return w}),n.d(t,"darkText",function(){return C}),n.d(t,"lightText",function(){return y}),n.d(t,"darkIcons",function(){return k}),n.d(t,"lightIcons",function(){return F}),n.d(t,"white",function(){return A}),n.d(t,"black",function(){return S});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},i={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},o={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},c={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},d={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},h={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},f={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},p={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},v={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},x={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},m={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},C={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},y={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},k={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},F={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},A="#ffffff",S="#000000";t.default={red:r,pink:a,purple:i,deepPurple:o,indigo:s,blue:c,lightBlue:l,cyan:u,teal:d,green:h,lightGreen:f,lime:p,yellow:v,amber:g,orange:b,deepOrange:x,brown:m,grey:_,blueGrey:w,darkText:C,lightText:y,darkIcons:k,lightIcons:F,white:A,black:S}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":e.pick}},[n("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},e._l(e.palette,function(t,r){return n("div",{key:r,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return n("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":e.equal(t),"data-color":t},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(53)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(66),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Photoshop.vue",t.default=d.exports},function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("080365d4",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n',""])},function(e,t,n){var r=n(56);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("b5380e52",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n",""])},function(e,t){function n(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}e.exports=n},function(e,t){function n(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,k=t,x=e.apply(r,n)}function i(e){return k=e,m=setTimeout(u,t),F?r(e):x}function o(e){var n=e-_,r=e-k,a=t-n;return A?C(a,b-r):a}function l(e){var n=e-_,r=e-k;return void 0===_||n>=t||n<0||A&&r>=b}function u(){var e=y();if(l(e))return d(e);m=setTimeout(u,o(e))}function d(e){return m=void 0,S&&v?r(e):(v=g=void 0,x)}function h(){void 0!==m&&clearTimeout(m),k=0,v=_=g=m=void 0}function f(){return void 0===m?x:d(y())}function p(){var e=y(),n=l(e);if(v=arguments,g=this,_=e,n){if(void 0===m)return i(_);if(A)return m=setTimeout(u,t),r(_)}return void 0===m&&(m=setTimeout(u,t)),x}var v,g,b,x,m,_,k=0,F=!1,A=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,a(n)&&(F=!!n.leading,A="maxWait"in n,b=A?w(s(n.maxWait)||0,t):b,S="trailing"in n?!!n.trailing:S),p.cancel=h,p.flush=f,p}function r(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return a(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:i,maxWait:t,trailing:o})}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||i(e)&&_.call(e)==u}function s(e){if("number"==typeof e)return e;if(o(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):h.test(e)?l:+e}var c="Expected a function",l=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof global&&global&&global.Object===Object&&global,b="object"==typeof self&&self&&self.Object===Object&&self,x=g||b||Function("return this")(),m=Object.prototype,_=m.toString,w=Math.max,C=Math.min,y=function(){return x.Date.now()};e.exports=r},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),e._v(" "),n("div",{staticClass:"vc-saturation--black"}),e._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){var r=n(61);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4dc1b086",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n",""])},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7e15c05b",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-alpha"},[n("div",{staticClass:"vc-alpha-checkboard-wrap"},[n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),n("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[n("div",{staticClass:"vc-alpha-picker"})])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[n("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[e._v(e._s(e.head))]),e._v(" "),n("div",{staticClass:"vc-ps-body"},[n("div",{staticClass:"vc-ps-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-ps-hue-wrap"},[n("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[n("div",{staticClass:"vc-ps-hue-pointer"},[n("i",{staticClass:"vc-ps-hue-pointer--left"}),n("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),n("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[n("div",{staticClass:"vc-ps-previews"},[n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.newLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-previews__swatches"},[n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex},attrs:{"aria-label":"New color is "+e.colors.hex}}),e._v(" "),n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},attrs:{"aria-label":"Current color is "+e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.currentLabel))])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-ps-actions"},[n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.acceptLabel},on:{click:e.handleAccept}},[e._v(e._s(e.acceptLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.cancelLabel},on:{click:e.handleCancel}},[e._v(e._s(e.cancelLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-fields"},[n("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),e.hasResetButton?n("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:e.handleReset}},[e._v(e._s(e.resetLabel))]):e._e()])])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(68)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(70),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Sketch.vue",t.default=d.exports},function(e,t,n){var r=n(69);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("612c6604",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor},attrs:{"aria-label":"Current color is "+e.activeColor}}),e._v(" "),n("checkboard")],1)]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[e._l(e.presetColors,function(t){return[e.isTransparent(t)?n("div",{key:t,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+t},on:{click:function(n){e.handlePreset(t)}}},[n("checkboard")],1):n("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(n){e.handlePreset(t)}}})]})],2)])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(72)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(21),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(74),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Chrome.vue",t.default=d.exports},function(e,t,n){var r=n(73);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1cd16048",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[n("div",{staticClass:"vc-chrome-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-body"},[n("div",{staticClass:"vc-chrome-controls"},[n("div",{staticClass:"vc-chrome-color-wrap"},[n("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor},attrs:{"aria-label":"current color is "+e.colors.hex}}),e._v(" "),e.disableAlpha?e._e():n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-chrome-sliders"},[n("div",{staticClass:"vc-chrome-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-chrome-fields-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[e.hasAlpha?e._e():n("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}}),e._v(" "),e.hasAlpha?n("ed-in",{attrs:{label:"hex",value:e.colors.hex8},on:{change:e.inputChange}}):e._e()],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:e.toggleViews}},[n("div",{staticClass:"vc-chrome-toggle-icon"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[n("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i}])});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){return u({},t)},f=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),l=["locale","showMonths"],s={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=a(this.config);this.events.forEach(function(n){var r,i=o.a.defaultConfig[n]||[];e[n]=(r=e[n]||[],r instanceof Array?r:[r]).concat(i,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i;t.$emit.apply(t,[(i=n,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())].concat(r))})}),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick(function(){e.$emit("input",n.value)})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=a(t);f.forEach(function(t){delete n[t]}),this.fp.set(n),l.forEach(function(t){void 0!==n[t]&&e.fp.set(t,n[t])})}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};n.d(e,"Plugin",function(){return c}),n.d(e,"Component",function(){return s});var c=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,s)};s.install=c;e.default=s}]).default});

/***/ }),

/***/ "./node_modules/vue-masked-input/dist/ff-polyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-masked-input/dist/ff-polyfill.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copy paste from https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var w = window,
      d = w.document;

  if (w.onfocusin === undefined) {
    d.addEventListener('focus', addPolyfill, true);
    d.addEventListener('blur', addPolyfill, true);
    d.addEventListener('focusin', removePolyfill, true);
    d.addEventListener('focusout', removePolyfill, true);
  }

  function addPolyfill(e) {
    var type = e.type === 'focus' ? 'focusin' : 'focusout';
    var event = new CustomEvent(type, {
      bubbles: true,
      cancelable: false
    });
    event.c1Generated = true;
    e.target.dispatchEvent(event);
  }

  function removePolyfill(e) {
    if (!e.c1Generated) {
      // focus after focusin, so chrome will the first time trigger tow times focusin
      d.removeEventListener('focus', addPolyfill, true);
      d.removeEventListener('blur', addPolyfill, true);
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    }
    setTimeout(function () {
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    });
  }
});;


/***/ }),

/***/ "./node_modules/vue-masked-input/dist/maskedInput.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-masked-input/dist/maskedInput.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask-core */ "./node_modules/inputmask-core/lib/index.js");
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ff_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ff-polyfill */ "./node_modules/vue-masked-input/dist/ff-polyfill.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


 // Firefox Polyfill for focus events

Object(_ff_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"])();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MaskedInput',
  render: function render(h) {
    return h('input', {
      ref: 'input',
      attrs: {
        disabled: this.maskCore === null || this.disabled
      },
      domProps: {
        value: this.value
      },
      on: {
        keydown: this.keyDown,
        keypress: this.keyPress,
        keyup: this.keyUp,
        textInput: this.textInput,
        mouseup: this.mouseUp,
        focusout: this.focusOut,
        cut: this.cut,
        copy: this.copy,
        paste: this.paste
      }
    });
  },


  data: function data() {
    return {
      marginLeft: 0,
      maskCore: null,
      updateAfterAll: false
    };
  },

  props: {
    value: {
      type: String
    },
    mask: {
      required: true,
      validator: function validator(value) {
        return !!(value && value.length >= 1 || value instanceof Object);
      }
    },
    placeholderChar: {
      type: String,
      default: '_',
      validator: function validator(value) {
        return !!(value && value.length === 1);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    mask: function mask(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.initMask();
      }
    },
    value: function value(newValue) {
      if (this.maskCore) this.maskCore.setValue(newValue); // For multiple inputs support
    }
  },

  mounted: function mounted() {
    this.initMask();
  },


  methods: {
    initMask: function initMask() {
      var _this = this;

      try {
        if (this.mask instanceof Object) {
          this.maskCore = new inputmask_core__WEBPACK_IMPORTED_MODULE_0___default.a(this.mask);
        } else {
          this.maskCore = new inputmask_core__WEBPACK_IMPORTED_MODULE_0___default.a({
            pattern: this.mask,
            value: '',
            placeholderChar: this.placeholderChar,
            /* eslint-disable quote-props */
            formatCharacters: {
              'a': {
                validate: function validate(char) {
                  return (/^[A-Za-zА-Яа-я]$/.test(char)
                  );
                }
              },
              'A': {
                validate: function validate(char) {
                  return (/^[A-Za-zА-Яа-я]$/.test(char)
                  );
                },
                transform: function transform(char) {
                  return char.toUpperCase();
                }
              },
              '*': {
                validate: function validate(char) {
                  return (/^[\dA-Za-zА-Яа-я]$/.test(char)
                  );
                }
              },
              '#': {
                validate: function validate(char) {
                  return (/^[\dA-Za-zА-Яа-я]$/.test(char)
                  );
                },
                transform: function transform(char) {
                  return char.toUpperCase();
                }
              },
              '+': {
                validate: function validate() {
                  return true;
                }
              }
            }
          });
        }
        [].concat(_toConsumableArray(this.$refs.input.value)).reduce(function (memo, item) {
          return _this.maskCore.input(item);
        }, null);
        this.maskCore.setSelection({
          start: 0,
          end: 0
        });
        if (this.$refs.input.value === '') {
          this.$emit('input', '', '');
        } else {
          this.updateToCoreState();
        }
      } catch (e) {
        this.maskCore = null;
        this.$refs.input.value = 'Error';
        this.$emit('input', this.$refs.input.value, '');
      }
    },
    getValue: function getValue() {
      return this.maskCore ? this.maskCore.getValue() : '';
    },
    keyDown: function keyDown(e) {
      // Always
      if (this.maskCore === null) {
        e.preventDefault();
        return;
      }
      this.setNativeSelection();
      switch (e.keyCode) {
        // backspace
        case 8:
          e.preventDefault();
          if (this.maskCore.selection.start > this.marginLeft || this.maskCore.selection.start !== this.maskCore.selection.end) {
            this.maskCore.backspace();
            this.updateToCoreState();
          }
          break;

        // left arrow
        case 37:
          e.preventDefault();
          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            // this.$refs.input.selectionEnd = this.$refs.input.selectionStart - 1; @TODO
            this.$refs.input.selectionStart -= 1;
          }
          this.maskCore.selection = {
            start: this.$refs.input.selectionStart,
            end: this.$refs.input.selectionStart
          };
          this.updateToCoreState();
          break;

        // right arrow
        case 39:
          e.preventDefault();
          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            this.$refs.input.selectionEnd += 1;
          }
          this.maskCore.selection = {
            start: this.$refs.input.selectionEnd,
            end: this.$refs.input.selectionEnd
          };
          this.updateToCoreState();
          break;

        // end
        case 35:
          e.preventDefault();
          this.$refs.input.selectionStart = this.$refs.input.value.length;
          this.$refs.input.selectionEnd = this.$refs.input.value.length;
          this.maskCore.selection = {
            start: this.$refs.input.selectionEnd,
            end: this.$refs.input.selectionEnd
          };
          this.updateToCoreState();
          break;

        // home
        case 36:
          e.preventDefault();
          this.$refs.input.selectionStart = 0;
          this.$refs.input.selectionEnd = 0;
          this.maskCore.selection = {
            start: this.$refs.input.selectionStart,
            end: this.$refs.input.selectionStart
          };
          this.updateToCoreState();
          break;

        // delete
        case 46:
          e.preventDefault();
          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            this.maskCore.setValue('');
            this.maskCore.setSelection({
              start: 0,
              end: 0
            });
            this.$refs.input.selectionStart = this.maskCore.selection.start;
            this.$refs.input.selectionEnd = this.maskCore.selection.start;
          } else {
            this.maskCore.backspace();
          }
          this.updateToCoreState();
          break;

        default:
          break;
      }
    },
    keyPress: function keyPress(e) {
      // works only on Desktop
      if (e.ctrlKey) return; // Fix FF copy/paste issue
      // IE & FF are not trigger textInput event, so we have to force it
      /* eslint-disable */
      var isIE = /*@cc_on!@*/ false || !!document.documentMode; //by http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
      /* eslint-enable */
      var isFirefox = typeof InstallTrigger !== 'undefined';
      if (isIE || isFirefox) {
        e.preventDefault();
        e.data = e.key;
        this.textInput(e);
      }
    },
    textInput: function textInput(e) {
      if (e.preventDefault) e.preventDefault();
      if (this.maskCore.input(e.data)) {
        this.updateAfterAll = true;
      }
      this.updateToCoreState();
    },
    keyUp: function keyUp(e) {
      if (e.keyCode === 9) {
        // Preven change selection for Tab in
        return;
      }
      this.updateToCoreState();
      this.updateAfterAll = false;
    },
    cut: function cut(e) {
      e.preventDefault();
      if (this.$refs.input.selectionStart !== this.$refs.input.selectionEnd) {
        try {
          document.execCommand('copy');
        } catch (err) {} // eslint-disable-line no-empty
        this.maskCore.backspace();
        this.updateToCoreState();
      }
    },
    copy: function copy() {},
    paste: function paste(e) {
      var _this2 = this;

      e.preventDefault();
      var text = e.clipboardData.getData('text');
      [].concat(_toConsumableArray(text)).reduce(function (memo, item) {
        return _this2.maskCore.input(item);
      }, null);
      this.updateToCoreState();
    },
    updateToCoreState: function updateToCoreState() {
      if (this.maskCore === null) {
        return;
      }
      if (this.$refs.input.value !== this.maskCore.getValue()) {
        this.$refs.input.value = this.maskCore.getValue();
        this.$emit('input', this.$refs.input.value, this.maskCore.getRawValue());
      }
      this.$refs.input.selectionStart = this.maskCore.selection.start;
      this.$refs.input.selectionEnd = this.maskCore.selection.end;
    },
    isEmpty: function isEmpty() {
      if (this.maskCore === null) return true;
      return this.maskCore.getValue() === this.maskCore.emptyValue;
    },
    focusOut: function focusOut() {
      if (this.isEmpty()) {
        this.$refs.input.value = '';
        this.maskCore.setSelection({
          start: 0,
          end: 0
        });
        this.$emit('input', '', '');
      }
    },
    setNativeSelection: function setNativeSelection() {
      this.maskCore.selection = {
        start: this.$refs.input.selectionStart,
        end: this.$refs.input.selectionEnd
      };
    },
    mouseUp: function mouseUp() {
      if (this.isEmpty() && this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
        this.maskCore.setSelection({
          start: 0,
          end: 0
        });
        this.$refs.input.selectionStart = this.maskCore.selection.start;
        this.$refs.input.selectionEnd = this.maskCore.selection.start;
        this.marginLeft = this.maskCore.selection.start;
        this.updateToCoreState();
      } else {
        this.setNativeSelection();
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var o=n(4),i=n(5),r=n(6);t.exports=function(t){return o(t)||i(t)||r()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),s=n.n(r),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,r=o.bottom,s=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(r>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-s)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var d={Deselect:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),r=i.height,s=i.top,a=i.left,l=i.width;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",top:window.scrollY+s+r+"px",left:window.scrollX+a+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};var y=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0;var g=function(){return++b};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={components:m({},d),mixins:[c,u,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===s()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==s()(t))return t;try{return t.hasOwnProperty("id")?t.id:y(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return"number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return"object"===s()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(s()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,r=n.left;t.style.top=i,t.style.left=r,t.style.width=o}}},data:function(){return{uid:g(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)})))},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;this.isTrackingValues&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.$refs.search;e&&t.preventDefault(),[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||false)).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===s()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+o,"aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));e.default=O}])}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")):undefined})("undefined"!==typeof self?self:this,function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="fb15")}({2350:function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"===typeof btoa){var i=n(o),s=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(s).concat([i]).join("\n")}return[r].join("\n")}function n(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+r+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"===typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"===typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},2638:function(t,e,r){"use strict";function n(){return n=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)}var o=["attrs","props","domProps"],i=["class","style","directives"],s=["on","nativeOn"],a=function(t){return t.reduce(function(t,e){for(var r in e)if(t[r])if(-1!==o.indexOf(r))t[r]=n({},t[r],e[r]);else if(-1!==i.indexOf(r)){var a=t[r]instanceof Array?t[r]:[t[r]],l=e[r]instanceof Array?e[r]:[e[r]];t[r]=a.concat(l)}else if(-1!==s.indexOf(r))for(var c in e[r])if(t[r][c]){var d=t[r][c]instanceof Array?t[r][c]:[t[r][c]],f=e[r][c]instanceof Array?e[r][c]:[e[r][c]];t[r][c]=d.concat(f)}else t[r][c]=e[r][c];else if("hook"==r)for(var h in e[r])t[r][h]=t[r][h]?u(t[r][h],e[r][h]):e[r][h];else t[r]=e[r];else t[r]=e[r];return t},{})},u=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=a},"499e":function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],u=i[2],l=i[3],c={id:t+":"+o,css:a,media:u,sourceMap:l};n[s]?n[s].parts.push(c):r.push(n[s]={id:s,parts:[c]})}return r}r.r(e),r.d(e,"default",function(){return p});var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,l=!1,c=function(){},d=null,f="data-vue-ssr-id",h="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,o){l=r,d=o||{};var s=n(t,e);return v(s),function(e){for(var r=[],o=0;o<s.length;o++){var a=s[o],u=i[a.id];u.refs--,r.push(u)}e?(s=n(t,e),v(s)):s=[];for(o=0;o<r.length;o++){u=r[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(m(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function y(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var e,r,n=document.querySelector("style["+f+'~="'+t.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(h){var o=u++;n=a||(a=y()),e=g.bind(null,n,o,!1),r=g.bind(null,n,o,!0)}else n=y(),e=k.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var b=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function g(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function k(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),d.ssrId&&t.setAttribute(f,e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},"4abb":function(t,e,r){var n=r("df80");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("499e").default;o("3e7284f8",n,!0,{sourceMap:!1,shadowMode:!1})},"4ed8":function(t,e,r){var n=r("ae61");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("499e").default;o("57c2b2f0",n,!0,{sourceMap:!1,shadowMode:!1})},"556c":function(t,e,r){var n=r("d5ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("499e").default;o("f3ffc7f8",n,!0,{sourceMap:!1,shadowMode:!1})},"65d9":function(t,e,r){"use strict";
/**
  * vue-class-component v7.0.1
  * (c) 2015-present Evan You
  * @license MIT
  */function n(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("8bbf")),i="undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(t,e){a(t,e),Object.getOwnPropertyNames(e.prototype).forEach(function(r){a(t.prototype,e.prototype,r)}),Object.getOwnPropertyNames(e).forEach(function(r){a(t,e,r)})}function a(t,e,r){var n=r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e);n.forEach(function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)})}var u={__proto__:[]},l=u instanceof Array;function c(t){return function(e,r,n){var o="function"===typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}}function d(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.extend({mixins:t})}function f(t){var e=typeof t;return null==t||"object"!==e&&"function"!==e}function h(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function v(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(p.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"===typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return e={},e[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return h(this,t)}});var n=t.__decorators__;n&&(n.forEach(function(t){return t(e)}),delete t.__decorators__);var a=Object.getPrototypeOf(t.prototype),u=a instanceof o?a.constructor:o,l=u.extend(e);return y(l,t,u),i&&s(l,t),l}function y(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var i=Object.getOwnPropertyDescriptor(e,n);if(!l){if("cid"===n)return;var s=Object.getOwnPropertyDescriptor(r,n);if(!f(i.value)&&s&&s.value===i.value)return}0,Object.defineProperty(t,n,i)}}})}function m(t){return"function"===typeof t?v(t):function(e){return v(e,t)}}m.registerHooks=function(t){p.push.apply(p,t)},e.default=m,e.createDecorator=c,e.mixins=d},"8bbf":function(e,r){e.exports=t},ae61:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}",""])},d5ac:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}",""])},df80:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}",""])},fb15:function(t,e,r){"use strict";var n;(r.r(e),"undefined"!==typeof window)&&((n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=n[1]));var o=r("2638"),i=r.n(o);function s(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}var a=r("8bbf"),u=r.n(a),l=r("65d9"),c=r.n(l);function d(t,e){return void 0===e&&(e={}),Object(l["createDecorator"])(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})}function f(t){return void 0===t&&(t={}),Object(l["createDecorator"])(function(e,r){(e.props||(e.props={}))[r]=t})}function h(t,e){void 0===e&&(e={});var r=e.deep,n=void 0!==r&&r,o=e.immediate,i=void 0!==o&&o;return Object(l["createDecorator"])(function(e,r){"object"!==typeof e.watch&&(e.watch=Object.create(null));var o=e.watch;"object"!==typeof o[t]||Array.isArray(o[t])?"undefined"===typeof o[t]&&(o[t]=[]):o[t]=[o[t]],o[t].push({handler:r,deep:n,immediate:i})})}r("4ed8");function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),t}function b(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}var O=function(t){function e(){return v(this,e),b(this,k(e).apply(this,arguments))}return x(e,t),m(e,[{key:"dragStart",value:function(t){if(this.disabled)return!1;this.$emit("drag-start")}},{key:"render",value:function(){var t=arguments[0];return t("div",{ref:"dot",class:this.dotClasses,on:{mousedown:this.dragStart,touchstart:this.dragStart}},[this.$slots.dot||t("div",{class:this.handleClasses,style:this.dotStyle}),"none"!==this.tooltip?t("div",{class:this.tooltipClasses},[this.$slots.tooltip||t("div",{class:this.tooltipInnerClasses,style:this.tooltipStyle},[t("span",{class:"vue-slider-dot-tooltip-text"},[this.tooltipValue])])]):null])}},{key:"dotClasses",get:function(){return["vue-slider-dot",{"vue-slider-dot-hover":"hover"===this.tooltip||"active"===this.tooltip,"vue-slider-dot-disabled":this.disabled,"vue-slider-dot-focus":this.focus}]}},{key:"handleClasses",get:function(){return["vue-slider-dot-handle",{"vue-slider-dot-handle-disabled":this.disabled,"vue-slider-dot-handle-focus":this.focus}]}},{key:"tooltipClasses",get:function(){return["vue-slider-dot-tooltip",["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-show":this.showTooltip}]}},{key:"tooltipInnerClasses",get:function(){return["vue-slider-dot-tooltip-inner",["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-inner-disabled":this.disabled,"vue-slider-dot-tooltip-inner-focus":this.focus}]}},{key:"showTooltip",get:function(){switch(this.tooltip){case"always":return!0;case"none":return!1;case"focus":case"active":return!!this.focus;default:return!1}}},{key:"tooltipValue",get:function(){return this.tooltipFormatter?"string"===typeof this.tooltipFormatter?this.tooltipFormatter.replace(/\{value\}/,String(this.value)):this.tooltipFormatter(this.value):this.value}}]),e}(u.a);s([f({default:0})],O.prototype,"value",void 0),s([f()],O.prototype,"tooltip",void 0),s([f()],O.prototype,"dotStyle",void 0),s([f()],O.prototype,"tooltipStyle",void 0),s([f({type:String,validator:function(t){return["top","right","bottom","left"].indexOf(t)>-1},required:!0})],O.prototype,"tooltipPlacement",void 0),s([f({type:[String,Function]})],O.prototype,"tooltipFormatter",void 0),s([f({type:Boolean,default:!1})],O.prototype,"focus",void 0),s([f({default:!1})],O.prototype,"disabled",void 0),O=s([c.a],O);var P=O;r("556c");function S(t){return S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e,r){return e&&E(t.prototype,e),r&&E(t,r),t}function A(t,e){return!e||"object"!==S(e)&&"function"!==typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}var C=function(t){function e(){return R(this,e),A(this,V(e).apply(this,arguments))}return _(e,t),D(e,[{key:"labelClickHandle",value:function(t){t.stopPropagation(),this.$emit("pressLabel",this.mark.pos)}},{key:"render",value:function(){var t=arguments[0],e=this.mark;return t("div",{class:this.marksClasses},[this.$slots.step||t("div",{class:this.stepClasses,style:[this.stepStyle,e.style,e.active?this.stepActiveStyle:null,e.active?e.activeStyle:null]}),this.hideLabel?null:this.$slots.label||t("div",{class:this.labelClasses,style:[this.labelStyle,e.labelStyle,e.active?this.labelActiveStyle:null,e.active?e.labelActiveStyle:null],on:{click:this.labelClickHandle}},[e.label])])}},{key:"marksClasses",get:function(){return["vue-slider-mark",{"vue-slider-mark-active":this.mark.active}]}},{key:"stepClasses",get:function(){return["vue-slider-mark-step",{"vue-slider-mark-step-active":this.mark.active}]}},{key:"labelClasses",get:function(){return["vue-slider-mark-label",{"vue-slider-mark-label-active":this.mark.active}]}}]),e}(u.a);s([f({required:!0})],C.prototype,"mark",void 0),s([f(Boolean)],C.prototype,"hideLabel",void 0),s([f()],C.prototype,"stepStyle",void 0),s([f()],C.prototype,"stepActiveStyle",void 0),s([f()],C.prototype,"labelStyle",void 0),s([f()],C.prototype,"labelActiveStyle",void 0),C=s([c.a],C);var L,N=C,B=function(t){return"number"===typeof t?"".concat(t,"px"):t},T=function(t){var e=document.documentElement,r=document.body,n=t.getBoundingClientRect(),o={y:n.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||r.clientTop||0),x:n.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||r.clientLeft||0)};return o},I=function(t,e,r){var n="targetTouches"in t?t.targetTouches[0]:t,o=T(e),i={x:n.pageX-o.x,y:n.pageY-o.y};return{x:r?e.offsetWidth-i.x:i.x,y:r?e.offsetHeight-i.y:i.y}};(function(t){t[t["PAGE_UP"]=33]="PAGE_UP",t[t["PAGE_DOWN"]=34]="PAGE_DOWN",t[t["END"]=35]="END",t[t["HOME"]=36]="HOME",t[t["LEFT"]=37]="LEFT",t[t["UP"]=38]="UP",t[t["RIGHT"]=39]="RIGHT",t[t["DOWN"]=40]="DOWN"})(L||(L={}));var z=function(t,e){if(e.hook){var r=e.hook(t);if("function"===typeof r)return r;if(!r)return null}switch(t.keyCode){case L.UP:return function(t){return"ttb"===e.direction?t-1:t+1};case L.RIGHT:return function(t){return"rtl"===e.direction?t-1:t+1};case L.DOWN:return function(t){return"ttb"===e.direction?t+1:t-1};case L.LEFT:return function(t){return"rtl"===e.direction?t+1:t-1};case L.END:return function(){return e.max};case L.HOME:return function(){return e.min};case L.PAGE_UP:return function(t){return t+10};case L.PAGE_DOWN:return function(t){return t-10};default:return null}};function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function F(t,e,r){return e&&U(t.prototype,e),r&&U(t,r),t}var $,W,G=function(){function t(e){H(this,t),this.num=e}return F(t,[{key:"decimal",value:function(t,e){var r=this.num,n=this.getDecimalLen(r),o=this.getDecimalLen(t),i=0;switch(e){case"+":i=this.getExponent(n,o),this.num=(this.safeRoundUp(r,i)+this.safeRoundUp(t,i))/i;break;case"-":i=this.getExponent(n,o),this.num=(this.safeRoundUp(r,i)-this.safeRoundUp(t,i))/i;break;case"*":this.num=this.safeRoundUp(this.safeRoundUp(r,this.getExponent(n)),this.safeRoundUp(t,this.getExponent(o)))/this.getExponent(n+o);break;case"/":i=this.getExponent(n,o),this.num=this.safeRoundUp(r,i)/this.safeRoundUp(t,i);break;case"%":i=this.getExponent(n,o),this.num=this.safeRoundUp(r,i)%this.safeRoundUp(t,i)/i;break}return this}},{key:"plus",value:function(t){return this.decimal(t,"+")}},{key:"minus",value:function(t){return this.decimal(t,"-")}},{key:"multiply",value:function(t){return this.decimal(t,"*")}},{key:"divide",value:function(t){return this.decimal(t,"/")}},{key:"remainder",value:function(t){return this.decimal(t,"%")}},{key:"toNumber",value:function(){return this.num}},{key:"getDecimalLen",value:function(t){var e="".concat(t).split("e");return("".concat(e[0]).split(".")[1]||"").length-(e[1]?+e[1]:0)}},{key:"getExponent",value:function(t,e){return Math.pow(10,void 0!==e?Math.max(t,e):t)}},{key:"safeRoundUp",value:function(t,e){return Math.round(t*e)}}]),t}();function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){it(t,e,r[e])})}return t}function q(t,e){return J(t)||Y(t,e)||K()}function K(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Y(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(u){o=!0,i=u}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw i}}return r}function J(t){if(Array.isArray(t))return t}function Q(t){return et(t)||tt(t)||Z()}function Z(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function tt(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function et(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ot(t,e,r){return e&&nt(t.prototype,e),r&&nt(t,r),t}function it(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}(function(t){t[t["VALUE"]=1]="VALUE",t[t["INTERVAL"]=2]="INTERVAL",t[t["MIN"]=3]="MIN",t[t["MAX"]=4]="MAX",t[t["ORDER"]=5]="ORDER"})(W||(W={}));var st=($={},it($,W.VALUE,'The type of the "value" is illegal'),it($,W.INTERVAL,'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'),it($,W.MIN,'The "value" must be greater than or equal to the "min".'),it($,W.MAX,'The "value" must be less than or equal to the "max".'),it($,W.ORDER,'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'),$),at=function(){function t(e){rt(this,t),this.dotsPos=[],this.dotsValue=[],this.cacheRangeDir={},this.data=e.data,this.max=e.max,this.min=e.min,this.interval=e.interval,this.order=e.order,this.marks=e.marks,this.included=e.included,this.process=e.process,this.adsorb=e.adsorb,this.dotOptions=e.dotOptions,this.onError=e.onError,this.order?(this.minRange=e.minRange||0,this.maxRange=e.maxRange||0,this.enableCross=e.enableCross,this.fixed=e.fixed):((e.minRange||e.maxRange||!e.enableCross||e.fixed)&&this.emitError(W.ORDER),this.minRange=0,this.maxRange=0,this.enableCross=!0,this.fixed=!1),this.setValue(e.value)}return ot(t,[{key:"setValue",value:function(t){this.setDotsValue(Array.isArray(t)?Q(t):[t],!0)}},{key:"setDotsValue",value:function(t,e){this.dotsValue=t,e&&this.syncDotsPos()}},{key:"setDotsPos",value:function(t){var e=this,r=this.order?Q(t).sort(function(t,e){return t-e}):t;this.dotsPos=r,this.setDotsValue(r.map(function(t){return e.getValueByPos(t)}),this.adsorb)}},{key:"getValueByPos",value:function(t){var e=this.parsePos(t);if(this.included){var r=100;this.markList.forEach(function(n){var o=Math.abs(n.pos-t);o<r&&(r=o,e=n.value)})}return e}},{key:"syncDotsPos",value:function(){var t=this;this.dotsPos=this.dotsValue.map(function(e){return t.parseValue(e)})}},{key:"getRecentDot",value:function(t){var e=this.dotsPos.map(function(e){return Math.abs(e-t)});return e.indexOf(Math.min.apply(Math,Q(e)))}},{key:"getIndexByValue",value:function(t){return this.data?this.data.indexOf(t):new G(+t).minus(this.min).divide(this.interval).toNumber()}},{key:"getValueByIndex",value:function(t){return t<0?t=0:t>this.total&&(t=this.total),this.data?this.data[t]:new G(t).multiply(this.interval).plus(this.min).toNumber()}},{key:"setDotPos",value:function(t,e){t=this.getValidPos(t,e).pos;var r=t-this.dotsPos[e];if(r){var n=new Array(this.dotsPos.length);this.fixed?n=this.getFixedChangePosArr(r,e):this.minRange||this.maxRange?n=this.getLimitRangeChangePosArr(t,r,e):n[e]=r,this.setDotsPos(this.dotsPos.map(function(t,e){return t+(n[e]||0)}))}}},{key:"getFixedChangePosArr",value:function(t,e){var r=this;return this.dotsPos.forEach(function(n,o){if(o!==e){var i=r.getValidPos(n+t,o),s=i.pos,a=i.inRange;a||(t=Math.min(Math.abs(s-n),Math.abs(t))*(t<0?-1:1))}}),this.dotsPos.map(function(e){return t})}},{key:"getLimitRangeChangePosArr",value:function(t,e,r){var n=this,o=[{index:r,changePos:e}],i=e;return[this.minRange,this.maxRange].forEach(function(s,a){if(!s)return!1;var u=0===a,l=e>0,c=0;c=u?l?1:-1:l?-1:1;var d=function(t,e){var r=Math.abs(t-e);return u?r<n.minRangeDir:r>n.maxRangeDir},f=r+c,h=n.dotsPos[f],p=t;while(n.isPos(h)&&d(h,p)){var v=n.getValidPos(h+i,f),y=v.pos;o.push({index:f,changePos:y-h}),f+=c,p=y,h=n.dotsPos[f]}}),this.dotsPos.map(function(t,e){var r=o.filter(function(t){return t.index===e});return r.length?r[0].changePos:0})}},{key:"isPos",value:function(t){return"number"===typeof t}},{key:"getValidPos",value:function(t,e){var r=this.valuePosRange[e],n=!0;return t<r[0]?(t=r[0],n=!1):t>r[1]&&(t=r[1],n=!1),{pos:t,inRange:n}}},{key:"parseValue",value:function(t){if(this.data)t=this.data.indexOf(t);else if("number"===typeof t||"string"===typeof t){if(t=+t,t<this.min)return this.emitError(W.MIN),0;if(t>this.max)return this.emitError(W.MAX),0;if("number"!==typeof t||t!==t)return this.emitError(W.VALUE),0;t=new G(t).minus(this.min).divide(this.interval).toNumber()}var e=new G(t).multiply(this.gap).toNumber();return e<0?0:e>100?100:e}},{key:"parsePos",value:function(t){var e=Math.round(t/this.gap);return this.getValueByIndex(e)}},{key:"isActiveByPos",value:function(t){return this.processArray.some(function(e){var r=q(e,2),n=r[0],o=r[1];return t>=n&&t<=o})}},{key:"getValues",value:function(){if(this.data)return this.data;for(var t=[],e=0;e<=this.total;e++)t.push(new G(e).multiply(this.interval).plus(this.min).toNumber());return t}},{key:"getRangeDir",value:function(t){return t?new G(t).divide(new G(this.data?this.data.length-1:this.max).minus(this.data?0:this.min).toNumber()).multiply(100).toNumber():100}},{key:"emitError",value:function(t){this.onError&&this.onError(t,st[t])}},{key:"getDotRange",value:function(t,e,r){if(!this.dotOptions)return r;var n=Array.isArray(this.dotOptions)?this.dotOptions[t]:this.dotOptions;return n&&void 0!==n[e]?this.parseValue(n[e]):r}},{key:"markList",get:function(){var t=this;if(!this.marks)return[];var e=function(e,r){var n=t.parseValue(e);return X({pos:n,value:e,label:e,active:t.isActiveByPos(n)},r)};return!0===this.marks?this.getValues().map(function(t){return e(t)}):"[object Object]"===Object.prototype.toString.call(this.marks)?Object.keys(this.marks).sort(function(t,e){return+t-+e}).map(function(r){var n=t.marks[r];return e(r,"string"!==typeof n?n:{label:n})}):Array.isArray(this.marks)?this.marks.map(function(t){return e(t)}):"function"===typeof this.marks?this.getValues().map(function(e){return{value:e,result:t.marks(e)}}).filter(function(t){var e=t.result;return!!e}).map(function(t){var r=t.value,n=t.result;return e(r,n)}):[]}},{key:"processArray",get:function(){if(this.process){if("function"===typeof this.process)return this.process(this.dotsPos);if(1===this.dotsPos.length)return[[0,this.dotsPos[0]]];if(this.dotsPos.length>1)return[[Math.min.apply(Math,Q(this.dotsPos)),Math.max.apply(Math,Q(this.dotsPos))]]}return[]}},{key:"total",get:function(){var t=0;return t=this.data?this.data.length-1:new G(this.max).minus(this.min).divide(this.interval).toNumber(),t-Math.floor(t)!==0?(this.emitError(W.INTERVAL),0):t}},{key:"gap",get:function(){return 100/this.total}},{key:"minRangeDir",get:function(){return this.cacheRangeDir[this.minRange]?this.cacheRangeDir[this.minRange]:this.cacheRangeDir[this.minRange]=this.getRangeDir(this.minRange)}},{key:"maxRangeDir",get:function(){return this.cacheRangeDir[this.maxRange]?this.cacheRangeDir[this.maxRange]:this.cacheRangeDir[this.maxRange]=this.getRangeDir(this.maxRange)}},{key:"valuePosRange",get:function(){var t=this,e=this.dotsPos,r=[];return e.forEach(function(n,o){r.push([Math.max(t.minRange?t.minRangeDir*o:0,t.enableCross?0:e[o-1]||0,t.getDotRange(o,"min",0)),Math.min(t.minRange?100-t.minRangeDir*(e.length-1-o):100,t.enableCross?100:e[o+1]||100,t.getDotRange(o,"max",100))])}),r}},{key:"dotsIndex",get:function(){var t=this;return this.dotsValue.map(function(e){return t.getIndexByValue(e)})}}]),t}();function ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ct(t,e,r){return e&&lt(t.prototype,e),r&&lt(t,r),t}var dt=function(){function t(e){ut(this,t),this.states=0,this.map=e}return ct(t,[{key:"add",value:function(t){this.states|=t}},{key:"delete",value:function(t){this.states&=~t}},{key:"toggle",value:function(t){this.has(t)?this.delete(t):this.add(t)}},{key:"has",value:function(t){return!!(this.states&t)}}]),t}();r("4abb");function ft(t){return ft="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function ht(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){bt(t,e,r[e])})}return t}function pt(t,e){return mt(t)||yt(t,e)||vt()}function vt(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function yt(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(u){o=!0,i=u}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw i}}return r}function mt(t){if(Array.isArray(t))return t}function bt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function gt(t){return wt(t)||xt(t)||kt()}function kt(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function xt(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function wt(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function Ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function St(t,e,r){return e&&Pt(t.prototype,e),r&&Pt(t,r),t}function Rt(t,e){return!e||"object"!==ft(e)&&"function"!==typeof e?Et(t):e}function Et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Dt(t){return Dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Dt(t)}function At(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}function jt(t,e){return jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},jt(t,e)}var Vt={None:0,Drag:2,Focus:4},_t=4,Mt=function(t){function e(){var t;return Ot(this,e),t=Rt(this,Dt(e).apply(this,arguments)),t.states=new dt(Vt),t.scale=1,t.focusDotIndex=0,t}return At(e,t),St(e,[{key:"onValueChanged",value:function(){this.control&&!this.states.has(Vt.Drag)&&this.isNotSync&&this.control.setValue(this.value)}},{key:"created",value:function(){this.initControl()}},{key:"mounted",value:function(){this.bindEvent()}},{key:"beforeDestroy",value:function(){this.unbindEvent()}},{key:"bindEvent",value:function(){document.addEventListener("touchmove",this.dragMove,{passive:!1}),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousedown",this.blurHandle),document.addEventListener("mousemove",this.dragMove),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("mouseleave",this.dragEnd),document.addEventListener("keydown",this.keydownHandle)}},{key:"unbindEvent",value:function(){document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousedown",this.blurHandle),document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("mouseleave",this.dragEnd),document.removeEventListener("keydown",this.keydownHandle)}},{key:"setScale",value:function(){this.scale=new G(Math.floor(this.isHorizontal?this.$el.offsetWidth:this.$el.offsetHeight)).divide(100).toNumber()}},{key:"initControl",value:function(){var t=this;this.control=new at({value:this.value,data:this.data,enableCross:this.enableCross,fixed:this.fixed,max:this.max,min:this.min,interval:this.interval,minRange:this.minRange,maxRange:this.maxRange,order:this.order,marks:this.marks,included:this.included,process:this.process,adsorb:this.adsorb,dotOptions:this.dotOptions,onError:this.emitError}),["data","enableCross","fixed","max","min","interval","minRange","maxRange","order","marks","process","adsorb","included","dotOptions"].forEach(function(e){t.$watch(e,function(r){if("data"===e&&Array.isArray(t.control.data)&&Array.isArray(r)&&t.control.data.length===r.length&&r.every(function(e,r){return e===t.control.data[r]}))return!1;t.control[e]=r,["data","max","min","interval"].indexOf(e)>-1&&t.control.syncDotsPos()})})}},{key:"syncValueByPos",value:function(){var t=this.control.dotsValue;this.isDiff(t,Array.isArray(this.value)?this.value:[this.value])&&this.$emit("change",1===t.length?t[0]:gt(t))}},{key:"isDiff",value:function(t,e){return t.length!==e.length||t.some(function(t,r){return t!==e[r]})}},{key:"emitError",value:function(t,e){this.silent||console.error("[VueSlider error]: ".concat(e)),this.$emit("error",t,e)}},{key:"dragStartOnProcess",value:function(t){if(this.dragOnClick){this.setScale();var e=this.getPosByEvent(t),r=this.control.getRecentDot(e);if(this.dots[r].disabled)return;this.dragStart(r),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos()}}},{key:"dragStart",value:function(t){this.focusDotIndex=t,this.setScale(),this.states.add(Vt.Drag),this.states.add(Vt.Focus),this.$emit("drag-start")}},{key:"dragMove",value:function(t){if(!this.states.has(Vt.Drag))return!1;t.preventDefault();var e=this.getPosByEvent(t);this.isCrossDot(e),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos();var r=this.control.dotsValue;this.$emit("dragging",1===r.length?r[0]:gt(r))}},{key:"isCrossDot",value:function(t){if(this.canSort){var e=this.focusDotIndex,r=t;r>this.dragRange[1]?(r=this.dragRange[1],this.focusDotIndex++):r<this.dragRange[0]&&(r=this.dragRange[0],this.focusDotIndex--),e!==this.focusDotIndex&&this.control.setDotPos(r,e)}}},{key:"dragEnd",value:function(){var t=this;if(!this.states.has(Vt.Drag))return!1;setTimeout(function(){t.lazy&&t.syncValueByPos(),t.included&&t.isNotSync?t.control.setValue(t.value):t.control.syncDotsPos(),t.states.delete(Vt.Drag),t.useKeyboard||t.states.delete(Vt.Focus),t.$emit("drag-end")})}},{key:"blurHandle",value:function(t){if(!this.states.has(Vt.Focus)||!this.$refs.container||this.$refs.container.contains(t.target))return!1;this.states.delete(Vt.Focus)}},{key:"clickHandle",value:function(t){if(!this.clickable||this.disabled)return!1;if(!this.states.has(Vt.Drag)){this.setScale();var e=this.getPosByEvent(t);this.setValueByPos(e)}}},{key:"focus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.states.add(Vt.Focus),this.focusDotIndex=t}},{key:"blur",value:function(){this.states.delete(Vt.Focus)}},{key:"getValue",value:function(){var t=this.control.dotsValue;return 1===t.length?t[0]:t}},{key:"getIndex",value:function(){var t=this.control.dotsIndex;return 1===t.length?t[0]:t}},{key:"setValue",value:function(t){this.control.setValue(Array.isArray(t)?gt(t):[t]),this.syncValueByPos()}},{key:"setIndex",value:function(t){var e=this,r=Array.isArray(t)?t.map(function(t){return e.control.getValueByIndex(t)}):this.control.getValueByIndex(t);this.setValue(r)}},{key:"setValueByPos",value:function(t){var e=this,r=this.control.getRecentDot(t);if(this.disabled||this.dots[r].disabled)return!1;this.focusDotIndex=r,this.control.setDotPos(t,r),this.syncValueByPos(),this.useKeyboard&&this.states.add(Vt.Focus),setTimeout(function(){e.included&&e.isNotSync?e.control.setValue(e.value):e.control.syncDotsPos()})}},{key:"keydownHandle",value:function(t){var e=this;if(!this.useKeyboard||!this.states.has(Vt.Focus))return!1;var r=this.included&&this.marks,n=z(t,{direction:this.direction,max:r?this.control.markList.length-1:this.control.total,min:0,hook:this.keydownHook});if(n){t.preventDefault();var o=-1,i=0;r?(this.control.markList.some(function(t,r){return t.value===e.control.dotsValue[e.focusDotIndex]&&(o=n(r),!0)}),o<0?o=0:o>this.control.markList.length-1&&(o=this.control.markList.length-1),i=this.control.markList[o].pos):(o=n(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])),i=this.control.parseValue(this.control.getValueByIndex(o))),this.isCrossDot(i),this.control.setDotPos(i,this.focusDotIndex),this.syncValueByPos()}}},{key:"getPosByEvent",value:function(t){return I(t,this.$el,this.isReverse)[this.isHorizontal?"x":"y"]/this.scale}},{key:"renderSlot",value:function(t,e,r,n){var o=this.$createElement,i=this.$scopedSlots[t];return i?n?i(e):o("template",{slot:t},[i(e)]):r}},{key:"render",value:function(){var t=this,e=arguments[0];return e("div",i()([{ref:"container",class:this.containerClasses,style:this.containerStyles,on:{click:this.clickHandle,touchstart:this.dragStartOnProcess,mousedown:this.dragStartOnProcess}},this.$attrs]),[e("div",{class:"vue-slider-rail",style:this.railStyle},[this.processArray.map(function(r,n){return t.renderSlot("process",r,e("div",{class:"vue-slider-process",key:"process-".concat(n),style:r.style}),!0)}),this.marks?e("div",{class:"vue-slider-marks"},[this.control.markList.map(function(r,n){var o;return t.renderSlot("mark",r,e("vue-slider-mark",{key:"mark-".concat(n),attrs:{mark:r,hideLabel:t.hideLabel,stepStyle:t.stepStyle,stepActiveStyle:t.stepActiveStyle,labelStyle:t.labelStyle,labelActiveStyle:t.labelActiveStyle},style:(o={},bt(o,t.isHorizontal?"height":"width","100%"),bt(o,t.isHorizontal?"width":"height",t.tailSize),bt(o,t.mainDirection,"".concat(r.pos,"%")),o),on:{pressLabel:function(e){return t.clickable&&t.setValueByPos(e)}}},[t.renderSlot("step",r,null),t.renderSlot("label",r,null)]),!0)})]):null,this.dots.map(function(r,n){var o;return e("vue-slider-dot",{ref:"dot-".concat(n),key:"dot-".concat(n),attrs:{value:r.value,disabled:r.disabled,focus:r.focus,"dot-style":[r.style,r.disabled?r.disabledStyle:null,r.focus?r.focusStyle:null],tooltip:r.tooltip||t.tooltip,"tooltip-style":[t.tooltipStyle,r.tooltipStyle,r.disabled?r.tooltipDisabledStyle:null,r.focus?r.tooltipFocusStyle:null],"tooltip-formatter":Array.isArray(t.tooltipFormatter)?t.tooltipFormatter[n]:t.tooltipFormatter,"tooltip-placement":t.tooltipDirections[n]},style:[t.dotBaseStyle,(o={},bt(o,t.mainDirection,"".concat(r.pos,"%")),bt(o,"transition","".concat(t.mainDirection," ").concat(t.animateTime,"s")),o)],on:{"drag-start":function(){return t.dragStart(n)}}},[t.renderSlot("dot",r,null),t.renderSlot("tooltip",r,null)])}),this.renderSlot("default",null,null,!0)])])}},{key:"tailSize",get:function(){return B((this.isHorizontal?this.height:this.width)||_t)}},{key:"containerClasses",get:function(){return["vue-slider",["vue-slider-".concat(this.direction)],{"vue-slider-disabled":this.disabled}]}},{key:"containerStyles",get:function(){var t=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],e=pt(t,2),r=e[0],n=e[1],o=this.width?B(this.width):this.isHorizontal?"auto":B(_t),i=this.height?B(this.height):this.isHorizontal?B(_t):"auto";return{padding:this.contained?"".concat(n/2,"px ").concat(r/2,"px"):this.isHorizontal?"".concat(n/2,"px 0"):"0 ".concat(r/2,"px"),width:o,height:i}}},{key:"processArray",get:function(){var t=this;return this.control.processArray.map(function(e,r){var n,o=pt(e,3),i=o[0],s=o[1],a=o[2];if(i>s){var u=[s,i];i=u[0],s=u[1]}var l=t.isHorizontal?"width":"height";return{start:i,end:s,index:r,style:ht((n={},bt(n,t.isHorizontal?"height":"width","100%"),bt(n,t.isHorizontal?"top":"left",0),bt(n,t.mainDirection,"".concat(i,"%")),bt(n,l,"".concat(s-i,"%")),bt(n,"transitionProperty","".concat(l,",").concat(t.mainDirection)),bt(n,"transitionDuration","".concat(t.animateTime,"s")),n),t.processStyle,a)}})}},{key:"dotBaseStyle",get:function(){var t,e=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],r=pt(e,2),n=r[0],o=r[1];return t=this.isHorizontal?bt({transform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),WebkitTransform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),top:"50%"},"ltr"===this.direction?"left":"right","0"):bt({transform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),WebkitTransform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),left:"50%"},"btt"===this.direction?"bottom":"top","0"),ht({width:"".concat(n,"px"),height:"".concat(o,"px")},t)}},{key:"mainDirection",get:function(){switch(this.direction){case"ltr":return"left";case"rtl":return"right";case"btt":return"bottom";case"ttb":return"top"}}},{key:"isHorizontal",get:function(){return"ltr"===this.direction||"rtl"===this.direction}},{key:"isReverse",get:function(){return"rtl"===this.direction||"btt"===this.direction}},{key:"tooltipDirections",get:function(){var t=this.tooltipPlacement||(this.isHorizontal?"top":"left");return Array.isArray(t)?t:this.dots.map(function(){return t})}},{key:"dots",get:function(){var t=this;return this.control.dotsPos.map(function(e,r){return ht({pos:e,index:r,value:t.control.dotsValue[r],focus:t.states.has(Vt.Focus)&&t.focusDotIndex===r,disabled:t.disabled,style:t.dotStyle},(Array.isArray(t.dotOptions)?t.dotOptions[r]:t.dotOptions)||{})})}},{key:"animateTime",get:function(){return this.states.has(Vt.Drag)?0:this.duration}},{key:"canSort",get:function(){return this.order&&!this.minRange&&!this.maxRange&&!this.fixed&&this.enableCross}},{key:"isNotSync",get:function(){var t=this.control.dotsValue;return Array.isArray(this.value)?this.value.length!==t.length||this.value.some(function(e,r){return e!==t[r]}):this.value!==t[0]}},{key:"dragRange",get:function(){var t=this.dots[this.focusDotIndex-1],e=this.dots[this.focusDotIndex+1];return[t?t.pos:-1/0,e?e.pos:1/0]}}]),e}(u.a);s([d("change",{default:0})],Mt.prototype,"value",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"silent",void 0),s([f({default:"ltr",validator:function(t){return["ltr","rtl","ttb","btt"].indexOf(t)>-1}})],Mt.prototype,"direction",void 0),s([f({type:[Number,String]})],Mt.prototype,"width",void 0),s([f({type:[Number,String]})],Mt.prototype,"height",void 0),s([f({default:14})],Mt.prototype,"dotSize",void 0),s([f({default:!1})],Mt.prototype,"contained",void 0),s([f({type:Number,default:0})],Mt.prototype,"min",void 0),s([f({type:Number,default:100})],Mt.prototype,"max",void 0),s([f({type:Number,default:1})],Mt.prototype,"interval",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"disabled",void 0),s([f({type:Boolean,default:!0})],Mt.prototype,"clickable",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"dragOnClick",void 0),s([f({type:Number,default:.5})],Mt.prototype,"duration",void 0),s([f(Array)],Mt.prototype,"data",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"lazy",void 0),s([f({type:String,validator:function(t){return["none","always","focus","hover","active"].indexOf(t)>-1},default:"active"})],Mt.prototype,"tooltip",void 0),s([f({type:[String,Array],validator:function(t){return(Array.isArray(t)?t:[t]).every(function(t){return["top","right","bottom","left"].indexOf(t)>-1})}})],Mt.prototype,"tooltipPlacement",void 0),s([f({type:[String,Array,Function]})],Mt.prototype,"tooltipFormatter",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"useKeyboard",void 0),s([f(Function)],Mt.prototype,"keydownHook",void 0),s([f({type:Boolean,default:!0})],Mt.prototype,"enableCross",void 0),s([f({type:Boolean,default:!1})],Mt.prototype,"fixed",void 0),s([f({type:Boolean,default:!0})],Mt.prototype,"order",void 0),s([f(Number)],Mt.prototype,"minRange",void 0),s([f(Number)],Mt.prototype,"maxRange",void 0),s([f({type:[Boolean,Object,Array,Function],default:!1})],Mt.prototype,"marks",void 0),s([f({type:[Boolean,Function],default:!0})],Mt.prototype,"process",void 0),s([f(Boolean)],Mt.prototype,"included",void 0),s([f(Boolean)],Mt.prototype,"adsorb",void 0),s([f(Boolean)],Mt.prototype,"hideLabel",void 0),s([f()],Mt.prototype,"dotOptions",void 0),s([f()],Mt.prototype,"railStyle",void 0),s([f()],Mt.prototype,"processStyle",void 0),s([f()],Mt.prototype,"dotStyle",void 0),s([f()],Mt.prototype,"tooltipStyle",void 0),s([f()],Mt.prototype,"stepStyle",void 0),s([f()],Mt.prototype,"stepActiveStyle",void 0),s([f()],Mt.prototype,"labelStyle",void 0),s([f()],Mt.prototype,"labelActiveStyle",void 0),s([h("value")],Mt.prototype,"onValueChanged",null),Mt=s([c()({data:function(){return{control:null}},components:{VueSliderDot:P,VueSliderMark:N}})],Mt);var Ct=Mt;Ct.VueSliderMark=N,Ct.VueSliderDot=P;var Lt=Ct;r.d(e,"ERROR_TYPE",function(){return W}),r.d(e,"VueSliderMark",function(){return N}),r.d(e,"VueSliderDot",function(){return P});e["default"]=Lt}})["default"]});
//# sourceMappingURL=vue-slider-component.umd.min.js.map

/***/ }),

/***/ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue2-dropzone/dist/vue2Dropzone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e,t=(function(e){var t=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){n(this,e)}return t(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0,s=s=t;;){if(o>=s.length)break;s[o++].apply(this,n)}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var n=0;n<i.length;n++){if(i[n]===t){i.splice(n,1);break}}return this}}]),e}(),o=function(e){function o(e,t){n(this,o);var r,s=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),a=void 0;if(s.element=e,s.version=o.version,s.defaultOptions.previewTemplate=s.defaultOptions.previewTemplate.replace(/\n*/g,""),s.clickableElements=[],s.listeners=[],s.files=[],"string"==typeof s.element&&(s.element=document.querySelector(s.element)),!s.element||null==s.element.nodeType)throw new Error("Invalid dropzone element.");if(s.element.dropzone)throw new Error("Dropzone already attached.");o.instances.push(s),s.element.dropzone=s;var l,u=null!=(r=o.optionsForElement(s.element))?r:{};if(s.options=o.extend({},s.defaultOptions,u,null!=t?t:{}),s.options.forceFallback||!o.isBrowserSupported())return l=s.options.fallback.call(s),i(s,l);if(null==s.options.url&&(s.options.url=s.element.getAttribute("action")),!s.options.url)throw new Error("No URL provided.");if(s.options.acceptedFiles&&s.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(s.options.uploadMultiple&&s.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return s.options.acceptedMimeTypes&&(s.options.acceptedFiles=s.options.acceptedMimeTypes,delete s.options.acceptedMimeTypes),null!=s.options.renameFilename&&(s.options.renameFile=function(e){return s.options.renameFilename.call(s,e.name,e)}),s.options.method=s.options.method.toUpperCase(),(a=s.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==s.options.previewsContainer&&(s.options.previewsContainer?s.previewsContainer=o.getElement(s.options.previewsContainer,"previewsContainer"):s.previewsContainer=s.element),s.options.clickable&&(!0===s.options.clickable?s.clickableElements=[s.element]:s.clickableElements=o.getElements(s.options.clickable,"clickable")),s.init(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,r),t(o,null,[{key:"initClass",value:function(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,i=i=this.element.getElementsByTagName("div");;){if(t>=i.length)break;var n=i[t++];if(/(^| )dz-message($| )/.test(n.className)){e=n,n.className="dz-message";break}}e||(e=o.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==i?(t=r.srcWidth,i=r.srcHeight):null==t?t=i*o:null==i&&(i=t/o);var s=(t=Math.min(t,r.srcWidth))/(i=Math.min(i,r.srcHeight));if(r.srcWidth>t||r.srcHeight>i)if("crop"===n)o>s?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*s):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");o>s?i=t/o:t=i*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=i,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=o.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-name]");;){if(i>=n.length)break;var r=n[i++];r.textContent=e.name}for(var s=0,a=a=e.previewElement.querySelectorAll("[data-dz-size]");!(s>=a.length);)(r=a[s++]).innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=o.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink));for(var l=function(i){return i.preventDefault(),i.stopPropagation(),e.status===o.UPLOADING?o.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?o.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)},u=0,d=d=e.previewElement.querySelectorAll("[data-dz-remove]");;){if(u>=d.length)break;d[u++].addEventListener("click",l)}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(i>=n.length)break;var r=n[i++];r.alt=e.name,r.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(i>=n.length)break;n[i++].textContent=t}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,i){if(e.previewElement)for(var n=0,r=r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(n>=r.length)break;var o=r[n++];"PROGRESS"===o.nodeName?o.value=t:o.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var r=0,o=o=i;;){if(r>=o.length)break;var s=o[r++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),t(o,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(e){return this.files.filter(function(t){return t.status===e}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(o.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(o.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(o.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===o.UPLOADING||e.status===o.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var e=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(o.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length){!function t(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",o.getElement(e.options.hiddenInputContainer,"hiddenInputContainer").appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var i=e.hiddenFileInput.files;if(i.length)for(var n=0,r=r=i;!(n>=r.length);){var o=r[n++];e.addFile(o)}return e.emit("addedfiles",i),t()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(var t=0,i=i=this.events;;){if(t>=i.length)break;var n=i[t++];this.on(n,this.options[n])}this.on("uploadprogress",function(){return e.updateTotalUploadProgress()}),this.on("removedfile",function(){return e.updateTotalUploadProgress()}),this.on("canceled",function(t){return e.emit("complete",t)}),this.on("complete",function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)});var r=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return r(t),e.emit("dragenter",t)},dragover:function(t){var i=void 0;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",r(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return r(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach(function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||o.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,o.instances.splice(o.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,i=0;if(this.getActiveFiles().length){for(var n=0,r=r=this.getActiveFiles();;){if(n>=r.length)break;var o=r[n++];t+=o.upload.bytesSent,i+=o.upload.total}e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var n=o.createElement(i);return"FORM"!==this.element.tagName?(t=o.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(n):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:n}},{key:"getExistingFallback",value:function(){for(var e=function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];if(/(^| )fallback($| )/.test(n.className))return n}},t=["div","form"],i=0;i<t.length;i++){var n,r=t[i];if(n=e(this.element.getElementsByTagName(r)))return n}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.addEventListener(i,n,!1))}return t}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.removeEventListener(i,n,!1))}return t}()})}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.disabled=!0,this.files.map(function(t){return e.cancelUpload(t)})}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,i="b";if(e>0){for(var n=["tb","gb","mb","kb","b"],r=0;r<n.length;r++){var o=n[r];if(e>=Math.pow(this.options.filesizeBase,4-r)/10){t=e/Math.pow(this.options.filesizeBase,4-r),i=o;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[i]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(t=null!=e?e.clipboardData:void 0,i=function(e){return e.items},null!=t?i(t):void 0)){var t,i;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.addFile(n)}}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){for(var i=[],n=0,r=r=e;;){if(n>=r.length)break;var o,s=r[n++];null!=s.webkitGetAsEntry&&(o=s.webkitGetAsEntry())?o.isFile?i.push(t.addFile(s.getAsFile())):o.isDirectory?i.push(t._addFilesFromDirectory(o,o.name)):i.push(void 0):null!=s.getAsFile&&(null==s.kind||"file"===s.kind)?i.push(t.addFile(s.getAsFile())):i.push(void 0)}return i}()}},{key:"_addFilesFromDirectory",value:function(e,t){var i=this,n=e.createReader(),r=function(e){return t=console,i="log",n=function(t){return t.log(e)},null!=t&&"function"==typeof t[i]?n(t,i):void 0;var t,i,n};return function e(){return n.readEntries(function(n){if(n.length>0){for(var r=0,o=o=n;!(r>=o.length);){var s=o[r++];s.isFile?s.file(function(e){if(!i.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,i.addFile(e)}):s.isDirectory&&i._addFilesFromDirectory(s,t+"/"+s.name)}e()}return null},r)}()}},{key:"accept",value:function(e,t){return this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):o.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;return e.upload={uuid:o.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e),chunked:this.options.chunking&&(this.options.forceChunking||e.size>this.options.chunkSize),totalChunkCount:Math.ceil(e.size/this.options.chunkSize)},this.files.push(e),e.status=o.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.enqueueFile(n)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==o.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=o.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(i){return e.emit("thumbnail",t,i),e._processingThumbnail=!1,e._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===o.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,i=i=this.files.slice();;){if(t>=i.length)break;var n=i[t++];(n.status!==o.UPLOADING||e)&&this.removeFile(n)}return null}},{key:"resizeImage",value:function(e,t,i,n,r){var s=this;return this.createThumbnail(e,t,i,n,!0,function(t,i){if(null==i)return r(e);var n=s.options.resizeMimeType;null==n&&(n=e.type);var a=i.toDataURL(n,s.options.resizeQuality);return"image/jpeg"!==n&&"image/jpg"!==n||(a=u.restore(e.dataURL,a)),r(o.dataURItoBlob(a))})}},{key:"createThumbnail",value:function(e,t,i,n,r,o){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,i,n,r,o);null!=o&&o(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(e,t,i,n,r,o,s){var a=this,u=document.createElement("img");return s&&(u.crossOrigin=s),u.onload=function(){var s=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(s=function(e){return EXIF.getData(u,function(){return e(EXIF.getTag(this,"Orientation"))})}),s(function(r){e.width=u.width,e.height=u.height;var s=a.options.resize.call(a,e,t,i,n),d=document.createElement("canvas"),c=d.getContext("2d");switch(d.width=s.trgWidth,d.height=s.trgHeight,r>4&&(d.width=s.trgHeight,d.height=s.trgWidth),r){case 2:c.translate(d.width,0),c.scale(-1,1);break;case 3:c.translate(d.width,d.height),c.rotate(Math.PI);break;case 4:c.translate(0,d.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-d.width);break;case 7:c.rotate(.5*Math.PI),c.translate(d.height,-d.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-d.height,0)}l(c,u,null!=s.srcX?s.srcX:0,null!=s.srcY?s.srcY:0,s.srcWidth,s.srcHeight,null!=s.trgX?s.trgX:0,null!=s.trgY?s.trgY:0,s.trgWidth,s.trgHeight);var p=d.toDataURL("image/png");if(null!=o)return o(p,d)})},null!=o&&(u.onerror=o),u.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,i=t;if(!(t>=e)){var n=this.getQueuedFiles();if(n.length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-t));for(;i<e;){if(!n.length)return;this.processFile(n.shift()),i++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];n.processing=!0,n.status=o.UPLOADING,this.emit("processing",n)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter(function(t){return t.xhr===e}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===o.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),i=0,n=n=t;;){if(i>=n.length)break;n[i++].status=o.CANCELED}void 0!==e.xhr&&e.xhr.abort();for(var r=0,s=s=t;;){if(r>=s.length)break;var a=s[r++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==o.ADDED&&e.status!==o.QUEUED||(e.status=o.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.apply(this,i)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,function(i){if(e[0].upload.chunked){var n=e[0],r=i[0];n.upload.chunks=[];var s=function(){for(var i=0;void 0!==n.upload.chunks[i];)i++;if(!(i>=n.upload.totalChunkCount)){var s=i*t.options.chunkSize,a=Math.min(s+t.options.chunkSize,n.size),l={name:t._getParamName(0),data:r.webkitSlice?r.webkitSlice(s,a):r.slice(s,a),filename:n.upload.filename,chunkIndex:i};n.upload.chunks[i]={file:n,index:i,dataBlock:l,status:o.UPLOADING,progress:0,retries:0},t._uploadData(e,[l])}};if(n.upload.finishedChunkUpload=function(i){var r=!0;i.status=o.SUCCESS,i.dataBlock=null,i.xhr=null;for(var a=0;a<n.upload.totalChunkCount;a++){if(void 0===n.upload.chunks[a])return s();n.upload.chunks[a].status!==o.SUCCESS&&(r=!1)}r&&t.options.chunksUploaded(n,function(){t._finished(e,"",null)})},t.options.parallelChunkUploads)for(var a=0;a<n.upload.totalChunkCount;a++)s();else s()}else{for(var l=[],u=0;u<e.length;u++)l[u]={name:t._getParamName(u),data:i[u],filename:e[u].upload.filename};t._uploadData(e,l)}})}},{key:"_getChunk",value:function(e,t){for(var i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}},{key:"_uploadData",value:function(e,t){for(var i=this,n=new XMLHttpRequest,r=0,s=s=e;;){if(r>=s.length)break;s[r++].xhr=n}e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=n);var a=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e);n.open(a,l,!0),n.timeout=this.resolveOption(this.options.timeout,e),n.withCredentials=!!this.options.withCredentials,n.onload=function(t){i._finishedUploading(e,n,t)},n.onerror=function(){i._handleUploadError(e,n)},(null!=n.upload?n.upload:n).onprogress=function(t){return i._updateFilesUploadProgress(e,n,t)};var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var d in this.options.headers&&o.extend(u,this.options.headers),u){var c=u[d];c&&n.setRequestHeader(d,c)}var p=new FormData;if(this.options.params){var h=this.options.params;for(var f in"function"==typeof h&&(h=h.call(this,e,n,e[0].upload.chunked?this._getChunk(e[0],n):null)),h){var m=h[f];p.append(f,m)}}for(var v=0,g=g=e;;){if(v>=g.length)break;var k=g[v++];this.emit("sending",k,n,p)}this.options.uploadMultiple&&this.emit("sendingmultiple",e,n,p),this._addFormElementData(p);for(var y=0;y<t.length;y++){var b=t[y];p.append(b.name,b.data,b.filename)}this.submitRequest(n,p,e)}},{key:"_transformFiles",value:function(e,t){for(var i=this,n=[],r=0,o=function(o){i.options.transformFile.call(i,e[o],function(i){n[o]=i,++r===e.length&&t(n)})},s=0;s<e.length;s++)o(s)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,i=i=this.element.querySelectorAll("input, textarea, select, button");;){if(t>=i.length)break;var n=i[t++],r=n.getAttribute("name"),o=n.getAttribute("type");if(o&&(o=o.toLowerCase()),null!=r)if("SELECT"===n.tagName&&n.hasAttribute("multiple"))for(var s=0,a=a=n.options;;){if(s>=a.length)break;var l=a[s++];l.selected&&e.append(r,l.value)}else(!o||"checkbox"!==o&&"radio"!==o||n.checked)&&e.append(r,n.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,i){var n=void 0;if(void 0!==i){if(n=100*i.loaded/i.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=n,o.total=i.total,o.bytesSent=i.loaded,r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var s=0;s<r.upload.totalChunkCount;s++)void 0!==r.upload.chunks[s]&&void 0!==r.upload.chunks[s].progress&&(r.upload.progress+=r.upload.chunks[s].progress,r.upload.total+=r.upload.chunks[s].total,r.upload.bytesSent+=r.upload.chunks[s].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,l=l=e;;){if(a>=l.length)break;var u=l[a++];u.upload.progress=n,u.upload.total=i.total,u.upload.bytesSent=i.loaded}for(var d=0,c=c=e;;){if(d>=c.length)break;var p=c[d++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;n=100;for(var f=0,m=m=e;;){if(f>=m.length)break;var v=m[f++];100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=n,v.upload.bytesSent=v.upload.total}if(h)return;for(var g=0,k=k=e;;){if(g>=k.length)break;var y=k[g++];this.emit("uploadprogress",y,n,y.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,i){var n=void 0;if(e[0].status!==o.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(n=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(e){i=e,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,n,i):this._handleUploadError(e,t,n)}}},{key:"_handleUploadError",value:function(e,t,i){if(e[0].status!==o.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var n=this._getChunk(e[0],t);if(n.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[n.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,s=s=e;;){if(r>=s.length)break;s[r++],this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}}},{key:"submitRequest",value:function(e,t,i){e.send(t)}},{key:"_finished",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.SUCCESS,this.emit("success",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.ERROR,this.emit("error",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),o}();o.initClass(),o.version="5.5.1",o.options={},o.optionsForElement=function(e){return e.getAttribute("id")?o.options[a(e.getAttribute("id"))]:void 0},o.instances=[],o.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},o.autoDiscover=!0,o.discover=function(){var e=void 0;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){for(var i=[],n=0,r=r=t;;){if(n>=r.length)break;var o=r[n++];/(^| )dropzone($| )/.test(o.className)?i.push(e.push(o)):i.push(void 0)}return i}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){for(var t=[],i=0,n=n=e;;){if(i>=n.length)break;var r=n[i++];!1!==o.optionsForElement(r)?t.push(new o(r)):t.push(void 0)}return t}()},o.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],o.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,i=i=o.blacklistedBrowsers;;){if(t>=i.length)break;i[t++].test(navigator.userAgent)&&(e=!1)}else e=!1;else e=!1;return e},o.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),o=0,s=t.length,a=0<=s;a?o<=s:o>=s;a?o++:o--)r[o]=t.charCodeAt(o);return new Blob([n],{type:i})};var s=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},a=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};o.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},o.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},o.getElement=function(e,t){var i=void 0;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},o.getElements=function(e,t){var i=void 0,n=void 0;if(e instanceof Array){n=[];try{for(var r=0,o=o=e;!(r>=o.length);)i=o[r++],n.push(this.getElement(i,t))}catch(e){n=null}}else if("string"==typeof e){n=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)i=a[s++],n.push(i)}else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},o.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},o.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var i=e.type,n=i.replace(/\/.*$/,""),r=0,o=o=t;;){if(r>=o.length)break;var s=o[r++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(n===s.replace(/\/.*$/,""))return!0}else if(i===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new o(this,e)})}),null!==e?e.exports=o:window.Dropzone=o,o.ADDED="added",o.QUEUED="queued",o.ACCEPTED=o.QUEUED,o.UPLOADING="uploading",o.PROCESSING=o.UPLOADING,o.CANCELED="canceled",o.ERROR="error",o.SUCCESS="success";var l=function(e,t,i,n,r,o,s,a,l,u){var d=function(e){e.naturalWidth;var t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;var n=i.getContext("2d");n.drawImage(e,0,0);for(var r=n.getImageData(1,0,1,t).data,o=0,s=t,a=t;a>o;)0===r[4*(a-1)+3]?s=a:o=a,a=s+o>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,i,n,r,o,s,a,l,u/d)},u=function(){function e(){n(this,e)}return t(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",i=void 0,n=void 0,r="",o=void 0,s=void 0,a=void 0,l="",u=0;o=(i=e[u++])>>2,s=(3&i)<<4|(n=e[u++])>>4,a=(15&n)<<2|(r=e[u++])>>6,l=63&r,isNaN(n)?a=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),i=n=r="",o=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var i=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(i),r=this.exifManipulation(t,n);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(e,t){var i=this.getExifArray(t),n=this.insertExif(e,i);return new Uint8Array(n)}},{key:"getExifArray",value:function(e){for(var t=void 0,i=0;i<e.length;){if(255===(t=e[i])[0]&225===t[1])return t;i++}return[]}},{key:"insertExif",value:function(e,t){var i=e.replace("data:image/jpeg;base64,",""),n=this.decode64(i),r=n.indexOf(255,3),o=n.slice(0,r),s=n.slice(r),a=o;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,i=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var n=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,n);i.push(r),t=n}if(t>e.length)break}return i}},{key:"decode64",value:function(e){var t=void 0,i=void 0,n="",r=void 0,o=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>4,i=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>2,n=(3&o)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==o&&l.push(i),64!==s&&l.push(n),t=i=n="",r=o=s="",a<e.length;);return l}}]),e}();u.initClass(),o._autoDiscoverFunction=function(){if(o.autoDiscover)return o.discover()},function(e,t){var i=!1,n=!0,r=e.document,o=r.documentElement,s=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",l=r.addEventListener?"":"on",u=function n(o){if("readystatechange"!==o.type||"complete"===r.readyState)return("load"===o.type?e:r)[a](l+o.type,n,!1),!i&&(i=!0)?t.call(e,o.type||o):void 0};if("complete"!==r.readyState){if(r.createEventObject&&o.doScroll){try{n=!e.frameElement}catch(e){}n&&function e(){try{o.doScroll("left")}catch(t){return void setTimeout(e,50)}return u("poll")}()}r[s](l+"DOMContentLoaded",u,!1),r[s](l+"readystatechange",u,!1),e[s](l+"load",u,!1)}}(window,o._autoDiscoverFunction)}(e={exports:{}},e.exports),e.exports),i={getSignedURL(e,t){let i={filePath:e.name,contentType:e.type};return new Promise((n,r)=>{var o=new FormData;let s=new XMLHttpRequest,a="function"==typeof t.signingURL?t.signingURL(e):t.signingURL;s.open("POST",a),s.onload=function(){200==s.status?n(JSON.parse(s.response)):r(s.statusText)},s.onerror=function(e){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),r(e)},!0===t.withCredentials&&(s.withCredentials=!0),Object.entries(t.headers||{}).forEach(([e,t])=>{s.setRequestHeader(e,t)}),i=Object.assign(i,t.params||{}),Object.entries(i).forEach(([e,t])=>{o.append(e,t)}),s.send(o)})},sendFile(e,t,i){var n=i?this.setResponseHandler:this.sendS3Handler;return this.getSignedURL(e,t).then(t=>n(t,e)).catch(e=>e)},setResponseHandler(e,t){t.s3Signature=e.signature,t.s3Url=e.postEndpoint},sendS3Handler(e,t){let i=new FormData,n=e.signature;return Object.keys(n).forEach(function(e){i.append(e,n[e])}),i.append("file",t),new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("POST",e.postEndpoint),r.onload=function(){if(201==r.status){var e=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;t({success:!0,message:e})}else{var i=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;n({success:!1,message:i+". Request is marked as resolved when returns as status 201"})}},r.onerror=function(e){var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[1].innerHTML;n({success:!1,message:t})},r.send(i)})}};t.autoDiscover=!1;return function(e,t,i,n,r,o,s,a,l,u){"boolean"!=typeof s&&(l=a,a=s,s=!1);var d,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),n&&(c._scopeId=n),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):t&&(d=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(c.functional){var p=c.render;c.render=function(e,t){return d.call(t),p(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,d):[d]}return i}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":this.includeStyling},attrs:{id:this.id}},[this.useCustomSlot?t("div",{staticClass:"dz-message"},[this._t("default",[this._v("Drop files here to upload")])],2):this._e()])},staticRenderFns:[]},void 0,{props:{id:{type:String,required:!0,default:"dropzone"},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1},duplicateCheck:{type:Boolean,default:!1,required:!1},useCustomSlot:{type:Boolean,default:!1,required:!1}},data:()=>({isS3:!1,isS3OverridesServerPropagation:!1,wasQueueAutoProcess:!0}),computed:{dropzoneSettings(){let e={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach(function(t){e[t]=this.options[t]},this),null!==this.awss3&&(e.autoProcessQueue=!1,this.isS3=!0,this.isS3OverridesServerPropagation=!1===this.awss3.sendFileToServer,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue),this.isS3OverridesServerPropagation&&(e.url=(e=>e[0].s3Url))),e}},mounted(){if(this.$isServer&&this.hasBeenMounted)return;this.hasBeenMounted=!0,this.dropzone=new t(this.$refs.dropzoneElement,this.dropzoneSettings);let e=this;this.dropzone.on("thumbnail",function(t,i){e.$emit("vdropzone-thumbnail",t,i)}),this.dropzone.on("addedfile",function(t){var i,n;if(e.duplicateCheck&&this.files.length)for(i=0,n=this.files.length;i<n-1;i++)this.files[i].name===t.name&&this.files[i].size===t.size&&this.files[i].lastModifiedDate.toString()===t.lastModifiedDate.toString()&&(this.removeFile(t),e.$emit("vdropzone-duplicate-file",t));e.$emit("vdropzone-file-added",t),e.isS3&&e.wasQueueAutoProcess&&!t.manuallyAdded&&e.getSignedAndUploadToS3(t)}),this.dropzone.on("addedfiles",function(t){e.$emit("vdropzone-files-added",t)}),this.dropzone.on("removedfile",function(t){e.$emit("vdropzone-removed-file",t),t.manuallyAdded&&null!==e.dropzone.options.maxFiles&&e.dropzone.options.maxFiles++}),this.dropzone.on("success",function(t,i){if(e.$emit("vdropzone-success",t,i),e.isS3){if(e.isS3OverridesServerPropagation){var n=(new window.DOMParser).parseFromString(i,"text/xml").firstChild.children[0].innerHTML;e.$emit("vdropzone-s3-upload-success",n)}e.wasQueueAutoProcess&&e.setOption("autoProcessQueue",!1)}}),this.dropzone.on("successmultiple",function(t,i){e.$emit("vdropzone-success-multiple",t,i)}),this.dropzone.on("error",function(t,i,n){e.$emit("vdropzone-error",t,i,n),this.isS3&&e.$emit("vdropzone-s3-upload-error")}),this.dropzone.on("errormultiple",function(t,i,n){e.$emit("vdropzone-error-multiple",t,i,n)}),this.dropzone.on("sending",function(t,i,n){if(e.isS3)if(e.isS3OverridesServerPropagation){let e=t.s3Signature;Object.keys(e).forEach(function(t){n.append(t,e[t])})}else n.append("s3ObjectLocation",t.s3ObjectLocation);e.$emit("vdropzone-sending",t,i,n)}),this.dropzone.on("sendingmultiple",function(t,i,n){e.$emit("vdropzone-sending-multiple",t,i,n)}),this.dropzone.on("complete",function(t){e.$emit("vdropzone-complete",t)}),this.dropzone.on("completemultiple",function(t){e.$emit("vdropzone-complete-multiple",t)}),this.dropzone.on("canceled",function(t){e.$emit("vdropzone-canceled",t)}),this.dropzone.on("canceledmultiple",function(t){e.$emit("vdropzone-canceled-multiple",t)}),this.dropzone.on("maxfilesreached",function(t){e.$emit("vdropzone-max-files-reached",t)}),this.dropzone.on("maxfilesexceeded",function(t){e.$emit("vdropzone-max-files-exceeded",t)}),this.dropzone.on("processing",function(t){e.$emit("vdropzone-processing",t)}),this.dropzone.on("processingmultiple",function(t){e.$emit("vdropzone-processing-multiple",t)}),this.dropzone.on("uploadprogress",function(t,i,n){e.$emit("vdropzone-upload-progress",t,i,n)}),this.dropzone.on("totaluploadprogress",function(t,i,n){e.$emit("vdropzone-total-upload-progress",t,i,n)}),this.dropzone.on("reset",function(){e.$emit("vdropzone-reset")}),this.dropzone.on("queuecomplete",function(){e.$emit("vdropzone-queue-complete")}),this.dropzone.on("drop",function(t){e.$emit("vdropzone-drop",t)}),this.dropzone.on("dragstart",function(t){e.$emit("vdropzone-drag-start",t)}),this.dropzone.on("dragend",function(t){e.$emit("vdropzone-drag-end",t)}),this.dropzone.on("dragenter",function(t){e.$emit("vdropzone-drag-enter",t)}),this.dropzone.on("dragover",function(t){e.$emit("vdropzone-drag-over",t)}),this.dropzone.on("dragleave",function(t){e.$emit("vdropzone-drag-leave",t)}),e.$emit("vdropzone-mounted")},beforeDestroy(){this.destroyDropzone&&this.dropzone.destroy()},methods:{manuallyAddFile:function(e,t){e.manuallyAdded=!0,this.dropzone.emit("addedfile",e);let i=!1;if((t.indexOf(".svg")>-1||t.indexOf(".png")>-1||t.indexOf(".jpg")>-1||t.indexOf(".jpeg")>-1||t.indexOf(".gif")>-1||t.indexOf(".webp")>-1)&&(i=!0),this.dropzone.options.createImageThumbnails&&i&&e.size<=1024*this.dropzone.options.maxThumbnailFilesize*1024){t&&this.dropzone.emit("thumbnail",e,t);for(var n=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),r=0;r<n.length;r++)n[r].style.width=this.dropzoneSettings.thumbnailWidth+"px",n[r].style.height=this.dropzoneSettings.thumbnailHeight+"px",n[r].style["object-fit"]="contain"}this.dropzone.emit("complete",e),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(e){this.dropzone.removeAllFiles(e)},processQueue:function(){let e=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach(e=>{this.getSignedAndUploadToS3(e)}):this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(e){return this.dropzone.filesize(e)},accept:function(e,t){return this.dropzone.accept(e,t)},addFile:function(e){return this.dropzone.addFile(e)},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3(e){var t=i.sendFile(e,this.awss3,this.isS3OverridesServerPropagation);this.isS3OverridesServerPropagation?t.then(()=>{setTimeout(()=>this.dropzone.processFile(e))}):t.then(t=>{t.success?(e.s3ObjectLocation=t.message,setTimeout(()=>this.dropzone.processFile(e)),this.$emit("vdropzone-s3-upload-success",t.message)):void 0!==t.message?this.$emit("vdropzone-s3-upload-error",t.message):this.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")}),t.catch(e=>{alert(e)})},setAWSSigningURL(e){this.isS3&&(this.awss3.signingURL=e)}}},void 0,!1,void 0,void 0,void 0)});
//# sourceMappingURL=vue2Dropzone.js.map


/***/ })

}]);