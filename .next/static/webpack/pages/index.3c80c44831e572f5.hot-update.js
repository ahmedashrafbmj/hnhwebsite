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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Intro-with-slider/intro-with-slider */ \"./src/components/Intro-with-slider/intro-with-slider.jsx\");\n/* harmony import */ var _components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About-us/about-us */ \"./src/components/About-us/about-us.jsx\");\n/* harmony import */ var _components_Services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services/services */ \"./src/components/Services/services.jsx\");\n/* harmony import */ var _components_Works_works__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Works/works */ \"./src/components/Works/works.jsx\");\n/* harmony import */ var _components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Numbers/numbers */ \"./src/components/Numbers/numbers.jsx\");\n/* harmony import */ var _components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Video-with-testimonials/video-with-testimonials */ \"./src/components/Video-with-testimonials/video-with-testimonials.jsx\");\n/* harmony import */ var _components_Skills_circle_skills_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Skills-circle/skills-circle */ \"./src/components/Skills-circle/skills-circle.jsx\");\n/* harmony import */ var _components_Clients_clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Clients/clients */ \"./src/components/Clients/clients.jsx\");\n/* harmony import */ var _components_blogs_Blogs1_blogs1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/blogs/Blogs1/blogs1 */ \"./src/components/blogs/Blogs1/blogs1.jsx\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Call-to-action/call-to-action */ \"./src/components/Call-to-action/call-to-action.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\ahmed hnh\\\\Hnh Website\\\\Main_files\\\\vie\\\\src\\\\pages\\\\index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setInterval(function () {\n      if (fixedSlider.current) {\n        var slidHeight = fixedSlider.current.offsetHeight;\n      }\n\n      if (MainContent.current) {\n        MainContent.current.style.marginTop = slidHeight + \"px\";\n      }\n    }, 1000);\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n        logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_11__.darkLogo);\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n        logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_11__.lightLogo);\n      }\n    });\n  }, [fixedSlider, MainContent, navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_layouts_Light__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      sliderRef: fixedSlider\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"div\", {\n      ref: MainContent,\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Services_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Works_works__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_blogs_Blogs1_blogs1__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"YcvxAMScyFYs9YZ0O46x4wgwCw8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLCtEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQW5ERDs7R0FBTUg7O0tBQUFBO0FBcUROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhclwiOyBcclxuaW1wb3J0IEludHJvV2l0aFNsaWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyby13aXRoLXNsaWRlci9pbnRyby13aXRoLXNsaWRlclwiO1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dC11cy9hYm91dC11c1wiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZXMvc2VydmljZXNcIjtcclxuaW1wb3J0IFdvcmtzIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmtzL3dvcmtzXCI7XHJcbmltcG9ydCBOdW1iZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL051bWJlcnMvbnVtYmVyc1wiO1xyXG5pbXBvcnQgVmlkZW9XaXRoVGVzdGltb25pYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZGVvLXdpdGgtdGVzdGltb25pYWxzL3ZpZGVvLXdpdGgtdGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBTa2lsbHNDaXJjbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tpbGxzLWNpcmNsZS9za2lsbHMtY2lyY2xlXCI7XHJcbmltcG9ydCBDbGllbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NsaWVudHMvY2xpZW50c1wiO1xyXG5pbXBvcnQgQmxvZ3MxIGZyb20gXCIuLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dzMS9ibG9nczFcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSAnLi4vZGF0YS9hcHAuanNvbidcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uL2xheW91dHMvTGlnaHRcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZml4ZWRTbGlkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgTWFpbkNvbnRlbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChmaXhlZFNsaWRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHNsaWRIZWlnaHQgPSBmaXhlZFNsaWRlci5jdXJyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTWFpbkNvbnRlbnQuY3VycmVudCkge1xyXG4gICAgICAgIE1haW5Db250ZW50LmN1cnJlbnQuc3R5bGUubWFyZ2luVG9wID0gc2xpZEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sIDEwMDApO1xyXG4gICAgdmFyIG5hdmJhciA9IG5hdmJhclJlZi5jdXJyZW50LFxyXG4gICAgICBsb2dvID0gbG9nb1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXBwRGF0YS5kYXJrTG9nbyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcERhdGEubGlnaHRMb2dvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW2ZpeGVkU2xpZGVyLCBNYWluQ29udGVudCwgbmF2YmFyUmVmXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaWdodFRoZW1lPlxyXG4gICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSAvPlxyXG4gICAgICA8SW50cm9XaXRoU2xpZGVyIHNsaWRlclJlZj17Zml4ZWRTbGlkZXJ9IC8+XHJcbiAgICAgIDxkaXYgcmVmPXtNYWluQ29udGVudH0gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPEFib3V0VXMgLz5cclxuICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICA8V29ya3MgLz5cclxuICAgICAgICA8TnVtYmVycyAvPlxyXG4gICAgICAgIHsvKiA8VmlkZW9XaXRoVGVzdGltb25pYWxzIC8+ICovfVxyXG4gICAgICAgIHsvKiA8U2tpbGxzQ2lyY2xlIHRoZW1lPVwibGlnaHRcIiAvPiAqL31cclxuICAgICAgICB7LyogPENsaWVudHMgdGhlbWU9XCJsaWdodFwiIC8+ICovfVxyXG4gICAgICAgIDxCbG9nczEgLz5cclxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGlnaHRUaGVtZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiSW50cm9XaXRoU2xpZGVyIiwiQWJvdXRVcyIsIlNlcnZpY2VzIiwiV29ya3MiLCJOdW1iZXJzIiwiVmlkZW9XaXRoVGVzdGltb25pYWxzIiwiU2tpbGxzQ2lyY2xlIiwiQ2xpZW50cyIsIkJsb2dzMSIsImFwcERhdGEiLCJDYWxsVG9BY3Rpb24iLCJGb290ZXIiLCJMaWdodFRoZW1lIiwiSG9tZSIsImZpeGVkU2xpZGVyIiwidXNlUmVmIiwiTWFpbkNvbnRlbnQiLCJuYXZiYXJSZWYiLCJsb2dvUmVmIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50Iiwic2xpZEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibmF2YmFyIiwibG9nbyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsImRhcmtMb2dvIiwibGlnaHRMb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});