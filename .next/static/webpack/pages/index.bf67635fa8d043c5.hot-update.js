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

/***/ "./src/components/home/Form.jsx":
/*!**************************************!*\
  !*** ./src/components/home/Form.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar API = 'https://randomuser.me/api/';\nvar Form = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), Data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(API).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setData(data.results);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    }, []);\n    if (Data.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                lineNumber: 13,\n                columnNumber: 16\n            },\n            __self: _this,\n            children: \"There was a Error\"\n        }));\n    }\n    var sendData = function(e) {\n        e.preventDefault();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: \"Form\",\n        __source: {\n            fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                __source: {\n                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Contact\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                onSubmit: function(e) {\n                    return sendData(e);\n                },\n                __source: {\n                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"form-group\",\n                        __source: {\n                            fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Name:\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"text\",\n                                value: Data[0].name.first,\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"form-group\",\n                        __source: {\n                            fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Email:\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"email\",\n                                value: Data[0].email,\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"form-group\",\n                        __source: {\n                            fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Message:\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                type: \"text\",\n                                value: \"Hi, this is my cel: \".concat(Data[0].cell),\n                                __source: {\n                                    fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"submit\",\n                        value: \"Send\",\n                        className: \"Send\",\n                        __source: {\n                            fileName: \"/Users/davidarevalo/Desktop/test/src/components/home/Form.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Form, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7OztBQUMvQyxHQUFLLENBQUNHLEdBQUcsR0FBRyxDQUE0QjtBQUV4QyxHQUFLLENBQUNDLElBQUksR0FBRyxRQUNiLEdBRG1CLENBQUM7O0lBQ2hCLEdBQUssQ0FBbUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJHLElBQUksR0FBYUgsR0FBWSxLQUF2QkksT0FBTyxHQUFJSixHQUFZO0lBQ3BDRCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiTSxLQUFLLENBQUNKLEdBQUcsRUFDUkssSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUUwsQ0FBUkssSUFBSTtZQUFJTCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPO1dBQ2pDQyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztZQUFJQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHOztJQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsRUFBRSxFQUFDVCxJQUFJLENBQUNZLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNuQixNQUFNLHNFQUFFQyxDQUFDOzs7Ozs7O3NCQUFDLENBQWlCOztJQUMvQixDQUFDO0lBQ0QsR0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxDQUFOQyxDQUFDLEVBQU0sQ0FBQztRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjO0lBQ3BCLENBQUM7SUFFRCxNQUFNLHVFQUNEQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OztpRkFDcEJDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBTzs7a0ZBQ1ZDLENBQUk7Z0JBQUNDLFFBQVEsRUFBRSxRQUFRLENBQVBOLENBQUM7b0JBQUlELE1BQU0sQ0FBTkEsUUFBUSxDQUFDQyxDQUFDOzs7Ozs7Ozs7MEZBQzNCTyxDQUFHO3dCQUFDSixTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7aUdBQ3RCSyxDQUFLOzs7Ozs7OzBDQUFDLENBQUs7O2lHQUNYQyxDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQ0FBQ0MsS0FBSyxFQUFFMUIsSUFBSSxDQUFDLENBQUMsRUFBRTJCLElBQUksQ0FBQ0MsS0FBSzs7Ozs7Ozs7OzswRkFFL0NOLENBQUc7d0JBQUNKLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OztpR0FDdEJLLENBQUs7Ozs7Ozs7MENBQUMsQ0FBTTs7aUdBQ1pDLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFPO2dDQUFDQyxLQUFLLEVBQUUxQixJQUFJLENBQUMsQ0FBQyxFQUFFNkIsS0FBSzs7Ozs7Ozs7OzswRkFFM0NQLENBQUc7d0JBQUNKLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OztpR0FDdEJLLENBQUs7Ozs7Ozs7MENBQUMsQ0FBUTs7aUdBQ2RPLENBQVE7Z0NBQUNMLElBQUksRUFBQyxDQUFNO2dDQUFDQyxLQUFLLEVBQUcsQ0FBb0Isc0JBQWUsT0FBYjFCLElBQUksQ0FBQyxDQUFDLEVBQUUrQixJQUFJOzs7Ozs7Ozs7O3lGQUVuRVAsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQVE7d0JBQUNDLEtBQUssRUFBQyxDQUFNO3dCQUFDUixTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSWxFLENBQUM7R0FuQ0tuQixJQUFJO0tBQUpBLElBQUk7QUFxQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb3JtLmpzeD83YTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nXG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW0RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goQVBJKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgfSwgW10pXG4gICAgaWYoRGF0YS5sZW5ndGggPT09IDAgKXtcbiAgICAgICAgcmV0dXJuIDxwPlRoZXJlIHdhcyBhIEVycm9yPC9wPlxuICAgIH1cbiAgICBjb25zdCBzZW5kRGF0YSA9ICggZSApID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRm9ybVwiPlxuICAgICAgICAgICAgPGgyPkNvbnRhY3Q8L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+IHNlbmREYXRhKGUpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtEYXRhWzBdLm5hbWUuZmlyc3R9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgdmFsdWU9e0RhdGFbMF0uZW1haWx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIHZhbHVlPXtgSGksIHRoaXMgaXMgbXkgY2VsOiAke0RhdGFbMF0uY2VsbH1gfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTZW5kJyBjbGFzc05hbWU9J1NlbmQnLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJIiwiRm9ybSIsIkRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwIiwic2VuZERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwibmFtZSIsImZpcnN0IiwiZW1haWwiLCJ0ZXh0YXJlYSIsImNlbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/Form.jsx\n");

/***/ })

});