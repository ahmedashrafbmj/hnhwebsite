"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Intro-with-slider/intro-with-slider */ \"./src/components/Intro-with-slider/intro-with-slider.jsx\");\n/* harmony import */ var _components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About-us/about-us */ \"./src/components/About-us/about-us.jsx\");\n/* harmony import */ var _components_Services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services/services */ \"./src/components/Services/services.jsx\");\n/* harmony import */ var _components_Works_works__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Works/works */ \"./src/components/Works/works.jsx\");\n/* harmony import */ var _components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Numbers/numbers */ \"./src/components/Numbers/numbers.jsx\");\n/* harmony import */ var _components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Video-with-testimonials/video-with-testimonials */ \"./src/components/Video-with-testimonials/video-with-testimonials.jsx\");\n/* harmony import */ var _components_Skills_circle_skills_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Skills-circle/skills-circle */ \"./src/components/Skills-circle/skills-circle.jsx\");\n/* harmony import */ var _components_Clients_clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Clients/clients */ \"./src/components/Clients/clients.jsx\");\n/* harmony import */ var _components_blogs_Blogs1_blogs1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/blogs/Blogs1/blogs1 */ \"./src/components/blogs/Blogs1/blogs1.jsx\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Call-to-action/call-to-action */ \"./src/components/Call-to-action/call-to-action.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\ahmed hnh\\\\Hnh Website\\\\Main_files\\\\vie\\\\src\\\\pages\\\\index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setInterval(function () {\n      if (fixedSlider.current) {\n        var slidHeight = fixedSlider.current.offsetHeight;\n      }\n\n      if (MainContent.current) {\n        MainContent.current.style.marginTop = slidHeight + \"px\";\n      }\n    }, 1000);\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n        logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_11__.darkLogo);\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n        logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_11__.lightLogo);\n      }\n    });\n  }, [fixedSlider, MainContent, navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_layouts_Light__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      sliderRef: fixedSlider\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"div\", {\n      ref: MainContent,\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Services_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Works_works__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"video\", {\n        autoPlay: true,\n        controls: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"source\", {\n          src: \"/img/CompressVideo.mp4\",\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 3\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Clients_clients__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        theme: \"light\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_blogs_Blogs1_blogs1__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"YcvxAMScyFYs9YZ0O46x4wgwCw8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHdCQUFaO0FBQXFDLGNBQUksRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBV0UsK0RBQUMsbUVBQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFZRSwrREFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFhRSwrREFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFjRSwrREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2REQ7O0dBQU1IOztLQUFBQTtBQXlETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9uYXZiYXJcIjsgXHJcbmltcG9ydCBJbnRyb1dpdGhTbGlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm8td2l0aC1zbGlkZXIvaW50cm8td2l0aC1zbGlkZXJcIjtcclxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXQtdXMvYWJvdXQtdXNcIjtcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlcnZpY2VzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBXb3JrcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Xb3Jrcy93b3Jrc1wiO1xyXG5pbXBvcnQgTnVtYmVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9OdW1iZXJzL251bWJlcnNcIjtcclxuaW1wb3J0IFZpZGVvV2l0aFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlby13aXRoLXRlc3RpbW9uaWFscy92aWRlby13aXRoLXRlc3RpbW9uaWFsc1wiO1xyXG5pbXBvcnQgU2tpbGxzQ2lyY2xlIGZyb20gXCIuLi9jb21wb25lbnRzL1NraWxscy1jaXJjbGUvc2tpbGxzLWNpcmNsZVwiO1xyXG5pbXBvcnQgQ2xpZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9DbGllbnRzL2NsaWVudHNcIjtcclxuaW1wb3J0IEJsb2dzMSBmcm9tIFwiLi4vY29tcG9uZW50cy9ibG9ncy9CbG9nczEvYmxvZ3MxXCI7XHJcbmltcG9ydCBhcHBEYXRhIGZyb20gJy4uL2RhdGEvYXBwLmpzb24nXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FsbC10by1hY3Rpb24vY2FsbC10by1hY3Rpb25cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCBMaWdodFRoZW1lIGZyb20gXCIuLi9sYXlvdXRzL0xpZ2h0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpeGVkU2xpZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IE1haW5Db250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG5hdmJhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoZml4ZWRTbGlkZXIuY3VycmVudCkge1xyXG4gICAgICAgIHZhciBzbGlkSGVpZ2h0ID0gZml4ZWRTbGlkZXIuY3VycmVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKE1haW5Db250ZW50LmN1cnJlbnQpIHtcclxuICAgICAgICBNYWluQ29udGVudC5jdXJyZW50LnN0eWxlLm1hcmdpblRvcCA9IHNsaWRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHZhciBuYXZiYXIgPSBuYXZiYXJSZWYuY3VycmVudCxcclxuICAgICAgbG9nbyA9IGxvZ29SZWYuY3VycmVudDtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcERhdGEuZGFya0xvZ28pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhcHBEYXRhLmxpZ2h0TG9nbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtmaXhlZFNsaWRlciwgTWFpbkNvbnRlbnQsIG5hdmJhclJlZl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlnaHRUaGVtZT5cclxuICAgICAgPE5hdmJhciBucj17bmF2YmFyUmVmfSBscj17bG9nb1JlZn0gLz5cclxuICAgICAgPEludHJvV2l0aFNsaWRlciBzbGlkZXJSZWY9e2ZpeGVkU2xpZGVyfSAvPlxyXG4gICAgICA8ZGl2IHJlZj17TWFpbkNvbnRlbnR9IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgPFdvcmtzIC8+XHJcbiAgICAgICAgPE51bWJlcnMgLz5cclxuICAgICAgICB7LyogPFZpZGVvV2l0aFRlc3RpbW9uaWFscyAvPiAqL31cclxuICAgICAgICA8dmlkZW8gYXV0b1BsYXkgY29udHJvbHM+XHJcbiAgPHNvdXJjZSBzcmM9XCIvaW1nL0NvbXByZXNzVmlkZW8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcblxyXG48L3ZpZGVvPlxyXG4gICAgICAgIHsvKiA8U2tpbGxzQ2lyY2xlIHRoZW1lPVwibGlnaHRcIiAvPiAqL31cclxuICAgICAgICA8Q2xpZW50cyB0aGVtZT1cImxpZ2h0XCIgLz5cclxuICAgICAgICA8QmxvZ3MxIC8+XHJcbiAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpZ2h0VGhlbWU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkludHJvV2l0aFNsaWRlciIsIkFib3V0VXMiLCJTZXJ2aWNlcyIsIldvcmtzIiwiTnVtYmVycyIsIlZpZGVvV2l0aFRlc3RpbW9uaWFscyIsIlNraWxsc0NpcmNsZSIsIkNsaWVudHMiLCJCbG9nczEiLCJhcHBEYXRhIiwiQ2FsbFRvQWN0aW9uIiwiRm9vdGVyIiwiTGlnaHRUaGVtZSIsIkhvbWUiLCJmaXhlZFNsaWRlciIsInVzZVJlZiIsIk1haW5Db250ZW50IiwibmF2YmFyUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm5hdmJhciIsImxvZ28iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGUiLCJkYXJrTG9nbyIsImxpZ2h0TG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});