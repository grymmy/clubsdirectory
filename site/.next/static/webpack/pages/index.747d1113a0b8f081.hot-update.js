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

/***/ "./components/ClubPreview.js":
/*!***********************************!*\
  !*** ./components/ClubPreview.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClubPreview\": function() { return /* binding */ ClubPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n\n\n\nconst ClubPreview = (param)=>/*#__PURE__*/ {\n    let { club , isMobile , setSelectedClubs , selectedClubs , setClubOpened , setRecentlyCopied , navigator , recentlyCopied  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        as: \"div\",\n        variant: \"primary\",\n        sx: {\n            p: [\n                1,\n                2\n            ]\n        },\n        mb: 2,\n        children: !isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            columns: [\n                null,\n                \"0.15fr 1.5fr 1.5fr 1.5fr 1.5fr 1fr\"\n            ],\n            gap: 3,\n            sx: {\n                pl: [\n                    1,\n                    3\n                ],\n                pr: [\n                    1,\n                    3\n                ],\n                alignItems: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        onClick: ()=>{\n                            if (selectedClubs.includes(club.id)) {\n                                setSelectedClubs(selectedClubs.filter((clubPicked)=>clubPicked !== club.id));\n                            } else {\n                                setSelectedClubs([\n                                    ...selectedClubs,\n                                    club.id\n                                ]);\n                            }\n                        },\n                        checked: selectedClubs.includes(club.id),\n                        defaultChecked: false\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    // onClick={() => \n                    //   setClubOpened(club)\n                    //   } \n                    style: {\n                        textDecoration: \"underline\"\n                    },\n                    children: club.name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: club.venue\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 35,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: club.location\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 40,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: club.leaders[0].name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 46,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        justifyContent: \"end\",\n                        alignItems: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"primary\",\n                        as: \"a\",\n                        onClick: ()=>{\n                            setRecentlyCopied(club.id);\n                            navigator.clipboard.writeText(club.leaders.map((leader)=>leader.email).join(\", \"));\n                        },\n                        children: recentlyCopied == club.id ? \"Copied Email\" : \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 51,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n            lineNumber: 15,\n            columnNumber: 14\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                flexDirection: \"column\",\n                display: \"flex\",\n                color: \"darkless\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        fontSize: 3,\n                        fontWeight: 600\n                    },\n                    children: club.name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        color: \"slate\"\n                    },\n                    children: [\n                        club.venue,\n                        \", \",\n                        club.location\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        color: \"accent\"\n                    },\n                    children: [\n                        \"Led by \",\n                        club.leaders[0].name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            sx: {\n                                color: \"darkless\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                            lineNumber: 70,\n                            columnNumber: 71\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        color: \"slate\"\n                    },\n                    children: [\n                        club.venue,\n                        \", \",\n                        club.location\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n_c = ClubPreview;\nvar _c;\n$RefreshReg$(_c, \"ClubPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlBOzRCQUFDZSxJQUFJO2dDQUFDOEIsT0FBTzs0QkFBVTs7Ozs7Ozs7Ozs7OzhCQUN0Riw4REFBQzdDLDBDQUFJQTtvQkFBQ2UsSUFBSTt3QkFBQzhCLE9BQU87b0JBQU87O3dCQUFJeEMsS0FBSzRCLEtBQUs7d0JBQUM7d0JBQUc1QixLQUFLNkIsUUFBUTs7Ozs7Ozs7Ozs7O3FCQUVsRDs7Ozs7O0FBRUYsRUFDZjtLQXhFWTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2x1YlByZXZpZXcuanM/MGQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIENhcmQsIExhYmVsLCBUZXh0LCBHcmlkLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBjb25zdCBDbHViUHJldmlldyA9ICh7Y2x1YiwgaXNNb2JpbGUsIHNldFNlbGVjdGVkQ2x1YnMsIHNlbGVjdGVkQ2x1YnMsIHNldENsdWJPcGVuZWQsIHNldFJlY2VudGx5Q29waWVkLCBuYXZpZ2F0b3IsIHJlY2VudGx5Q29waWVkfSkgPT4gKFxuXHQgICAgICAgICAgPENhcmRcblxuICAgICAgICAgIGFzPXsnZGl2J31cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgc3g9e3twOiBbMSwyXSBcbiAgICAgICAgICAgIC8vIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshaXNNb2JpbGUgPyBcbiAgICAgICAgICAgICg8R3JpZFxuICAgICAgICAgICAgICBjb2x1bW5zPXtbbnVsbCwgXCIwLjE1ZnIgMS41ZnIgMS41ZnIgMS41ZnIgMS41ZnIgMWZyXCJdfSBcbiAgICAgICAgICAgICAgZ2FwPXszfVxuICAgICAgICAgICAgICBzeD17e3BsOiBbMSwzXSwgcHI6IFsxLDNdLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0gXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPExhYmVsPlxuICAgICAgICAgIDxDaGVja2JveCBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkQ2x1YnMuaW5jbHVkZXMoY2x1Yi5pZCkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKHNlbGVjdGVkQ2x1YnMuZmlsdGVyKChjbHViUGlja2VkKSA9PiBjbHViUGlja2VkICE9PSBjbHViLmlkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKFsuLi5zZWxlY3RlZENsdWJzLCBjbHViLmlkXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDbHVicy5pbmNsdWRlcyhjbHViLmlkKX0gZGVmYXVsdENoZWNrZWQ9e2ZhbHNlfSAvPlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgLy8gICBzZXRDbHViT3BlbmVkKGNsdWIpXG4gICAgICAgICAgICAgIC8vICAgfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwifX0+e2NsdWIubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgLy8gICAvLyBzZXRDbHViT3BlbmVkKGNsdWIpXG4gICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgID57Y2x1Yi52ZW51ZX08L3A+XG4gICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgLy8gICAvLyBzZXRDbHViT3BlbmVkKGNsdWIpXG4gICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgID57Y2x1Yi5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBcbiAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gXG4gICAgICAgICAgICAgIC8vICAgLy8gc2V0Q2x1Yk9wZW5lZChjbHViKVxuICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICA+e2NsdWIubGVhZGVyc1swXS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJlbmRcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UmVjZW50bHlDb3BpZWQoY2x1Yi5pZClcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNsdWIubGVhZGVycy5tYXAoKGxlYWRlcikgPT4gbGVhZGVyLmVtYWlsKS5qb2luKFwiLCBcIikpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZWNlbnRseUNvcGllZCA9PSBjbHViLmlkID8gKFwiQ29waWVkIEVtYWlsXCIpIDogKFwiQ29udGFjdFwiKX1cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD4pIDogXG4gICAgICAgICAgICA8Qm94IHN4PXt7ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZGlzcGxheTogXCJmbGV4XCIsIGNvbG9yOiBcImRhcmtsZXNzXCJ9fT5cbiAgICAgICAgICAgIDxUZXh0IHN4PXt7Zm9udFNpemU6IDMsIGZvbnRXZWlnaHQ6IDYwMH19PlxuICAgICAgICAgICAgICB7Y2x1Yi5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc3g9e3tjb2xvcjogXCJzbGF0ZVwifX0+e2NsdWIudmVudWV9LCB7Y2x1Yi5sb2NhdGlvbn08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBzeD17e2NvbG9yOiBcImFjY2VudFwifX0+TGVkIGJ5IHtjbHViLmxlYWRlcnNbMF0ubmFtZX08VGV4dCBzeD17e2NvbG9yOiBcImRhcmtsZXNzXCJ9fT48L1RleHQ+PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc3g9e3tjb2xvcjogXCJzbGF0ZVwifX0+e2NsdWIudmVudWV9LCB7Y2x1Yi5sb2NhdGlvbn08L1RleHQ+XG5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ2FyZD5cbilcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNhcmQiLCJMYWJlbCIsIlRleHQiLCJHcmlkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJDbHViUHJldmlldyIsImNsdWIiLCJpc01vYmlsZSIsInNldFNlbGVjdGVkQ2x1YnMiLCJzZWxlY3RlZENsdWJzIiwic2V0Q2x1Yk9wZW5lZCIsInNldFJlY2VudGx5Q29waWVkIiwibmF2aWdhdG9yIiwicmVjZW50bHlDb3BpZWQiLCJhcyIsInZhcmlhbnQiLCJzeCIsInAiLCJtYiIsImNvbHVtbnMiLCJnYXAiLCJwbCIsInByIiwiYWxpZ25JdGVtcyIsIm9uQ2xpY2siLCJpbmNsdWRlcyIsImlkIiwiZmlsdGVyIiwiY2x1YlBpY2tlZCIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJuYW1lIiwidmVudWUiLCJsb2NhdGlvbiIsImxlYWRlcnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFwIiwibGVhZGVyIiwiZW1haWwiLCJqb2luIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClubPreview.js\n"));

/***/ })

});